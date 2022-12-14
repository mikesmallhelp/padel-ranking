import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PeopleIcon from "@mui/icons-material/People";

export const menuItems = (
  <React.Fragment>
    <ListItemButton href="/">
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText data-testid="menuPadelGames" primary="Padel-pelit" />
    </ListItemButton>
    <ListItemButton href="/add-result-container">
      <ListItemIcon>
        <ShoppingCartIcon />
      </ListItemIcon>
      <ListItemText data-testid="menuAddResult" primary="Lisää tulos" />
    </ListItemButton>
    <ListItemButton href="/players-container">
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText data-testid="menuPlayers" primary="Pelaajat" />
    </ListItemButton>
  </React.Fragment>
);
