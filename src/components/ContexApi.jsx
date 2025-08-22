import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'


const ApiData = createContext()



function ContexApi({ children }) {
    let [info, setInfo] = useState([])
    let getData = () => {
        axios.get('https://dummyjson.com/products').then((response) => {
            setInfo(response.data.products);

        })
    }

    useEffect(() => {
        getData()
    }, [])
    return (
        <>
            <ApiData.Provider value={info}>{children}</ApiData.Provider>
        </>
    )
}

export { ContexApi, ApiData }