import { Hero, Profile } from "./SVG";

type Props = {};

const Homepage = (props: Props) => {
  return (
    <header className="sm:pt-14 sm:mt-0 mt-[-140px] text-center relative">
      <div className="w-full">
        <Hero className="w-full max-w-full" />
      </div>

      <div className="w-full sm:w-[598px] dark:bg-[#181A2A] dark:text-white grid gap-1 h-auto p-6 text-left rounded-xl border dark:border-none border-[#E8E8EA] bg-background sm:mt-0 mt-[-160px] absolute sm:top-[400px] sm:left-[50px]">
        <h6 className="border dark:border-none rounded-[6px] w-fit text-white bg-[#4B6BFB] p-[4px_10px] mb-4">
          Technology
        </h6>
        <h1 className="font-semibold text-[24px] sm:text-[36px] leading-tight">
          The Impact of Technology on the Workplace: How Technology is Changing
        </h1>

        <div className="flex justify-between w-full sm:w-[321px] text-center items-center text-[#97989F] mt-4">
          <Profile />
          <h6 className="ml-2">Emmanuel Adebiyi</h6>
          <p className="ml-auto">August 20, 2022</p>
        </div>
      </div>
    </header>
  );
};

export default Homepage;
