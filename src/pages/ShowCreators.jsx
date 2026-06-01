import { Link } from 'react-router-dom'
import { supabase } from "../client"
import Card from "../components/Card"
import { useState } from "react"
import { useEffect } from "react"


function ShowCreators() {

  const [creators, setCreators] = useState([])
  
  useEffect(() => {
    async function getCreators() {
      const { data } = await supabase.from('creators').select('*')
      setCreators(data)
    }
    getCreators()       
      
  }, [])

  return (
    <div>
      {<Link to="/new"><button>New Creator</button></Link>}
      {creators.map(creator => (
        <Card key={creator.id} {...creator} />
      ))}
    </div>
    
)
}

export default ShowCreators
