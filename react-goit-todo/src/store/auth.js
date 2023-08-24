import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import api, {token} from "../http";
export const signup = createAsyncThunk('auth/register',
    async (registerData) => {
        try {
            const response = await api.post('auth/sign-up', registerData)
            console.log(response)
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
            const response = await api.post('/auth/sign-in', loginData)

            const {accessToken, user} = response.data;

            token.set(accessToken)

            return {token: accessToken, user};
        } catch (e) {
            console.log('error', e)
        }
    }
)

export const logOut = createAsyncThunk('auth/logout',
    async (loginData, thunkAPI) => {
        try {
            const token = thunkAPI.getState().authReducer.token;

            return await api.post('/auth/logout', {token})

        } catch (e) {
            thunkAPI.rejectWithValue(e)
        }
    }
)

export const getCurrentUser = createAsyncThunk('auth/getUser',
    async (_, thunkData) => {
       try {
           const storeData = thunkData.getState();
           const token = storeData.authReducer.token;

           if (token) {
               const response = await api.post('/auth/current-user', {token}) // RESPONSE = USER{}
               const {user} = response.data;
               return user;
           }
           if (!token) {
               return thunkData.rejectWithValue('Token is not detected')
           }
       } catch (e) {
           thunkData.rejectWithValue(e)
       }
    });


const initialState = {
    user: { email: null, username: null },
    token: null,
    isAuth: false,
    error: false,
    isUserFetching: false
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: {
        [login.fulfilled]: (state, action) => {
            const {token, user} = action.payload;
            state.user = user;
            state.token = token;
            state.isAuth = true;
        },
        [logOut.fulfilled]: (state, _) => {
            state.user = initialState.user;
            state.isAuth = false;
            state.token = ''
        },
        [logOut.rejected]: (state, _) => {
            state.error = 'ERROR'
        },
        [getCurrentUser.pending] : (state) => {
            state.isUserFetching = true;
        },
        [getCurrentUser.fulfilled] : (state, action) => {
            state.user = action.payload;
            state.isAuth = true;
            state.isUserFetching = false
        },
        [getCurrentUser.rejected] : (state) => {
            state.isUserFetching = false
        }
    }
})



export default authSlice.reducer;