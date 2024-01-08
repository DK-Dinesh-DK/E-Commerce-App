// import { CartList } from "@/redux/reducers/ProductReducer";
import { Badge } from "@material-ui/core";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

export default function Header() {
  const router = useRouter();

  const cardList = useSelector((state) => {
    return state.cartList;
  });

  return (
    <div className="flex justify-center w-full bg-red-400 text-white">
      <div className="flex  w-full p-3 items-center">
        <div
          className="flex justify-center w-screen text-center"
          onClick={() => {
            router.push("/");
          }}
        >
          Welcome To My E-Commerce Store
        </div>
        <div className="w-20  m-2 pl-2 flex justify-start">
          <Badge
            badgeContent={cardList?.cartList?.length}
            color="primary"
            className="cursor-pointer"
            onClick={() => {
              router.push("/cart");
            }}
          >
            <ShoppingCartIcon style={{ height: "30px", width: "30px" }} />
          </Badge>
        </div>
      </div>
    </div>
  );
}
