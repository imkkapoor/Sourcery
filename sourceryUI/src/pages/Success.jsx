import React from 'react'
import { useLocation } from 'react-router-dom'

export default function Success() {
    const location = useLocation()
    console.log(location)
  return (
    <div>Successfull</div>
  )
}
