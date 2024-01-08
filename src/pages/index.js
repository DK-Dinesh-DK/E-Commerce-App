import Card from "@/components/card";
import List from "../utils/SampleData.json";
export default function Home() {
  const cardList = List.products;
  console.log("CardLsit", cardList);
  return (
    <div className="w-full h-100 flex  ">
      <div className=" flex gap-2 m-6 inline-block overflow-x-auto p-2">
        {cardList[0].items.map((item) => {
          return <Card item={item} key={item.name} />;
        })}
      </div>
    </div>
  );
}
