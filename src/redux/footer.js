import { createSlice } from "@reduxjs/toolkit";

export const footerSlice = createSlice({
	name: "footer",
	initialState: {
		isFooterVisible: false
	},
	reducers: {
		showFooter: (state) => {
			state.isFooterVisible = true;
		},
		hideFooter: (state) => {
			state.isFooterVisible = false;
		}
	}
});

export const { showFooter, hideFooter } = footerSlice.actions;

export default footerSlice.reducer;