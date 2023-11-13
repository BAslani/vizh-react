import { createSlice } from "@reduxjs/toolkit";
import mockData from '../../assets/mockData';
import { Nft } from "../../type";

export type Nfts = {
    nftList: Nft[]
}

const initialState: Nfts = {
    nftList: mockData
}

const nftsSlice = createSlice({
    name: 'nfts',
    initialState,
    reducers: {
        
    }
})

export default nftsSlice.reducer