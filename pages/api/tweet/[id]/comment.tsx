import { NextApiRequest, NextApiResponse } from "next";
import withHandler from "../../../../lib/withHandler";
import client from "../../../../lib/client";
import { withApiSession } from "../../../../lib/withSession";
import tweet from "..";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const {
    body: { comment },
    session: { user },
    query: { id },
  } = req;
  await client.comment.create({
    data: {
      comment,
      user: {
        connect: {
          id: user?.id,
        },
      },
      tweet: {
        connect: {
          id: +id,
        },
      },
    },
  });
  res.json({ ok: true });
}

export default withApiSession(
  withHandler({ methods: ["POST"], handler, isprivate: false })
);
