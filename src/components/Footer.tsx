import logo_white from '../assets/logo_white.svg'

const Footer = () => {
    return (
        <footer className="bg-[#0E0E0E] pb-10">
            <div className="lg:w-[75%] m-auto">
                <div className=" py-16 flex justify-between">
                    <img src={logo_white} alt="logo" />
                    <div className="text-white flex-row w-[32rem]">
                        <h2 className='text-3xl mb-5'>Become an Early Adopter</h2>
                        <form className='flex gap-2'>
                            <input type="email" name="email" id="email" className='bg-transparent border-b-2 border-[#5B5B5B] w-full' placeholder='Enter your Email-Adress'/>
                            <button className="flex-end bg-[#93D39B] hover:bg-gray-300 text-black font-bold py-2 px-10 rounded-full justify-self-end">
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
                <div className="text-white flex gap-x-64">
                    <div className="">
                        <a href='#' className='text-3xl'>Mintii Account</a>
                        <ul className='text-[#5B5B5B] text-2xl'>
                            <li className='my-2'>
                                <a href="#">Profile</a>
                            </li>
                            <li className='my-2'>
                                <a href="#">Setting</a>
                            </li>
                            <li className='my-2'>
                                <a href="#">Privacy policy</a>
                            </li>
                            <li className='my-2'>
                                <a href="#">Terms and conditions</a>
                            </li>
                        </ul>
                    </div>
                    <div className="">
                        <a href='#' className='text-2xl'>Collections</a>
                        <ul className='text-[#5B5B5B] text-2xl'>
                            <li className='my-2'>
                                <a href="#">Mint NFT</a>
                            </li>
                            <li className='my-2'>
                                <a href="#">Buy NFT</a>
                            </li>
                            <li className='my-2'>
                                <a href="#">Sell NFT</a>
                            </li>
                        </ul>
                    </div>
                    <div className="">
                        <a href='#' className='text-2xl'>About Us</a>
                        <ul className='text-[#5B5B5B] text-2xl'>
                            <li className='my-2'>
                                <a href="#">Mintii</a>
                            </li>
                            <li className='my-2'>
                                <a href="#">Artists</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer