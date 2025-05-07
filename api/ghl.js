import { sendZaloMessage } from "../_zalo.js";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { contact, message } = req.body;
    const zaloId = contact?.customField?.zalo_uid;

    if (zaloId && message) {
      await sendZaloMessage(zaloId, message);
    }

    res.status(200).send("GHL message received");
  } else {
    res.status(405).send("Method not allowed");
  }
}
