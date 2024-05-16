const SectionTitle = ({ subHeading, heading }) => {
  return (
    <div className="text-center space-y-5 mt-10 ">
      <p className="text-lg font-semibold text-[#D99904]">{subHeading}</p>
      <h1 className="lg:text-5xl text-3xl font-semibold py-4 border-y-4 inline-block lg:px-10 px-6 uppercase">{heading}</h1>
    </div>
  );
};

export default SectionTitle;
