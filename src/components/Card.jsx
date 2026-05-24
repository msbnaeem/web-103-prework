function Card({ name, url, description, imageURL }) {
    return (
    <div className="card">
        {imageURL && <img src={imageURL} alt={name} />}
        <h2>{name}</h2>
        <a href={url} target="_blank" rel="noopener noreferrer">{url}</a>
        <p>{description}</p>
        
    </div>
    )
}

export default Card;