export default function sendMessage(data) {
  return fetch("https://formsubmit.co/ajax/7c2d0b7a45c6a1bb34b3044e339464b9", {
    method: "POST",
    headers: { 
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify(data)
  })
}
