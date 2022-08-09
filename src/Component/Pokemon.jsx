import React from "react";
import axios from "axios"
import { useState } from "react";
import { useEffect } from "react";
import async from "async";
import "../style/pokemon.css"

import LocationOnIcon from '@mui/icons-material/LocationOn';
import SearchIcon from '@mui/icons-material/Search';
import { borderRadius } from "@mui/system";


export const Pokemon = () => {

    const [data , setData] = useState([])
    const [search , setSearch] = useState()

    console.log(search)

    useEffect(() => {
        getdata()
    },[])


    const getdata = () =>  {

        axios.get("https://pokeapi.co/api/v2/pokemon/").then( function(res){

            var pokedata = res.data.results;
            let index = 0;
            async.forEach(pokedata, async (item, callback) => {
                let newObj = await axios.get(`https://pokeapi.co/api/v2/pokemon/${item.name}`);
                pokedata[index] = {...newObj.data};
                index++;
                callback;
            }, err => {
                if(err) {
                 return console.log(err);
                }
                setData(pokedata);

                console.log(pokedata)
            });
        })
    }


    const searchpokemon = () => {

    }

    return(
        <div>
            <img src="http://www.piratesandprincesses.net/wp-content/uploads/2020/11/Pokemon.jpg" width={"800px"} alt="" />

            <div style={{display:"flex" ,
                    marginLeft:"530px",
                    borderRadius:"10px"

                    
            }}>
                <img className="pikachu_gif" src="https://c.tenor.com/gRa4M7rkVXcAAAAC/lycanroc-pokemon.gif" alt="" />
                <img  className="wolf_gif" src="https://i.pinimg.com/originals/0e/20/e5/0e20e5f565d7c1ceffa70c4958ea706f.gif" alt="" />


            </div>


            <div className="search_bar_div">
                    <input 
                        type="text" 
                        placeholder="Search" 
                        className="Search_bar_input"
                        onChange={((el) => {
                            setSearch(el.target.value)
                        }) }
                    />
                    <SearchIcon
                        
                    />
            </div>

           

            {
                data.map((el , i) => {

                   
                    if(search == el.name){
                        return(
                            <div  key={i}>
                                <img src={el.sprites.back_default} alt="img not found" />  
                                <p>{el.name}</p>
                            </div>
                        )
                    }
                })
            }
            
            <div className="main_div">
                {
                    data.map((el , i) => {
                        return(
                            <div className="pokemon_div" key={i}>
                                <img src={el.sprites.back_default} alt="img not found" />  
                            Name: <p className="pokemon_name">{el.name}</p>
                            </div>
                        )
                    })
                }

            </div>
        </div>
    )
}