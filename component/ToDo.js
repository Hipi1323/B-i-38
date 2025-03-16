"useclient"
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { useEffect, useState } from "react"
import '../App.css';
export const Todo = () => {
    const [productList, setProductList] = useState();
    // const[skip, setSkip] = useState(0);
    // const Limit = 6;
    // const handleChangePage = (event) =>{
    //     const page = parseInt(event.target.value);
    //     setSkip(Limit * page)
    // }
    useEffect(() => {
        setTimeout(() => {
            fetch(`https://fakestoreapi.com/products?limit=6&skip=6`)
                .then(response => response.json())
                .then(data => {
                    setProductList(data);
                })
        }
            , 500)
    }, []);

    return (
        <>
            <div className="Product-list">
                {productList ? (
                    productList.map(items => (
                        <div className="skeleton-elemen">
                            <img className="font-image" src={items.image} />
                            <h3>{items.title}</h3>
                            <div className="child__elementOther">
                                <p>{items.price}$</p>
                                <button className="button__Buy">Buy</button>
                            </div>
                        </div>

                    ))
                ) : (
                    <>
                    {Array(6).fill("").map((items,index) =>(
                         <div className="skeleton-elemen">
                            <Skeleton className="font-image" />
                            <Skeleton className='font-title' />
                            <div className="child__elementOther">
                                <Skeleton className="font-price" width="55.21px"/>
                                <Skeleton className="button__Buy" width="56px"/>
                            </div>
                        </div>
                    )    
                    )}
                    </>
                )}
            </div>
            <select >
                <option value={1}>page 1</option>
                <option value={2}>page 2</option>
                <option value={3}>page 3</option>
                <option value={4}>page 4</option>
            </select>
        </>
    )
}



