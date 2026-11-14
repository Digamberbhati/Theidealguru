import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: site.termsOfService.title,
  description: site.termsOfService.intro,
};

export default function TermsOfServicePage() {
  return <LegalPage data={site.termsOfService} activeHref="/terms/" />;
}
