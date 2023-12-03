import { headers } from 'next/headers'
import Link from 'next/link'
import AjaxClicker from './AjaxClicker'

export default function IndexPage() {

  const header = headers()
  const host = header.get('X-Forwarded-For')
  
  return (
    <>
    <h1>Welcome to {host}</h1>
    <div>
      Hello World. <Link href="/about">About</Link>
    </div>
    <hr/>
    <AjaxClicker mode='POST'/>
    <hr/>
    <AjaxClicker mode='PUT' />
    <hr/>
    <AjaxClicker mode='PATCH' />
    <hr/>
    <AjaxClicker mode='GET' />
    </>
  )
}
