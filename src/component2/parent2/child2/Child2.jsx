import React,{useState} from 'react'
import './child.css'
const Child2 = ({parent2Handler}) => {
    const [child2Entered,setchild2Entered] = useState(false)

  return (
    <div className='container' onMouseEnter={()=>parent2Handler(true)} onMouseLeave={()=>parent2Handler(false)}> </div>
  )
}

export default Child2