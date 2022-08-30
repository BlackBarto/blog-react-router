export default function sendMessage(data) {  //
  return fetch("https://formsubmit.co/ajax/contactofmyprojects@gmail.com", {
    method: "POST",
    headers: { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    },
    body: JSON.stringify(data)
  })
}
