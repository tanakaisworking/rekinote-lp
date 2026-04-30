import Image from "next/image";
import Link from "next/link";

export function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-[rgba(12,12,16,0.7)] border-b border-line">
      <div className="container-x flex items-center justify-between h-16 px-6">
        <Link href="#" className="flex items-center gap-2.5">
          <Image src="/logo.png" alt="Reki note" width={28} height={28} className="rounded-md" />
          <span className="font-semibold tracking-tight text-[15px]">Reki note</span>
        </Link>
        <nav className="hidden md:flex items-center gap-7 text-sm muted">
          <a href="#features" className="hover:text-[#ececef] transition-colors duration-180">機能</a>
          <a href="#compare" className="hover:text-[#ececef] transition-colors duration-180">比較</a>
          <a href="#how" className="hover:text-[#ececef] transition-colors duration-180">使い方</a>
          <a href="#privacy" className="hover:text-[#ececef] transition-colors duration-180">プライバシー</a>
        </nav>
        <a href="#download" className="btn-primary !py-2.5 !px-4 text-sm">無料でダウンロード</a>
      </div>
    </header>
  );
}
