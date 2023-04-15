export default function ArrowBack() {
  const onClick = () => {
    window.history.back();
  };
  return (
    <div
      onClick={onClick}
      className="w-5 h-5 hover:cursor-pointer hover:text-blue-400 transition-all"
    >
      <svg
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"></path>
      </svg>
    </div>
  );
}
