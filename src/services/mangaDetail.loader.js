import axios from "axios";

export const mangaDetailLoader = async ({ params }) => {
  try {
    const { data } = await axios.get(
      `http://localhost:3000/manga/${params.id}`,
    );

    return data;
  } catch (err) {
    console.error(err);
    throw err;
  }
};
