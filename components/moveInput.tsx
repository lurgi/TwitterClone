import { UseFormRegisterReturn } from "react-hook-form";
import { cls } from "../lib/utils";

interface InputProps {
  placeholder: string;
  mini?: boolean;
  register: UseFormRegisterReturn;
  type?: string;
}
// "border-2 border-gray-300 rounded-md w-full bg-gray-950 pt-7 pb-3 px-2"
export default function MoveInput({
  register,
  placeholder,
  mini = false,
  type,
}: InputProps) {
  return (
    <div>
      <label className="w-full text-md relative login-animation text-gray-300">
        <input
          {...register}
          className={cls(
            "outline-none border-2 border-gray-600 rounded-md w-full bg-gray-950 px-2 placeholder:text-gray-900 ",
            mini ? "pt-5 pb-2" : "pt-7 pb-3"
          )}
          placeholder="."
          type={type}
        />
        <div className="text-gray-400 px-2 absolute w-full overflow-hidden text-ellipsis whitespace-nowrap transition-all">
          {placeholder}
        </div>
      </label>
    </div>
  );
}
