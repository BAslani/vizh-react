import nft01 from '../assets/nft01.png'
import nft02 from '../assets/nft02.png'
import nft03 from '../assets/nft03.png'
import nft04 from '../assets/nft04.png'
import nft05 from '../assets/nft05.png'
import nft06 from '../assets/nft06.png'
import nft07 from '../assets/nft07.png'
import nft08 from '../assets/nft08.png'
import nft09 from '../assets/nft09.png'
import nft10 from '../assets/nft10.png'
import { faker } from '@faker-js/faker'

const nftData: { id: number, nftName: string, artistName: string, currentBid: number, image: string }[] = [
    {
        id: 1,
        nftName: "Intentions",
        artistName: faker.person.fullName(),
        currentBid: faker.number.float({min: 0.1, max: 0.9, precision: 0.1}),
        image: nft01
    },
    {
        id: 2,
        nftName: "Slide",
        artistName: faker.person.fullName(),
        currentBid: faker.number.float({min: 0.1, max: 0.9, precision: 0.1}),
        image: nft02
    },
    {
        id: 3,
        nftName: "Slide House",
        artistName: faker.person.fullName(),
        currentBid: faker.number.float({min: 0.1, max: 0.9, precision: 0.1}),
        image: nft03
    },
    {
        id: 4,
        nftName: "Gloom",
        artistName: faker.person.fullName(),
        currentBid: faker.number.float({min: 0.1, max: 0.9, precision: 0.1}),
        image: nft04
    },
    {
        id: 5,
        nftName: "Shatters",
        artistName: faker.person.fullName(),
        currentBid: faker.number.float({min: 0.1, max: 0.9, precision: 0.1}),
        image: nft05
    },
    {
        id: 6,
        nftName: "Puppet",
        artistName: faker.person.fullName(),
        currentBid: faker.number.float({min: 0.1, max: 0.9, precision: 0.1}),
        image: nft06
    },
    {
        id: 7,
        nftName: "Reminiscent",
        artistName: faker.person.fullName(),
        currentBid: faker.number.float({min: 0.1, max: 0.9, precision: 0.1}),
        image: nft07
    },
    {
        id: 8,
        nftName: "Choices",
        artistName: faker.person.fullName(),
        currentBid: faker.number.float({min: 0.1, max: 0.9, precision: 0.1}),
        image: nft08
    },
    {
        id: 9,
        nftName: "Regrets",
        artistName: faker.person.fullName(),
        currentBid: faker.number.float({min: 0.1, max: 0.9, precision: 0.1}),
        image: nft09
    },
    {
        id: 10,
        nftName: "Conquerer",
        artistName: faker.person.fullName(),
        currentBid: faker.number.float({min: 0.1, max: 0.9, precision: 0.1}),
        image: nft10
    },
];

export default nftData