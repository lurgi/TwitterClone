import Back from "../../components/x-back";
import BottomIcon from "../../components/bottom-icon";
import Button from "../../components/button";
import { useForm } from "react-hook-form";
import useMutation from "../../lib/useMutation";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { Tweet } from "@prisma/client";
import useUser from "../../lib/useuser";

interface IResponse {
  ok: boolean;
  tweet: Tweet;
}

export default function TweetCreate() {
  useUser();
  const { register, handleSubmit } = useForm();
  const [mutate, { data, loading }] =
    useMutation<IResponse>("/api/tweet/create");
  const onvaild = (form: any) => {
    if (loading) return;
    mutate(form);
  };
  const router = useRouter();
  useEffect(() => {
    if (data?.ok) {
      router.push(`/tweet/${data?.tweet.id}`);
    }
  }, [data]);
  return (
    <div className="flex justify-center items-center bg-opacity-30 h-screen pb-40">
      <div className="text-gray-50 w-[600px] border border-gray-600 rounded-xl p-4 space-y-3">
        <Back />
        <div className="flex">
          <div className="w-14 h-14 bg-gray-50 rounded-full mr-3"></div>
          <form onSubmit={handleSubmit(onvaild)} className="w-[90%] space-y-3">
            <textarea
              {...register("text", { required: true })}
              className="bg-gray-950 w-full p-2 text-lg border-b border-gray-600"
              placeholder="무슨 일이 일어나고 있나요?"
              rows={6}
            ></textarea>
            <div></div>
            <div className="flex justify-between items-center">
              <BottomIcon />
              <Button value="트윗하기"></Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
