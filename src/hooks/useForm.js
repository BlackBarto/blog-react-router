import { useState } from "react";
import ValidateData from "../helpers/validations";

export default function useForm(callback) {
  const [showMessage, setShowMessage] = useState(false)
  const [errors, setErrors] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const handleClose = () => {
    setShowMessage(false)
  }

  const handleSubmit = e => {
    e.preventDefault()
    const {target} = e
    const data = Object.fromEntries(new FormData(target))
    const {isValid, errors} = ValidateData(data)
    let errorsOnFetch = false

    if(!isValid) {
      return setErrors(errors)
    }

    if (showMessage) setShowMessage(false)
    target.reset()
    setIsLoading(true)
    
    callback(data)
      .then(() => {
        setShowMessage(true)
      })
      .catch(error => {
        setErrors([error])
      })
      .finally(() => setIsLoading(false));
    
    return errorsOnFetch
  }

  return {handleSubmit, isLoading, showMessage, handleClose, errors}
}