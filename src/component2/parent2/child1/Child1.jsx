import React from 'react'
import Child2 from '../child2/Child2'
const Child1 = ({parent2Handler}) => {
  return (
    <div>
        <Child2  parent2Handler={parent2Handler}/>
    </div>
  )
}

export default Child1