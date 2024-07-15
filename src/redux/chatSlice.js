import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchChatList = createAsyncThunk(
  "chat/fetchChatList",
  async () => {
    const response = await axios.get(
      "https://devapi.beyondchats.com/api/get_all_chats?page=1"
    );
    return response.data.data;
  }
);

export const fetchChatDetails = createAsyncThunk(
  "chat/fetchChatDetails",
  async (chatId) => {
    const response = await axios.get(
      `https://devapi.beyondchats.com/api/get_chat_messages?chat_id=${chatId}`
    );
    return response.data.data;
  }
);

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    chatList: [],
    selectedChats: [],
    selectedChatId: null,
    status: "idle",
    error: null,
  },
  reducers: {
    selectChat: (state, action) => {
      state.selectedChatId = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchChatList.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchChatList.fulfilled, (state, action) => {
        state.status = "succeeded";
        console.log("API Response:", action.payload);
        state.chatList = Array.isArray(action.payload)
          ? action.payload
          : action.payload.data || [];
      })
      .addCase(fetchChatList.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(fetchChatDetails.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchChatDetails.fulfilled, (state, action) => {
        state.status = "succeeded";
        console.log("Chat Details:", action.payload);

        state.selectedChats = action.payload || [];
      })
      .addCase(fetchChatDetails.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { selectChat } = chatSlice.actions;

export default chatSlice.reducer;
