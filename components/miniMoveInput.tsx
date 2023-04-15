export default function MiniMoveInput({ placeholder }: any) {
  return (
    <label className="w-full text-md relative login-animation text-gray-300">
      <input className="border-2 border-gray-300 rounded-md w-full bg-gray-950 pt pb-3 px-2" />
      <div className="px-2 absolute -top-2 w-full overflow-hidden text-ellipsis whitespace-nowrap transition-all">
        {placeholder}
      </div>
    </label>
  );
}
