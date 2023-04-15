import CommentIcon from "./comment-icon";

const datestring = (create: Date) => {
  const date = new Date(create);
  return `${date.getMonth() + 1}월 ${
    date.getDate() + 1
  }일 ${date.getHours()}시 ${date.getMinutes()}분`;
};

interface IProps {
  name: string;
  createAt: Date;
  text: string;
}

export default function CommentBox({ name, createAt, text }: IProps) {
  return (
    <div className="hover:cursor-pointer w-full flex px-4 text-gray-50 py-3 border-b border-gray-600">
      <div className="bg-gray-600 rounded-full w-16 h-14 mr-3"></div>
      <div className="w-full relative">
        <div className="flex space-x-2 items-center">
          <span>{name}</span>
          <span className="text-gray-400">@userId</span>
          <span className="text-gray-400 text-xs">{datestring(createAt)}</span>
          <div className="absolute right-0">
            <svg
              className="w-5"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M4.5 12a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm6 0a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm6 0a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z"></path>
            </svg>
          </div>
        </div>
        <div>{text}</div>
        <CommentIcon />
      </div>
    </div>
  );
}
