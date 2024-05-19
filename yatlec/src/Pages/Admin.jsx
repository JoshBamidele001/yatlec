import React, { useState } from 'react'

export default function Admin() {
    const [files, setfiles] = useState([])
    console.log(files);
  return (
    <div className=''>
        
        <input type="file"
        onChange={(e)=> setfiles(e.target.files)}
        className='p-3 m-3' multiple />

    </div>
  )
}
