const FormField = ({
  labelName,
  type,
  name,
  placeholder,
  value,
  isSurpriseMe,
  handleChange,
  handleSurpriseMe,
}) => {
  return (
    <div>
      <div className="mb-2 flex items-center gap-2">
        {/* form name */}
        <label
          htmlFor={name}
          className="block text-sm font-medium text-gray-900"
        >
          {labelName}
        </label>
        {/* surprise button */}
        {isSurpriseMe && (
          <button
            type="button"
            onClick={handleSurpriseMe}
            className="rounded-md bg-[#ECECF1] py-1 px-2 text-sm font-semibold text-[#666E75] hover:bg-[#E5E5EA] "
          >
            Surprise me
          </button>
        )}
      </div>
      {/* Form Input */}
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
        required
        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-3 text-sm
         text-gray-900 outline-none focus:border-[#4549ff] focus:ring-[#4649ff] "
      />
    </div>
  );
};

export default FormField;
