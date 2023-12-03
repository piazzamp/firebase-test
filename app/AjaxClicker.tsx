"use client"

import { FormEvent, useState } from "react"

export default function AjaxClicker({mode}:{mode: "GET"|"POST"|"PUT"|"PATCH"}) {
  const [text, setText] = useState('here is a string')  
  const [result, setResult] = useState('')

  async function submitHandler(e: FormEvent) {
    e.preventDefault()
    let resp: Response
    const body = {text}
    switch (mode) {
      case "POST":
        resp = await fetch('/api/text', {body: JSON.stringify(body), method: 'POST'})
      break
      case "PUT":
        resp = await fetch('/api/text', {body: JSON.stringify(body), method: 'PUT'})
      break
      case "PATCH":
        resp = await fetch('/api/text', {body: JSON.stringify(body), method: 'PATCH'})
      break
      case "GET":
        const params = new URLSearchParams([['text', text]])
        resp = await fetch('/api/text?' + params.toString())
      break
    }

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
    <label>"text ({mode})": <input type="text" value={text} onChange={e => setText(e.target.value)} /></label>
    <button type="submit">Submit</button>
  </form>
  </>
}