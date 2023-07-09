const initialState = { value: 0 }

function counterReducer(state = initialState, action: any) {
  switch (action.type) {
    case 'increment': {
      return { ...state, value: action.state }
    }
    case 'decrement':
      return { ...state, value: action.state }
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
export {
  counterReducer,
  productReducer
};