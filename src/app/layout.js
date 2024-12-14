import { Inter } from "next/font/google";
import "../styles/globals.css";
import Header from "../components/layout/header/Header"
import Footer from "../components/layout/footer/Footer"
import Script from 'next/script'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Storm Shield Builders LLC",
  description: "Mobile, Saraland, & Citronelle, AL Trusted Roofing Experts",
  metadata: `Storm Shield Builders LLC offers expert roofing, construction and disaster mitigation services
  in Mobile, Saraland, and Citronelle, AL. Contact us today for a free estimate!`,
  icons: {
    icon: '../images/storm-shield-logo.png'
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <script defer async src="https://kit.fontawesome.com/b1350789d4.js" crossorigin="anonymous"></script>
      </head>    

     <body className={inter.className}>

     <Script 
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-57HF7T4RYK" />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
      >
        {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'G-57HF7T4RYK');
        `}
      </Script>

     <main className="flex min-h-screen flex-col">
      <Header />
      {children}
      <Footer />
      </main>
      </body> 
    </html>
  );
}
