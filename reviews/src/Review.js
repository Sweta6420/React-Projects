import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteLeft } from "react-icons/fa";

const Review = () => {
  const [index,setIndex] = useState(0)
  const {name,job,image,text} = people[index]

  const checknum = (num) => {
    if (num>people.length-1) {
      return 0
    }
    if (num<0) {
      return people.length-1
    }
    return num
  }
  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index+1
      return checknum(newIndex)
    })
  }
  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1
      return checknum(newIndex)
    })
  }

  const randomPerson = () => {
    let randnum = Math.floor(Math.random()*people.length) 
    if (randnum===index) randnum=index+1
    setIndex(checknum(randnum))
  }
  return (
    <article className='review'>
      <div className='img-container'>
        <img src={image} alt={name} className='person-img' />
        <span className='quote-icon'>
          <FaQuoteLeft />
        </span>
      </div>
      <h4 className='author'>{name}</h4>
      <p className='job'>{job}</p>
      <p className='info'>{text}</p>
      <div classname='button-container'>
        <button className='prev-btn' onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        <button className='next-btn' onClick={nextPerson}>
          <FaChevronRight />
        </button>
        </div>
        <button className='random-btn' onClick={randomPerson}>
          Suprise me
        </button>
    </article>
  )
};

export default Review;
