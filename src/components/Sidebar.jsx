import * as React from "react";
import Divider from "@mui/material/Divider";
//import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
//import MailIcon from "@mui/icons-material/Mail";
import RequestQuoteIcon from "@mui/icons-material/RequestQuote";
import Toolbar from "@mui/material/Toolbar";

function SidebarComponent() {
  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        <ListItem
          key={"top 10"}
          disablePadding
          component="a"
          href="http://localhost:3000/top+10"
          style={{ color: "initial" }}
        >
          <ListItemButton>
            <ListItemIcon>
              <RequestQuoteIcon />
            </ListItemIcon>
            <ListItemText primary={"top10"} />
          </ListItemButton>
        </ListItem>
        <ListItem
          key={"forbes usa"}
          disablePadding
          component="a"
          href="http://localhost:3000/forbes+usa"
          style={{ color: "initial" }}
        >
          <ListItemButton>
            <ListItemIcon>
              <RequestQuoteIcon />
            </ListItemIcon>
            <ListItemText primary={"forbes usa"} />
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem
          key={"africa"}
          disablePadding
          component="a"
          href="http://localhost:3000/forbes+africa"
          style={{ color: "initial" }}
        >
          <ListItemButton>
            <ListItemIcon>
              <RequestQuoteIcon />
            </ListItemIcon>
            <ListItemText primary={"forbes africa"} />
          </ListItemButton>
        </ListItem>
        <ListItem
          key={"africa"}
          disablePadding
          component="a"
          href="http://localhost:3000/forbes"
          style={{ color: "initial" }}
        >
          <ListItemButton>
            <ListItemIcon>
              <RequestQuoteIcon />
            </ListItemIcon>
            <ListItemText primary={"forbes world"} />
          </ListItemButton>
        </ListItem>
      </List>
    </div>
  );
  return drawer;
}

export default SidebarComponent;
