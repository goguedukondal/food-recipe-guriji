import React from 'react'
import './index.css'
import { useNavigate } from 'react-router-dom';
function Recipe(props) {
    const navigate = useNavigate()

  return (
    <div className='card' onClick={()=>navigate(`detail/${props.id}`)}>
        <img src={props.image} alt='--' />
        <h3>Title : {props.title}</h3>
    </div>
  )
}

export default Recipe;