import { useEffect,useState } from "react";
import Btncount from "./components/Btncount";
import SearchBarr from "./components/SearchBarr";
import LoadingMsg from "./components/LoadingMsg";
function App() {


  const [productState, setproductState] = useState([]);
  useEffect(() => {

    fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
      .then(json => {
        
        const newProductStat = json.map((product) => {
         return product.title
        })
        setproductState(newProductStat)

      })


  }, [])

  return (
    <div className="App">
     { productState.length>0 ? <SearchBarr products={productState} /> : <LoadingMsg >Loading please wait..</LoadingMsg>
      }
      
      <Btncount anotherprop ={'Inc by '} colorProp={'blue'} propName={5} />
      <Btncount  anotherprop ={'Inc by '} colorProp={'red'} propName={1}/>

    </div>
  );
}

export default App;
