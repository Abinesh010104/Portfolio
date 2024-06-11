// pages/resume.js
import { Inter } from "next/font/google";
import Navbar from "./components/navbar";
import Resume from "./components/homepage/Resume";
import "react-toastify/dist/ReactToastify.css";
import "../css/card.scss";
import "../css/globals.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Resume of Abinesh R",
  description:
    "Resume of Abinesh R, a full stack developer and a self-taught developer.",
};

export default function ResumePage() {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
          <Navbar />
          <Resume />
        </main>
      </body>
    </html>
  );
}
