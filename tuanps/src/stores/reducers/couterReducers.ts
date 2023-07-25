const initialState = { value: 0 }

function counterReducer(state:any = initialState, action: any) {
  switch (action.type) {
    case 'increment': {
      return { ...state, value: state + action.value }
    }
    case 'decrement':
      return { ...state, value: state - action.value }
    default:
      return state
  }
}
const productState = { products: [], isLoading: false };

const productReducer = (state = productState, action: any) => {
  switch (action.type) {
    case 'SHOW_LOADING': {
      return { ...state, isLoading: true }
    }
    case 'HIDE_LOADING': {
      return { ...state, isLoading: false }
    }
    case 'SAVE_PRODUCTS': {
      return { ...state, isLoading: false, products: action.products || [] }
    }
    default:
      return state;
  }
}


const initState = 0;
function reducer(state = initState, action:any) {
  switch (action.type) {
    case 'increment':
      return state ? state + action.value : state;
    case 'decrement':
      return state - action.value;
    default: 
      return state;
  
  }
}
export {
  reducer,
  counterReducer,
  productReducer
};