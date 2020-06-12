import React,{Component} from 'react';
import './index.css';
import axios from 'axios';
import PokemonButton from './PokemonButton';

class Pokeball extends Component {
  
state = {
    isBoxVisible:false,
    url :'https://pokeapi.co/api/v2/pokemon/',
    pokemonNames: [],
    isLoading:false,
    errors:null,
    shaking : false
    
}

componentDidMount() {
    axios.get('https://pokeapi.co/api/v2/pokemon/')
    .then(response =>
        response.data.results.map(pok => ({
          name: `${pok.name} `,
          url: `${pok.url}`
        }))
      )
      .then(pokemonNames => {
        this.setState({
            pokemonNames,
            isLoading: false
        });
      })
      .catch(error => this.setState({ error, isLoading: false }));
  }



toggleBox = () => {

  this.setState(prevState => ({ isBoxVisible: !prevState.isBoxVisible , shaking: !prevState.shaking }));
    
  if(this.state.shaking) {
    document.getElementById('PokeballImage').style.animation = 'shake 1s';
    document.getElementById('PokeballImage').style.animationIterationCount = 'infinite';
  } else {
    document.getElementById('PokeballImage').style.animation = 'none';
    document.getElementById('PokeballImage').style.cursor = 'pointer';
    document.getElementById('PokeballImage').style.transform = 'scale(1.1)';
  }
  
    if(document.getElementById('pokemonContainer') !== null) {
      document.getElementById('pokemonContainer').classList.add('hideContainer');
    }
    
    
  };


  
  render() {

   
   
    const allPokemons = this.state.pokemonNames.map(function(item, i) {

            return (
            <div id = {i}  className = 'panelItems' key = {i}>
                <p className = 'panelItemsText' key={i}>{item.name.charAt(0).toUpperCase() + item.name.slice(1)}</p>
            </div>)

    
      });

      
      

      const pokemonButtons = [];


    for(let i = 0; i < 9; i++ ){
        pokemonButtons.push(allPokemons[i]);
    }

    
    return (
        
     <div>
        
       

       <div onClick = {this.toggleBox} id = 'PokeballImage'></div>
       
       <div className = {this.state.isBoxVisible ? "" : 'hidden'}>

          <div>
                <PokemonButton name = {this.state.pokemonNames}></PokemonButton>
        
          </div>

       </div>

       
       
           
     </div>
    )
  }
}

export default Pokeball;

