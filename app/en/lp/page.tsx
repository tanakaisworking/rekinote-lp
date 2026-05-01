// このファイルは [lang]/lp/page.tsx に移行しました。
// /ja/lp/ と /en/lp/ はそちらで generateStaticParams で生成されます。
import { redirect } from "next/navigation";

export default function EnLpPage() {
  redirect("/en/lp/");
}
