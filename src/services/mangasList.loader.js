// Libraries;
import axios from "axios";

export const mangasListLoader = async ({ request }) => {
  const url = new URL(request.url);
  const page = url.searchParams.get("page") || 1;

  try {
    const { data: response } = await axios.get(
      `https://api.jikan.moe/v4/top/manga?page=${page}&limit=24`,
    );

    return { mangas: response.data, pagination: response.pagination };
  } catch (err) {
    console.error(err);
    throw err;
  }
};
