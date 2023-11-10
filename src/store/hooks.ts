import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { TStoreDispatch, TStoreState } from "./store-redux";

// useDispatch

export const useStoreDispatch: () => TStoreDispatch = useDispatch;
export const useStoreSelector: TypedUseSelectorHook<TStoreState> = useSelector;
