import logo from '../assets/Logo.svg'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className='flex-row md:flex max-w-[85%] m-auto my-4 mb-10 items-center'>
            <div className="flex md:gap-10 items-center justify-between md:justify-normal w-full mx-auto">
                <Link to='/'>
                    <img src={logo} alt="logo" className='max-w-none' />
                </Link>
                <form className='flex items-center'>
                    <div className="relative max-w-[24rem] md:w-[24rem] justify-self-end">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-500" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                        </div>
                        <input type="search" id="search-navbar" className="w-full p-2 pl-10 text-sm text-gray-900 border border-none rounded-2xl focus:ring-gray-500 focus:border-gray-500 bg-gray-200" placeholder="Search NFT, Artist, Ehibition..." />
                    </div>
                </form>
            </div>
            <button className="bg-[#0E0E0E] transition-all duration-300 hover:bg-gray-300 hover:text-[#0E0E0E] text-white font-bold mt-4 md:mt-0 py-2 px-4 rounded-full w-[100%] md:w-[12rem]">
                Connect Wallet
            </button>
        </nav>
    )
}

export default Navbar
