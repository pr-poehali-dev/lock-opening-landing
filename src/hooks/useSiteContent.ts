import { useEffect, useState } from "react";
import { CONTENT_URL, DEFAULT_CONTENT, SiteContent } from "@/lib/content";

let cache: SiteContent | null = null;
let request: Promise<SiteContent> | null = null;

function load(): Promise<SiteContent> {
  if (!request) {
    request = fetch(CONTENT_URL)
      .then((r) => r.json())
      .then((data) => {
        cache = {
          about: { ...DEFAULT_CONTENT.about, ...(data.about || {}) },
          contacts: { ...DEFAULT_CONTENT.contacts, ...(data.contacts || {}) },
          hero: { ...DEFAULT_CONTENT.hero, ...(data.hero || {}) },
          gallery: Array.isArray(data.gallery) ? data.gallery : DEFAULT_CONTENT.gallery,
          artists: Array.isArray(data.artists) ? data.artists : DEFAULT_CONTENT.artists,
          mixes: Array.isArray(data.mixes) ? data.mixes : DEFAULT_CONTENT.mixes,
        };
        return cache;
      })
      .catch(() => {
        request = null;
        return DEFAULT_CONTENT;
      });
  }
  return request;
}

export function useSiteContent(): SiteContent {
  const [content, setContent] = useState<SiteContent>(cache || DEFAULT_CONTENT);

  useEffect(() => {
    let alive = true;
    load().then((c) => alive && setContent(c));
    return () => {
      alive = false;
    };
  }, []);

  return content;
}
