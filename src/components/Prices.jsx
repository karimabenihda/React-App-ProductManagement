import React from 'react'
import { useState } from 'react';

export default function Prices({onchangePrice}) {
    const[price,setPrice]=useState('');
    const chosePrice=(e)=>{
      setPrice(e.target.value);
      onchangePrice(e.target.value);
    }

  return (
    <>
    <div className='down'>
     <b><label htmlFor="Prices">Prices</label></b><br />
      <input type="radio" name="radios_2" value="0-10" checked={price==="0-10"} onChange={chosePrice} /> 0-10 <br/>
      <input type="radio" name="radios_2" value="10-20" checked={price==="10-20"} onChange={chosePrice} /> 10-20 <br/>
      <input type="radio" name="radios_2" value="20-50" checked={price==="20-50"} onChange={chosePrice} />20-50 <br/>
      <input type="radio" name="radios_2" value="50-100" checked={price==="50-100"} onChange={chosePrice} />50-100 <br/>
      <input type="radio" name="radios_2" value="100-500" checked={price==="100-500"} onChange={chosePrice} />100-500 <br/>
      <input type="radio" name="radios_2" value="500-1000" checked={price==="500-1000"} onChange={chosePrice} />500-1000 <br/>
      <input type="radio" name="radios_2" value="1000-3000" checked={price==="1000-3000"} onChange={chosePrice} />1000-3000 <br/>
    </div>
    </>
  )
}
