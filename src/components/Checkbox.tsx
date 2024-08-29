import { faCheck, faMinus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DetailedHTMLProps, forwardRef, InputHTMLAttributes } from "react";

interface CheckboxProps
  extends Omit<
    DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
    "type"
  > {}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  function Checkbox({ id, name, value, className, ...props }, ref) {
    return (
      <div className={`relative flex items-center gap-2 ${className ?? ""}`}>
        <input
          ref={ref}
          {...props}
          type="checkbox"
          id={id}
          name={name}
          value={value}
          className="disabled:border-steel-400 disabled:bg-steel-400 peer relative h-5 w-5 cursor-pointer appearance-none rounded border border-gray-300 bg-gray-200 checked:border-0 checked:bg-blue-500 disabled:cursor-default"
        />

        <label
          htmlFor={id}
          className="cursor-pointer select-none font-sans font-semibold peer-disabled:cursor-default peer-disabled:opacity-50"
        >
          {id}
        </label>
        <FontAwesomeIcon
          icon={faCheck}
          className="pointer-events-none absolute ml-0.5 hidden h-4 w-4 cursor-pointer text-white peer-[&:not(:indeterminate):checked]:block"
        />
        <FontAwesomeIcon
          icon={faMinus}
          className="pointer-events-none absolute ml-0.5 hidden h-4 w-4 cursor-pointer text-white peer-[&:indeterminate:checked]:block"
        />
      </div>
    );
  },
);
