import Logo from './Logo'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className='flex max-w-[90%] m-auto my-2 mb-12 items-center'>
            <div className="flex-none mr-12 self-center">
                <Link to='/'>
                    <Logo />
                </Link>
            </div>
            <form className='flex-auto flex items-center'>
                <div className="relative mt-3 w-[24rem]">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>
                    </div>
                    <input type="search" id="search-navbar" className="block w-full p-2 pl-10 text-sm text-gray-900 border border-none rounded-2xl focus:ring-gray-500 focus:border-gray-500 bg-gray-200" placeholder="Search NFT, Artist, Ehibition..." />
                </div>

            </form>
            <button className="flex-end bg-[#0E0E0E] hover:bg-gray-300 text-white font-bold py-2 px-4 rounded-full justify-self-end">
                Connect Wallet
            </button>
        </nav>
    )
}

export default Navbar
