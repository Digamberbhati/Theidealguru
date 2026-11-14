"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { site } from "@/lib/site";

export function CopyEmailButton() {
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(site.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error("Could not copy the email address.", error);
    }
  }

  return (
    <button
      type="button"
      onClick={copyEmail}
      className="inline-flex items-center gap-2 rounded-full border border-indigo/15 px-4 py-2 text-sm font-semibold text-indigo transition hover:border-saffron hover:text-saffron"
    >
      {copied ? <Check size={16} aria-hidden="true" /> : <Copy size={16} aria-hidden="true" />}
      {copied ? site.copiedEmail : site.copyEmail}
    </button>
  );
}
