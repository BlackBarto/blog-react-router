import { useState, useEffect } from "react";

export default function useObserver({ match, rootMargin, onlyOnShow, handleVisibility, refElement, one = false }) {
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
      refElement = null
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

    if (one) observer.observe(refElement?.current)
    return () => observer.disconnect()
  }, [match, elements, refElement?.current])

  return { setElements, observer, elements }
}
