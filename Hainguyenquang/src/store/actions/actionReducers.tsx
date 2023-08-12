import axios from "axios";
import { AppDispatch } from "..";
import { postAPI, putAPI, deleteAPI } from "../../api";

const getProduct = () => async (dispatch: AppDispatch) => {
  dispatch({
    type: "SHOW_LOADING",
  });
  const response = await axios.get("http://localhost:8888/account/");
  if (response.status) {
    dispatch({
      type: "SAVE_PRODUCTS",
      products: response.data || [],
    });
  }

  dispatch({
    type: "HIDE_LOADING",
  });
};

const getAPI = (record: string) => async (dispatch: AppDispatch) => {
  dispatch({
    type: "SHOW_LOADING",
  });
  const response = await axios.get(`http://localhost:3000/${record}`);
  // await axios.get('http://localhost:8888/getPhoto/uploadfile');
  if (response.status) {
    dispatch({
      type: "SAVE_PRODUCTS",
      products: response.data || [],
    });
  } else {
    dispatch({
      type: "HIDE_LOADING",
    });
  }
};

const postAPI1 =
  (record: string, body: any) => async (dispatch: AppDispatch) => {
    dispatch({
      type: "SHOW_LOADING",
    });

    const response = await postAPI({
      path: `http://localhost:3000/${record}`,
      body,
    });
    console.log('body.name: ', body);

    // await postAPI({
    //   path: 'http://localhost:8888/getPhoto/uploadfile',
    //   body: body.srcImage,
    // });

    dispatch({
      type: "SAVE_LIST_PRODUCTS",
      product: response.data || [],
    });

    dispatch({
      type: "HIDE_LOADING",
    });
  };

const putAPI1 =
  (record: string, id: number, body: any) => async (dispatch: AppDispatch) => {
    dispatch({
      type: "SHOW_LOADING",
    });

    const response = await putAPI({
      path: `http://localhost:3000/${record}/${id}`,
      body,
    });

    dispatch({
      type: "EDIT",
      product: response.data || [],
    });

    dispatch({
      type: "HIDE_LOADING",
    });
  };

const deleteAPI1 = (record: string, id: any) => async (dispatch: AppDispatch) => {
  dispatch({
    type: "SHOW_LOADING",
  });

  await deleteAPI({
    path: `http://localhost:3000/${record}/${id}`,
  });

  dispatch({
    type: "DELETE_LIST",
    product: id || [],
  });

  dispatch({
    type: "HIDE_LOADING",
  });
};

const INCREA_CART = (value: number) => ({
  type: "increment",
  value,
});

const DECRE_CART = (value: number) => ({
  type: "decrement",
  value,
});

const REMOVE_CART = (value: number) => ({
  type: "remove",
  value,
});

const addToCart = (value: any) => ({
  type: "choose",
  value,
});

export {
  deleteAPI1,
  REMOVE_CART,
  putAPI1,
  getAPI,
  postAPI1,
  addToCart,
  INCREA_CART,
  DECRE_CART,
  getProduct,
};
