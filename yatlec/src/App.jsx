import React from 'react'
// Supports weights 100-900
import '@fontsource-variable/montserrat';
import Navbar from './MyComponents/Navbar';
import Admin from './Pages/Admin';

export default function App() {
  return (
    <div>
        <Navbar/>
        <Admin/>

    </div>
  )
}
