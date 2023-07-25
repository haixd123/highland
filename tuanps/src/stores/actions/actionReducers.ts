import axios from "axios";
import { AppDispatch } from ".."

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
  getProduct
}