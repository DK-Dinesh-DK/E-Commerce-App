import Link from "next/link";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { DataGrid } from "@mui/x-data-grid";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

import { addItem, removeItem } from "@/redux/reducers/ProductReducer";

function Cart() {
  const dispatch = useDispatch();
  const cardList = useSelector((state) => {
    return state.cartList;
  });
  const TotalAmount = cardList?.cartList?.reduce((acc, item) => {
    return acc + item.count * item.price;
  }, 0);
  const TotalItem = cardList?.cartList?.reduce((acc, item) => {
    return acc + item.count;
  }, 0);
  const shipping = 0;
  const taxes = 0;

  const columns = [
    {
      headerName: "Item",
      field: "image_url",
      width: 130,
      renderCell: (item) => {
        console.log("Item", item);
        return (
          <div
            style={{
              backgroundImage: `url(${item.row.image_url})`,
              minHeight: "60px",
              width: "60px",
              backgroundRepeat: "no-repeat",
              backgroundSize: "80%",
            }}
          ></div>
        );
      },
    },
    {
      headerName: " ",
      field: "name",
      width: 130,
    },
    {
      headerName: "Quantity",
      field: "count",
      renderCell: (item) => {
        return (
          <div
            style={{
              fontSize: "16px",
              display: "flex",
              columnGap: "5px",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span
              className="cursor-pointer"
              onClick={() => {
                dispatch(removeItem(item.row));
              }}
            >
              <RemoveIcon style={{ width: "18px", height: "18px" }} />
            </span>
            <span>{item.row.count}</span>
            <span
              className="cursor-pointer"
              onClick={() => {
                dispatch(addItem(item.row));
              }}
            >
              <AddIcon style={{ width: "18px", height: "18px" }} />
            </span>
          </div>
        );
      },
    },
    {
      headerName: "Total Amount",
      field: "total",
      valueGetter: (props) => (props.row.price * props.row.count).toFixed(2),
    },
  ];

  return (
    <>
      {cardList.cartList.length === 0 ? (
        <div className="text-bold bg-red-300 text-white flex justify-center h-full">
          <span> There is No Cart Added Please Go and add the carts </span>
          <Link href={"/"} className="text-blue-500 underline ml-3">
            Clcik here
          </Link>
        </div>
      ) : (
        <div className="flex flex-col gap-5">
          <div className="font-bold text-[18px] p-6">Your Cart List</div>
          <div className="flex justify-between p-6">
            <div style={{ width: "65%", height: "60vh" }}>
              <DataGrid
                rows={cardList?.cartList}
                columns={columns}
                hideFooter={true}
              />
            </div>
            <div style={{ width: "30%" }} className="flex flex-col gap-3">
              <div className="font-bold font-15 flex justify-start">
                Summarry
              </div>
              <div className="h-px w-full border-b border-gray-200 mt-1"></div>
              <div className="flex flex-col gap-3 ">
                <div className="flex items-center justify-between">
                  <span className="flex gap-x-1 items-center">Subtotal</span>
                  <span>${TotalAmount.toFixed(2)}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="flex gap-x-1 items-center">
                    SubtDShippingotal
                  </span>
                  <span>${shipping.toFixed(2)}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="flex gap-x-1 items-center">Taxes</span>
                  <span>${taxes.toFixed(2)}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="flex gap-x-1 items-center">Total Items</span>
                  <span>{TotalItem}-items</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="flex gap-x-1 items-center">
                    Total Amount
                  </span>
                  <span className="font-bold font-15">
                    ${(TotalAmount + shipping + taxes).toFixed(2)}
                  </span>
                </div>
                <div className="flex items-center justify-center">
                  <button className="bg-red-400 text-white  w-40 p-2">
                    Check Out
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Cart;
