import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { preview } from "../assets";
import { getRandomPrompt } from "../utils";
import { FormField, Loader } from "../components";
import { useGenerateImageMutation, useCreatePostMutation } from "../hooks";

const CreatePost = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    prompt: "",
    photo: "",
  });
  const [generatingImg, setGeneratingImg] = useState(false);
  const generateImageMutation = useGenerateImageMutation();
  const createPostMutation = useCreatePostMutation();

  const handleGenerateImage = async () => {
    if (form.prompt) {
      try {
        setGeneratingImg(true);
        const data = await generateImageMutation.mutateAsync(form.prompt);
        setForm({ ...form, photo: `data:image/jpeg;base64,${data.photo}` });
      } catch (err) {
        alert(err);
      } finally {
        setGeneratingImg(false);
      }
    } else {
      alert("Please provide a proper prompt");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (form.prompt && form.photo) {
      try {
        await createPostMutation.mutateAsync(form);
        navigate("/");
      } catch (error) {
        alert(error);
      }
    } else {
      alert("Please enter a prompt and generate an image");
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSurpriseMe = () => {
    const randomPrompt = getRandomPrompt(form.prompt);
    setForm({ ...form, prompt: randomPrompt });
  };

  return (
    <section className="mx-auto max-w-7xl">
      {/* CreatePost header */}
      <div>
        <h1 className="text-[32px] font-extrabold text-[#222328]">Create</h1>
        <p className="mt-2 max-w-[500px] text-base text-[#666e75]">
          Create imaginative and visually stunning images through DALL-E AI and
          share them with the community
        </p>
      </div>

      {/* FORMS */}
      <form className="mt-16 max-w-3xl" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-5">
          {/* name */}
          <FormField
            labelName="Your Name"
            type="text"
            name="name"
            placeholder="John Doe"
            value={form.name}
            handleChange={handleChange}
          />
          {/* prompt to generate the image */}
          <FormField
            labelName="Prompt"
            type="text"
            name="prompt"
            placeholder="A Dinosaur exploring Cape Town, photography"
            value={form.prompt}
            handleChange={handleChange}
            isSurpriseMe
            handleSurpriseMe={handleSurpriseMe}
          />

          {/* AI photo or a preview photo */}
          <div
            className="relative flex h-64 w-64 items-center justify-center rounded-lg
           border border-gray-300 bg-gray-50 p-3 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
          >
            {form.photo ? (
              <img
                src={form.photo}
                alt={form.prompt}
                className="h-full w-full object-contain"
              />
            ) : (
              <img
                src={preview}
                alt="preview"
                className="h-3/4 w-3/4 object-contain opacity-40"
              />
            )}
            {/* Loader for Image */}
            {generatingImg && (
              <div className="absolute inset-0 z-0 flex items-center justify-center rounded-lg bg-[rgba(0,0,0,0.5)]">
                <Loader />
              </div>
            )}
          </div>
        </div>

        {/* Generate Image Button */}
        <div className="mt-5 flex gap-5 ">
          <button
            type="button"
            onClick={handleGenerateImage}
            className="w-full rounded-md bg-green-700 px-5 py-2.5 text-center text-sm font-medium text-white sm:w-auto"
            disabled={generatingImg || createPostMutation.isLoading}
          >
            {generatingImg ? "Generating..." : "Generate "}
          </button>
        </div>

        {/* Submit Button */}
        <div className="mt-10">
          <p className="mt-2 text-[14px] text-[#666e75] ">
            Once you have created the image you want, you can share it with
            others in the community{" "}
          </p>
          <button
            type="submit"
            className="mt-3 w-full rounded-md bg-[#6469ff] px-5 py-2.5 text-center text-sm font-medium text-white sm:w-auto "
            disabled={createPostMutation.isLoading}
          >
            {createPostMutation.isLoading
              ? "Sharing..."
              : "Share with the community"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default CreatePost;
