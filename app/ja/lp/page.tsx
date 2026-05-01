// このファイルは [lang]/lp/page.tsx に移行しました。
// /ja/lp/ と /en/lp/ はそちらで generateStaticParams で生成されます。
// このファイルは削除できますが、既存ルートとの互換のためリダイレクトします。
import { redirect } from "next/navigation";

export default function JaLpPage() {
  redirect("/ja/lp/");
}
