import React from "react";
import { PokemonCard } from "../components/pokemon/PokemonCard";
import { NavBar } from "../components/navBar/NavBar";
import { Container } from "@mui/system";
import { Grid } from "@mui/material";
import axios from "axios";
import { useState, useEffect } from "react";

export const Home = () => {
  const [pokemons, setPokemons] = useState([]);
  
  const getPokemons = () => {
      var pokemonId = [];
      for (var i = 1; i < 152; i++) {
          pokemonId.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
        }
        axios
        .all(pokemonId.map((id) => axios.get(id)))
        .then((res) => setPokemons(res));
    };
    
    useEffect(() => {
      getPokemons();
    }, []);

  return (
    <>
      <NavBar />
      <Container maxWidth="false">
        <Grid container>
          {pokemons.map((pokemon, key) => {
            return (
              <Grid item xs={2} key={key}>
                <PokemonCard
                  name={pokemon.data.name}
                  img={pokemon.data.sprites.front_default}
                />
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </>
  );
};
