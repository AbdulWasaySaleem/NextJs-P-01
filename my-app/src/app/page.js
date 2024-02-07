'use client'

import { useState } from "react";
import { useRouter } from "next/navigation";


export default function Home() {
  const [input, setInput] = useState('')
  const {push} = useRouter()

  const handleSubmit = (e)=>{
    e.preventDefault()
    push(`/prediction/${input}`)
  }
  
  return (
    <>
      <div>
        <h1>Enter your name</h1>
        <form onSubmit={handleSubmit}>
          <input className="text-black" type="text" placeholder="Enter your name" value={input} onChange={(e)=>{setInput(e.target.value)}}/>
          <button type="button">Predict Data</button>
        </form>
      </div>
    </>
  );
}
