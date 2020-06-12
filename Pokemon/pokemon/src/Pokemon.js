import React,{Component} from 'react';
import axios from 'axios';



class Pokemon extends Component {
  state = {
    name: '',
    image: ''

  }


  url = this.props.url;

   componentDidMount() {
    axios.request(this.url)
      .then(response => {
        this.setState({name:response.data.name, image:response.data.sprites.front_shiny});
      })
      .catch(function (error) {
        console.log(error);
    });
  }

  render() {
    
    
    
      
      if(document.getElementById('pokemonContainer') !== null) {
        var elmnt = document.getElementById('pokemonContainer');
        setTimeout(() => {
          elmnt.scrollIntoView();
        }, 500);
        
        
      }
      
   
   
   
    return (
        
     <div id = 'pokemonContainer'>
         <h1 className = 'pokemonTitle'>{this.state.name.charAt(0).toUpperCase() + this.state.name.slice(1)}</h1>
         <img className = 'pokemonImage' src = {this.state.image} alt  = 'Pokemon!'></img>
     </div>
    )
  }
}

export default Pokemon;