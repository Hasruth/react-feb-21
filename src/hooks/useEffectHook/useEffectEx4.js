import axios from "axios"
import React, { useEffect, useState } from "react"
import { DNA } from "react-loader-spinner"
import { Card } from "react-bootstrap"




const UseEffectEx4 = () => {
    const [products, setProducts] = useState([])



    useEffect(() => {
        axios.get("https://fakestoreapi.com/products")
            .then((response) => {
                if (response.status === 200) {
                    console.log(response.data)
                    setProducts(response.data)
                }
                else {
                    alert("Something Went Wrong")
                }
            })
    }, [])


    return (
        <>
            <center><h1>Products</h1>
                {
                    products.length > 0 ?
                        <div style={{ display: "flex", flexWrap: "wrap" }}>{
                            products.map((e) => {
                                return (
                                    <Card style={{ width: '18rem', display: "inline-block",margin:"2px"}} >
                                        <Card.Img variant="top" src={e.image} style={{ width: 100, height: 200 }} />
                                        <Card.Body>
                                            <Card.Title>{e.category}</Card.Title>
                                            <Card.Text>
                                                {e.title}
                                            </Card.Text>
                                        </Card.Body>
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