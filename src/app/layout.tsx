import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "संजय गाताडे टी कंपनी | उत्कृष्ट चहा पावडर",
  description:
    "असामच्या बागांमधून थेट तुमच्या कपात. संजय गाताडे टी कंपनी, सांगली — डस्ट, फॅमिली, हॉटेल ब्लेंड, वेलची आणि मसाला चहा पावडर.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="mr" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
