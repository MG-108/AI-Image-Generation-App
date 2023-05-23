import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

import { fetchPosts } from "../services/fetchPosts";
import { Loader, RenderCards, FormField, Error } from "../components";

const Home = () => {
  const [searchText, setSearchText] = useState("");
  const [searchedResults, setSearchedResults] = useState(null);
  const [searchTimeout, setSearchTimeout] = useState(null);
  //https://dall-e-hk0i.onrender.com/api/v1/post

  const { data, isLoading, error } = useQuery({
    queryKey: ["getPosts"],
    queryFn: fetchPosts,
  });

  if (error) {
    return <Error />;
  }

  const handleSearchChange = (e) => {
    clearTimeout(searchTimeout);

    setSearchText(e.target.value);

    setSearchTimeout(
      setTimeout(() => {
        const searchResults = data.filter(
          (item) =>
            item.name.toLowerCase().includes(searchText.toLowerCase()) ||
            item.prompt.toLowerCase().includes(searchText.toLowerCase())
        );

        setSearchedResults(searchResults);
      }, 500)
    );
  };

  return (
    <section className="mx-auto max-w-7xl">
      {/* Home header */}
      <div>
        <h1 className="text-[32px] font-extrabold text-[#222328]">
          The Community Showcase
        </h1>
        <p className="mt-2 max-w-[500px] text-base text-[#666e75]">
          Browse through a collection of imaginative and visually stunning
          images generated by DALL-E AI
        </p>
      </div>

      {isLoading ? (
        <div className="mt-10 flex items-center justify-center md:mt-20">
          <Loader />
        </div>
      ) : (
        <>
          <div className="mt-16">
            <FormField
              labelName="Search posts"
              type="text"
              name="text"
              placehoder="Search posts"
              value={searchText}
              handleChange={handleSearchChange}
            />
          </div>

          {/* LOADING POSTS AND SHOWING DATA*/}
          <div className="mt-10">
            {searchText && (
              <h2 className="mb-3 text-xl font-medium text-[#666e75]">
                Showing Resuls for{" "}
                <span className="text-[#222328]">{searchText}</span>:
              </h2>
            )}
            <div className="grid grid-cols-1 gap-3 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
              {!searchText ? (
                <RenderCards data={data} title="No Posts Yet" />
              ) : (
                <RenderCards
                  data={searchedResults}
                  title="No Search Results Found"
                />
              )}
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default Home;
