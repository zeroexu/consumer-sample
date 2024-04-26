import './App.css'
import HexaProduct from 'hexa-product';
import { ISettings } from 'hexa-product/dist/config/environment';


const settings: ISettings = {
  SearchProductURL: 'http://localhost:5001/product/search',
  DetailProductURL: ''
}
const environment = new HexaProduct.Environment(settings);
const datasource = new HexaProduct.ProductDatasourceMock(environment);
const productRepositiory = new HexaProduct.ProductRepositoryImpl(datasource);
const producStoreInstance = HexaProduct.useProductStore(productRepositiory);

function App() {
  const state = producStoreInstance(state => state);
  const handleGetProducts = async () => {
    await state.getProducts('cebolla');
  }
  console.log("YEEEEE", state)
  return (
    <>
      <button onClick={handleGetProducts} >Haz click</button>
    </>
  )
}

export default App
