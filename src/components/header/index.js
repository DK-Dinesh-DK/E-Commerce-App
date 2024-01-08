import { Badge } from "@material-ui/core";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
export default function Header() {
  return (
    <div className="flex justify-center w-full bg-red-400 text-white">
      <div className="flex  w-full p-3 items-center">
        <div className="flex justify-center w-screen text-center">
          Welcome To My E-Commerce Store
        </div>
        <div className="w-20  m-2 pl-2 flex justify-start">
          <Badge badgeContent={4} color="primary" className="cursor-pointer">
            <ShoppingCartIcon style={{ height: "30px", width: "30px" }} />
          </Badge>
        </div>
      </div>
    </div>
  );
}
