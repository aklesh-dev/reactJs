import { useEffect, useState } from "react"
import './style.css'


export default function LoadData(){
    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState([]); 
    const [count, setCount] = useState(0);
    const [disableBtn, setDisableBtn] = useState(false);

    async function fetchProducts(){
        try{
            setLoading(true);
            const response = await fetch(`https://dummyjson.com/products?limit=20&skip=${ count === 0 ? 0 : count * 20 }`);
            const data = await response.json();
            if(data && data.products && data.products.length){
                setProducts((prevData)=>[...prevData, ...data.products]);
                setLoading(false);
                
            }
            console.log(data);
        }
        catch(err){
            console.log(err)
        }
    }

    useEffect(() => {
        fetchProducts()
    }, [count])

    useEffect(()=>{
        if(products && products.length === 100 ) setDisableBtn(true);
        else setDisableBtn(false);
    },[products])

    if(loading){
        return <div>Data is Loading!!! Please wait.</div>
    }

    return (
        <div className="data-container">
            <div className="product-container">
                {
                    products && products.length ?
                    products.map(item => <div className="products" key={item.id}>
                        <img src={item.thumbnail} alt={item.title} />
                        <p>{item.title}</p>
                    </div>)
                    : null
                }
            </div>
            <div className="button-container">
                <button disabled={disableBtn} onClick={()=>{setCount(count+1)}}>Load More</button>
                {
                    disableBtn ? <p >No More Data</p> : null
                }
            </div>
        </div>
    )
}