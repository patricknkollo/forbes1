import * as React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import "./BillionairesList.css";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import NavbarComponent from "./Navbar";
import FooterComponent from "./Footer";
import { DateCalendar, LocalizationProvider } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import Carousel from "react-material-ui-carousel";
import "./Services.css";
import bezos from "./images/jeff_bezos.png";
import gates from "./images/bill_gates.png";
import arnault from "./images/bernard_arnault.png";
import musk from "./images/elon_musk.png";
import SidebarComponent from "./Sidebar";

const drawerWidth = 240;

export default function ServiceComponent() {
  const { window } = () => Window;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const [value, setValue] = React.useState(dayjs());

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div>
      <Box>
        <NavbarComponent />
        <CssBaseline />
      </Box>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <Box
          component="nav"
          sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
          aria-label="mailbox folders"
        >
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            <SidebarComponent />
          </Drawer>
          <Drawer
            variant="permanent"
            sx={{
              display: { xs: "none", sm: "block" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
            open
          >
            <SidebarComponent />
          </Drawer>
        </Box>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            width: { sm: `calc(100% - ${drawerWidth}px)` },
          }}
        >
          <Toolbar />
          <h1>Our services</h1>
          <div>
            <Carousel>
              <img
                src={arnault}
                alt="Mr. Bernard Arnault"
                width="500"
                height="400"
              />
              <img src={gates} alt="Mr. Bill Gates" width="500" height="400" />
              <img src={musk} alt="Mr. Elon Musk" width="500" height="400" />
              <img src={bezos} alt="Mr. Jeff Bezos" width="500" height="400" />
            </Carousel>
          </div>
          <Typography paragraph></Typography>
          <Typography
            fontFamily={"serif"}
            textAlign={"justify"}
            paragraph
            //width={700}
            //marginLeft={20}
            marginBottom={15}
          >
            Consequat mauris nunc congue nisi vitae suscipit. Fringilla est
            ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar
            elementum integer enim neque volutpat ac tincidunt. Ornare
            suspendisse sed nisi lacus sed viverra tellus. Purus sit amet
            volutpat consequat mauris. Elementum eu facilisis sed odio morbi.
            Euismod lacinia at quis risus sed vulputate odio. Morbi tincidunt
            ornare massa eget egestas purus viverra accumsan in. In hendrerit
            gravida rutrum quisque non tellus orci ac. Pellentesque nec nam
            aliquam sem et tortor. Habitant morbi tristique senectus et.
            Adipiscing elit duis tristique sollicitudin nibh sit. Ornare aenean
            euismod elementum nisi quis eleifend. Commodo viverra maecenas
            accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam
            ultrices sagittis orci a.
          </Typography>
          <Typography>
            <div className="services">
              <div className="list1">
                <List>
                  <ListItem
                    key={"email"}
                    disablePadding
                    components="a"
                    href="http://localhost:3000"
                    style={{ color: "initial" }}
                  >
                    <ListItemButton>
                      <ListItemIcon></ListItemIcon>
                      <ListItemText primary={"Business Recovery Service"} />
                    </ListItemButton>
                  </ListItem>
                  <ListItem
                    key={"inbox"}
                    disablePadding
                    components="a"
                    href="http://localhost:3000"
                    style={{ color: "initial" }}
                  >
                    <ListItemButton>
                      <ListItemIcon></ListItemIcon>
                      <ListItemText primary={"Regulated industries"} />
                    </ListItemButton>
                  </ListItem>
                </List>
              </div>
              <div className="list2">
                <List>
                  <ListItem
                    key={"email"}
                    disablePadding
                    components="a"
                    href="http://localhost:3000"
                    style={{ color: "initial" }}
                  >
                    <ListItemButton>
                      <ListItemIcon></ListItemIcon>
                      <ListItemText
                        primary={
                          "Strategy, organisation, processes and systems"
                        }
                      />
                    </ListItemButton>
                  </ListItem>
                  <ListItem
                    key={"inbox"}
                    disablePadding
                    components="a"
                    href="http://localhost:3000"
                    style={{ color: "initial" }}
                  >
                    <ListItemButton>
                      <ListItemIcon></ListItemIcon>
                      <ListItemText
                        primary={
                          "Financial accounting, reporting and auditing services"
                        }
                      />
                    </ListItemButton>
                  </ListItem>
                </List>
              </div>
            </div>
          </Typography>
          <div className="employees-table"></div>
        </Box>
        <Drawer
          sx={{
            width: drawerWidth,
            // flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
          variant="permanent"
          anchor="right"
        >
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer
              components={["DateCalendar", "DateCalendar"]}
              sx={{ marginTop: 15 }}
            >
              {/* <DemoItem label="Uncontrolled calendar">
                <DateCalendar defaultValue={dayjs()} />
              </DemoItem> */}
              <DemoItem label="Calendar">
                <DateCalendar
                  value={value}
                  onChange={(newValue) => setValue(newValue)}
                />
              </DemoItem>
            </DemoContainer>
          </LocalizationProvider>
        </Drawer>
      </Box>
      <FooterComponent />
    </div>
  );
}
