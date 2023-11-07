import { useState } from "react"
import { useParams } from "react-router-dom"
import nftData from "../assets/mockData"
import checkSign from '../assets/Check Sign.svg'
import eth from '../assets/eth.svg'
import Modal from "../components/Modal"
import { useNavigate } from "react-router-dom"

const SubmitPage = () => {
  const { id } = useParams()
  const { image } = nftData.filter((item) => item.id === Number(id))[0]
  const [showModal, setShowModal] = useState(false)
  const [status, setStatus] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = () => {
    setShowModal(true)
    setTimeout(() => {
      setStatus(true)
      setTimeout(() => {
        setShowModal(false)
        setStatus(false)
        navigate('/')
      }, 2000)
    }, 2000)
  }

  return (
    <main className="w-[80%] lg:grid grid-cols-7 gap-6 mx-auto my-12">
      {showModal && <Modal status={status}/>}
      <div className="bg-[#F5F5F5] rounded-lg p-6 md:p-0 md:px-10 col-span-3 mb-8 md:mb-0">
        <div className="lg:py-10 lg:mt-6">
          <h2 className="flex items-center text-xl gap-2 font-bold mb-4 lg:mb-8">
            From "Collection Name"
            <img src={checkSign} alt="check" />
          </h2>
          <h1 className="text-3xl font-bold mb-4 md:mb-8">
            Artwork Name
          </h1>
          <h3 className="text-lg font-bold mb-5 lg:mb-8 flex gap-4 items-center">
            Royalties
            <span className="grid place-items-center px-2 text-sm font-bold rounded-md bg-[#93D39B]">2.5 %</span>
          </h3>
          <p className="text-[#464646] w-[75%] mb-6 lg:mb-10">
            You are about to buy this artwork from “COLLECTION NAME” collection.
          </p>
          <div className="flex items-center gap-10 text-sm mb-2">
            <p>
              Floor price
            </p>
            <p className="flex gap-4 items-center bg-white w-32 py-1 px-4 rounded-xl">
              0.25
              <img src={eth} alt="eth" />
            </p>
          </div>
          <div className="flex items-center gap-11 mb-8 lg:mb-10 text-sm">
            <p>
              Mintii Fee
            </p>
            <p className="flex gap-4 items-center bg-white w-32 py-1 px-4 rounded-xl">
              2.5 %
            </p>
          </div>
          <div className="flex items-center gap-8 mb-4 text-sm">
            <p>
              You will pay
            </p>
            <p className="flex gap-4 items-center bg-white w-32 py-1 px-4 rounded-xl">
              0.27
              <img src={eth} alt="eth" />
            </p>
          </div>
        </div>
        <button
        className="w-[90%] mx-auto text-xl bg-[#0E0E0E] transition-all duration-300 hover:bg-gray-300 hover:text-[#0E0E0E] text-white md:font-bold lg:text-2xl lg:py-3 py-2 mt-4 lg:mt-0 rounded-full"
        onClick={handleSubmit}
        >
          Submit Purchase
        </button>
      </div>
      <img src={image} alt="nft_picture" className="rounded-lg col-span-4 w-full" />
    </main>
  )
}

export default SubmitPage