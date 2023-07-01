"use client"

import { FormEvent, useState } from "react"

export default function AjaxClicker() {
  const [text, setText] = useState('here is a string')  
  const [result, setResult] = useState('')

  async function submitHandler(e: FormEvent) {
    e.preventDefault()
    const body = {text}
    const resp = await fetch('/api/text', {body: JSON.stringify(body), method: 'POST'})
    if (resp.status == 200) {
      const respBody = await resp.json()
      setResult(respBody['msg'])
    } else {
      const m = await resp.text()
      setResult(`sorry got a ${resp.status} (${resp.statusText}) from the server: ${m}`)
    }
  }

  return <>
  {result ? <div>Result: "{result}"</div> : <></>}
  <form onSubmit={submitHandler}>
    <label>"text": <input type="text" value={text} onChange={e => setText(e.target.value)} /></label>
    <button type="submit">Submit</button>
  </form>
  </>
}