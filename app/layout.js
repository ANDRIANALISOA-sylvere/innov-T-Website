import "./globals.css";
import NavBar from "@/components/common/NavBar";
import Footer from "@/components/common/Footer";

export const metadata = {
  title: "Innov-T",
  description: "Innov-T Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
      >
        <NavBar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
