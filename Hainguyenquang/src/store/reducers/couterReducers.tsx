// import { useEffect, useState } from "react";
// import { api } from "../../API/axios";

const initialState = 0;

const counterReducer = (state: number = initialState, action: any) => {
  // const [data, setData] = useState([]);

  //     const fetchData = async () => {
  //     const response = await api.get("/postsProduct");
  //     setData(response.data);
  //     console.log("response: ", response.data);
  //   };

  // data.filter((data1: any) => {
  //   const addCart = [
  //     {
  //       id: data.id,
  //       count: 2,
  //     },
  //   ];
  // });

  // useEffect(() => {
  //   fetchData();
  // }, []);
  // return (

  // )

  switch (action.type) {
    case "increment": {
      return state + action.value;
      //  state + action.value
    }
    case "decrement":
      return state - action.value;

    default:
      return state;
  }
};
const productState = { products: [], isLoading: false };
const choose_itemState = { cart: [] };

const productReducer = (state = productState, action: any) => {
  switch (action.type) {
    case "SHOW_LOADING": {
      return { ...state, isLoading: true };
    }
    case "HIDE_LOADING": {
      return { ...state, isLoading: false };
    }
    case "SAVE_PRODUCTS": {
      return { ...state, isLoading: false, products: action.products || [] };
    }
    default:
      return state;
  }
};

const choose_itemReducer = (state = choose_itemState, action: any) => {
  switch (action.type) {
    case "choose": {
      return {
        ...state,
        cart: [...state.cart, action.value],
      };
    }
    default:
      return state;
  }
};

const initState = 0;
function reducer(state = initState, action: any) {
  switch (action.type) {
    case "increment":
      return state ? state + action.value : state;
    case "decrement":
      return state - action.value;
    default:
      return state;
  }
}
export { choose_itemReducer, counterReducer, productReducer };
