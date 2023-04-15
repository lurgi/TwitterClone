import Link from "next/link";
import React, { useEffect } from "react";
import MoveInput from "../components/moveInput";
import { useForm } from "react-hook-form";
import useMutation from "../lib/useMutation";
import { useRouter } from "next/router";

export default function Login() {
  const [mutate, { data }] = useMutation("/api/login");
  const { register, handleSubmit } = useForm();
  const onvalid = (form: any) => {
    mutate(form);
  };
  const router = useRouter();
  useEffect(() => {
    if (data?.ok) {
      router.push("/");
    }
  }, [data, router]);
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center">
      <img
        className="w-10 aspect-auto absolute top-4"
        src="https://upload.wikimedia.org/wikipedia/ko/thumb/9/9e/%ED%8A%B8%EC%9C%84%ED%84%B0_%EB%A1%9C%EA%B3%A0_%282012%29.svg/172px-%ED%8A%B8%EC%9C%84%ED%84%B0_%EB%A1%9C%EA%B3%A0_%282012%29.svg.png?20151031083522"
      ></img>
      <div className=" w-80 h-5 flex flex-col justify-center items-center text-gray-50 space-y-7">
        <span className="text-2xl font-bold mb-1">트위터에 로그인하기</span>

        <div className="hover:ring-2 ring-blue-400 transition-all ring-offset-2 ring-offset-black hover:cursor-pointer w-full bg-gray-50 rounded-full py-2.5 flex items-center justify-center">
          <img
            className="w-5 inline mr-2"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/588px-Google_%22G%22_Logo.svg.png"
          ></img>
          <span className="text-gray-900 font-medium">
            Google 계정으로 로그인
          </span>
        </div>
        <div className="hover:ring-2 ring-blue-400 transition-all ring-offset-2 ring-offset-black hover:cursor-pointer w-full bg-gray-50 rounded-full py-2.5 flex items-center justify-center">
          <img
            className="w-4 inline mr-2"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/488px-Apple_logo_black.svg.png"
          ></img>
          <span className="text-gray-900 font-medium">
            Apple 계정으로 로그인
          </span>
        </div>
        <div className="w-full relative border-t border-gray-600">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gray-950 px-1">
            또는
          </div>
        </div>
        <form onSubmit={handleSubmit(onvalid)} className="space-y-6 w-full ">
          <MoveInput
            register={register("userId", { required: true })}
            placeholder="휴대폰 번호, 이메일 주소 또는 사용자 아이디"
          />
          <button
            type="submit"
            className="hover:ring-2 ring-blue-400 transition-all ring-offset-2 ring-offset-black hover:cursor-pointer w-full bg-gray-50 rounded-full py-1.5 flex items-center justify-center"
          >
            <span className="text-gray-900 font-medium">다음</span>
          </button>
        </form>
        <div className="border transition-all hover:bg-gray-900 hover:cursor-pointer w-full bg-gary-950 rounded-full py-1.5 flex items-center justify-center">
          <span className="text-gray-50 font-medium">
            비밀번호를 잊으셨나요?
          </span>
        </div>
        <div className="text-gray-300">
          계정이 없으신가요?
          <Link href={"/create"}>
            <span className="text-blue-400 hover:cursor-pointer ml-1">
              가입하기
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
