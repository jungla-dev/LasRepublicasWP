import React, { useState, useEffect } from "react"
import classNames from "classnames"
import { isMobile } from "react-device-detect"


// greate tutorial https://dev.to/andrewchmr/awesome-animated-cursor-with-react-hooks-5ec3

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [hidden, setHidden] = useState(false)
  const [clicked, setClicked] = useState(false)
  const [linkHovered, setLinkHovered] = useState(false)

  useEffect(() => {
    addEventListeners()
    handleLinkHoverEvents()
    return () => removeEventListeners()
  }, [])

  const handleLinkHoverEvents = () => {
    document.querySelectorAll("a").forEach(el => {
      el.addEventListener("mouseover", () => setLinkHovered(true))
      el.addEventListener("mouseout", () => setLinkHovered(false))
    })
  }
  const addEventListeners = () => {
    document.addEventListener("mousemove", onMouseMove)
    document.addEventListener("mouseenter", onMouseEnter)
    document.addEventListener("mouseleave", onMouseLeave)
    document.addEventListener("mousedown", onMouseDown)
    document.addEventListener("mouseup", onMouseUp)
  }

  const removeEventListeners = () => {
    document.removeEventListener("mousemove", onMouseMove)
    document.removeEventListener("mouseenter", onMouseEnter)
    document.removeEventListener("mouseleave", onMouseLeave)
    document.removeEventListener("mousedown", onMouseDown)
    document.removeEventListener("mouseup", onMouseUp)
  }

  const onMouseMove = e => {
    setPosition({ x: e.clientX, y: e.clientY })
  }

  const onMouseLeave = () => {
    setHidden(true)
  }

  const onMouseEnter = () => {
    setHidden(false)
  }

  const onMouseDown = () => {
    setClicked(true)
  }

  const onMouseUp = () => {
    setClicked(false)
  }

  const cursorClasses = classNames("cursor", {
    "cursor--hidden": hidden,
    "cursor--clicked": clicked,
    "cursor--hover": linkHovered,
  })

  if (isMobile) {
    return <></>
  } else {
    return (
      <div
        className={cursorClasses}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      />
    )
  }
}

export default Cursor