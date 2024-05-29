import { useParams } from "react-router-dom";
import React from "react";

// import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";

function PageCountry({ countries }) {
  let { name } = useParams();
  const country = countries.find((country) => country.name.common === name);
  if (!country) {
    return (
      <List sx={style}>
        <ListItem>
          <ListItemText primary="Country doesn't exist" />
        </ListItem>
        <Divider component="li" />
      </List>
    );
  }

  const style = {
    py: 0,
    width: "100%",
    maxWidth: 360,
    borderRadius: 2,
    border: "1px solid",
    borderColor: "divider",
    backgroundColor: "background.paper",
  };

  return (
    <List sx={style}>
      <ListItem>
        <ListItemText primary={country.name.common} />
      </ListItem>
      <Divider component="li" />
      <ListItem>
        <ListItemText primary={country.capital} />
      </ListItem>
      <Divider component="li" />
      <ListItem>
        <ListItemText primary={country.flag} />
      </ListItem>
      <Divider component="li" />
    </List>
  );
}

export default PageCountry;
