import { useEffect, useState } from "react";
const style = {
    style: {
        color: 'black',
    }
}
const Api = () =>{
    const [data, setData] = useState([])
    /* const[loading, setLoading] = useState(false); */

    const URL = 'https://jsonplaceholder.typicode.com/users'
    const getData = async () => {
        const result = await fetch(URL);
        const x = await result.json()
        setData(x)
    }
    useEffect(() => {
        getData()
    }, [])
    return(
        <div>
            {data.map((data, i)=>{
                return(
                    <li style={style.style }key={i}>{data.name}</li>
                )
            })}
        </div>
    )
}

export default Api