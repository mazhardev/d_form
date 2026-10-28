import { SITE_URL } from "@/lib/config";

export const dynamic = "force-static";

// Search and AI crawlers are all welcome. Listing the AI user-agents explicitly
// makes that intent clear, and gives you one place to disallow any later.
const AI_CRAWLERS = [
  "GPTBot", "ChatGPT-User", "OAI-SearchBot",
  "ClaudeBot", "Claude-Web", "Claude-SearchBot", "anthropic-ai",
  "PerplexityBot", "Perplexity-User",
  "Google-Extended", "Applebot-Extended",
  "CCBot", "Amazonbot", "Bytespider", "Meta-ExternalAgent", "Meta-ExternalFetcher",
];

export default function robots() {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      ...AI_CRAWLERS.map((userAgent) => ({ userAgent, allow: "/" })),
    ],
    sitemap: `${SITE_URL}sitemap.xml`,
    host: new URL(SITE_URL).host,
  };
}
