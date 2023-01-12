export default function handler(req, res) {
  const body = req.body;

  console.log("Received Body: ", body);

  res.status(200).json({ data: `${body}` });
}
