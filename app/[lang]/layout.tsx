export default function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  return (
    <html lang={params.lang}>
      <body className="bg-[#0c0c10] text-[#ececef]">{children}</body>
    </html>
  );
}
