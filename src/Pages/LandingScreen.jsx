import React from 'react'
import { useCricketData } from '../graphql/hooks/useCricket'

const LandingScreen = () => {
    const responseData = useCricketData();
    console.log(responseData)
  return (
  <>
    <h1>Landing Page</h1>
    {JSON.stringify(responseData,null ,4)}
  </>
  )
}

export default LandingScreen