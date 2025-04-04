import Logo from "./_components/Logo";
import Navigation from "./_components/Navigation";

// metadata 可以設定頁面的資訊，像是標題、描述、社群分享資訊等，這些資料會被 Next.js 自動插入到 <head> 區塊
export const metadata = {
  title: "my next practice",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Logo />
        <Navigation />
        <main>{children}</main>
        {/* app 目錄下的 layout 作為所有子頁面的共同布局 */}
        {/* 每個子頁面會當作是 children 插入 layout，與 React Router 的 <Outlet/> 相似 */}
        <footer>Copyright by Leia Tseng</footer>
      </body>
    </html>
  );
}
