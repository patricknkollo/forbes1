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
          <p>
            In Case of issues with our services please don't hesitate to contact
            us under the followings address and number
          </p>
          <div className="contacts">
            <div className="list1">
              <Paper>
                <Typography paragraph>
                  <p>Our availability in Germany</p>
                  <p>Mo and Fr: from 09:00 am until 2:00 pm</p>

                  <p>thu and tue: from 09:00 am until 5:00 pm</p>
                  <p>Wed: from 09:00 am until 11:00 am</p>
                  <p>Mo and Fr: from 09:00 am until 2:00 pm</p>
                  <p>Tel: +87 84621597523</p>
                  <p>Fax: +87 84621597546</p>
                  <p>email: afrforbes@gmx.com</p>
                </Typography>
              </Paper>
              <Paper>
                <Typography paragraph>
                  <p>Our availability in spain</p>
                  <p>Mo and Fr: from 09:00 am until 2:00 pm</p>

                  <p>thu and tue: from 09:00 am until 5:00 pm</p>
                  <p>Wed: from 09:00 am until 11:00 am</p>
                  <p>Mo and Fr: from 09:00 am until 2:00 pm</p>
                  <p>Tel: +87 84621597523</p>
                  <p>Fax: +87 84621597546</p>
                  <p>email: afrforbes@gmx.com</p>
                </Typography>
              </Paper>
            </div>
            <div className="list2">
              <Paper>
                <Typography paragraph>
                  <p>Our availability in USA</p>
                  <p>Mo and Fr: from 09:00 am until 2:00 pm</p>

                  <p>thu and tue: from 09:00 am until 5:00 pm</p>
                  <p>Wed: from 09:00 am until 11:00 am</p>
                  <p>Mo and Fr: from 09:00 am until 2:00 pm</p>
                  <p>Tel: +87 84621597523</p>
                  <p>Fax: +87 84621597546</p>
                  <p>email: afrforbes@gmx.com</p>
                </Typography>
              </Paper>
              <Paper>
                <Typography paragraph>
                  <p>Our availability in UK</p>
                  <p>Mo and Fr: from 09:00 am until 2:00 pm</p>

                  <p>thu and tue: from 09:00 am until 5:00 pm</p>
                  <p>Wed: from 09:00 am until 11:00 am</p>
                  <p>Mo and Fr: from 09:00 am until 2:00 pm</p>
                  <p>Tel: +87 84621597523</p>
                  <p>Fax: +87 84621597546</p>
                  <p>email: afrforbes@gmx.com</p>
                </Typography>
              </Paper>
            </div>
          </div>
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
              <DemoItem label="Controlled calendar">
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
