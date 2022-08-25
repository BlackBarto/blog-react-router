const URL = "https://jsonplaceholder.typicode.com/users"

export default function getPostOfOneUser(userId) {
  return fetch(`${URL}/${userId}/posts`)
    .then(res => res.ok ? res.json() : Promise.reject())
    .then(json => json)
    .catch(err => {
      console.log(err)
      return false
    })
}
