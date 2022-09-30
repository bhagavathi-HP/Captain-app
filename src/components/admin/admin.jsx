import React from "react";
import { useEffect, useState } from "react";
import CheckTable from "../../components/admin/checktable.jsx";
import { useForm } from "react-hook-form";

const AdminBox = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
  } = useForm({ mode: "onSubmit" });
  const [inde, setInde] = useState(-1);
  const initarray = {
    type: "",
    dish: "",
    quantity: "",
    price: "",
  };
  const [myobj, setMyobj] = useState(initarray);

  const [array, setArray] = useState([]);

  const handleError = (errors) => {
    console.log("handleError errors", errors);
  };
  const onSubmitpush = () => {
    console.log("On submit push inde", inde);
    if (inde != -1) {
      console.log("if condition");
      const newarray = [...array];
      newarray[inde] = myobj;
      setArray(newarray);
      setInde(-1);
    } else {
      setArray([...array, myobj]);
    }
    console.log("myobj", myobj);
    setMyobj(initarray);
  };
  console.log("my obj after click", myobj);
  const updatingObj = (desc, value) => {
    console.log("updating");
    const myfilter = array.filter((item, index) => {
      if (desc === "type" && item.type === value && item.dish === myobj.dish) {
        console.log("type index", index);
        setInde(index);
        return true;
      } else if (
        desc === "dish" &&
        item.dish === value &&
        item.type === myobj.type
      ) {
        console.log("dish index", index + 1);
        setInde(index);
        return true;
      }
    });
    if (myfilter.length > 0) {
      myobj.quantity = myfilter[0].quantity;
      myobj.price = myfilter[0].price;
    }
    console.log("my filtered", myfilter);
    setMyobj({ ...myobj, [desc]: value });
  };
  const options = {
    type: {
      required: "Name is required",
      pattern: {
        value: /^[A-Za-z]+$/i,
        message: "please enter the name in letters",
      },
      maxLength: { value: 20, message: "Please enter the valid mobile number" },
      minLength: { value: 3, message: "Please enter the valid name" },
    },
    dish: { required: "Dish is required" },
    quantity: {
      required: "quantity is required",
      min: 1,
      max: 100,
      message: "please enter value between 1 to 100 ",
    },
    price: { required: "price is required" },
  };
  const handleRegistration = (data) => {
    onSubmitpush();
    console.log("data", data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(handleRegistration, handleError)}>
        <div>
          <label>type : </label>
          <input
            className={`${errors.type && "invalid"}`}
            type="text"
            name="type"
            value={myobj.type}
            {...register("type", options.type)}
            onChange={(e) => updatingObj("type", e.target.value)}
            onKeyUp={() => {
              trigger("type");
            }}
          />
          {errors?.type && errors.type.message}
        </div>
        <br />
        <br />
        <div>
          <label className="dish">dish : </label>
          <input
            className={`${errors.dish && "invalid"}`}
            type="text"
            name="dish"
            value={myobj.dish}
            {...register("dish", options.dish)}
            onChange={(e) => updatingObj("dish", e.target.value)}
            onKeyUp={() => {
              trigger("dish");
            }}
          />
          {errors?.dish && errors.dish.message}
        </div>

        <br />
        <br />
        <div>
          <label className="quantity">quantity : </label>
          <input
            className={`${errors.quantity && "invalid"}`}
            type="number"
            name="quantity"
            value={myobj.quantity}
            {...register("quantity", options.quantity)}
            onChange={(e) => updatingObj("quantity", e.target.value)}
            onKeyUp={() => {
              trigger("quantity");
            }}
          />
          {errors?.quantity && errors.quantity.message}
        </div>

        <br />
        <br />
        <div>
          <label className="price">price : </label>
          <input
            className={`${errors.price && "invalid"}`}
            type="number"
            name="price"
            value={myobj.price}
            {...register("price", options.price)}
            onChange={(e) => updatingObj("price", e.target.value)}
            onKeyUp={() => {
              trigger("price");
            }}
          />
          {errors?.price && errors.price.message}
        </div>
        <br />
        <br />
        <button type="submit">Submit</button>
        <CheckTable prop={array} />
      </form>
    </div>
  );
};

export default AdminBox;
