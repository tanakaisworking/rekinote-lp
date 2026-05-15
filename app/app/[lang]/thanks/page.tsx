import { ThanksContent } from "./ThanksContent";

export function generateStaticParams() {
  return [{ lang: "ja" }, { lang: "en" }];
}

export default function ThanksPage() {
  return <ThanksContent />;
}
