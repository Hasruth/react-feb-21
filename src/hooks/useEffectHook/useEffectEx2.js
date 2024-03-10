import React, { useEffect, useState } from "react"
import axios from "axios"
import Table from 'react-bootstrap/Table';
import { DNA } from "react-loader-spinner"



const UseEffectEx2 = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        axios.get("https://dummyjson.com/products")
            .then((response) => {
                console.log(response)
                if (response.status === 200) {
                    setProducts(response.data.products)
                }
                else {
                    alert("Something Went Wrong")
                }
            })
    }, [])


    return (
        <>
            <h1 style={{ textAlign: "center", background: "yellow" }}>PRODUCTS</h1>
            {
                products.length > 0 ?
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th><h1 style={{ textAlign: "center", background: "skyblue" }}>ID</h1></th>
                                <th><h1 style={{ textAlign: "center", background: "skyblue" }}>BRAND</h1></th>
                                <th><h1 style={{ textAlign: "center", background: "skyblue" }}>IMAGE</h1></th>
                                <th><h1 style={{ textAlign: "center", background: "skyblue" }}>DESCRIPTION</h1></th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map((eachObj) => (
                                <tr key={eachObj.id}>
                                    <td style={{ textAlign: "center", background: "#596363", color: "white" ,fontSize:"30px"}}>{eachObj.id}</td>
                                    <td style={{ textAlign: "center", background: "#596363", color: "white" ,fontSize:"30px"}} width={500}>{eachObj.brand} </td>
                                    <td style={{ textAlign: "center", background: "#596363" ,fontSize:"30px"}}><img src={eachObj.images[0]} width={200} height={200} /></td>
                                    <td style={{ textAlign: "center", background: "#596363", color: "white" ,fontSize:"30px"}}>{eachObj.description}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                    :
                    <DNA />
            }
        </>
    )
}

export default UseEffectEx2