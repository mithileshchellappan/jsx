import axios from "axios";

export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers: {
        Authorization: "Client-ID CbRa-gD5D1VsofD6kbxHCNQGQ7xpmGMqiv3AZs6sMNw",
      },
});
