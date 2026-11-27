"use client";

import { useEffect } from "react";

const CONVERSATIONS_ID = "6a59f1d9f62a55a5c908887c";
const EVENTS = ["pointerdown", "keydown", "scroll", "touchstart"] as const;

type BrevoWindow = Window & {
  BrevoConversationsID?: string;
  BrevoConversations?: { (...args: unknown[]): void; q?: unknown[] };
};

/**
 * Brevo's chat bubble, loaded on the visitor's first scroll, tap or key instead of while the page loads: the page
 * shows sooner on a phone, and robots that only load the page (PageSpeed) don't fetch it. Brevo answers them 403,
 * which PageSpeed reported as a console error.
 */
export function BrevoChat() {
  useEffect(() => {
    let loaded = false;
    const load = () => {
      if (loaded) return;
      loaded = true;
      EVENTS.forEach((e) => window.removeEventListener(e, load));
      // Brevo's own snippet: calls made before the script arrives wait in a queue
      const w = window as BrevoWindow;
      w.BrevoConversationsID = CONVERSATIONS_ID;
      w.BrevoConversations =
        w.BrevoConversations ||
        function () {
          // eslint-disable-next-line prefer-rest-params
          (w.BrevoConversations!.q = w.BrevoConversations!.q || []).push(arguments);
        };
      const script = document.createElement("script");
      script.async = true;
      script.src = "https://conversations-widget.brevo.com/brevo-conversations.js";
      document.head.appendChild(script);
    };
    EVENTS.forEach((e) => window.addEventListener(e, load, { passive: true }));
    return () => EVENTS.forEach((e) => window.removeEventListener(e, load));
  }, []);

  return null;
}
