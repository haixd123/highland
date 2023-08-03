import axios from "axios";
import { AppDispatch } from "..";
import { postAPI, putAPI, deleteAPI } from "../../api";

const startCountAction =
  (value: number, isIncre: boolean) => (dispatch: AppDispatch) => {
    // xu ly du lieu dau vao
    // dieu kien (condition)
    // call api
    // const dispatch = useDispatch()

    if (isIncre) {
      console.log("check action increment");
      return dispatch({
        type: "increment",
        state: value + 1,
      });
    }
    console.log("check action decrement");
    return dispatch({
      type: "decrement",
      state: value - 1,
    });

    // call api
    // check status tra ve cua api
    // su dung dispatch de push vao trong reducer
  };

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
      type: "SAVE_LIST_PRODUCTS1",
      product: response.data || [],
    });

    dispatch({
      type: "HIDE_LOADING",
    });
  };

const deleteAPI1 =
  (record: string, id: any) => async (dispatch: AppDispatch) => {
    dispatch({
      type: "SHOW_LOADING",
    });
    console.log("record: ", record);

    await deleteAPI({
      path: `http://localhost:3000/${record}/${id}`,
    });

    dispatch({
      type: "HIDE_LOADING",
    });
  };

const INCREA_COUNT = (value: number) => ({
  type: "increment",
  value,
});

const DECRE_COUNT = (value: number) => ({
  type: "decrement",
  value,
});

const addToCart = (value: any) => ({
  type: "choose",
  value,
});

export {
  deleteAPI1,
  putAPI1,
  getAPI,
  postAPI1,
  addToCart,
  INCREA_COUNT,
  DECRE_COUNT,
  startCountAction,
  getProduct,
};
