import { useEffect, useState } from "react";

export default function usePosts(callBack) {
  const [posts, setPosts] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  
  useEffect(() => {
    callBack()
      .then(posts => {
        setIsLoading(false)

        if (!posts) return
        setPosts(posts)
      })
  }, [])

  return {posts, isLoading}
}