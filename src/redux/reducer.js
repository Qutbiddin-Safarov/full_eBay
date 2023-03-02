const initialState ={
  email: ""
}

const wishlistInitialState= {
  likedProducts: []
}
const cartInitialState= {
  addedProducts: []
}

const reducer = (state = initialState, action) => {
  switch(action.type){
    case "CREATE_USER":
      return {email: action.email}
    default:
      return state
  }
}

const wishlistReducer = (state = wishlistInitialState, action) => {
  switch(action.type){
    case "ADD_TO_WISHLIST":
      return {
        likedProducts: [...state.likedProducts, action.product]
      }
    default:
      return state
  }
}
const cartReducer = (state = cartInitialState, action) => {
  switch(action.type){
    case "ADD_TO_CART":
      return {
        addedProducts: [...state.addedProducts, action.product]
      }
    default:
      return state
  }
}

export { reducer, wishlistReducer,cartReducer };