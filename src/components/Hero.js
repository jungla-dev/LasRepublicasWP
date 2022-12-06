import React, { useState } from "react"


const Hero = () => {
  const [isShown, setIsShown] = useState(false);

  const description = 'Formas de existencia. Cuerpos, flujos, palpitaciones que importan en este gran cuerpo llamado planeta Tierra.'

  const text = 'Salvaje'




  return (
    <div className={isShown ? 'hero animate': 'hero'} >
      <h1 onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}
      >
        Las Repúblicas
        <br></br> de lo <span className="savage"></span>
      </h1>

      {description ? <div className="description">{description}</div> : null}
    </div>
  )
}

export default Hero