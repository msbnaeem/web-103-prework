import { supabase } from "../client"
import { useState } from "react"
import { useNavigate } from 'react-router-dom'

function AddCreator() {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [url, setUrl] = useState('')
  const [imageURL, setImageURL] = useState('')
  const navigate = useNavigate()

  async function handleNew() {
    await supabase.from('creators').insert({ name, description, url, imageURL })
    navigate('/')
    
  }
  return (
    <div>
      <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Creator Name" />
      <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" />
      <input value={url} onChange={(e) => setUrl(e.target.value)} placeholder="URL" />
      <input value={imageURL} onChange={(e) => setImageURL(e.target.value)} placeholder="Image URL (Optional)" />
      <button onClick={handleNew}>Submit</button>
    </div>
  )
}

export default AddCreator
