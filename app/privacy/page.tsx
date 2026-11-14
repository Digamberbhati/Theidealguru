import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: site.privacyPolicy.title,
  description: site.privacyPolicy.intro,
};

export default function PrivacyPolicyPage() {
  return <LegalPage data={site.privacyPolicy} activeHref="/privacy/" />;
}
