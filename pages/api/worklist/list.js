import axios from "axios";

export default async function handler(req, res) {
  console.log("IN api/worklist/list");
  const query = req.query;
  const { currentPage, limit } = query;

  const offset = Math.ceil(currentPage * 10);

  console.log("currentPage, offset and limit: ", currentPage, offset, limit);
  const url = `https://worklist-ho-hmpo-dev1-i-dlsr-bac.np.ebsa.homeoffice.gov.uk/worklist/v1/reports?offset=${offset}&limit=${limit}`;
  console.log("url: ", url);

  try {
    const response = await axios.get(url);
    res.status(response.status).json({ data: response.data });
  } catch (error) {
    console.log(error);
  }
}
