import React, { useEffect} from 'react'
import {add} from './store/cartSlice';
//action ko dispatch karny ka hook 
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, STATUSES } from './store/productSlice';


const Products = () => {
    const dispatch = useDispatch(); // dispatch sy hum thunk bhi pas karsakty 

    const {data:products,status} = useSelector((state) =>state.product);
    //const [ products,setProducts]= useState([]);
    useEffect(()=>{
               dispatch(fetchProducts())
            //    const fetchProducts = async()=>{
            //     const res = await fetch('https://fakestoreapi.com/products');
            //     const data= await res.json();
            //     console.log(data)
            //     setProducts(data)
            //    };
            //    fetchProducts();
    },[])
    //jis ky upr click kia hua product
     const handleAdd =(product)=>{
        // product ko store karna hamry store ky andr 
        // application ky andr sy ik action dispatch karty hain aur usky andr data bhi bhej sakty or wo action reducer ko call karti hai 
           dispatch(add(product));
     }
if(status===STATUSES.LOADING)
     {

        return <h2>Loading.......</h2>
}

    return (
                <div className='productsWrapper'>
                {products.map((product) => {
                    return (
               <div className="card" key={product.id}>
                        <img src={product.image} alt="" />
                        <h4>{product.title}</h4>
                        <h5>{product.price}</h5>
                        <button  className="btn" onClick={()=>{
                            handleAdd(product)
                        }}>
                            Add to cart
                        </button>
                    </div>
                  ) })}
          </div>
        );
    };
export default Products
