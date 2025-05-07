import { sendToGHL } from "../_ghl.js";
import { parseZaloMessage } from "../_zalo.js";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { sender, message } = parseZaloMessage(req.body);
    if (sender && message) {
      await sendToGHL(sender, message);
    }
    res.status(200).send("Zalo message received");
  } else {
    res.status(405).send("Method not allowed");
  }
}
