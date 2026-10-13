import { createSlice } from "@reduxjs/toolkit";
import type { Collection } from "@/types";
import { collectionsData } from "@/data";

export interface CollectionsState {
  items: Collection[];
}

const initialState: CollectionsState = {
  items: collectionsData,
};

export { collectionsData };

const collectionsSlice = createSlice({
  name: "collections",
  initialState,
  reducers: {},
});

export default collectionsSlice.reducer;
