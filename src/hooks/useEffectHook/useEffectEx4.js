import axios from "axios"
import React, { useEffect, useState } from "react"
import { DNA } from "react-loader-spinner"
import { Card } from "react-bootstrap"
import { Link } from "react-router-dom"
import useAxios from "../customHook/useAxios"




const UseEffectEx4 = () => {
     
    //custom hook
    const [products] = useAxios("https://fakestoreapi.com/products")

    //    const [products, setProducts] = useState([])
    //    useEffect(() => {
    //      axios.get("https://fakestoreapi.com/products")
    //         .then((response) => {
    //                if (response.status === 200) {
    //                   console.log(response.data)
    //                  setProducts(response.data)
    //              }
    //              else {
    //                 alert("Something Went Wrong")
    //             }
    //         })
    //}, [])


    return (
        <>
            <center><h1 style={{ backgroundColor: "lightcoral", margin: "0px" }}>Products</h1>
                {
                    products.length > 0 ?
                        <div style={{ display: "flex", flexWrap: "wrap", backgroundColor: "lightgreen" }}>{
                            products.map((e) => {
                                return (
                                    <Card style={{ width: '300px', height: "auto", display: "inline-block", margin: "30px 10px 10px 70px", backgroundColor: "gray" }} >
                                        <Card.Img variant="top" src={e.image} style={{ width: 100, height: 200 }} />
                                        <Card.Body>
                                            <Card.Title>{e.category}</Card.Title>
                                            <Card.Text>
                                                {e.title}
                                            </Card.Text>
                                        </Card.Body>
                                        <button><Link to={`/${e.category}/${e.id}`}>More Info</Link></button>
                                    </Card>
                                )
                            })
                        } </div> :
                        <DNA></DNA>
                }

            </center>
        </>
    )
}

export default UseEffectEx4