import React, { useState, useEffect } from 'react'
import defaultSlides from './defaultSlides'

const slides = defaultSlides;

const Slider = ({ slides }) => {
  const [curr, setCurr] = React.useState(0);

  if (!Array.isArray(defaultSlides) || defaultSlides.length <= 0) {
    return null;
  }

  console.log(curr);
  const goToNext = () => {
    const { length } = defaultSlides;
    setCurr(curr === length - 1 ? 0 : curr + 1);
  }

  React.useEffect(() => {
    setTimeout(goToNext, 2000)
  })

  console.log(defaultSlides)

  return (
    <>
      <h1>This is a slider</h1>
      <div className="slider">
        
        {defaultSlides.map((s, i) => (
          <div className={i === curr ? "slider-slide active" : "slider-slide"} key={i}>
            <h1>{s.title}</h1>
            <h2>{s.subtitle}</h2>
            <img src={s.image}/>
          </div>
        ))}
      </div>
    </>
  )
}

export default Slider;