import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import { useRouter } from "next/router";
import { updateDeliveryDetails } from "@/redux/reducers/DeliveryDetailsReducer";

function Checkout() {
  const router = useRouter();
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
  const shipping = 10;
  const taxes = 2;
  const oldAddress = useSelector((state) => state.deliverDetails);
  const [dialogMessage, setDialogMessage] = useState("");
  const [address, setAddress] = useState({
    name: "",
    doorNo: "",
    street: "",
    city: "",
    state: "",
    pinCode: "",
    country: "",
    paymentMethod: "",
  });
  const [previousUpdate, setPreviousUpdate] = useState(false);
  const [open, setOpen] = React.useState(false);
  function handleChecout() {
    console.log("address", address);
    if (
      address.name !== "" &&
      address.doorNo !== "" &&
      address.street !== "" &&
      address.city !== "" &&
      address.state !== "" &&
      address.pinCode !== "" &&
      address.country !== "" &&
      address.paymentMethod !== ""
    ) {
      if (TotalAmount > 0) {
        setDialogMessage("Your Order is Placed");
      } else {
        setDialogMessage("Add minimum One Item");
      }
    } else {
      setDialogMessage("Please Enter  All Fields ");
    }
    dispatch(updateDeliveryDetails(address));
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
    if (dialogMessage === "Add minimum One Item") {
      router.push("/");
    }
  };
  useEffect(() => {
    if (previousUpdate) {
      setAddress(oldAddress.userDetails);
    }
  }, [previousUpdate]);
  return (
    <>
      <div className="flex bg-red-500 justify-center text-[18px] text-white">
        Place Order Get Your Products
      </div>

      <div className="flex bg-red-500 justify-arround p-10 text-white gap-20">
        <div
          className="flex flex-col space-y-3 w-full"
          style={{ width: "40%" }}
        >
          {!previousUpdate &&
            (oldAddress.userDetails.name !== "" ||
              oldAddress.userDetails.doorNo !== "" ||
              oldAddress.userDetails.street !== "" ||
              oldAddress.userDetails.city !== "" ||
              oldAddress.userDetails.state !== "" ||
              oldAddress.userDetails.pinCode !== "" ||
              oldAddress.userDetails.country !== "" ||
              oldAddress.userDetails.paymentMethod !== "") && (
              <div className="flex gap-2 ">
                <input
                  value={previousUpdate}
                  type={"checkbox"}
                  onClick={(e) => {
                    setPreviousUpdate(e.target.checked);
                  }}
                />
                <label>
                  Do You Need Previous Delivery Details / Entered Details
                </label>
              </div>
            )}
          <h1>Delivery Address</h1>
          <div className="flex justify-between">
            <label>Name</label>
            <input
              className="text-black"
              value={address.name}
              onChange={(e) => {
                setAddress({ ...address, name: e.target.value });
              }}
            />
          </div>

          <div className="flex justify-between">
            <label>Door No</label>
            <input
              className="text-black"
              value={address.doorNo}
              onChange={(e) => {
                setAddress({ ...address, doorNo: e.target.value });
              }}
            />
          </div>
          <div className="flex justify-between">
            <label>Street</label>
            <input
              className="text-black"
              value={address.street}
              onChange={(e) => {
                setAddress({ ...address, street: e.target.value });
              }}
            />
          </div>
          <div className="flex justify-between">
            <label>city</label>
            <input
              className="text-black"
              value={address.city}
              onChange={(e) => {
                setAddress({ ...address, city: e.target.value });
              }}
            />
          </div>
          <div className="flex justify-between">
            <label>Pincode</label>
            <input
              className="text-black"
              value={address.pinCode}
              onChange={(e) => {
                setAddress({ ...address, pinCode: e.target.value });
              }}
            />
          </div>
          <div className="flex justify-between">
            <label>state</label>
            <input
              className="text-black"
              value={address.state}
              onChange={(e) => {
                setAddress({ ...address, state: e.target.value });
              }}
            />
          </div>
          <div className="flex justify-between">
            <label>country</label>
            <input
              className="text-black"
              value={address.country}
              onChange={(e) => {
                setAddress({ ...address, country: e.target.value });
              }}
            />
          </div>
          <div className="flex gap-6">
            <label>Online Method</label>
            <input
              type="radio"
              name="payment"
              value="online"
              checked={address.paymentMethod === "online"}
              onChange={(e) => {
                setAddress({ ...address, paymentMethod: e.target.value });
              }}
            />
            <label>Cash On Delivery</label>
            <input
              type="radio"
              name="payment"
              value="cashon"
              checked={address.paymentMethod === "cashon"}
              onChange={(e) => {
                setAddress({ ...address, paymentMethod: e.target.value });
              }}
            />
          </div>
        </div>
        <div style={{ width: "30%" }} className="flex flex-col gap-3">
          <div className="font-bold font-15 flex justify-start">
            Product List
          </div>
          <div></div>
          <div className="h-px w-full border-b border-gray-200 mt-1"></div>
          <div className="flex flex-col gap-3 ">
            <div className="flex items-center justify-between">
              <span className="flex gap-x-1 items-center">Subtotal</span>
              <span>${TotalAmount.toFixed(2)}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="flex gap-x-1 items-center">Shipping Charge</span>
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
              <span className="flex gap-x-1 items-center">Total Amount</span>
              <span className="font-bold font-15">
                ${(TotalAmount + shipping + taxes).toFixed(2)}
              </span>
            </div>
            <div className="flex items-center justify-center">
              <button
                className="bg-white text-red-400  w-40 p-2"
                onClick={handleChecout}
              >
                Place Order
              </button>
            </div>
          </div>
        </div>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              {dialogMessage}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <div className="flex justify-center w-full">
              <button
                className="bg-red-400 text-white  w-20 p-2"
                onClick={handleClose}
              >
                Ok
              </button>
            </div>
          </DialogActions>
        </Dialog>
      </div>
    </>
  );
}

export default Checkout;
