import React, { useEffect, useState } from "react";
import LeftNav from "../components/left-nav";
import SearchBar from "../components/search-bar";
import useUser from "../lib/useuser";
import useSWR from "swr";
import { Tweet, User } from "@prisma/client";
import Link from "next/link";
import TweetBox from "../components/tweet-box";

interface iTweetWithUser extends Tweet {
  user: User;
  _count: {
    likes: number;
    comments: number;
  };
}

interface ITweetsReponse {
  ok: boolean;
  tweets: iTweetWithUser[];
}

export default function Home() {
  useUser();
  const { data } = useSWR<ITweetsReponse>("/api/tweet/");
  const [reverseTweets, setReverseTweets] = useState<
    iTweetWithUser[] | undefined
  >();
  useEffect(() => {
    if (data?.ok) {
      setReverseTweets([...data?.tweets!].reverse());
    }
  }, [data]);
  return (
    <div className="flex justify-center relative">
      <LeftNav></LeftNav>
      <div className="border-l border-r h-screen border-gray-600 w-[600px] relative">
        <SearchBar />
        {reverseTweets?.map((tweet: iTweetWithUser) => (
          <Link key={tweet.id} href={`/tweet/${tweet.id}`}>
            <div>
              <TweetBox
                name={tweet.user.name}
                text={tweet.text}
                createAt={tweet.createAt}
                big={true}
                comments={tweet?._count?.comments}
                liked={tweet?._count?.likes}
              ></TweetBox>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
