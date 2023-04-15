import { NextApiRequest, NextApiResponse } from "next";
import withHandler from "../../../../lib/withHandler";
import client from "../../../../lib/client";
import { withApiSession } from "../../../../lib/withSession";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const {
    query: { id },
    session: { user },
  } = req;

  const tweet = await client.tweet.findUnique({
    where: {
      id: +id,
    },
    include: {
      user: true,
      comments: {
        include: {
          user: true,
        },
      },
      _count: {
        select: {
          likes: true,
          comments: true,
        },
      },
    },
  });
  const isLiked = Boolean(
    await client.like.findFirst({
      where: {
        tweetId: +id,
        userId: user?.id,
      },
    })
  );
  res.json({
    ok: true,
    tweet,
    isLiked,
  });
}

export default withApiSession(
  withHandler({ methods: ["GET"], handler, isprivate: false })
);
