interface select {
  name: string;
}

const FormSelect = ({ name }: select) => {
  return (
    <div className="flex flex-col w-full mb-4 ">
      <label htmlFor={`${{ name }}`} className="mb-2 text-xs uppercase">
        {name}
      </label>
      <select
        name={`${{ name }}`}
        id={`${{ name }}`}
        className="p-4 bg-transparent border border-white/50 cursor-pointer"
      >
        <option value={`${{ name }}`} className="text-dark">
          {name}
        </option>
        <option value={`${{ name }}`} className="text-dark">
          {name}
        </option>
        <option value={`${{ name }}`} className="text-dark">
          {name}
        </option>
      </select>
    </div>
  );
};

export default FormSelect;
