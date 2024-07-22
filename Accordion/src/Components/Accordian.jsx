import React, { useState } from 'react'
import { FaPlus, FaMinus } from "react-icons/fa";
import './Accordian.css'

const Accordian = ({item}) => {
    const [showDetails, setshowDetails] = useState(false);

    const toggleDetails = ()=>{
        setshowDetails(!showDetails);
    }
  return (
    <div className="accordion-container">
        <div className="main-menu">
            <p>{item.question}</p>
            <div className={`accordion-btn ${showDetails && "rotate"}`} onClick={toggleDetails}>
          {showDetails ? <FaMinus/> : <FaPlus />}
            </div>
        </div>
        {showDetails &&
        <div className='collapsable-menu'>
            <p>{item.answer}</p>
        </div>
        }
    </div>
  )
}

export default Accordian