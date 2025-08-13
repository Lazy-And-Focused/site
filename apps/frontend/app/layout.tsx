import { ThemeProvider } from "@/shared/ui/theme-provider";
import Header from "@/widgets/header";
import "./globals.css";

// Добавьте позже мета-данные (заголовок к примеру)

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
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
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
