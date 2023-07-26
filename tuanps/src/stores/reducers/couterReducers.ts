
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
export {
  counterReducer,
  productReducer
};