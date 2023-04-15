export default function SearchBar() {
  return (
    <div className="p-4 border-gray-600 border-b w-[600px] flex justify-between items-center text-gray-50 bg-opacity-50">
      <span className="w-6 text-gray-50">
        <svg
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"></path>
        </svg>
      </span>
      <div className="relative w-3/5">
        <input className="border bg-gray-900 w-full pt-3 rounded-full"></input>
        <div className="w-6 text-gray-50 absolute top-1.5 left-3">
          <svg
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z"></path>
          </svg>
        </div>
      </div>
      <span className="w-6 text-gray-50">
        <svg
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M4.5 12a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm6 0a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm6 0a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z"></path>
        </svg>
      </span>
    </div>
  );
}
