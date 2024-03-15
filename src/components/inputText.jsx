const InputText = ({ id, text, handleChange, label }) => {
  return (
    <div className="mt-4 flex flex-col">
      <label className="ps-1 pb-2 font-semibold text-lg" htmlFor={id}>
        {label}
      </label>
      <input className="bg-gray-300- border-4 rounded p-2 ps-5" type="text" id={id} value={text} onChange={handleChange} />
    </div>
  );
};

export default InputText;
