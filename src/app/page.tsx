'use client'

import Link from "next/link";

export default function Home() {
  return (<div>Hello
        <Link href={'/page1'}>Page1</Link>
        <Link href={'/page2'}>Page2</Link>
        <button onClick={() => console.log('OI')}>Teste</button>
  </div>);
}
