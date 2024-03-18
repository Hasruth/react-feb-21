import { useEffect, useState } from "react";
import axios from "axios";



function useAxios(URL) {

    const [data, setData] = useState([])

    useEffect(() => {
        fetchData()
    }, [])


    async function fetchData() {
        const result = await axios.get(URL)
        setData(result.data)
    }


    return [data]
}

export default useAxios