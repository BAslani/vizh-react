import artist_icon from '../assets/artist_icon.svg'
import { useNavigate } from 'react-router-dom'

const Card = ({ id, nftName, artistName, currentBid, image }: { id: number, nftName: string, artistName: string, currentBid: number, image: string }) => {
  const navigate = useNavigate()

  return (
    <article className="w-72 cursor-pointer transition-all duration-300 hover:scale-[1.01] hover:shadow-lg" onClick={() => navigate(`/submit/${id}`)}>
      <header className="bg-[#F5F5F5] shadow-xl p-4 rounded-t-lg">
        {nftName}
      </header>
      <img src={image} alt={nftName} className="my-1 shadow-xl w-72 h-64" />
      <footer className="bg-[#F5F5F5] shadow-xl p-4 rounded-b-lg">
        <h3 className='flex gap-2 mb-2'>
          <img src={artist_icon} alt="icon" />
          {artistName}
        </h3>
        <h3 className='flex gap-2'>
          Current Bid
          <span className='font-bold'>
            {currentBid} ETH
          </span>
        </h3>
      </footer>
    </article>
  )
}

export default Card