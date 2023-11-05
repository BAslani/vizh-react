import nftData from "../assets/mockData"
import Card from "../components/Card";

const Home = () => {

  return (
    <main>
      {
        nftData.map((nft) => {
          return <Card key={nft.id} {...nft}/>
        })
      }
    </main>
  )
}

export default Home