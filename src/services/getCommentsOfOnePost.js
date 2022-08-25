const URL = "https://jsonplaceholder.typicode.com/posts"

export default function getCommentsOfOnePost(postId) {
  return fetch(`${URL}/${postId}/comments`)
    .then(res => res.ok ? res.json() : Promise.reject())
    .then(json => json)
    .catch(err => {
      console.log(err)
      return []
    })
}