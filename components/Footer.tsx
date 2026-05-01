import Image from "next/image";
import type { DictFooter } from "@/dictionaries/types";

export function Footer({ dict }: { dict: DictFooter }) {
  return (
    <footer className="border-t border-line">
      <div className="container-x px-6 py-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <div>
          <div className="flex items-center gap-2.5">
            <Image src="/logo.png" alt="" width={24} height={24} className="rounded-md" />
            <span className="font-semibold tracking-tight">Reki note</span>
          </div>
          <p className="mt-3 dim text-xs">
            {dict.tagline}
          </p>
        </div>
        <div className="flex gap-7 text-sm muted">
          <a href="https://hibachi-inc.jp" className="hover:text-[#ececef] transition-colors duration-180">{dict.company}</a>
        </div>
      </div>
      <div className="border-t border-line">
        <div className="container-x px-6 py-6 dim text-xs flex flex-col md:flex-row justify-between gap-2">
          <span>© 2026 HIBACHI inc.</span>
        </div>
      </div>
    </footer>
  );
}
