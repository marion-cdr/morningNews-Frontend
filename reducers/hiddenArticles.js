import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: [],
};

export const articleSlice = createSlice({
  name: 'hiddenArticles',
  initialState,
  reducers: {
    hideArticle: (state, action) => {
        state.value.push(action.payload);
    },
    removeAllHideArticle: (state) => {
        state.value = [];
    },
    
},
});
export const { hideArticle, removeAllHideArticle} = articleSlice.actions;
export default articleSlice.reducer;
