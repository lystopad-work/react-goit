import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import api, {token} from "../http";

export const signup = createAsyncThunk('auth/register',
    async (registerData) => {
        try {
            await api.post('/users', registerData)
            return {
                email: "user1@mail.com",
                token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEifQ.BQmWM1mXBfpTw_Tv-yR3qodI0OoRmrm3Tlz6ZR60Yi4"
            }
        } catch (e) {
            console.log('error', e)
        }
    }
)

export const login = createAsyncThunk('auth/login',
    async (loginData) => {
        try {
            const response = await api.post('/users', loginData)
            const hardCodedDataBaseResponse = {
                email: "user1@mail.com",
                token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEifQ.BQmWM1mXBfpTw_Tv-yR3qodI0OoRmrm3Tlz6ZR60Yi4"
            }

            token.set(hardCodedDataBaseResponse.token)

            return hardCodedDataBaseResponse;
        } catch (e) {
            console.log('error', e)
        }
    }
)

export const logOut = createAsyncThunk('auth/logout',
    async () => {
        const responseFromBackend = await api.post('/users');
        if (responseFromBackend) {
            token.unset();
        }
})

export const getCurrentUser = createAsyncThunk('auth/getUser',
    async (_, thunkData) => {
       try {
           const storeData = thunkData.getState();

           const token = storeData.authReducer.token;
           if (token) {
               // const backendResponse = await api.post('/auth/getuser', token) // RESPONSE = USER{}

               return {
                   email: "user1@mail.com", // ЦЕ ОТРИМУЄМО З БЕКЕНДУ У ВІДПОВІДЬ
               }
           }
           if (!token) {
               return thunkData.rejectWithValue('Token is not detected')
           }
       } catch (e) {
           thunkData.rejectWithValue(e)
       }
    });


const initialState = {
    user: { email: null },
    token: null,
    isAuth: false
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: {
        [login.fulfilled]: (state, action) => {
            const {token, email} = action.payload;
            state.user.email = email;
            state.token = token;
            state.isAuth = true;
        },
        [logOut.fulfilled]: (state, _) => {
            state.user = initialState.user;
            state.isAuth = false;
            state.token = ''
        },
        [getCurrentUser.fulfilled] : (state, action) => {
            state.user = action.payload;
            state.isAuth = true;
        }
    }
})



export default authSlice.reducer;