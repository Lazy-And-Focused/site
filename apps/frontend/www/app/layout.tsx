import { ThemeProvider } from "@/shared/ui/theme-provider";

import Header from "@/widgets/header";
import Footer from "@/widgets/footer";

import "./_lib/fonts-loader";
import "./globals.css";

// Добавьте позже мета-данные (заголовок к примеру)

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html lang="ru" suppressHydrationWarning>
        <head />
        <body>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Header />
            {children}
            <Footer />
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
