import axios from "axios";

export const mangasListLoader = async () => {
  try {
    const { data } = await axios.get("http://localhost:3000/manga");
    return data;
  } catch (err) {
    console.error(err);
    throw err;
  }
};
