import ImageComponent from "./imagecompo"


const Cards = (props) => {
    const {title,category,image,price}=props.item
    return (
        <div className="container mt-3">
            <h2>{title}</h2>
            <p>Image at the top (card-img-top):</p>
            <div className="card" style={{ width: "50%" }}>
                <ImageComponent imageurl={image}/>
                <div className="card-body">
                    <h4 className="card-title">{category}</h4>
                    <p className="card-text">
                        Some example text some example text. John Doe is an architect and
                        engineer
                    </p>
                    <a href="#" className="btn btn-primary">
                        Price : {price}
                    </a>
                </div>
            </div>

        </div>

    )
}
export default Cards