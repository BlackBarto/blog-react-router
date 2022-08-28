import { useState, useEffect } from "react";

export default function useObserver({ match, rootMargin, onlyOnShow, handleVisibility }) {
  const [elements, setElements] = useState([])
  let observer;

  const handleChange = (entries, observer) => {
    entries.forEach(({ isIntersecting, target }) => {
      if ((isIntersecting || !onlyOnShow) && match) {
        handleVisibility({ target, finaly: false, observer, isIntersecting })
      }
    })
  }

  useEffect(() => {
    if (!match) {
      handleVisibility({ finaly: true })
      return
    }

    observer = new IntersectionObserver((entries, observer) => {
      handleChange(entries, observer)
    }, {
      rootMargin
    })

    if (elements.length) {
      elements.forEach(element => observer.observe(element))
    }

    return () => observer.disconnect()
  }, [match, elements])

  return { setElements, observer, elements }
}
