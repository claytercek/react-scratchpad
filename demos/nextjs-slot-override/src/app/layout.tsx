export default function RootLayout({
  children,
  header
}: Readonly<{
  children: React.ReactNode;
  header: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {header}
        {children}
      </body>
    </html>
  );
}
