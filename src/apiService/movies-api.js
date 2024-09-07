import axios from "axios";

const AUTH_TOKEN =
  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MjI3ZDI3N2FjNmI4ZmU3MjUzMzEzMGFkODQ3NGI2MSIsIm5iZiI6MTcyNTU1NDg0Mi43MzEzLCJzdWIiOiI2NmQ5YjU5NWE1YWMyY2ViZTBiZGEyNmMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.Z6ckp0Kld0dnGWp68jsmMuft54-HB4lyWTauoxf2iIw";

axios.defaults.headers.common["Authorization"] = AUTH_TOKEN;

axios.defaults.baseURL = "https://api.themoviedb.org/3/";

export default async function getMovies(endPoint, title) {
  const response = await axios.get(`${endPoint}`, {
    params: {
      language: "en-US",
      include_adult: "false",
      query: title,
    },
  });

  return response.data;
}
