// actions go here
import axios from "axios";

export const fetchGames = () => async (dispatch) => {
  const response = await axios.get("https://www.scorebat.com/video-api/v1/");

  console.log(response);

  const filteredResults = response.data.map((cur) => {
    return {
      ...cur,
      name: "Cristian",
    };
  });

  console.log(filteredResults);
};
