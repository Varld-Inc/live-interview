import { InputFieldProps } from "../types";

export default function InputField({ label, ...rest }: InputFieldProps) {
  return (
    <div className="space-y-2">
      {label && (
        <label className="block" htmlFor={rest.id}>
          {label}
        </label>
      )}
      <input className="rounded-md p-1 w-full" {...rest} />
    </div>
  );
}
