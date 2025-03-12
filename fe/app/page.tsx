import Auth from "@/components/Auth/page";
import Basic from "@/components/Basic/page";

export default function Home() {
  return (
    <div>
      {/* 로그인 전 */}
      <Auth />
      {/* 로그인 후 */}
      <Basic />
    </div>
  );
}
