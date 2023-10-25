import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  emailList: [],
  singleEmailBody:[],
  filterEmailList:[],
  selectedList:"unread"
}
export const counterSlice = createSlice({
  name: 'emailList',
  initialState,
  reducers: {
    initialApi:(state,action)=>{
        console.log(`initial data ${action.payload[1].id}`)
       state.emailList=action.payload
    },

    emailBodyApi:(state,action)=>{
       state.singleEmailBody=action.payload
    },

    filterEmail:(state,action)=>{
     const item= state.emailList.filter((each)=>{
        if(each.id===action.payload){
          return [each]
        }
      })
      state.filterEmailList=item
    },

    markFavoriteItem:(state,action)=>{
      const newList=state.emailList.map((each)=>{
        if(each.id===action.payload){
          return {...each,isFavorite:true}
        }else{
          return each
        }
      })
      console.log(newList)
      state.emailList=[...newList]
    },

    selectMethod:(state,action)=>{
      state.selectedList=action.payload
    }

  },
})

// Action creators are generated for each case reducer function
export const { initialApi,emailBodyApi,filterEmail ,markFavoriteItem,selectMethod} = counterSlice.actions

export default counterSlice.reducer