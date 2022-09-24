import React,{useRef} from 'react'
import { useDispatch } from 'react-redux'
import { featchSearchCocktail } from '../Redux/features/cocktailSlice'



const SearchBox = () => {
    const searchTerm=useRef();
    const dispatch=useDispatch();

    const handleChange=()=>{
        const searchText=searchTerm.current.value;
        dispatch(featchSearchCocktail({searchText}))
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
    }
  return (
    <>
      <div className="d-flex flex-column align-items-center justify-content-center mt-4">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              type="text"
              ref={searchTerm}
              onChange={handleChange}
              className="form-control"
              placeholder="Serach Here"
              style={{ width: "350px" }}
            />
          </div>
        </form>
      </div>
    </>
  )
}

export default SearchBox