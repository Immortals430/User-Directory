import React from 'react';
import { IoMdRefresh } from 'react-icons/io';
import "./Error.css"

export default function Error({ fetchData, setError }) {

  const refresh = () => {
    setError(false)
    fetchData()
  }
  
  return (
    <main className='center'>
      <div>Something went wrong</div>
      <IoMdRefresh size={20} className='refresh' onClick={refresh} />
    </main>
  )
}
