import axios from "axios";

export const mangaSearchLoader = async ({ request }) => {
  const url = new URL(request.url);

  const query = url.searchParams.get("q");
  const page = url.searchParams.get("page") || 1;

  const { data: response } = await axios.get(
    `https://api.jikan.moe/v4/manga?q=${query}&page=${page}&limit=24`,
  );

  return { mangas: response.data, pagination: response.pagination };
};
