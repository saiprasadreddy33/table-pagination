import RootLayout from "./layout";
import Sidebar from "@/app/components/Sidebar";
import MainContent from "./components/MainContent";

export default function Home() {
  return (
    <RootLayout>
      <div className="flex min-h-screen">
        <Sidebar />
        <MainContent />
      </div>
    </RootLayout>
  );
}
