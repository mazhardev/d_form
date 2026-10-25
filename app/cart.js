"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { BUSINESS, PRODUCTS, formatPKR, waLink, asset } from "@/lib/config";

const CartCtx = createContext(null);
export const useCart = () => useContext(CartCtx);

const STORAGE_KEY = "md-cart-v1";

export function CartProvider({ children }) {
  const [items, setItems] = useState({}); // { productId: qty }
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState("cart"); // cart | details

  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
      if (saved && typeof saved === "object") setItems(saved);
    } catch {}
  }, []);
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {}
  }, [items]);

  const add = (id, qty = 1) => {
    setItems((s) => ({ ...s, [id]: (s[id] || 0) + qty }));
    setStep("cart");
    setOpen(true);
  };
  const setQty = (id, qty) =>
    setItems((s) => {
      const n = { ...s };
      if (qty <= 0) delete n[id];
      else n[id] = qty;
      return n;
    });
  const clear = () => setItems({});

  const lines = useMemo(
    () =>
      Object.entries(items)
        .map(([id, qty]) => ({ product: PRODUCTS.find((p) => p.id === id), qty }))
        .filter((l) => l.product),
    [items]
  );
  const count = lines.reduce((a, l) => a + l.qty, 0);
  const allPriced = lines.every((l) => typeof l.product.price === "number");
  const total = lines.reduce((a, l) => a + (l.product.price || 0) * l.qty, 0);

  const value = { items, lines, count, total, allPriced, add, setQty, clear, open, setOpen, step, setStep };
  return (
    <CartCtx.Provider value={value}>
      {children}
      <CartButton />
      <CartDrawer />
    </CartCtx.Provider>
  );
}

function CartButton() {
  const { count, setOpen } = useCart();
  return (
    <button className="cart-fab" onClick={() => setOpen(true)} aria-label={`Open cart, ${count} items`}>
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M6 7h12l-1 13H7L6 7z" />
        <path d="M9 7a3 3 0 0 1 6 0" />
      </svg>
      {count > 0 && <span className="cart-fab-count">{count}</span>}
    </button>
  );
}

