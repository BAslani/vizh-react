import logo_white from '../assets/logo_white.svg'

const Footer = () => {
    return (
        <footer className="bg-[#0E0E0E] py-10 font-[FoundryMonoline-Bold]">
            <div className="w-[80%] lg:w-[80%] m-auto">
                <div className="md:flex md:justify-between md:mb-4 items-center lg:justify-normal xl:gap-[28rem]">
                    <img src={logo_white} alt="logo" className='mx-auto md:m-0 mb-4 md:mb-0'/>
                    <div className="text-white flex-row md:w-[32rem] mb-5 md:mb-0">
                        <h2 className='text-3xl mb-5'>Become an Early Adopter</h2>
                        <form className='flex gap-2 lg:items-center'>
                            <input type="email" name="email" id="email" className='bg-transparent border-b-2 border-[#5B5B5B] md:w-full lg:basis-9/12' placeholder='Enter your Email-Adress'/>
                            <button className="basis-3/12 bg-[#93D39B] hover:bg-gray-300 text-black font-bold w-full md:py-2 md:px-10 rounded-full justify-self-end ">
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
                <div className="text-white flex-row md:flex md:justify-between">
                    <div className="">
                        <h2 className='text-3xl'>Mintii Account</h2>
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
                        <h2 className='text-2xl'>Collections</h2>
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
                        <h2 className='text-2xl'>About Us</h2>
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