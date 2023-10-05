import React, { HTMLProps } from "react";

interface InputLabelProps extends HTMLProps<HTMLInputElement> {
  label: string;
}

const InputLabel: React.FC<InputLabelProps> = ({ label, ...inputProps }) => {
  return (
    <div className="mb-6">
      <label
        htmlFor={inputProps.id}
        className="block mb-2 text-white tracking-wide text-sm"
      >
        {label}
      </label>
      <input
        {...inputProps}
        className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5 dark:bg-neutral-900 dark:border-neutral-700 hover:border-neutral-600 focus:border-neutral-500 transition dark:placeholder-gray-400 dark:text-white outline-none"
        autoComplete="off"
      />
    </div>
  );
};

export default InputLabel;
