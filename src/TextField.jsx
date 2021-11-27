const TextField = ({ label, value, lines, onValueChange }) => {
  return (
    <div>
      <div className="flex flex-row mt-2 relative rounded-md">
        <label
          htmlFor={label}
          className="block text-sm font-medium text-gray-700 mr-10 w-1/3"
        >
          {label}
        </label>
        {lines ? (
          <textarea
            className="border-2 p-1 focus:ring-indigo-500 focus:border-indigo-500 block w-2/3 sm:text-sm border-gray-200 rounded-md"
            name={label}
            id={label}
            rows={lines}
            onChange={onValueChange}
          ></textarea>
        ) : (
          <input
            type="text"
            name={label}
            id={label}
            className="border-2 p-1 focus:ring-indigo-500 focus:border-indigo-500 block w-2/3 sm:text-sm border-gray-200 rounded-md"
            value={value}
            onChange={onValueChange}
          />
        )}
      </div>
    </div>
  );
};

export default TextField;
