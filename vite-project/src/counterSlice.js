import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
    name: 'counter', // Имя среза
    initialState: { isActivePage: "home" }, // Начальное состояние
    reducers: {
        updateCorrentPage: (state, action) => {
            state.isActivePage = action.payload.isActivePage
        }
    },
});

// Экспортируем действия
export const { updateCorrentPage } = counterSlice.actions;

// Экспортируем редьюсер
export default counterSlice.reducer;