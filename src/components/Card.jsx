import { Link } from 'react-router-dom'


function Card({ id, name, url, description, imageURL }) {
    return (
    <div className="card">
        {imageURL && <img src={imageURL} alt={name} />}
        <h2>{name}</h2>
        <a href={url} target="_blank" rel="noopener noreferrer">{url}</a>
        <p>{description}</p>

        <Link to={`/edit/${id}`}><button>Edit</button></Link>
        <Link to={`/${id}`}><button>View</button></Link>
    </div>
    )
}

export default Card;