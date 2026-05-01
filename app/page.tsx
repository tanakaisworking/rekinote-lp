import { redirect } from "next/navigation";

// ルートアクセスは日本語LPにリダイレクト
export default function RootPage() {
  redirect("/ja/lp/");
}
