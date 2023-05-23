import { Card } from "../components";

const RenderCards = ({ data, title }) => {
  if (data?.length > 0) {
    return data.map((post) => <Card key={post._id} {...post} />);
  }

  return (
    <h2 className="mt-5 text-xl font-bold uppercase text-[#6469ff]">{title}</h2>
  );
};
export default RenderCards;
