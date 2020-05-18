import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID t5pSTfrfLBLouuqocPizOqwE-t-ZC7vGY1UkoY-oca8",
  },
});
