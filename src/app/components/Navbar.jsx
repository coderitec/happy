import Link from "next/link";


export default function Navbar() {
  return (
    <nav>
        <ul className="flex justify-between text-xl capitalize h-[100px] bg-sky-700 text-white items-center px-3">

            <Link href='/'>
            <li>home</li>
            </Link>

            <Link href='/about'>
            <li>about</li>
            </Link>

            <Link href='/course'>
            <li>course</li>
            </Link>

            <Link href='/staff'>
            <li>staff</li>
            </Link>
        </ul>
    </nav>
  )
}
