export const fetchPosts = async () => {
  const response = await fetch("https://dall-e-hk0i.onrender.com/api/v1/post", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => response.json());

  const data = response.data.reverse();

  return data;
};
