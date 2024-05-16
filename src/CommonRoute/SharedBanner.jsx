const SharedBanner = ({ name, bg, details }) => {
  return (
    <div>
      <section className={`flex justify-center items-center bg-fixed ${bg} lg:h-[600px]`}>
        <div className="bg-black bg-opacity-50 text-white space-y-5 w-4/5 mx-auto px-5 lg:px-12 lg:py-24">
          <h2 className="text-3xl lg:text-5xl uppercase text-center font-bold">{name}</h2>
          <p className="text-center text-lg font-semibold">{details}</p>
        </div>
      </section>
    </div>
  );
};

export default SharedBanner;
