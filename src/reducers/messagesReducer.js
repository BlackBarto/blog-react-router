export const INITIAL_STATE = {
  messages: 0,
  errors: null
}

const createAction = (type, payload = null) => ({type, payload})

export const ACTIONS = {
  INVALID_DATA: (error = []) => {
    return createAction("INVALID_DATA", error)
  },
  SUCESS: () => {
    return createAction("SUCESS")
  },
  ERROR: () => {
    return createAction("ERROR")
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
    case "SUCESS":
      return {
        messages: state.messages + 1,
        errors: null
      }
    case "INVALID_DATA":
      return {
        messages: action.payload.length,
        errors: action.payload
      }
    case "ERROR":
      return {
        ...state,
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