import LatestPost from "@/components/LatestPost";
import Post from "@/components/Post";
import { Facebook, Profile } from "@/components/SVG";

type Props = {};

const page = (props: Props) => {
  return (
    <div className="my-20">
      <div className="bg-[#F6F6F7] dark:bg-[#242535] dark:border-none border p-[48px] grid gap-[10px]">
        <div className="flex gap-4 justify-center items-center text-left ">
          <Profile />
          <div>
            <h1 className="text[#181A2A] dark:text-[#FFFFFF] font-medium text-[20px]">
              Emmanuel Adebiyi
            </h1>
            <p className="text-[#696A75] dark:text-[#BABABF] font-normal text-[14px]">
              Software Engineer & Content Creator
            </p>
          </div>
        </div>

        <div className="text-center justify-center mx-auto w-[668px]">
          <p className="text-[#3B3C4A] dark:text-[#BABABF] font-normal text-[18px]">
            Meet Jonathan Doe, a passionate writer and blogger with a love for
            technology and travel. Jonathan holds a degree in Computer Science
            and has spent years working in the tech industry, gaining a deep
            understanding of the impact technology has on our lives.
          </p>
        </div>

        <div className="flex gap-4 text-center justify-center">
          <Facebook />
          <Facebook />
          <Facebook />
          <Facebook />
        </div>
      </div>

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
    </div>
  );
};

export default page;
