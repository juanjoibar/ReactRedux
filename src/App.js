
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import './App.css';
import CantidadPokemont from './components/CantidadPokemont';
import CompraPokemon from './components/CompraPokemon';
//redux

import {Provider} from 'react-redux'
import store from './redux/store'
import BuscadorPokemon from './components/buscador/BuscadorPokemon';
import ResultadoPokemon from './components/buscador/ResultadoPokemon';


function App() {

  console.log(store.getState());
 

  return (
    <Provider store = {store}>


    <div className="App container">
      
     <div className='row'>

      <div className='col-12'>
        

        <div className='card mt-5' style={{maxWidth: '370px'}}>
          <div className='row no-gutters'>
            <div className='col-4'> 
            <img src={require('./img/foto.gif')} alt="foto" className='card-img' />
            </div>
            <div className='col-8'>
             <div className='card-body'>
               <div className='card-title h3 text-center'>
               <CantidadPokemont/>
               </div>
                <CompraPokemon/>
             </div>
            </div>

          </div>

        </div>

      </div>
       
       <div className='col-12 mt-4 border-top pt-3'>
         <BuscadorPokemon/>
       </div>
       <div className='col-12'>
         <ResultadoPokemon/> 
       </div>
     </div>

      

    </div>
    </Provider>
  );
}

export default App;
