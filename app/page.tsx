import Link from "next/link";

// Cloudflare Pages の静的配信でも確実に遷移できるよう、HTML側でもフォールバックを持つ
export default function RootPage() {
  return (
    <main className="min-h-screen bg-[#0c0c10] text-[#ececef] grid place-items-center px-6">
      <meta httpEquiv="refresh" content="0;url=/en/lp/" />
      <div className="text-center">
        <p className="text-sm muted">Redirecting...</p>
        <Link href="/en/lp/" className="mt-4 inline-flex text-[#a78bfa] hover:text-[#c4b5fd] transition-colors">
          Continue to Reki note
        </Link>
      </div>
    </main>
  );
}
