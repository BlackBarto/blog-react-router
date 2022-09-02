import { useState } from "react";
import MessagesPlace from "../atoms/MessagesPlace";
import Message from "./Message";

const BODIES_OF_MESSAGES = {
  name: 'The name must don\'t include a "$", "&", "[]", "{}", "<>", or any number and special character',
  email: "The email must be valid",
  message: 'The message must don\'t include a "$", "&", "[]", "{}", "<>", or any number and special character'
}

export default function MessagesList({errors, handleClose}) {
  const [showedMessages, setShowedMessages] = useState({})

  if (!Array.isArray(errors)) {
    return (
      <MessagesPlace>
        <Message title="Failed" body="Fail to send the message, please, try again in a while" color="red" handleClose={handleClose} />
      </MessagesPlace>
    )
  }

  const handleOneClose = (id) => {
    setShowedMessages(prev => {
      return {...prev, [id]: true}
    })
    handleClose()
  }

  return (
    <MessagesPlace>
      {errors.filter( (e) => !showedMessages[e]).map( (element, i) => (
        <Message duration={30000 + (800 * i)} delay={600 * i} handleClose={handleOneClose} id={element} title="Invalid Data" key={element + "-key"} body={BODIES_OF_MESSAGES[element]} color="yellow"/>
      ))}
    </MessagesPlace>
  )
}