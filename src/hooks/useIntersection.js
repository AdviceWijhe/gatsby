import { useState, useEffect } from "react"

export default (element, rootMargin) => {
  const [isVisible, setState] = useState(false)

  useEffect(() => {
    let elem = element.current
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setState(entry.isIntersecting)

          observer.unobserve(elem)
        }
      },
      {
        rootMargin,
      }
    )

    elem && observer.observe(elem)

    return () => {
      observer.unobserve(elem)
    }
  }, [])

  return isVisible
}
