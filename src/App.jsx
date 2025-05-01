import { useEffect } from 'react'
import './App.css'
import axios from 'axios'
import Cards from './components/Cards'

function App() {

  const API="http://13.126.247.210:9137/api/hsd/list/v1?date=2025-04-24"
  const token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2E1YjQwN2I0OTJkZTliYjZmMmM1NmYiLCJpYXQiOjE3NDYwMDE1OTgsImV4cCI6MTc0ODU5MzU5OH0.XZoe1vQSen3ka4XAAj58xWfPjGxS1jlhI19wJDxMFY0"
  
  const CallApi=async()=>{
    try {
      const res=await axios.get(API,{
        headers:{
          Authorization:`${token}`
        }
      })
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(()=>{
    CallApi()
  },[])

  return (
    <>
      <Cards/>
    </>
  )
}

export default App
