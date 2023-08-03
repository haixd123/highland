import axios from "axios";
import { AppDispatch } from ".."
import { postAPI } from "../../api";

const startCountAction = (value: number, isIncre: boolean) => (dispatch: AppDispatch) => {
  // xu ly du lieu dau vao
  // dieu kien (condition)
  // call api 
  if (isIncre) {
    console.log('check action increment');
    return dispatch({
      type: 'increment',
      state: value + 1
    })
  }
  console.log('check action decrement');
  return dispatch({
    type: 'decrement',
    state: value - 1
  })

  // call api
  // check status tra ve cua api
  // su dung dispatch de push vao trong reducer
}

const getProduct = () => async (dispatch: AppDispatch) => {
  dispatch({
    type: 'SHOW_LOADING'
  });
  const response = await axios.get('http://localhost:8888/account/')
  if (response.status) {
    dispatch({
      type: 'SAVE_PRODUCTS',
      products: response.data.data || []
    })
  }

  dispatch({
    type: 'HIDE_LOADING'
  });
}

const getListProduct = () => async (dispatch: AppDispatch) => {
  dispatch({
    type: 'SHOW_LOADING'
  });
  const response = await axios.get('http://localhost:8888/product')
  if (response.status) {
    dispatch({
      type: 'SAVE_PRODUCTS',
      products: response.data.data || []
    })
  } else {
    dispatch({
      type: 'HIDE_LOADING'
    });
  }
}

const createProduct = (body: any) => async (dispatch: AppDispatch) => {
  dispatch({
    type: 'SHOW_LOADING'
  });
  const response = await postAPI({
    path: 'http://localhost:8888/product',
    body
  });
  if (response.status) {
    if (response.data.data === 'SUCCESS') {
      if (response.data)
      dispatch({
        type: 'SAVE_LIST_PRODUCTS',
        product: response.data.data || []
      })      
    }
  }
  dispatch({
    type: 'HIDE_LOADING'
  });
}

const INCREA_COUNT = (value: number) => ({
  type: 'increment',
  value
})

const DECRE_COUNT = (value: number) => ({
  type: 'decrement',
  value
})

// const initState = 0;
// function reducer(state = initState, action:any) {
//   switch (action.type) {
//     case 'increment':
//       return state + action.value;
//     case 'decrement':
//       return state - 1;
//     default: 
//       return state;
//   }
// }

export {
  INCREA_COUNT,
  DECRE_COUNT,
  startCountAction,
  getProduct,
  getListProduct,
  createProduct
}