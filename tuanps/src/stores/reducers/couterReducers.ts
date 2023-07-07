const initialState = { value: 0 }

function counterReducer(state = initialState, action: any) {
  console.log('action', action);
  
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
export {
  counterReducer
};