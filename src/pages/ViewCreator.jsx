import { supabase } from "../client"
import { useParams } from 'react-router-dom'
import { useState } from "react"
import { useEffect } from "react"

function ViewCreator() {

  const { id } = useParams()
  const [creator, setCreator] = useState(null)

  useEffect(() => {
    async function getCreator() {
      const { data } = await supabase.from('creators').select('*').eq('id', id).single()
      setCreator(data)
    }
    getCreator()
  }, [id])

  if (!creator) return <h1>Loading...</h1>

  return (
    <div>
        <h1>{creator.name}</h1>
        <p>{creator.description}</p>
        <a href={creator.url} target="_blank" rel="noopener noreferrer">{creator.url}</a>
    </div>
  )
}

export default ViewCreator
