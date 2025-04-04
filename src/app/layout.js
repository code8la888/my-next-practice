import "@/app/_styles/globals.css";
import { Josefin_Sans } from "next/font/google";
import Header from "./_components/Header";

// next自架字體：自動下載並封裝 google font 為本地資源
const josefin = Josefin_Sans({
  subsets: ["latin"], // 指定字集，例如：latin、chinese
  display: "swap", // swap：先顯示系統字體，載入完再替換
});

// console.log(josefin);

// metadata 可以設定頁面的資訊，像是標題、描述、社群分享資訊等，這些資料會被 Next.js 自動插入到 <head> 區塊
export const metadata = {
  // title: "my next practice",
  title: {
    template: "%s / The Wild Oasis",
    default: "Welcome / The Wild Oasis",
  },
  description:
    "luxurious cabin hotel located in the heart of the Italian Dolomites, surrounded by beautiful mountains and dark forests.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${josefin.className} bg-primary-950 text-primary-100 min-h-screen flex flex-col antialiased relative`}
      >
        <Header />
        <div className="flex-1 px-8 py-12 grid">
          <main className="max-w-7xl mx-auto w-full">{children}</main>
        </div>
      </body>
    </html>
  );
}
