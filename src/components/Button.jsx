const Button = ({ handleClick, text }) => {
  return (
    <button className="bg-orange-700 text-white py-2 px-5 rounded-lg text-2xl" onClick={handleClick}>
      {text}
    </button>
  );
};

export default Button;
