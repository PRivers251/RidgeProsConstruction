import { Inter } from "next/font/google";
import "../styles/globals.css";
import Header from "../components/layout/Header"
import Footer from "../components/layout/Footer"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Storm Shield Builders LLC",
  description: "Mobile, AL Trusted Roofing Experts",
  icons: {
    icon: '../images/storm-shield-logo.png'
  }
  
  
  
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <script src="https://kit.fontawesome.com/b1350789d4.js" crossorigin="anonymous"></script>
      </head>
     <body className={inter.className}>
     <main className="flex min-h-screen flex-col">
      <Header />
      {children}
      <Footer />
      </main>
      </body> 
    </html>
  );
}
