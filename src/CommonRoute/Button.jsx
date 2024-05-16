const Button = ({ value }) => {
  return (
    <div className="text-center">
      <button className="py-3 px-6 border-b-4 border-black rounded-xl font-semibold">{value}</button>
    </div>
  );
};

export default Button;
