import Image from 'next/image'
import pic  from './images/students.jpg'

export default function page() {
  return (
    <div>
      <h2>page is my main page</h2>
      <Image src={pic} alt='a young smiling' width={600} height={400}/>
    </div>
  )
}


