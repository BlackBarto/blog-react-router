import { useReducer, useState } from "react";
import ValidateData from "../helpers/validations";
import { ACTIONS } from "../reducers/messagesReducer";

export default function useForm(callback, dispatch) {
  //const [state, dispatch] = useReducer(reducer, INITIAL_STATE)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = e => {
    e.preventDefault()

    const {target} = e
    const data = Object.fromEntries(new FormData(target))
    const {isValid, errors} = ValidateData(data)

    if (!isLoading) setIsLoading(false)

    if(!isValid) {
      return dispatch(ACTIONS.INVALID_DATA(errors))
    }

    target.reset()
    setIsLoading(true)
    
    callback(data)
      .then(() => {
        dispatch(ACTIONS.SUCESS())
        setIsLoading(false)
      })
      .catch(() => {
        dispatch(ACTIONS.ERROR())
        setIsLoading(false)
      });
  }

  return {handleSubmit, isLoading}
}