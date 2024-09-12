import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Moroz Financial Group",
  description: "Your best financial services",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
