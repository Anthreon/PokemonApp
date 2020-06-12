import React,{Component} from 'react';
import Pokemon from './Pokemon';


class PokemonButton extends Component {

    state = {
        isPokemonVisible:false,
        url :'https://pokeapi.co/api/v2/pokemon/',
        currentPokemon: 10

    }



    loadPokemons(){
        let buffer = [];
        for(let i =0; i < 10; i++) {
            buffer.push(<Pokemon key = {i} url= {this.state.url +i} />);
            
        }

     
        
            return(
                <div className = 'outer'>
                    {buffer[this.state.currentPokemon]}
                </div>
            );
    };

    
    togglePokemon = (event) => {
        
        let pokemonID = event.currentTarget.id;
        this.setState(prevState => ({ isPokemonVisible: !prevState.isPokemonVisible ,currentPokemon: pokemonID}));
       
        };

    render() {


        
     
       const  pokemonButton = () => {
    
           
            const pokArray = this.props.name.slice(0,9);
            
            return (

                <div>
                    <div>
                        
                        <h1>{pokArray.map((pok,index)=>
                            
                            <div  id = {index+1} onClick = {this.togglePokemon} className = 'panelItems' key = {pok.name}>
                                <p >{pok.name.charAt(0).toUpperCase() +pok.name.slice(1)}</p>
                            </div>)}
                            
                        </h1>
                    
                    </div>


                   
                    <div>
                       
                     {this.loadPokemons()}
                        
                    </div>
                        
                
                </div>

               
                )
         }

         
        return(

            <div>
                 
                {pokemonButton()}
                
            </div>

        );
    }



}

 


export default PokemonButton;




