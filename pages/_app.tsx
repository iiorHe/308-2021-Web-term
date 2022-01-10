import '../styles/globals.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
        <div className='bg-blue-900 fixed w-full'>
          <nav className='p-2'>
            <ul className='flex justify-center space-x-5 text-lg'>
              <li className="rounded-md bg-blue-600 text-white hover:text-black hover:bg-white"><a href="">About</a></li>
              <li className="rounded-md bg-blue-600 text-white hover:text-black hover:bg-white"><a href="">Blog</a></li>
              <li className="rounded-md bg-blue-600 text-white hover:text-black hover:bg-white"><a href="">Portfolio</a></li>
              <li className="rounded-md bg-blue-600 text-white hover:text-black hover:bg-white"><a href="">Contact</a></li>
            </ul>
          </nav>
        </div>
      <Component {...pageProps}/>
    </div>
  )
}

export default MyApp
