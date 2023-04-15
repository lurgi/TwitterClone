import { NextApiRequest, NextApiResponse } from "next";
import withHandler from "../../../lib/withHandler";
import client from "../../../lib/client";
import { withApiSession } from "../../../lib/withSession";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const tweets = await client.tweet.findMany({
    include: {
      user: true,
      _count: {
        select: {
          likes: true,
          comments: true,
        },
      },
    },
  });
  res.json({ ok: true, tweets });
}

export default withApiSession(
  withHandler({ methods: ["GET"], handler, isprivate: false })
);
