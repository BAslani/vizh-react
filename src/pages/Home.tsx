import Card from "../components/Card";
import { useAppSelector } from "../store";

const Home = () => {
  const nftData = useAppSelector((state) => state.nfts.nftList)

  return (
    <main className="max-w-[90%] m-auto mb-10">
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-full gap-4 justify-items-center">
        {
          nftData.map((nft) => {
            return <Card key={nft.id} {...nft} />
          })
        }
      </section>
    </main>
  )
}

export default Home