import axios from "axios";
const KEY = "AIzaSyDKZitH0DZ07ayoFt6MDZST-IHk6By9kKM";
export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",

  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
  },
});
