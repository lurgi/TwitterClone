import React, { useEffect, useState } from "react";
import LeftNav from "../../components/left-nav";
import TweetIcon from "../../components/tweet-icon";
import ArrowBack from "../../components/arrow-back";
import { useForm } from "react-hook-form";
import Button from "../../components/button";
import { useRouter } from "next/router";
import useSWR from "swr";
import { Comment, Tweet, User } from "@prisma/client";
import useMutation from "../../lib/useMutation";
import CommentBox from "../../components/comment-box";
import useUser from "../../lib/useuser";

interface ICommentWithUser extends Comment {
  user: User;
}

interface ITweetWithUser extends Tweet {
  user: User;
  comments: ICommentWithUser[];
  _count: {
    comments: number;
    likes: number;
  };
}

export interface IResponseTweet {
  ok: boolean;
  tweet: ITweetWithUser;
  isLiked: boolean;
}

const dateWithYearString = (create: Date) => {
  const date = new Date(create);
  return `${date.getHours()}:${date.getMinutes()} · ${date.getFullYear()}년 ${
    date.getMonth() + 1
  }월 ${date.getDate() + 1}일 `;
};

export default function TweetDetail() {
  useUser();
  const { register, handleSubmit, reset } = useForm();
  const router = useRouter();
  const [mutate, { loading }] = useMutation(
    `/api/tweet/${router.query.id}/comment`
  );
  const { data } = useSWR<IResponseTweet>(`/api/tweet/${router.query.id}`);
  const onvalid = (form: any) => {
    if (loading) return;
    mutate(form);
    reset();
  };
  const [tweets, setTweets] = useState<ICommentWithUser[]>();
  useEffect(() => {
    if (data?.ok && data.tweet.comments) {
      setTweets([...data?.tweet?.comments!].reverse());
    }
    console.log(data);
  }, [data]);
  return (
    <div className="flex justify-center relative">
      <LeftNav></LeftNav>
      <div className="border-l border-r h-screen border-gray-600 w-[600px] relative">
        <div className="text-gray-50 flex items-center p-4">
          <ArrowBack />
          <span className="text-xl font-semibold ml-10">트윗</span>
        </div>
        <div className="w-full flex px-4 text-gray-50 py-3 border-b border-gray-600">
          <div className="w-full relative">
            <div className="flex mb-3">
              <div className="bg-gray-600 rounded-md w-14 h-14 mr-3"></div>
              <div>
                <div>{data?.tweet?.user?.name}</div>
                <div className="text-gray-400">@userid</div>
              </div>
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
            <div>{data?.tweet?.text}</div>
            <div className="border-b border-gray-600 py-3 mt-1 text-gray-400">
              {dateWithYearString(data?.tweet?.createAt!)}
            </div>
            <div className="border-b border-gray-600 pt-1 pb-3">
              <TweetIcon />
            </div>
            <form
              onSubmit={handleSubmit(onvalid)}
              className="flex items-center pt-5 pb-3 relative"
            >
              <div className="w-12 h-12 bg-gray-50 rounded-full mr-3"></div>
              <input
                type="text"
                {...register("comment", { required: true })}
                className="bg-gray-950 p-2 outline-none"
                placeholder="내 답글을 트윗합니다"
              ></input>
              <div className="right-0 absolute">
                <Button value="답글"></Button>
              </div>
            </form>
          </div>
        </div>
        {tweets?.map((comment) => (
          <CommentBox
            key={comment.id}
            name={comment.user.name}
            text={comment.comment}
            createAt={comment.createAt}
          />
        ))}
      </div>
    </div>
  );
}
