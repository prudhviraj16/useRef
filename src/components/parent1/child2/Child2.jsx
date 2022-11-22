import React from 'react'

const Child2 = ({data}) => {

  console.log(data);
  return (
    <>
        {data && "Child2"}
    </>
  )
}

export default Child2