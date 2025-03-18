import {useState,useEffect} from 'react'

function UseCurrencyInfo(currency)
{
    const [data,setData]=useState({})
 
    useEffect(() => {
      fetch(`https://v6.exchangerate-api.com/v6/ce777852df93511eb8cdf9c6/latest/${currency}`)
        .then((res) => res.json())
        .then((res) => {
          setData(res.conversion_rates);
        })
    }, [currency]);
    return data;
   
}
export default UseCurrencyInfo;