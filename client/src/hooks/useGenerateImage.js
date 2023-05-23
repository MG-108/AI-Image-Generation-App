import { useMutation } from "@tanstack/react-query";

export const useGenerateImageMutation = () => {
  const generateImageMutation = useMutation((prompt) =>
    fetch("https://dall-e-hk0i.onrender.com/api/v1/dalle", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ prompt }),
    }).then((response) => response.json())
  );

  return generateImageMutation;
};
