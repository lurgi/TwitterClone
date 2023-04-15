import { NextApiRequest, NextApiResponse } from "next";
import withHandler from "../../lib/withHandler";
import client from "../../lib/client";
import { withApiSession } from "../../lib/withSession";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { userId } = req.body;
  let user;
  if (userId.includes("@")) {
    user = await client.user.findUnique({
      where: {
        email: userId,
      },
    });
  } else {
    user = await client.user.findUnique({
      where: {
        phone: userId,
      },
    });
  }
  if (!user) res.status(404).end();
  req.session.user = {
    id: user?.id!,
  };
  await req.session.save();
  res.json({
    ok: true,
  });
}

export default withApiSession(
  withHandler({ methods: ["POST"], handler, isprivate: false })
);
