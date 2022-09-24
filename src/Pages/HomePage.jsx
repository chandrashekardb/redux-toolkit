import React,{useState ,useEffect} from 'react'
import { useDispatch,useSelector} from 'react-redux';
import { Link } from 'react-router-dom';
import SpinnerAnim from '../components/shared/SpinnerAnim';
import Layout from './../components/Layout';
import { featchCocktails } from './../Redux/features/cocktailSlice';

const HomePage = () => {
  const [modifiedCocktails, setmodifiedCoktails]=useState([]);
  const {loading, cocktails, error}=useSelector((state)=>({...state.app,}))

  const dispatch=useDispatch();

  useEffect(()=>{
    dispatch(featchCocktails())
  },[])

  useEffect(()=>{
    if(cocktails){
      const newCocktails=cocktails.map(item=>{
        const {idDrink, strAlcoholic, strDrinkThumb, strGlass, strDrink}=item;
        return{
          id:idDrink,
          name:strDrink,
          img:strDrinkThumb,
          info:strAlcoholic,
          glass:strGlass
        }
      })
      setmodifiedCoktails(newCocktails)
    }else{
      setmodifiedCoktails([])
    }
  },[cocktails])

  if(loading){
    return <SpinnerAnim />
  }
  if(!cocktails){
    return(
      <Layout><h2>No Cocktail Found with this Name</h2></Layout>
    )
  }
  if(error){
    return <p>{error.message}</p>
  }

  return (
  
      
      <div className="container">
      <h1>CockTails</h1>
        <div className="row">
          {modifiedCocktails.map(item=>(
          <div className="col-md-3 mt-3 m-1" key={item.id}>
             <div className="card" style={{width: '18rem'}}>
            <img src={item.img} className="card-img-top" alt={item.name}/>
            <div className="card-body">
            <h5 className="card-title">{item.name}</h5>
            <h5 className="card-title">{item.glass}</h5>
            <p className="card-text">{item.info}</p>
           <Link to={`/products/${item.id}`} className="btn btn-primary">Details</Link>
          </div>
        </div>
      </div>

            ))}
        </div>
      </div>
    
  )
}

export default HomePage