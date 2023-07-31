// import { useEffect, useState } from "react";
// import { api } from "../../API/axios";
const productState = { products: [], isLoading: false };
const choose_itemState = { cart: [] };

const cartItemsJSON = localStorage.getItem("cartItems");
const initialState1 = 0;
const initialState = {
  cartItems: cartItemsJSON ? JSON.parse(cartItemsJSON) : [],
  total: 0,
};

const counterReducer = (state: any = initialState1, action: any) => {
  switch (action.type) {
    case "increment": {
      return state + action.value;
      // localStorage.setItem("cartItems", (state + action.value).cartItems)

      //  state + action.value
    }
    case "decrement":
      return state - action.value;

    default:
      return state;
  }
};

const counterReducerTest = (state: any = initialState, action: any) => {
  switch (action.type) {
    case "increment": {
      //  state + action.value
      break;
    }
    case "decrement":
      return state - action.value;

    // default:
    //   return state;
  }
};

const addToCartReducer = (state: any = choose_itemState, action: any) => {
  switch (action.type) {
    case "choose": {
      return {
        ...state,
        cart: [...state.cart, action.value],
        // localStorage.setItem("cartItems", (state + action.value).cartItems)
      };
    }
    default:
      return state;
  }
};

const addToCartReducerTest = (state: any = initialState, action: any) => {
  switch (action.type) {
    case "choose": {
      const itemIndex = state.cartItems.findIndex((item: any) => {
        return item.id === action.value.id;
      });
      let lstProduct = state.cartItems;
      lstProduct = [...state.cartItems, action.value]

      console.log("lstProduct: ", lstProduct);
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].quantity += 1;
        localStorage.setItem(
          "cartItems",
          JSON.stringify({
            ...state,
            cartItems: [...state.cartItems, action.value],
          })
        );
        return {
          ...state,
          cartItems: [...state.cartItems, action.value],
          // localStorage.setItem("cartItems", (state + action.value).cartItems)
        };
      } else {
        localStorage.setItem(
          "cartItems",
          JSON.stringify({
            ...state,
            cartItems: [...state.cartItems, action.value],
          })
        );
        return {
          ...state,
          cartItems: [...state.cartItems, action.value],
        };
      }
    }

    default:
      return state;
  }
};

// const productReducer = (state = productState, action: any) => {
//   switch (action.type) {
//     case "SHOW_LOADING": {
//       return { ...state, isLoading: true };
//     }
//     case "HIDE_LOADING": {
//       return { ...state, isLoading: false };
//     }
//     case "SAVE_PRODUCTS": {
//       return { ...state, isLoading: false, products: action.products || [] };
//     }
//     default:
//       return state;
//   }
// };

interface IProduct {
  // "ProductId": String;
  // "ProductName": String;
  // "ProductPrice": String;
  // "ProductInfo": String;
  // "ProductDetail": String;
  // "RatingStar": null;
  // "ProductImageName": String;
  // "ManufacturerId": 1;
  // "CategoryId": 1;
}

const productListReducer = (
  state: { loading: boolean; products: IProduct[] } = {
    loading: false,
    products: [],
  },
  action: { products: IProduct[]; product: IProduct; type: string }
) => {
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
    case "SAVE_LIST_PRODUCTS": {
      let lstProduct = state.products;
      if (action.product) {
        lstProduct = [...lstProduct, action.product];
      }
      return {
        ...state,
        isLoading: false,
        products: lstProduct,
      };
    }

    default:
      return state;
  }
};

export {
  productListReducer,
  addToCartReducerTest,
  addToCartReducer,
  counterReducer,
  // productReducer,
  counterReducerTest,
};
