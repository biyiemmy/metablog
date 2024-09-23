import Advertisment from "@/components/Advertisment";
import { LandScape, Profile } from "@/components/SVG";

type Props = {};

const page = (props: Props) => {
  return (
    <div className="pt-16 pb-4 w-[800px]">
      <div className="grid gap-1 h-[128px] mb-24 text-left">
        <h6 className=" rounded-[6px] w-[110px] text-white bg-[#4B6BFB] p-[4px_10px]">
          Technology
        </h6>
        <h1 className="font-semibold text-[36px] dark:text-white text-[#181A2A]">
          The Impact of Technology on the Workplace: How Technology is Changing
        </h1>

        <div className="flex justify-between w-[321px] text-center items-center text-[#696A75]">
          <Profile />
          <h6>Emmanuel Adebiyi</h6>
          <p>August 20, 2022</p>
        </div>
      </div>

      <LandScape />

      <article className="py-4 grid gap-4">
        <p className="font-serif font-normal dark:text-[#BABABF] text-[20px] text-[#3B3C4A]">
          Traveling is an enriching experience that opens up new horizons,
          exposes us to different cultures, and creates memories that last a
          lifetime. However, traveling can also be stressful and overwhelming,
          especially if you don't plan and prepare adequately. In this blog
          article, we'll explore tips and tricks for a memorable journey and how
          to make the most of your travels. <br /> <br /> One of the most
          rewarding aspects of traveling is immersing yourself in the local
          culture and customs. This includes trying local cuisine, attending
          cultural events and festivals, and interacting with locals. Learning a
          few phrases in the local language can also go a long way in making
          connections and showing respect.
        </p>

        <h1 className="font-semibold dark:text-[#FFFFFF] text-[24px] text-[#181A2A]">
          Research Your Destination
        </h1>

        <p className="font-serif dark:text-[#BABABF] font-normal text-[20px] text-[#3B3C4A]">
          Before embarking on your journey, take the time to research your
          destination. This includes understanding the local culture, customs,
          and laws, as well as identifying top attractions, restaurants, and
          accommodations. Doing so will help you navigate your destination with
          confidence and avoid any cultural faux pas. <br /> <br /> Lorem ipsum
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. In hendrerit gravida
          rutrum quisque non tellus orci ac auctor. Mi ipsum faucibus vitae
          aliquet nec ullamcorper sit amet. Aenean euismod elementum nisi quis
          eleifend quam adipiscing vitae. Viverra adipiscing at in tellus.
        </p>

        <h1 className="font-semibold dark:text-[#FFFFFF] text-[24px] text-[#181A2A]">
          Plan Your Itinerary
        </h1>

        <p className="font-serif dark:text-[#BABABF] font-normal text-[20px] text-[#3B3C4A]">
          While it's essential to leave room for spontaneity and unexpected
          adventures, having a rough itinerary can help you make the most of
          your time and budget. Identify the must-see sights and experiences and
          prioritize them according to your interests and preferences. This will
          help you avoid overscheduling and ensure that you have time to relax
          and enjoy your journey. <br /> <br /> Vitae sapien pellentesque
          habitant morbi tristique. Luctus venenatis lectus magna fringilla. Nec
          ullamcorper sit amet risus nullam eget felis. Tincidunt arcu non
          sodales neque sodales ut etiam sit amet.
        </p>

        <LandScape />

        <div className="mt-[-128px]">
          <Advertisment />
        </div>

        <h1 className="font-semibold dark:text-[#FFFFFF] text-[24px] text-[#181A2A]">
          Stay Safe and Healthy
        </h1>

        <p className="font-serif dark:text-[#BABABF] font-normal text-[20px] text-[#3B3C4A]">
          Traveling can expose you to new environments and potential health
          risks, so it's crucial to take precautions to stay safe and healthy.
          This includes researching any required vaccinations or medications,
          staying hydrated, washing your hands frequently, and using sunscreen
          and insect repellent. It's also essential to keep your valuables safe
          and secure and to be aware of your surroundings at all times.
        </p>

        <h1 className="font-semibold dark:text-[#FFFFFF] text-[24px] text-[#181A2A]">
          Immerse Yourself in the Local Culture
        </h1>

        <p className="font-serif dark:text-[#BABABF] font-normal text-[20px] text-[#3B3C4A]">
          One of the most rewarding aspects of traveling is immersing yourself
          in the local culture and customs. This includes trying local cuisine,
          attending cultural events and festivals, and interacting with locals.
          Learning a few phrases in the local language can also go a long way in
          making connections and showing respect.
        </p>

        <h1 className="font-semibold dark:text-[#FFFFFF] text-[24px] text-[#181A2A]">
          Capture Memories
        </h1>

        <p className="font-serif dark:text-[#BABABF] font-normal text-[20px] text-[#3B3C4A]">
          Finally, don't forget to capture memories of your journey. Whether
          it's through photographs, journaling, or souvenirs, preserving the
          moments and experiences of your travels can bring joy and nostalgia
          for years to come. However, it's also essential to be present in the
          moment and not let technology distract you from the beauty of your
          surroundings.
        </p>

        <h1 className="font-semibold dark:text-[#FFFFFF] text-[24px] text-[#181A2A]">
          Conclusion
        </h1>

        <p className="font-serif dark:text-[#BABABF] font-normal text-[20px] text-[#3B3C4A]">
          Traveling is an art form that requires a blend of planning,
          preparation, and spontaneity. By following these tips and tricks, you
          can make the most of your journey and create memories that last a
          lifetime. So pack your bags, embrace the adventure, and enjoy the
          ride.
        </p>
      </article>
    </div>
  );
};

export default page;
