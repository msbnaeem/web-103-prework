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
      <div className="bg-images">
        {creators.map(creator => (
          creator.imageURL && <img key={creator.id} src={creator.imageURL} className="bg-img" alt="" />
        ))}
      </div>
      <div className="header">
        <h1>Creatorverse</h1>
        <Link to="/new"><button className="btn btn-primary">+ Add Creator</button></Link>
      </div>
      <div className="cards-grid">
        {creators.map(creator => (
          <Card key={creator.id} {...creator} />
        ))}
      </div>
    </div>
  )
}

export default ShowCreators
