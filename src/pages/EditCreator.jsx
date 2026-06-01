import { supabase } from "../client"
import { useParams } from 'react-router-dom'
import { useState } from "react"
import { useEffect } from "react"
import { useNavigate } from 'react-router-dom'

function EditCreator() {
  const { id } = useParams()
  const [creator, setCreator] = useState(null)
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [url, setUrl] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    async function getCreator() {
      const { data } = await supabase.from('creators').select('*').eq('id', id).single()
      setCreator(data)
      setName(data.name)
      setDescription(data.description)
      setUrl(data.url)
    }
    getCreator()
    
  }, [id]
)

  if (!creator) return <h1>Loading...</h1>

  async function handleUpdate() {
    await supabase.from('creators').update({ name, description, url }).eq('id', id)
    navigate('/')
  }
  
  async function handleDelete() {
    await supabase.from('creators').delete().eq('id', id)
    navigate('/')
  }

  return (
    <div>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
      <input value={url} onChange={(e) => setUrl(e.target.value)} />
      <button onClick={handleUpdate}>Submit</button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  )
}

export default EditCreator
