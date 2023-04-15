import useSWR from "swr";
import useMutation from "../lib/useMutation";
import { useRouter } from "next/router";
import { IResponseTweet } from "../pages/tweet/[id]";
import { cls } from "../lib/utils";

export default function TweetIcon() {
  const router = useRouter();
  const [mutate] = useMutation(`/api/tweet/${router?.query?.id}/likes`);
  const { data, mutate: boundMutate } = useSWR<IResponseTweet>(
    `/api/tweet/${router.query.id}`
  );
  const onClick = () => {
    mutate({});
    if (!data?.ok) return;
    boundMutate(
      (prev: any) =>
        prev && {
          ...data,
          isLiked: !data?.isLiked,
          tweet: {
            ...data.tweet,
            _count: {
              ...data.tweet._count,
              likes: data?.isLiked
                ? data.tweet._count.likes - 1
                : data.tweet._count.likes + 1,
            },
          },
        },
      false
    );
  };
  return (
    <div className="flex text-gray-400 space-x-7 mt-1 items-center">
      <div className="hover:cursor-pointer group w-11 flex items-center ">
        <svg
          className="group-hover:bg-blue-500 group-hover:bg-opacity-50 rounded-full p-1 transition-all group-hover:text-blue-500"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z"></path>
        </svg>
        <div className="ml-2 text-sm group-hover:text-blue-500 transition-all">
          {data?.tweet?._count.comments}
        </div>
      </div>

      <div
        onClick={onClick}
        className={cls(
          "hover:cursor-pointer group w-11 flex items-center ",
          data?.isLiked ? "text-red-500" : ""
        )}
      >
        <svg
          className="group-hover:bg-green-500 group-hover:bg-opacity-50 rounded-full p-1 transition-all group-hover:text-green-400"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"></path>
        </svg>
        <div className="ml-2 text-sm group-hover:text-green-400 transition-all">
          {data?.tweet._count.likes}
        </div>
      </div>
      <div className="hover:cursor-pointer pl-1">
        <svg
          className="w-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"></path>
        </svg>
      </div>
      <div className="hover:cursor-pointer pl-1">
        <svg
          className="w-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"></path>
        </svg>
      </div>
    </div>
  );
}
