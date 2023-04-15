import { NextApiRequest, NextApiResponse } from "next";
import withHandler from "../../../../lib/withHandler";
import client from "../../../../lib/client";
import { withApiSession } from "../../../../lib/withSession";
import tweet from "..";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const {
    session: { user },
    query: { id },
  } = req;

  const exist = await client.like.findFirst({
    where: {
      userId: user?.id,
      tweetId: +id,
    },
  });
  if (exist) {
    await client.like.delete({
      where: {
        id: exist.id,
      },
    });
  } else {
    await client.like.create({
      data: {
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
  }
  res.json({
    ok: true,
  });
}

export default withApiSession(withHandler({ methods: ["POST"], handler }));
