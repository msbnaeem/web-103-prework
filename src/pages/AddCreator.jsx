import { supabase } from "../client"
import { useState } from "react"
import { useNavigate } from 'react-router-dom'

function AddCreator() {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [url, setUrl] = useState('')
  const navigate = useNavigate()

  async function handleNew() {
    await supabase.from('creators').insert({ name, description, url })
    navigate('/')
    
  }
  return (
    <div>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
      <input value={url} onChange={(e) => setUrl(e.target.value)} />
      <button onClick={handleNew}>Submit</button>
    </div>
  )
}

export default AddCreator
