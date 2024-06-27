import { useState } from 'react'
import { Input } from './components/forms/Input'
import { Checkbox } from './components/forms/Checkbox'

function App() {

  return <div>
    <SearchBar className="container my-5"/>
  </div>
}

function SearchBar(){
  return <div>
    <div className='mb-3'>
      <Input value="" onChange={() => null} placeholder="Rechercher ..." />
      <Checkbox id="stocked" checked={false} onChange={() => null} label="N'afficher que les produits en stock"/>
    </div>
  </div>
}

export default App
