import React, { HTMLProps } from "react";

interface InputLabelProps extends HTMLProps<HTMLInputElement> {
  label: string;
  register?: Object;
  message?: string;
}

const InputLabel: React.FC<InputLabelProps> = ({
  label,
  register,
  message,
  ...inputProps
}) => {
  return (
    <div className="mb-5">
      <label
        htmlFor={inputProps.id}
        className="block mb-2 text-white tracking-wide text-sm"
      >
        {label}
      </label>
      <input
        {...inputProps}
        className={`bg-gray-50 border ${
          message
            ? "border-rose-500"
            : "border-neutral-700 hover:border-neutral-600 focus:border-neutral-500"
        } rounded-lg block w-full p-2.5 bg-neutral-900 transition placeholder-gray-400 text-white outline-none`}
        autoComplete="off"
        autoCorrect="off"
        spellCheck={false}
        {...register}
      />
      {message && (
        <p data-aos="fade" className="mt-1 text-rose-500 text-sm">
          {message}
        </p>
      )}
    </div>
  );
};

export default InputLabel;
