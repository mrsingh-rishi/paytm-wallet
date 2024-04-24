import { Toaster } from "react-hot-toast";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <body>
        <Toaster position="bottom-center" />
        {children}
      </body>
    </html>
  );
}
