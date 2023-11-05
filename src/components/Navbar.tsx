import React from 'react'
import Logo from './Logo'

const Navbar = () => {
    return (
        <section className=''>
            <Logo />
            <form>
                <input type="search" placeholder='Search NFT, Artist, Exhibition...' />
            </form>
            <button type="button">Connect Wallet</button>
        </section>
    )
}

export default Navbar