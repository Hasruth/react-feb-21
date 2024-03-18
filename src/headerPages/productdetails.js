import { Navbar } from "react-bootstrap"
import NavbarComponent from "../navbar/navbar"
import UseEffectEx4 from "../hooks/useEffectHook/useEffectEx4"
import { useEffect, useState } from "react"
import { useFetcher, useNavigate, useParams } from "react-router-dom"
import axios from "axios"
import { DNA } from "react-loader-spinner"


const ProductDetails = () => {
    //useParams hook is used to collect the information from URL which is unique
    //useParams hook return one object
    const paramsInformation = useParams()
    //  console.log(paramsInformation.products)

    //to go to home
    const homepage = useNavigate()

    const returnhome = () => {
        homepage("/")
    }


    const [productdetail, setProductDetail] = useState({})

    useEffect(() => {
        fetchProductData()

    }, [paramsInformation.productsid])


    async function fetchProductData() {
        const result = await axios.get(`https://fakestoreapi.com/products/${paramsInformation.productsid}`)
        if (result.status === 200) {
            setProductDetail(result.data)
        }
        console.log(result)
    }

    //to check the object is returning true or false


    return (
        <>
            <NavbarComponent />
            <div>
                {
                    Object.keys(productdetail).length === 0 ?
                        <center>
                            <DNA />
                        </center>

                        :
                        <div style={{ border: "5px solid", position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", padding: "10px" }}>
                            <center>
                                <h1>{productdetail.category}</h1>
                                <hr></hr>
                                <img src={productdetail.image} style={{ width: "200px", height: "200px", margin: "auto", display: "block" }} />
                                <h2>{productdetail.title}</h2>
                                <hr></hr>
                                <p>{productdetail.description}</p>
                                <h1 style={{ textAlign: "center" }}>₹{productdetail.price}</h1>
                            </center>
                            <button onClick={returnhome}>Go To Home</button>
                        </div>

                }

            </div>
        </>
    )
}

export default ProductDetails