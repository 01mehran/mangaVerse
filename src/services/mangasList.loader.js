import axios from "axios";

export const mangasListLoader = async () => {
  try {
    const { data: response } = await axios.get(
      "https://api.jikan.moe/v4/top/manga",
    );
    return response.data;
  } catch (err) {
    console.error(err);
    throw err;
  }
};
