import { useMutation } from "@tanstack/react-query";

export const useCreatePostMutation = () => {
  const createPostMutation = useMutation((postData) =>
    fetch("https://dall-e-hk0i.onrender.com/api/v1/post", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    }).then((response) => response.json())
  );

  return createPostMutation;
};
