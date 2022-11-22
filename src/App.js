import React,{useState,useEffect,useRef} from 'react';
import './App.css'
import Child1 from './component2/parent2/child1/Child1';
import Child11 from '././components/parent1/child1/Child11.jsx'
const App = () => {
  const parent2 = useRef(false)
  const [data,setData] = useState(null)
  const parent2Handler = (value1) => {
      parent2.current = value1
      setData(parent2.current)
  }


  return (
    <>
      <Child1  parent2Handler={parent2Handler}/>
      <Child11 data={data}/>
    </>

  )
}

export default App