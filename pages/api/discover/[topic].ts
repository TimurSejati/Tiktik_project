import type { NextApiRequest, NextApiResponse } from "next";
import { client } from "../../../utils/clients";
import { topicPostsQuery } from "../../../utils/queries";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const { topic }: any = req.query;

    const videoQuery = topicPostsQuery(topic);
    const videos = await client.fetch(videoQuery);

    res.status(200).json(videos);
  }
}
