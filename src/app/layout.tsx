import Header from "@/components/layout/header/Index";
import CartContextProvider from "@/context/CartContextProvider";
import type { Metadata } from "next";
import { Instrument_Sans } from "next/font/google";
import "./globals.css";

// Fonts
const instrumentSans = Instrument_Sans({
   subsets: ["latin"],
   weight: ["400", "500", "600", "700"],
   variable: "--font-instrument-sans",
});

export const metadata: Metadata = {
   title: "Molymart",
   description: "Ecommerce for all your needs",
};

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang="en">
         <body className={`${instrumentSans.variable}`}>
            <main className="font-instrumentSans">
               <CartContextProvider>
                  <Header />
                  {children}
               </CartContextProvider>
            </main>
         </body>
      </html>
   );
}
