
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

interface IProduct {
  "ProductId": String;
  "ProductName": String;
  "ProductPrice": String;
  "ProductInfo": String;
  "ProductDetail": String;
  "RatingStar": null;
  "ProductImageName": String;
  "ManufacturerId": 1;
  "CategoryId": 1;
}

const productReducer = (state: { loading: boolean, products: IProduct[]} = {loading: false, products: []}, action: { products: IProduct[], product: IProduct, type: string;}) => {
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
    case 'SAVE_LIST_PRODUCTS': {
      let lstProduct = state.products;
      if (action.product) {
        lstProduct = [...lstProduct, action.product]
      }
      return { 
        ...state,
        isLoading: false, 
        products: lstProduct
      }
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