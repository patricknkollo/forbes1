import * as React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import Paper from "@mui/material/Paper";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import "./BillionairesList.css";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import NavbarComponent from "./Navbar";
import FooterComponent from "./Footer";
import { DateCalendar, LocalizationProvider } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import SidebarComponent from "./Sidebar";
import "./Contact.css";

const drawerWidth = 240;

export default function ContactComponent() {
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
          <h1>Our contacts</h1>
          <Typography
            fontFamily={"serif"}
            textAlign={"justify"}
            paragraph
            width={700}
            marginLeft={20}
          >
            <p>
              In Case of issues with our services please don't hesitate to
              contact us under the followings address and number
            </p>
          </Typography>

          <div className="contacts">
            <div className="list1">
              <Paper>
                <Typography
                  fontFamily={"serif"}
                  textAlign={"justify"}
                  paragraph
                  marginLeft={3}
                >
                  <p>Our availability in Germany</p>
                  <p>
                    Mo and Fr: 09:00 am - 2:00 pm thu and tue: 09:00 am - 5:00
                    pm Wed: 09:00 am - 11:00 am Mo and Fr: 09:00 am - 2:00 pm
                  </p>
                  <p>Tel: +87 84621597523</p>
                  <p>Fax: +87 84621597546</p>
                  <p>email: afrforbes@gmx.com</p>
                </Typography>
              </Paper>
              <Paper marginLeft={3}>
                <Typography
                  fontFamily={"serif"}
                  textAlign={"justify"}
                  paragraph
                  marginLeft={3}
                >
                  <p>Our availability in spain</p>
                  <p>
                    Mo and Fr: 09:00 am - 2:00 pm thu and tue: 09:00 am - 5:00
                    pm Wed: 09:00 am - 11:00 am Mo and Fr: 09:00 am - 2:00 pm
                  </p>
                  <p>Tel: +87 84621597523</p>
                  <p>Fax: +87 84621597546</p>
                  <p>email: afrforbes@gmx.com</p>
                </Typography>
              </Paper>
            </div>
            <div className="list2">
              <Paper>
                <Typography
                  fontFamily={"serif"}
                  paragraph
                  textAlign={"left"}
                  marginLeft={3}
                >
                  <p>Our availability in USA</p>
                  <p>
                    Mo and Fr: 09:00 am - 2:00 pm thu and tue: 09:00 am - 5:00
                    pm Wed: 09:00 am - 11:00 am Mo and Fr: 09:00 am - 2:00 pm
                  </p>
                  <p>Tel: +87 84621597523</p>
                  <p>Fax: +87 84621597546</p>
                  <p>email: afrforbes@gmx.com</p>
                </Typography>
              </Paper>
              <Paper>
                <Typography
                  fontFamily={"serif"}
                  textAlign={"justify"}
                  paragraph
                  marginLeft={3}
                >
                  <p>Our availability in UK</p>
                  <p>
                    Mo and Fr: 09:00 am - 2:00 pm thu and tue: 09:00 am - 5:00
                    pm Wed: 09:00 am - 11:00 am Mo and Fr: 09:00 am - 2:00 pm
                  </p>
                  <p>Tel: +87 84621597523</p>
                  <p>Fax: +87 84621597546</p>
                  <p>email: afrforbes@gmx.com</p>
                </Typography>
              </Paper>
            </div>
          </div>
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
