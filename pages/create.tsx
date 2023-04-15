import React, { useState } from "react";
import MoveInput from "../components/moveInput";
import { useForm } from "react-hook-form";
import useMutation from "../lib/useMutation";
import { useRouter } from "next/router";

export default function Create() {
  const [mutate, { loading }] = useMutation("/api/create");
  const [switchState, setSwitchState] = useState(true);
  const setSwich = () => {
    setSwitchState((prev: any) => !prev);
  };
  const router = useRouter();
  const { register, handleSubmit } = useForm();
  const onvalid = (form: any) => {
    if (loading) return;
    mutate(form);
    window.alert("계정이 생성되었습니다. 로그인 해주세요");
    router.replace("/login");
  };
  return (
    <div
      onSubmit={handleSubmit(onvalid)}
      className="flex justify-center items-center h-screen"
    >
      <form className="text-gray-50 p-10 space-y-5 w-[500px] ">
        <div className="text-2xl font-semibold">계정을 생성하세요</div>
        <MoveInput
          register={register("name", { required: true })}
          mini={true}
          placeholder="이름"
          type="text"
        />

        {switchState ? (
          <div>
            <MoveInput
              register={register("phone", { required: true })}
              mini={true}
              placeholder="휴대폰"
              type="number"
            />
            <div
              onClick={setSwich}
              className="text-end text-blue-400 mt-1 hover:cursor-pointer"
            >
              대신 이메일 사용하기
            </div>
          </div>
        ) : (
          <div>
            <MoveInput
              register={register("email", { required: true })}
              mini={true}
              placeholder="이메일"
              type="email"
            />
            <div
              onClick={setSwich}
              className="text-end text-blue-400 mt-1 hover:cursor-pointer"
            >
              대신 전화번호 사용하기
            </div>
          </div>
        )}
        <div className="space-y-5">
          <div>생년월일</div>
          <span className="text-sm font-thin text-gray-500 leading-1">
            이 정보는 공개적으로 표시되지 않습니다. 비즈니스, 반려동물 등 계정
            주제에 상관없이 나의 연령을 확인하세요.
          </span>
          <div className="grid grid-cols-3 gap-2 pb-10">
            <select
              {...register("month", { required: true })}
              className="hover:cursor-pointer border p-2 rounded-md border-gray-600 text-gray-300"
            >
              {Array.from({ length: 12 }, (_, i) => i + 1).map((v, i) => (
                <option key={i} value={v}>{`${v}월`}</option>
              ))}
            </select>
            <select
              {...register("day", { required: true })}
              className="hover:cursor-pointer border p-2 rounded-md border-gray-600 text-gray-300"
            >
              {Array.from({ length: 31 }, (_, i) => i + 1).map((v, i) => (
                <option key={i}>{`${v}일`}</option>
              ))}
            </select>
            <select
              {...register("year", { required: "true" })}
              className="hover:cursor-pointer border p-2 rounded-md border-gray-600 text-gray-300"
            >
              {Array.from({ length: 100 }, (_, i) => i + 1924)
                .reverse()
                .map((v, i) => (
                  <option key={i}>{`${v}년`}</option>
                ))}
            </select>
          </div>
          <div className="flex justify-center">
            <input
              className="hover:ring-2 ring-offset-4 transition-all ring-offset-gray-900 ring-blue-600 border w-4/5 rounded-full bg-gray-100 text-gray-900 p-2.5 text-lg font-semibold"
              type="submit"
              value={"가입하기"}
            ></input>
          </div>
        </div>
      </form>
    </div>
  );
}
