type Props = {};

const BlogSection = (props: Props) => {
  return (
    <div className="mb-12 mt-40 text-center">
      <div className="font-[#181A2A] dark:text-white font-semibold text-[30px]">
        <h2>Page Title</h2>
      </div>

      <div className="font-normal flex justify-center space-x-2">
        <h5 className="text-[#3B3C4A]">Home</h5>
        <h1 className="dark:text-[#E8E8EA]">|</h1>
        <h5 className="text-[#696A75]">Link One</h5>
      </div>
    </div>
  );
};

export default BlogSection;
