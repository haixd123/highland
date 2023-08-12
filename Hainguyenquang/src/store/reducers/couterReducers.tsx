// import { useEffect, useState } from "react";

import { useState } from "react";

// import { api } from "../../API/axios";
const productState = { products: [], isLoading: false };
const choose_itemState = { cart: [] };
const cartItemsJSON = localStorage.getItem("cartItems");
const initialState1 = 0;
const initialState = {
  cartItems: cartItemsJSON ? JSON.parse(cartItemsJSON) : [],
  total: 0,
};

const addToCartReducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case "choose": {
      let newList: any = []
      let lstProduct = state.cartItems;
      const itemIndex = lstProduct.filter((item: any) => {
        return item.id === action.value.id;
      });
      if (itemIndex.length) {
        const newList1 = lstProduct.map((record: any) => {
          if (record.id === action.value.id) {
            return {
              ...action.value,
              quantity: record.quantity + 1
            }
          }
          return record
        })
        localStorage.setItem('cartItems', JSON.stringify(newList1))
        console.log('addcart +1: ', newList1);

        return {
          ...state,
          cartItems: newList1
        }
      } else {
        newList = [...lstProduct, action.value]
        localStorage.setItem('cartItems', JSON.stringify(newList))
        console.log('addcart: ', newList);
        return {
          cartItems: newList
        }

      }
    }
    case "decrement": {
      let lstProduct = state.cartItems;
      let newList: any = []

      const removeCartItem = lstProduct.filter((record: any) => {
        return record.id !== action.value.id
      })

      newList = lstProduct.map((record: any) => {
        if (record.id === action.value.id) {
          if (record.quantity > 1) {
            console.log('record.quantity > 1: ', record.quantity);

            return {
              ...action.value,
              quantity: record.quantity - 1
            }
          }
        }
        console.log('record: ', record);
        return record
      })
      lstProduct.filter((record: any) => {
        if ((record.quantity === 1) && (record.id === action.value.id)) {
          newList = removeCartItem
          console.log('record.quantity ==== 1: ', record.quantity);
        }
      })
      localStorage.setItem('cartItems', JSON.stringify(newList))
      return {
        ...state,
        cartItems: newList
      }
    }
    case "increment": {
      let lstProduct = state.cartItems;
      const plusCartItem = lstProduct.map((record: any) => {
        if (record.id === action.value.id) {
          return {
            ...action.value,
            quantity: record.quantity + 1
          }
        }
        return record
      })
      console.log('plusCartItem: ', plusCartItem);

      localStorage.setItem('cartItems', JSON.stringify(plusCartItem))
      return {
        ...state,
        cartItems: plusCartItem
      }
    }
    case "remove": {
      let lstProduct = state.cartItems;

      const removeCartItem = lstProduct.filter((record: any) => {
        return record.id !== action.value.id
      })
      localStorage.setItem('cartItems', JSON.stringify(removeCartItem))
      return {
        ...state,
        cartItems: removeCartItem
      }
    }
    default:
      return state;
  }
};


interface IProduct {
  "id": String;
  "name": String;
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
    case "EDIT": {
      let lstProduct = state.products;
      const newList: any = lstProduct.map((record: any) => {
        if ((record.id === action.product.id)) {
          return action.product
        }
      })

      return {
        ...state,
        products: newList
      }
    }
    case "DELETE_LIST": {
      let lstProduct = state.products;
      const newList = lstProduct.filter((record: any) => {
        return record.id !== action.product
      })
      return {
        ...state,
        products: newList
      }
    }

    default:
      return state;
  }
};

export {
  productListReducer,
  addToCartReducer,
};
