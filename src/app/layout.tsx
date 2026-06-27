import type { Metadata } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import "./globals.css"
import { ClientLayout } from "./client-layout"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Maithilee Kune | Full Stack Developer & AI Builder",
  description:
    "Building Intelligent, Accessible & Human-Centered Digital Experiences. Full Stack Developer specializing in React, Java, AI Integration, and Accessibility Solutions.",
  keywords: [
    "Maithilee Kune",
    "Full Stack Developer",
    "AI Builder",
    "React Developer",
    "Java Developer",
    "Accessibility Advocate",
    "Portfolio",
    "Web Developer",
  ],
  authors: [{ name: "Maithilee Kune" }],
  openGraph: {
    title: "Maithilee Kune | Full Stack Developer & AI Builder",
    description:
      "Building Intelligent, Accessible & Human-Centered Digital Experiences. Full Stack Developer specializing in React, Java, AI Integration.",
    url: "https://maithilee.dev",
    siteName: "Maithilee.dev",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Maithilee Kune | Full Stack Developer & AI Builder",
    description:
      "Building Intelligent, Accessible & Human-Centered Digital Experiences.",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (theme === 'light') {
                    document.documentElement.classList.remove('dark');
                    document.documentElement.classList.add('light');
                  } else if (!theme && window.matchMedia('(prefers-color-scheme: light)').matches) {
                    document.documentElement.classList.remove('dark');
                    document.documentElement.classList.add('light');
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}
