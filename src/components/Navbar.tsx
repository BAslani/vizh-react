import Logo from './Logo'


const Navbar = () => {
    return (
        <nav className='flex max-w-[90%] m-auto my-2 items-center'>
            <div className="flex-none mr-12 self-center">
                <Logo />
            </div>
            <form className='flex-auto flex items-center'>
                <div className="relative mt-3">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>
                    </div>
                    <input type="text" id="search-navbar" className="block w-full p-2 pl-10 pr-48 text-sm text-gray-900 border border-none rounded-2xl bg-gray-50 focus:ring-gray-500 focus:border-gray-500 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-gray-500 dark:focus:border-gray-500" placeholder="Search NFT, Artist, Ehibition..." />
                </div>

            </form>
            <button className="flex-end bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full justify-self-end">
                Connect Wallet
            </button>
        </nav>
    )
}

export default Navbar



// import search from '../assets/search.svg'
// <div className="h-12 w-12">
// <img src={search} alt="search" />
// </div>
// <input type="search" placeholder='Search NFT, Artist, Exhibition...' className='bg-stone-300 p-3 rounded-4'/>