import { createSlice,createAsyncThunk} from "@reduxjs/toolkit";

export const featchCocktails=createAsyncThunk("cocktails/featchCoktails", async ()=>{
    return fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=").then(res=>res.json());
})

export const featchSingleCocktail=createAsyncThunk("cocktails/featchSingleCocktail", async({id})=>{
    return fetch (`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`).then(res=>res.json());
})

export const featchSearchCocktail=createAsyncThunk("cocktails/featchSearchCocktail", async()=>{
    return fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchText}`).then(res=>res.json());
})


const cocktailSlice=createSlice({
    name:'cocktails',
    initialState:{
        loading:false,
        cocktails:[],
        error:null,
        cocktail:[]
    },
    extraReducers:{
        [featchCocktails.pending]:(state, action)=>{
            state.loading=true;
        },

        [featchCocktails.fulfilled]:(state, action)=>{
            state.loading=false,
            state.cocktails=action.payload.drinks
        },

        [featchCocktails.rejected]:(state, action)=>{
            state.loading=false,
            state.error=action.payload
        },

        [featchSingleCocktail.pending]:(state, action)=>{state.loading=true;},

        [featchSingleCocktail.fulfilled]:(state, action)=>{
            state.loading=false,
            state.cocktail=action.payload.drinks;
        },

        [featchSingleCocktail.rejected]:(state, action)=>{
            state.loading=false,
            state.error=action.payload;
        },

        [featchSearchCocktail.pending]:(state,action)=>{state.loading=true},

        [featchSearchCocktail.fulfilled]:(state,action)=>{
            state.loading=false,
            state.cocktails=action.payload.drinks
        },

        [featchSearchCocktail.rejected]:(state, action)=>{state.loading=false,
        state.error=action.payload;}
    }
})

export default cocktailSlice.reducer;