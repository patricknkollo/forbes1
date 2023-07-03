import * as React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import "./BillionairesList.css";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import NavbarComponent from "./Navbar";
import FooterComponent from "./Footer";
import { DateCalendar, LocalizationProvider } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import bezos from "./images/jeff_bezos.png";
import gates from "./images/bill_gates.png";
import arnault from "./images/bernard_arnault.png";
import musk from "./images/elon_musk.png";
import Carousel from "react-material-ui-carousel";
import SidebarComponent from "./Sidebar";

const drawerWidth = 240;

export default function HomeComponent() {
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
          <h1>Forbes Billionaires</h1>
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
          <Typography
            fontFamily={"serif"}
            textAlign={"justify"}
            paragraph
            width={700}
            marginLeft={20}
            marginBottom={10}
          >
            They’re $200 billion poorer than last year, but still worth $2.1
            trillion. It was a down year for many of the planet’s 2,640
            billionaires–including those at the very top of the top. The 25
            richest people in the world are worth a collective $2.1 trillion,
            according to Forbes’ World’s Billionaires list, released
            Tuesday–down a combined $200 billion from $2.3 trillion in 2022.
          </Typography>
          <Typography
            fontFamily={"serif"}
            textAlign={"justify"}
            paragraph
            width={700}
            marginLeft={20}
            marginBottom={10}
          >
            Two-thirds of the top 25 are poorer than they were last year,
            compared to around half of the list overall. No one lost more than
            Jeff Bezos as Amazon shares crashed by 38%. The drop lopped $57
            billion from Bezos’ fortune and knocked him from No. 2 in the world
            in 2022 to No. 3 this year. This year’s second-biggest loser, Elon
            Musk, had it worse. He lost his title of world’s richest person
            after his pricey purchase of Twitter, which he funded in part by the
            sale of Tesla shares, helping to spook investors. Musk, who is worth
            $39 billion less than a year ago, is now No. 2. Two people lost
            their spot among the top 25. Zhang Yiming, who founded Tik
            Tok-parent Bytedance, dropped one place, from No. 25 to No. 26, as
            his embattled company has taken a haircut from investors. Binance
            founder Changpeng Zhao, known as CZ, fell from No. 19 last year all
            the way to No. 167 amid the crypto winter.
          </Typography>
          <Typography
            fontFamily={"serif"}
            textAlign={"justify"}
            paragraph
            width={700}
            marginLeft={20}
            marginBottom={10}
          >
            Still, it’s not all bad news among this elite set. Bernard Arnault,
            head of luxury goods giant LVMH, is up $53 billion–more than any
            billionaire, and enough to vault him into No. 1 spot for the first
            time. Eight other members of the top 25 got richer since the 2022
            ranking, including Spanish retailer Amancio Ortega (+$17.7 billion),
            Bloomberg LP cofounder and former New York mayor Michael Bloomberg
            (+$12.5 billion) and Mexican telecom mogul Carlos Slim Helú (+$11.8
            billion). With so many fortunes dropping around them, two
            billionaires joined the top 25 this year: Canadian media mogul David
            Thomson and Nike cofounder Phil Knight. Americans dominate the top
            of the billionaires ranks, taking 17 of the 25 spots, followed by
            France and India, with two apiece. The top 25 mostly made their
            money in technology (eight list members) and fashion & retail
            (seven).
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
