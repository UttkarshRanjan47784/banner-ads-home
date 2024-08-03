import DisplayGrid from "@/components/display-grid";
import Navbar from "@/components/navbar";
import UserPrompt from "@/components/user-prompt";
export default function Home() {
  return (
    <main className="flex flex-col w-full h-dvh">
      <Navbar />
      <UserPrompt />
      <div className="grow flex justify-center items-center px-5 sm:px-20">
        <DisplayGrid />
      </div>
    </main>
  );
}
