import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Box } from "@mui/material";

export const PokemonCard = ({ name, img, types }) => {
  const pokemonType = () => {
    if (types[1]) {
      return `${types[0].type.name} / ${types[1].type.name}`;
    }
    return types[0].type.name;
  };

  return (
    <Card sx={{backgroundColor:"#FFFFFF"}}>
      <CardActionArea>
        <CardMedia component="img" image={img} alt={name} />
        <CardContent>
          <Box display='flex' justifyContent="space-between" alignItems='center' width="100%" >
            <Typography
              gutterBottom
              variant="subtitle2"
              component="div"
            >
              {name.toUpperCase()}
            </Typography>
            <Typography
              gutterBottom
              variant="caption"
              component="div"
            >
              {pokemonType().toUpperCase()}
            </Typography>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
