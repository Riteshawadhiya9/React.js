import {useState, useEffect} from "react";

function useCurrencyInfo(currency) {
    const [data,setData] = useState({})
    useEffect(() =>{
        fetch(`https://v6.exchangerate-api.com/v6/34c091afcad3a15de0b470df/latest/${currency}`)
        .then((res) => res.json())
        .then((res) => setData(res.conversion_rates))
    },[currency])
    return data;
}
export default useCurrencyInfo;