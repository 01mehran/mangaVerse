import axios from "axios";

export const mangaDetailLoader = async ({ params }) => {
  const { id } = params;

  try {
    const { data: response } = await axios.get(
      `https://api.jikan.moe/v4/manga/${id}`,
    );
    return response.data;
  } catch (err) {
    console.error(err);
    throw err;
  }
};
