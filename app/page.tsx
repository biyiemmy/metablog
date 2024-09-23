import Advertisment from "@/components/Advertisment";
import AllPost from "@/components/AllPost";
import Homepage from "@/components/Homepage";
import LatestPost from "@/components/LatestPost";
import Post from "@/components/Post";

export default function Home() {
  return (
    <main className="">
      <Homepage />
      <Advertisment />
      <LatestPost />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
      <AllPost />
      <Advertisment />
    </main>
  );
}
