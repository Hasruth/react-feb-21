const ImageComponent=(props)=>{
    const {imageurl}=props
    return(
        <div>
            <img src={imageurl} width={100} height={100}/>
        </div>
    )
}

export default ImageComponent