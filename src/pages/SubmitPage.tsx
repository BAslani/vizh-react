import { useParams } from "react-router-dom"
import nftData from "../assets/mockData"
import checkSign from '../assets/Check Sign.svg'
import eth from '../assets/eth.svg'

const SubmitPage = () => {
  const { id } = useParams()
  const { image } = nftData.filter((item) => item.id === Number(id))[0]

  return (
    <main className="w-[80%] lg:grid grid-cols-7 gap-6 mx-auto my-20">
      <div className="bg-[#F5F5F5] rounded-lg grid p-10 col-span-3 mb-4">
        <h2 className="flex items-center text-xl gap-2 font-bold mb-4">
          From "Collection Name"
          <img src={checkSign} alt="check" />
        </h2>
        <h1 className="text-3xl font-bold">
          Artwork Name
        </h1>
        <h3 className="text-lg font-bold mb-5 flex gap-4 items-center">
          Royalties
          <span className="grid place-items-center px-2 text-sm font-bold rounded-md bg-[#93D39B]">2.5 %</span>
        </h3>
        <p className="text-[#464646] w-[75%] mb-4">
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
        <div className="flex items-center gap-11 mb-6 text-sm">
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
        <button className="w-[90%] mx-auto text-xl bg-[#0E0E0E] transition-all duration-300 hover:bg-gray-300 hover:text-[#0E0E0E] text-white font-bold rounded-full">
          Submit Purchase
        </button>
      </div>
      <img src={image} alt="nft_picture" className="rounded-lg col-span-4 w-full mb-4" />
    </main>
  )
}

export default SubmitPage