import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ClassData } from "../types/classDataTypes";

interface ClassState {
  classes: ClassData[];
}

const initialState: ClassState = {
  classes: [],
};

const classSlice = createSlice({
  name: "classes",
  initialState,
  reducers: {
    setClasses(state, action: PayloadAction<ClassData[]>) {
      state.classes = action.payload;
    },
    BookingClass(state, action: PayloadAction<ClassData>) {
      const index = state.classes.findIndex(
        (classItem) => classItem.id === action.payload.id
      );
      if (index !== -1) {
        state.classes[index] = action.payload;
      }
    },
  },
});

export const { setClasses, BookingClass } = classSlice.actions;
export default classSlice.reducer;
