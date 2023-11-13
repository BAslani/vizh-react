import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import mockData from '../../assets/mockData';
import { Nft } from "../../type";

export type Nfts = {
    allNfts: Nft[]
    nftList: Nft[]
}

const initialState: Nfts = {
    allNfts: mockData,
    nftList: mockData
}

const nftsSlice = createSlice({
    name: 'nfts',
    initialState,
    reducers: {
        handleSearch: (state, action: PayloadAction<string>) => {
            state.nftList = state.allNfts
            const newNftList = state.nftList.filter((nft) => {
                return nft.nftName.toLowerCase().startsWith(action.payload)
            })
            state.nftList = newNftList
        }
    }
})

export default nftsSlice.reducer
export const { handleSearch } = nftsSlice.actions