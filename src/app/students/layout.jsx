import React from 'react'
import Courses from './Courses'
import { Outfit } from 'next/font/google'

const slow = Outfit({ 
  subsets: ['latin'],
  weight : ['500']
})

export const metadata = {
    title: 'Students in Univelcity',
    description: 'Different students\'s categories',
  }

export default function layout({children}) {
  return (
    <div className={slow.className}>
    <div>
        {children}
        <Courses />
    </div>
    </div>
  )
}
