import { NextApiRequest, NextApiResponse } from "next";
import withHandler from "../../lib/withHandler";
import client from "../../lib/client";
import { withApiSession } from "../../lib/withSession";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { name, phone, email, month, day, year } = req.body;
  const user = phone ? { phone } : email ? { email } : null;
  const userdata = await client.user.create({
    data: {
      name,
      birth: `${year}${month}월${day}`,
      ...user,
    },
  });
  res.json({ ok: true, userdata });
}

export default withApiSession(
  withHandler({ methods: ["POST"], handler, isprivate: false })
);
