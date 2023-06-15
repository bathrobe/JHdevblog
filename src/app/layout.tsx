import { Noto_Serif } from "next/font/google";
import "./globals.css";
import Navbar from "./components/NavBar";

export const metadata = {
  title: "Joe Holmes",
  description: "Writer, developer, educator.",
  icons: {
    icon: "/favicon.ico",
  },
};

const font = Noto_Serif({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={font.className}>
      <body className="max-w-screen">
        <div className="min-h-screen bg-warm-dark-gray text-creamy-white relative overflow-x-hidden">
          <Navbar />
          <div className="hidden lg:block blob bg-gradient-to-br from-blue-400 to-green-300 absolute -top-16 -right-16 w-72 h-72 rounded-full opacity-30 z-0" />
          <div className="relative">
            <div className="max-w-800 mx-auto px-4 py-8">{children}</div>
          </div>
        </div>
      </body>
    </html>
  );
}
