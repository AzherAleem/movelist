import { Montserrat } from "next/font/google";
import "./globals.css";
import Image from "next/image";
const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Movies List",
  description: "Movies list application",
};

const Footer = () => (
  <footer className="z-0">
    <div className="fixed bottom-0 w-full">
      <div className="relative">
        <Image
          src={"/footer1.png"}
          alt="footer1"
          width={1440}
          height={111}
          className="object-cover w-full"
        />
      </div>
    </div>
    <div className="fixed bottom-0 w-full">
      <div className="relative">
        <Image
          src={"/footer2.png"}
          alt="footer2"
          width={1440}
          height={111}
          className="object-cover w-full"
        />
      </div>
    </div>
  </footer>
);

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.className} bg-[#093545] min-h-screen pb-32`}
      >
        <div className="z-10">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
