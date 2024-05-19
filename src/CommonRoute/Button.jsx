const Button = ({ value, border }) => {
  return (
    <div className="text-center">
      <button className={`py-3 px-6 border-b-4 ${border} rounded-xl font-semibold`}>{value}</button>
    </div>
  );
};

export default Button;
