export const INITIAL_STATE = {
  messages: 0,
  isLoading: false,
  errors: null
}

const createAction = (type, payload = null) => ({type, payload})

export const ACTIONS = {
  FETCH_DATA: () => {
    return createAction("FETCH_DATA")
  },
  INVALID_DATA: (error = []) => {
    return createAction("INVALID_DATA", error)
  },
  ERROR_ON_FETCH: (error) => {
    return createAction("ERROR_ON_FETCH", Array.isArray(error) ? error : [error])
  },
  SUCCES_FETCH: () => {
    return createAction("SUCCES_FETCH")
  },
  CLOSE_MESSAGE: () => {
    return createAction("CLOSE_MESSAGE")
  },
  NORMALIZE_DATA: () => {
    return createAction("NORMALIZE_DATA")
  }
}

export function reducer(state, action) {
  switch (action.type) {
    case "NORMALIZE_DATA":
      return {
        messages: 0,
        isLoading: false,
        errors: null
      }
    case "FETCH_DATA":
      return {
        messages: 0,
        isLoading: true, 
        errors: null
      };
    case "INVALID_DATA":
      return {
        messages: state.messages + action.payload.length,
        isLoading: false, 
        errors: action.payload
      };
    case "ERROR_ON_FETCH":
      return {
        isLoading: false,
        messages: state.messages + 1,
        errors: "ERROR_ON_FETCH"
      };
    case "SUCCES_FETCH":
      return {
        isLoading: false,
        errors: null,
        messages: state.messages + 1
      };
    case "CLOSE_MESSAGE":
      if (state.messages === 0) return state
      
      const copyState = state.messages === 1 ? {...state, errors: null} : {...state}

      return {
        ...copyState,
        messages: state.messages - 1
      };
    default:
      return state
  }
}