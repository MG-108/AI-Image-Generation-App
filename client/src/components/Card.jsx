import { download } from "../assets";
import { downloadImage } from "../utils";

const Card = ({ _id, name, prompt, photo }) => {
  return (
    <div className="card group relative rounded-xl shadow-card hover:shadow-cardhover">
      {/* AI IMAGE SHARED */}
      <img
        src={photo}
        alt={prompt}
        className="h-auto w-full rounded-xl object-cover"
      />
      <div
        className="absolute bottom-0 left-0 right-0 m-2 hidden max-h-[94.5%] flex-col 
        rounded-md bg-[#13101f] p-4 group-hover:flex "
      >
        {/* IMAGE PROMPT on hover */}
        <p className="prompt overflow-y-auto text-sm text-white">{prompt}</p>

        {/*USER AVATAR , NAME  */}
        <div className="mt-5 flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <div
              className="flex h-7 w-7 items-center justify-center rounded-full
               bg-green-700 object-cover text-sm font-bold text-white"
            >
              {name[0]}
            </div>
            <p className="text-sm text-white">{name}</p>
          </div>

          {/* DOWNLOAD btn */}
          <button
            type="button"
            onClick={() => downloadImage(_id, photo)}
            className="border-none bg-transparent outline-none"
          >
            <img
              src={download}
              alt="download"
              className="h-6 w-6 object-contain invert"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
