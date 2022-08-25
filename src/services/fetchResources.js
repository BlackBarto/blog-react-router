export default function getPosts(URL) {
  return fetch(URL)
    .then(res => res.ok ? res.json() : Promise.reject())
    .then(json => json)
    .catch(err => {
      console.log(err)
      return []
    })
}