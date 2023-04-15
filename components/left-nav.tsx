import Link from "next/link";
import { useRouter } from "next/router";

export default function LeftNav() {
  const router = useRouter();
  const onClick = () => {
    router.push("/tweet/create");
  };

  return (
    <div className="space-y-3 mt-3 mr-1">
      <Link href={"/"}>
        <div className="transition-all w-12 h-12 hover:bg-gray-600 hover:cursor-pointer rounded-full flex justify-center items-center">
          <img
            className="w-7"
            src="https://upload.wikimedia.org/wikipedia/ko/thumb/9/9e/%ED%8A%B8%EC%9C%84%ED%84%B0_%EB%A1%9C%EA%B3%A0_%282012%29.svg/172px-%ED%8A%B8%EC%9C%84%ED%84%B0_%EB%A1%9C%EA%B3%A0_%282012%29.svg.png?20151031083522"
          ></img>
        </div>
      </Link>
      <Link href={"/"}>
        <div className="transition-all rounded-full hover:bg-gray-600 hover:cursor-pointer flex justify-center items-center text-gray-50 w-12 h-12">
          <svg
            className="w-7"
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z"></path>
            <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z"></path>
          </svg>
        </div>
      </Link>
      <div className="transition-all hover:bg-gray-600 rounded-full hover:cursor-pointer flex justify-center items-center text-gray-50 w-12 h-12">
        <svg
          className="w-7"
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clip-rule="evenodd"
            fill-rule="evenodd"
            d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z"
          ></path>
        </svg>
      </div>
      <div className="transition-all hover:bg-gray-600 rounded-full hover:cursor-pointer flex justify-center items-center text-gray-50 w-12 h-12">
        <svg
          className="w-7"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
          ></path>
        </svg>
      </div>
      <div className="transition-all hover:bg-gray-600 rounded-full hover:cursor-pointer flex justify-center items-center text-gray-50 w-12 h-12">
        <svg
          className="w-7"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
          ></path>
        </svg>
      </div>
      <div className="transition-all hover:bg-gray-600 rounded-full hover:cursor-pointer flex justify-center items-center text-gray-50 w-12 h-12">
        <svg
          className="w-7"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"></path>
        </svg>
      </div>
      <div className="transition-all hover:bg-gray-600 rounded-full hover:cursor-pointer flex justify-center items-center text-gray-50 w-12 h-12">
        <svg
          className="w-7"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"></path>
        </svg>
      </div>
      <div className="transition-all hover:bg-gray-600 rounded-full hover:cursor-pointer flex justify-center items-center text-gray-50 w-12 h-12">
        <svg
          className="w-7"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
      </div>
      <div className=" flex justify-center items-center transition-all hover:bg-blue-500 hover:cursor-pointer w-12 h-12 rounded-full text-gray-50 bg-blue-400 bottom-6 left-6 mr-3 mt-5">
        <svg
          onClick={onClick}
          className="w-8"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12 4.5v15m7.5-7.5h-15"></path>
        </svg>
      </div>
    </div>
  );
}
