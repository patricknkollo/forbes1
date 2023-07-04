import * as React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import SearchIcon from "@mui/icons-material/Search";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import "./BillionairesList.css";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import axios from "axios";
import {
  Button,
  Paper,
  Table,
  TableBody,
  TableContainer,
  TableHead,
} from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import NavbarComponent from "./Navbar";
import FooterComponent from "./Footer";
import { DateCalendar, LocalizationProvider } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import Carousel from "react-material-ui-carousel";
import bezos from "./images/jeff_bezos.png";
import gates from "./images/bill_gates.png";
import arnault from "./images/bernard_arnault.png";
import musk from "./images/elon_musk.png";
import SidebarComponent from "./Sidebar";

const drawerWidth = 240;

export default function ResponsiveDrawer() {
  const { window } = () => Window;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [rows, setRows] = React.useState([]);
  const [attribut, setAttribut] = React.useState("");
  //const [rowIndex, setRowIndex] = React.useState(1);

  const [value, setValue] = React.useState(dayjs());

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;

  React.useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get("http://localhost:8080/api/employeur/all");

      setRows(result.data);
    };

    fetchData();
  }, []);

  /*   React.useEffect(() => {
    async function fetchData() {
      // You can await here
      const response = await axios.get(
        "http://localhost:8080/api/employeur/all"
      );
      const emps = response.data;
      console.log(emps);
      setRows(emps);
    }
    fetchData();
  }, []); */

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
            //  width={700}
            //marginLeft={20}
            marginBottom={15}
            marginTop={5}
          >
            What country has the most billionaires? There are more than 2700
            billionaires globally. Over a quarter of the world’s billionaires
            live in the United States. While the number of billionaires fell
            amid the COVID-19 pandemic in 2020, the figure rebounded and grew
            again in 2021. Together, the ten countries with the most
            billionaires have 2159 billionaires, about 78.4% of the global
            total. Of these countries, Hong Kong has the most billionaires per
            million people, with 8.83. Top 10 Countries with the Highest Number
            of Billionaires: United States - 724 China - 698 (626 mainland, 71
            Hong Kong, 1 Macau) India - 140 Germany - 136 Russia - 117 Hong Kong
            - 71 Brazil - 65 Canada - 64 United Kingdom - 56 Italy - 51
          </Typography>
          <img
            src={arnault}
            alt="Mr. Bernard Arnault"
            width="500"
            height="400"
          />
          <Typography
            fontFamily={"serif"}
            textAlign={"justify"}
            paragraph
            //  width={700}
            //marginLeft={20}
            marginBottom={15}
            marginTop={5}
          >
            How many billionaires are there in the world? According to Forbes’s
            2021 list of billionaires, there were 2,755 billionaires worldwide
            in 2021, for an average of .35 billionaires per million people. This
            is 660 higher than 2020’s number, with a record high of 493 new
            billionaires joining the list. In addition, 86% of the existing
            billionaires are wealthier than they were a year ago. The United
            States has the most billionaires, with 724, followed by China
            (including Hong Kong and Macau) with 698. These two countries
            account for more than 50% of the world’s billionaires. The top
            billionaire and world’s richest individual is Jeff Bezos, the
            founder of Amazon, worth $177 billion. Tesla CEO Elon Musk follows,
            worth $151 billion. Together, the world’s billionaires are worth
            $13.1 trillion, up from $8 trillion in 2020. The list of the richest
            people in the world has changed significantly during the past few
            years. As company values rise and fall, and as people continue to
            give away their money, the identity of the richest person in the
            world can change. For example, many people believe Jeff Bezos is the
            richest person in the world. He is the founder of Amazon, and his
            net worth changes based on the value of Amazon itself. It is widely
            believed that he is worth more than $131 billion.
          </Typography>

          <Typography>
            <div
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                padding: 5,
                margin: 10,
              }}
            >
              <div className="search-box">
                <SearchIcon sx={{ paddingTop: 1 }} />
                <input
                  className="search-input"
                  onChange={(e) => {
                    console.log("the name is " + e.target.value);
                    setAttribut(e.target.value);
                  }}
                  value={attribut}
                  placeholder="search..."
                />
              </div>
            </div>
          </Typography>
          <div className="employees-table">
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>rang</TableCell>
                    <TableCell align="right">prenom</TableCell>
                    <TableCell align="right">nom</TableCell>
                    <TableCell align="right">age</TableCell>
                    <TableCell align="right">networth&nbsp;($)</TableCell>
                    <TableCell align="right">unite</TableCell>
                    <TableCell align="right">ville</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows
                    .filter(
                      (row) =>
                        row.nom.toLowerCase().includes(attribut) ||
                        row.prenom.toLowerCase().includes(attribut) ||
                        row.pays.toLowerCase().includes(attribut)
                    )
                    .map((row) => (
                      <TableRow
                        key={row.personid}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell component="th" scope="row">
                          {row.personid}
                        </TableCell>
                        <TableCell align="right">{row.prenom}</TableCell>
                        <TableCell align="right">{row.nom}</TableCell>
                        <TableCell align="right">
                          {Math.abs(
                            new Date(
                              Date.now() - new Date(row.age).getTime()
                            ).getUTCFullYear() - 1970
                          )}
                        </TableCell>
                        <TableCell align="right">{row.networth}</TableCell>
                        <TableCell align="right">{row.unite}</TableCell>
                        <TableCell align="right">{row.pays}</TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </TableContainer>
            <br></br>
            <div className="pdfButton">
              <Button
                variant="contained"
                href="http://localhost:8080/api/employeur/all/report"
                color="success"
                id="pdfbutton"
                /*  sx={{ height: 15, marginBottom: 0, marginTop: 5 }} */
              >
                pdf
              </Button>
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
