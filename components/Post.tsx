import Link from "next/link";
import { Profile, BlogPost } from "./SVG";

type Props = {};

const Post = (props: Props) => {
  return (
    <div className="mt-4">
      <Link href={`/blog/${2}`}>
        <div className="border rounded-xl dark:bg-[#181A2A] dark:border-1 dark:border-[#242535] bg-background w-[392px] h-[488px] grid gap-1 p-[16px]">
          <BlogPost />
          <h6 className="border dark:text-[#4B6BFB] dark:bg-[#4B6BFB0D] dark:border-none text-center text-base rounded-[6px] h-[28px] w-[105px] bg-[#4B6BFB0D] text-[#4B6BFB]">
            Technology
          </h6>
          <h3 className="font-semibold dark:text-[#FFFFFF] text-xl">
            The Impact of Technology on the Workplace: How Technology is
            Changing
          </h3>

          <div className="flex justify-between w-[321px] text-center items-center text-[#97989F]">
            <Profile />
            <h6>Emmanuel Adebiyi</h6>
            <p>August 20, 2022</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Post;
