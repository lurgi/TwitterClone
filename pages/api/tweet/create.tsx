import { NextApiRequest, NextApiResponse } from "next";
import withHandler from "../../../lib/withHandler";
import client from "../../../lib/client";
import { withApiSession } from "../../../lib/withSession";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const {
    body: { text },
    session: { user },
  } = req;
  const tweet = await client.tweet.create({
    data: {
      text,
      user: {
        connect: {
          id: user?.id,
        },
      },
    },
  });
  res.json({ ok: true, tweet });
}

export default withApiSession(
  withHandler({ methods: ["POST"], handler, isprivate: false })
);
