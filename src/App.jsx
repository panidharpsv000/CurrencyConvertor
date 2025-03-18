import { useState,useEffect } from 'react'
import UseCurrencyInfo from './hooks/UseCurrencyInfo.jsx'
import InputBox from './components/InputBox.jsx'
function App() {
  
  const [amount,setAmount]=useState(0);
  const [convertedAmount,setConvertedAmount]=useState(0)
  const [fromCurrency,setFromCurrency]=useState('USD')
  const [toCurrency,setToCurrency]=useState('INR')
  const opt1=UseCurrencyInfo(fromCurrency)
  const opt2=UseCurrencyInfo(toCurrency)
  return (
    <>  
    <form>
      <InputBox 
         label="FROM"
         amount={amount}
         currency={fromCurrency}
         options={Object.keys(opt1)}
         amountChange={(val) => setAmount(val)}
         currencyChange={(curr) => setFromCurrency(curr.toUpperCase())}
      />
      <button onClick={()=>swap()}>Swap</button>
      <InputBox 
         label="TO"
         amount={convertedAmount}
         currency={toCurrency}
         options={Object.keys(opt2)}
         amountChange={(val) => setConvertedAmount(val)}
         currencyChange={(curr) => setToCurrency(curr)}
      />
      <button type='button' onClick={()=> convert()}>Convert {fromCurrency} to {toCurrency}</button>
      </form>
    </>
  )

  function convert()
  {
    const x=amount*opt1[toCurrency];
    setConvertedAmount(x);
  }

  function swap()
  {
    event.preventDefault()
   
     setFromCurrency(toCurrency)
     setToCurrency(fromCurrency)
   
     setAmount(convertedAmount)
     setConvertedAmount(amount)
  }
}

export default App
