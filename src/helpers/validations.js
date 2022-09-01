const validationsObj = {
  name: (name) => ValidateName(name),
  email: (email) => ValidateEmail(email),
  message: (message) => ValidateMessage(message)
}

export function ValidateName(name) {
  const regExp = /<script>|<\/script>|<|>|\\|\/|\||\$|\&|\`|\^|\[|\]|\{|\}|\d/

  return !regExp.test(name) && name.length > 2
}

export function ValidateEmail(email) {
  const regExp = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/

  return regExp.test(email)
}

export function ValidateMessage(message) {
  const regExp = /<script>|<\/script>|<|>|\\|\/|\||\$|\&|\`|\^|\[|\]|\{|\}/

  return !regExp.test(message) && message.length > 2
}

export default function ValidateData(obj) {
  const errors = []
  let isValid = true

  Object.entries(obj).forEach( ([key, value]) => {
    if (!validationsObj[key](value)) {
      errors.push(key)
      isValid = false
    }
  })

  return {isValid, errors}
}