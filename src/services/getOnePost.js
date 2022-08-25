const URL = "https://jsonplaceholder.typicode.com/posts"

export default function getPosts(postId) {
  return fetch(`${URL}/${postId}`)
    .then(res => res.ok ? res.json() : Promise.reject())
    .then(json => json)
    .catch(err => {
      console.log(err)
      return false
    })
}