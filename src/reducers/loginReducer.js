

const initialState = {
  isLoading: false,
  isAuth: false,
  user: null,
  error: null,
}


function Reducer(state, action){
 switch(action.type){
  case "LOGIN_SUCCESS":
    return {
      ...state,
      isLoading: false,
      user: action.payload,
      isAuth: true,
      error: null
    }
  case "LOGIN_ERROR":
    return {
      ...state,
      isLoading: false,
      isAuth: false,
      user: null,
      error: action.payload
    }
  case "LOGIN_LOADING":
    return {
       ...state,
       isLoading: action.payload,
    }

 }

}

export {Reducer, initialState};