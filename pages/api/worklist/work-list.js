import axios from "axios";

export default async function handler(req, res) {
  console.log("IN api/worklist/work-list");
  const query = req.query;
  const { page } = query;

  const offset = Math.ceil((page - 1) * 10);

  const limit = 10;

  console.log("page, offset and limit: ", page, offset, limit);
  const url = `https://worklist-ho-hmpo-dev1-i-dlsr-bac.np.ebsa.homeoffice.gov.uk/worklist/v1/reports?offset=${offset}&limit=${limit}`;
  console.log("url: ", url);

  try {
    const response = await axios.get(url);
    // console.log("Data", response.data);
    res.status(response.status).json({ data: response.data });
  } catch (error) {
    console.log(error);
  }
}
