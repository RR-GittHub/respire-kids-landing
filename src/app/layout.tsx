import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./legacy-site.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  ),
  title: "Respire Kids — L'essentiel pour ton bébé",
  description:
    "100% naturel. Zéro ingrédient inutile. Un soin qui grandit avec ton enfant.",
  openGraph: {
    title: "Respire Kids — L'essentiel pour ton bébé",
    description:
      "100% naturel. Zéro ingrédient inutile. Un soin qui grandit avec ton enfant.",
    images: [{ url: "/og.png", width: 1730, height: 909 }],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Respire Kids — L'essentiel pour ton bébé",
    description:
      "100% naturel. Zéro ingrédient inutile. Un soin qui grandit avec ton enfant.",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          // Runs before paint to avoid a flash of the wrong theme on load.
          dangerouslySetInnerHTML={{
            __html:
              "(function(){try{var t=localStorage.getItem('theme');if(t==='light'||t==='dark'){document.documentElement.setAttribute('data-theme',t);}}catch(e){}})();",
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
