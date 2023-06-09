import { User } from "@prisma/client";
import { useRouter } from "next/router";
import { useEffect } from "react";
import useSWR from "swr";

interface IProfileResponse {
  ok: boolean;
  user: User;
}

export default function useUser() {
  const { data, error } = useSWR<IProfileResponse>("/api/me");
  const router = useRouter();
  useEffect(() => {
    if (data && !data.ok) {
      router.replace("/login");
    }
  }, [data, router]);
  return { user: data?.user, isLoading: !data && !error };
}
