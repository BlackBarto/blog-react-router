import { useReducer } from "react";
import ValidateData from "../helpers/validations";
import { reducer, INITIAL_STATE, ACTIONS } from "../reducers/formReducer";

export default function useForm(callback) {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE)

  const handleClose = () => {
    dispatch(ACTIONS.CLOSE_MESSAGE())
  }

  const handleSubmit = e => {
    e.preventDefault()

    const {target} = e
    const data = Object.fromEntries(new FormData(target))
    const {isValid, errors} = ValidateData(data)

    dispatch(ACTIONS.NORMALIZE_DATA())
    
    if(!isValid) {
      return dispatch(ACTIONS.INVALID_DATA(errors))
    }
    
    target.reset()
    dispatch(ACTIONS.FETCH_DATA())
    
    callback(data)
      .then(() => {
        dispatch(ACTIONS.SUCCES_FETCH())
      })
      .catch(error => {
        dispatch(ACTIONS.ERROR_ON_FETCH(error))
      });
  }

  return {handleSubmit, handleClose, state}
}