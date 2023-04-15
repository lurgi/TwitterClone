interface IButton {
  value: string;
}

export default function Button({ value }: IButton) {
  return (
    <input
      className=" p-1 rounded-full w-24 h-9 hover:cursor-pointer bg-blue-400
                hover:ring-2 ring-offset-2 ring-blue500 hover:bg-blue-500 ring-offset-black transition-all"
      type="submit"
      value={value}
    ></input>
  );
}
