import Image from 'next/image'
import React from 'react'

export default function page() {
  return (
    <div>
        <h2>students page</h2>
        <Image src='/woman.jpg' alt='a woman laughing' width={500} height={400}/>
    </div>
  )
}