function CartDrawer() {
  const { lines, total, allPriced, setQty, clear, open, setOpen, step, setStep, count } = useCart();
  const [form, setForm] = useState({ name: "", phone: "", city: "", address: "", notes: "" });
  const [error, setError] = useState("");

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [setOpen]);

  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const checkout = (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim() || !form.address.trim()) {
      setError("Please fill in your name, phone number and address.");
      return;
    }
    setError("");
    const itemLines = lines.map((l, i) => {
      const price = typeof l.product.price === "number" ? ` = ${formatPKR(l.product.price * l.qty)}` : "";
      return `${i + 1}. ${l.product.name} (${l.product.size}) x ${l.qty}${price}`;
    });
    const msg = [
      `*New order from ${BUSINESS.name} website*`,
      "",
      "*Items:*",
      ...itemLines,
      "",
      allPriced ? `*Total: ${formatPKR(total)}*` : "*Total:* please confirm price",
      "",
      "*Customer details:*",
      `Name: ${form.name.trim()}`,
      `Phone: ${form.phone.trim()}`,
      form.city.trim() ? `City: ${form.city.trim()}` : null,
      `Address: ${form.address.trim()}`,
      form.notes.trim() ? `Notes: ${form.notes.trim()}` : null,
    ]
      .filter((x) => x !== null)
      .join("\n");
    window.open(waLink(msg), "_blank", "noopener");
    clear();
    setStep("cart");
    setOpen(false);
  };

  return (
    <>
      <div className={`scrim ${open ? "show" : ""}`} onClick={() => setOpen(false)} aria-hidden="true" />
      <aside className={`drawer ${open ? "open" : ""}`} aria-hidden={!open} aria-label="Shopping cart">
        <header className="drawer-head">
          <h2>{step === "cart" ? "Your order" : "Delivery details"}</h2>
          <button className="icon-btn" onClick={() => setOpen(false)} aria-label="Close cart">✕</button>
        </header>

        {lines.length === 0 ? (
          <div className="drawer-empty">
            <p>Your cart is empty.</p>
            <a className="btn btn-ghost" href="#shop" onClick={() => setOpen(false)}>Browse products</a>
          </div>
        ) : step === "cart" ? (
          <>
            <ul className="lines">
              {lines.map(({ product: p, qty }) => (
                <li key={p.id} className="line">
                  <img src={asset(p.image)} alt="" width="64" height="64" />
                  <div className="line-info">
                    <strong>{p.name}</strong>
                    <span>{p.size}{typeof p.price === "number" && qty > 1 && ` · ${formatPKR(p.price)} each`}</span>
                    <div className="qty">
                      <button onClick={() => setQty(p.id, qty - 1)} aria-label={`Remove one ${p.name} ${p.size}`}>−</button>
                      <span aria-live="polite">{qty}</span>
                      <button onClick={() => setQty(p.id, qty + 1)} aria-label={`Add one ${p.name} ${p.size}`}>+</button>
                    </div>
                  </div>
                  {typeof p.price === "number" && <b className="line-total">{formatPKR(p.price * qty)}</b>}
                </li>
              ))}
            </ul>
            <footer className="drawer-foot">
              <div className="total-row">
                <span>Total ({count} {count === 1 ? "item" : "items"})</span>
                <b>{allPriced ? formatPKR(total) : "Confirmed on WhatsApp"}</b>
              </div>
              <button className="btn btn-primary btn-block" onClick={() => setStep("details")}>Checkout</button>
              <p className="fine">You'll confirm your order with us on WhatsApp. Cash on delivery.</p>
            </footer>
          </>
        ) : (
          <form className="checkout" onSubmit={checkout} noValidate>
            <label>Full name *<input value={form.name} onChange={update("name")} autoComplete="name" required /></label>
            <label>Phone number *<input value={form.phone} onChange={update("phone")} type="tel" inputMode="tel" autoComplete="tel" placeholder="03xx xxxxxxx" required /></label>
            <label>City<input value={form.city} onChange={update("city")} autoComplete="address-level2" /></label>
            <label>Delivery address *<textarea value={form.address} onChange={update("address")} rows={3} autoComplete="street-address" required /></label>
            <label>Notes<textarea value={form.notes} onChange={update("notes")} rows={2} placeholder="Delivery time, special requests…" /></label>
            {error && <p className="form-error" role="alert">{error}</p>}
            <div className="total-row">
              <span>Order total</span>
              <b>{allPriced ? formatPKR(total) : "Confirmed on WhatsApp"}</b>
            </div>
            <button type="submit" className="btn btn-wa btn-block">
              <WaIcon /> Send order on WhatsApp
            </button>
            <button type="button" className="btn btn-ghost btn-block" onClick={() => setStep("cart")}>Back to cart</button>
          </form>
        )}
      </aside>
    </>
  );
}

export function AddToCart({ id, label = "Add to cart" }) {
  const { add } = useCart();
  return (
    <button className="btn btn-primary" onClick={() => add(id)}>
      {label}
    </button>
  );
}

export function WaIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.1-.2.3-.8.9-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.2-.5-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6l.4-.5c.2-.2.2-.3.3-.5.1-.2 0-.4 0-.5l-.9-2.1c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.1 3.2 5.1 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.7-.7 1.9-1.4.2-.7.2-1.3.2-1.4-.1-.1-.3-.2-.6-.3zM12 21.8c-1.8 0-3.5-.5-5-1.4l-.4-.2-3.7 1 1-3.6-.2-.4C2.7 15.6 2.2 13.8 2.2 12 2.2 6.6 6.6 2.2 12 2.2c2.6 0 5.1 1 6.9 2.9 1.8 1.8 2.9 4.3 2.9 6.9 0 5.4-4.4 9.8-9.8 9.8zm8.4-18.2C18.1 1.3 15.2.1 12 .1 5.5.1.1 5.4.1 12c0 2.1.5 4.1 1.6 5.9L0 24l6.3-1.6c1.7.9 3.7 1.4 5.7 1.4 6.6 0 11.9-5.3 11.9-11.9 0-3.2-1.2-6.2-3.5-8.3z" />
    </svg>
  );
}
