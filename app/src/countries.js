
import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import { Link } from "react-router-dom";
import './style.css';

function Countries({countries}) {

  return (
    <>
      <Box sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        <nav aria-label="main mailbox folders">
          <List>
            {countries.map((i) => (
              <ListItem disablePadding>
                <ListItemButton>
                  <Link className="link" to={`/${i.name.common}`}>
                    <ListItemText primary={i.name.common} />
                  </Link>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </nav>
        <Divider />
      </Box>
    </>
  );
}

export default Countries;
