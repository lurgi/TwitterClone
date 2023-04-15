import { NextApiRequest, NextApiResponse } from "next";
export interface ResponseType {
  ok: boolean;
  [key: string]: any;
}

type method = "GET" | "POST" | "DELETE";

interface IConfig {
  methods: method[];
  handler: (req: NextApiRequest, res: NextApiResponse) => void;
  isprivate?: boolean;
}

export default function withHandler({
  methods,
  handler,
  isprivate = true,
}: IConfig) {
  return async function (req: NextApiRequest, res: NextApiResponse) {
    if (req.method && !methods.includes(req.method as any)) {
      return res.status(406).end();
    }
    if (isprivate && !req.session.user) {
      return res.status(401).json({ ok: false });
    }
    try {
      await handler(req, res);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error });
    }
  };
}
