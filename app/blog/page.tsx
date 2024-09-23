import Advertisment from "@/components/Advertisment";
import BlogSection from "@/components/BlogSection";
import Blogpage from "@/components/Blogpage";
import Post from "@/components/Post";
import ViewMore from "@/components/ViewMore";

type Props = {};

const page = (props: Props) => {
  return (
    <div>
      <BlogSection />
      <Blogpage />
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
      <ViewMore />
      <Advertisment />
    </div>
  );
};

export default page;
