

 const initialState = {
  isLogged: false,
  user: null,
  loading: false,
  error: null,
}


function Reducer(state, action) {
  switch (action.type) {
    case "LOGIN_START":
      return {
        ...state,
        loading: true,
        error: null
      }

    case "LOGIN_SUCCESS":
      return {
        ...state,
        isLogged: true,
        user: action.payload,
        loading: false,
        error: null,
      }

    case "LOGIN_ERROR":
      return {
        ...state,
        loading: false,
        error: action.payload
      }

    case "LOGOUT":
      return {
        ...state,
        isLogged: false,
        user: null,
        loading: false,
        error: null,
      }


      default:
         return state
    }
}

export {initialState, Reducer}