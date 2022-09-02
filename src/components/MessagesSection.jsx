import Message from "./Message"
import MessagesList from "./MessagesList"
import MessagesPlace from "../atoms/MessagesPlace"

export default function MessagesSection({state: {messages, errors}, dispatch, ACTIONS}) {
  const handleClose = () => {
    dispatch(ACTIONS.CLOSE_MESSAGE())
  }

  return (
    <>
    {(!!messages && !errors) && (
    <MessagesPlace>
      <Message title="Sucess" color="green" body="Thanks for send me a message, I will get back to you" handleClose={handleClose}/>
    </MessagesPlace>
    )}
    {!!messages && !!errors && <MessagesList handleClose={handleClose} errors={errors} />}
    </>
  )
}