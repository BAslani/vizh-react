import { configureStore } from '@reduxjs/toolkit'
import nftsReducer from './features/nfts/nftsSlice'
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux'

const store = configureStore({
    reducer: {
        nfts: nftsReducer
    }
})

export default store
export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<ReturnType<typeof store.getState>> = useSelector;