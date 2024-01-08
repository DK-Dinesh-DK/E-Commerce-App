import { addCart } from "@/redux/reducers/ProductReducer";
import { useDispatch, useSelector } from "react-redux";

function Card({ item }) {
  const dispatch = useDispatch();
  const cardList = useSelector((state) => {
    return state.cartList;
  });

  const handleClick = (item) => {
    let present = cardList?.cartList?.find(
      (i) => item.id === i.id
    );
    if (!present) {
      dispatch(addCart({ ...item, count: 1 }));
    }
  };

  return (
    <div
      className="bg-white-300  w-60  p-2 flex flex-col items-center   "
      style={{
        borderRadius: "5px",
        height: "350px",
        padding: "5px",
        boxShadow: "0 0 4px 0 rgba(0,0,0,.3)",
      }}
    >
      <label className="font-bold">{item.name}</label>
      <div
        style={{
          backgroundImage: `url(${item.image_url})`,
          minHeight: "230px",
          width: "230px",
          backgroundRepeat: "no-repeat",
          backgroundSize: "90%",
        }}
      ></div>
      <label>${item.price}</label>
      <button
        className="bg-red-400 text-white  w-40 p-2"
        onClick={() => handleClick(item)}
      >
        Add to Cart
      </button>
    </div>
  );
}

export default Card;
