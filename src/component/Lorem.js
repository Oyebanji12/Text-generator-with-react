import React from 'react'
import { useState } from 'react'
import data from "./data.js"

const Lorem = () => {
    const [count, setCount]= useState(0)
    const [text, setText]= useState([])
    // console.log(data)
    
    const handleSubmit=(e)=>{
        e.preventDefault()
        let amount= parseInt(count)
        console.log(amount)
        // if(count < 0){
        //     amount = 0
        // }
        // if(count > 8){
        //     amount = 8
        // }
        setText(data.slice(0, amount))
        
    }
    const inputChange=(e)=>{
        setCount(e.target.value)
    }
  return (
    <div>
        <section className='section-center'>
            <h3>Tired of boring lorem ipsum</h3>
            <form className='lorem-form' onSubmit={handleSubmit}>
                <label htmlFor="amount">Paragraph :</label>
                <input type="number"  value={count} onChange={inputChange} />
        <button type='submit' className='btn'>generate</button>
            </form>
            <article className='lorem-text'>
                {text.map((item, i)=>{
                    return(
                        <p key={i}>{item}</p>
                    )

                })}

            </article>
        </section>

    </div>
  )
}

export default Lorem