import { handleSearch } from '../features/nfts/nftsSlice'
import logo from '../assets/Logo.svg'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useAppDispatch } from '../store'
import { BsChevronCompactDown, BsChevronCompactUp } from 'react-icons/bs'

import { useAccount, useConnect, useDisconnect } from 'wagmi'
import { InjectedConnector } from 'wagmi/connectors/injected'

const Navbar = () => {
    const [searchInput, setSearchInput] = useState('')
    const [showAddress, setShowAddress] = useState(false)
    const dispatch = useAppDispatch()

    const { address, isConnected } = useAccount()
    const { connect } = useConnect({
        connector: new InjectedConnector(),
    })
    const { disconnect } = useDisconnect()

    return (
        <nav className='flex-row md:flex max-w-[85%] m-auto my-4 mb-10 items-center font-[FoundryMonoline-Bold]'>
            <div className="flex md:gap-10 items-center justify-between md:justify-normal w-full mx-auto">
                <Link to='/'>
                    <img src={logo} alt="logo" className='max-w-none' />
                </Link>
                <form
                    className='flex items-center'>
                    <div className="relative max-w-[24rem] md:w-[24rem] justify-self-end">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-500" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                        </div>
                        <input
                            type="search"
                            id="search-navbar"
                            className="w-full p-2 pl-10 text-sm text-gray-900 border border-none rounded-2xl focus:ring-gray-500 focus:border-gray-500 bg-gray-200"
                            placeholder="Search NFT, Artist, Ehibition..."
                            value={searchInput}
                            onChange={(e) => {
                                setSearchInput(e.target.value.toLowerCase())
                            }}
                            onKeyUp={() => dispatch(handleSearch(searchInput))}
                        />
                    </div>
                </form>
            </div>
            <div className='xl:flex xl:gap-2 items-center'>
                <button
                    className="bg-[#0E0E0E] transition-all duration-300 hover:bg-gray-300 hover:text-[#0E0E0E] text-white font-bold mt-4 md:mt-0 py-2 px-4 rounded-full w-[100%] md:w-[12rem]"
                    onClick={() => {
                        if (isConnected) {
                            disconnect()
                        }
                        connect()
                    }}
                >
                    {isConnected ? 'Disconnect Wallet' : 'Connect Wallet'}
                </button>
                <div className='relative'>
                    {
                        isConnected && <button
                            type="button"
                            className='flex gap-1 items-center mx-auto mt-2'
                            onClick={() => setShowAddress(!showAddress)}
                        >
                            Wallet {
                                showAddress ? <BsChevronCompactUp /> : <BsChevronCompactDown />
                            }
                        </button>
                    }
                    {
                        showAddress && <h3 className='absolute lg:right-0 lg:top-10 bg-gray-200 p-2 rounded'>Connected to: {address}</h3>
                    }
                </div>
            </div>
        </nav>
    )
}

export default Navbar
