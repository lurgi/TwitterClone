import { NextApiRequest, NextApiResponse } from "next";
import withHandler from "../../lib/withHandler";
import client from "../../lib/client";
import { withApiSession } from "../../lib/withSession";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const user = await client.user.findUnique({
    where: {
      id: req.session.user?.id,
    },
  });
  res.json({ ok: true, user });
  res.status(200).end();
}

export default withApiSession(withHandler({ methods: ["GET"], handler }));
