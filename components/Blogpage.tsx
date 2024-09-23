import { Hero, Profile } from "./SVG";

type Props = {};

const Blogpage = (props: Props) => {
  return (
    <header className="pt-8 mb-10 text-center text-white">
      <div>
        <Hero />
      </div>

      <div className="w-[1136px] grid gap-1 h-[124px] p-[40px] text-left rounded-xl border-1 border-[#E8E8EA] bg-none absolute top-[580px] left-[100px]">
        <h6 className=" rounded-[6px] w-[110px] bg-[#4B6BFB] p-[4px_10px]">
          Technology
        </h6>
        <h1 className="font-semibold text-[36px]">
          The Impact of Technology on the Workplace: How Technology is Changing
        </h1>

        <div className="flex justify-between w-[321px] text-center items-center">
          <Profile />
          <h6>Emmanuel Adebiyi</h6>
          <p>August 20, 2022</p>
        </div>
      </div>
    </header>
  );
};

export default Blogpage;
