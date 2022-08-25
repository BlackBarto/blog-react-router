const URL = "https://jsonplaceholder.typicode.com/posts"

export default function getPosts() {
  return fetch(URL)
    .then(res => res.ok ? res.json() : Promise.reject())
    .then(json => json)
    .catch(err => {
      console.log(err)
      return []
    })
}