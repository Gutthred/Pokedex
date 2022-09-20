import React from "react";
import axios from "axios";
import { PokemonCard } from "../components/pokemon/PokemonCard";
import { NavBar } from "../components/navBar/NavBar";
import { Container } from "@mui/system";
import { Grid } from "@mui/material";
import { useState, useEffect } from "react";
import ProgressBar from "../components/progressBar/ProgressBar";

export const Home = () => {
  const [pokemons, setPokemons] = useState([]);

  const getPokemons = async () => {
    var pokemonId = [];
    for (var i = 1; i < 387; i++) {
      pokemonId.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
    }
    const response = await axios
      .all(pokemonId.map((id) => axios.get(id)))
      .then((res) => setPokemons(res));

    return response;
  };

  const pokemonFilter = (name) => {
    var filteredPokemons = [];
    if (name === "") {
      getPokemons();
    }
    for (var i in pokemons) {
      if (pokemons[i].data.name.includes(name)) {
        filteredPokemons.push(pokemons[i]);
      }
    }

    setPokemons(filteredPokemons);
  };

  useEffect(() => {
    getPokemons();
    pokemonFilter();
  }, []);

  return (
    <>
      <NavBar pokemonFilter={pokemonFilter} />
      <Container maxWidth="false" sx={{ backgroundColor: "#f0f0f0" }}>
        <Grid container spacing={2}>
          {pokemons.length === 0 ? (
            <ProgressBar />
          ) : (
            pokemons.map((pokemon, key) => {
              return (
                <Grid item xs={12} sm={6} md={4} lg={2} key={key}>
                  <PokemonCard
                    name={pokemon.data.name}
                    img={pokemon.data.sprites.front_default}
                    types={pokemon.data.types}
                  />
                </Grid>
              );
            })
          )}
        </Grid>
      </Container>
    </>
  );
};
