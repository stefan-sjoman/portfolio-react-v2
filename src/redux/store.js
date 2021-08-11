import { configureStore } from "@reduxjs/toolkit";
import footerReducer from "./footer";

export default configureStore({
	reducer: {
		footer: footerReducer
	}
});