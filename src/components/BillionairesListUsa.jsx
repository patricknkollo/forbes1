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
  // Button,
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
import lpage from "./images/larry_page.png";
import zuck from "./images/zuck.png";
import ellison from "./images/ellison.png";
import musk from "./images/elon_musk.png";
import SidebarComponent from "./Sidebar";
import "./BillionairesList.css";

const drawerWidth = 240;

export default function UsaList() {
  const { window } = () => Window;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [rows, setRows] = React.useState([]);
  const [attribut, setAttribut] = React.useState("");

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
              <img src={gates} alt="Mr. Bill Gates" width="500" height="400" />
              <img src={musk} alt="Mr. Elon Musk" width="500" height="400" />
              <img src={bezos} alt="Mr. Jeff Bezos" width="500" height="400" />
              <img src={ellison} alt="Mr. Ellison" width="500" height="400" />
              <img src={lpage} alt="Mr. Page" width="500" height="400" />
              <img src={zuck} alt="Mr. zuck" width="500" height="400" />
            </Carousel>
          </div>
          <h2>Who Are the Richest People in the World?</h2>
          <Typography
            fontFamily={"serif"}
            textAlign={"justify"}
            paragraph
            //  width={700}
            //marginLeft={20}
          >
            The list of the richest people in the world has changed
            significantly during the past few years. As company values rise and
            fall, and as people continue to give away their money, the identity
            of the richest person in the world can change. For example, many
            people believe Jeff Bezos is the richest person in the world. He is
            the founder of Amazon, and his net worth changes based on the value
            of Amazon itself. It is widely believed that he is worth more than
            $131 billion. Bill Gates was the richest person in the world for a
            long time. He is the founder of Microsoft, and he is heavily
            involved in philanthropic efforts. Many people believe he is worth
            close to $100 billion.
          </Typography>
          <h2>Is There a Trillionaire?</h2>
          <div className="paragraph">
            <Typography
              fontFamily={"serif"}
              textAlign={"justify"}
              paragraph
              //marginLeft={20}
              //   width={700}
              position={""}
            >
              <p>
                Right now, there is probably not a trillionaire, but there is
                someone who is gaining on, and may have even passed Jeff Bezos
                in terms of overall value. The French business tycoon, Bernard
                Arnault, is the chairman and CEO of the French luxury goods
                conglomerate called LVMH. This is a company that is responsible
                for producing a wide variety of luxury goods that are sold all
                over the world, and its value has gone up quickly, meaning that
                Bernard Arnault’s net worth has gone up as well. Therefore, some
                people believe that he will become a trillionaire soon, if he is
                not one already.
              </p>
            </Typography>
          </div>
          <h2>Why Does Net Worth Change So Fast?</h2>
          <Typography
            fontFamily={"serif"}
            textAlign={"justify"}
            paragraph
            //width={700}
            //marginLeft={20}
            marginBottom={10}
          >
            Some people are wondering how someone's net worth can change so
            quickly. This has to do with the rise and fall of stock prices. The
            market cap of a publicly-traded company is closely related to how
            much its founder, chairman, and CEO are worth. For example, if
            Amazon's stock price goes down, its overall market cap goes down as
            well. Because the net worth of Jeff Bezos is closely tied to the
            value of Amazon stock, his value will drop when the share price of
            Amazon drops as well. Conversely, when Amazon stock rises in value,
            his net worth will go up as well. Many people struggle to quantify
            what it means to have a million dollars, let alone a trillion
            dollars. To put it bluntly, a fortune of 1 trillion dollars is a
            crazy amount of money. If the median net worth of households in the
            United States is approximately $120,000, a trillionaire would have
            an amount of money that is equal to more than 8 million times that
            of the typical American family. Clearly, this is an amount of money
            that most people struggle to conceptualize. Furthermore, there are
            some very successful and developed countries that do not have a net
            worth of 1 trillion dollars. This amount of money is more than the
            GDP of Austria, Sweden, and Switzerland, all of which are considered
            wealthy. There are only 18 countries that have a GDP that is greater
            than 1 trillion dollars. Here are the 10 countries with the highest
            number of billionaires:
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
            //width={700}
            //marginLeft={20}
          >
            <h3>
              With a net worth of USD 187 billion as per the Bloomberg
              Billionaires Index on 1 June 2023, Bernard Arnault is the
              second-richest person in the world.
            </h3>
          </Typography>

          <Typography
            fontFamily={"serif"}
            textAlign={"justify"}
            paragraph
            // width={700}
            //marginLeft={20}
            marginBottom={15}
          >
            The French business magnet is the chairman and CEO of luxury goods
            conglomerate LVMH Moët Hennessy Louis Vuitton. He has been
            spearheading the company – the world’s largest luxury products maker
            – since 1989.On 5 April 2023, he became only the third person to
            exceed the USD 200-billion-mark, as per Bloomberg. It was the first
            time that Arnault entered the highly exclusive club, which has
            previously been graced by the likes of Elon Musk and Jeff Bezos. As
            such, Arnault became the first person outside the US to have a net
            worth of over USD 200 billion at the time.Arnault graduated as an
            engineer from École Polytechnique in Paris, France. He started
            working as an engineer at his father’s construction company –
            Ferret-Savinel. He became the company’s chairman in 1978, and also
            had it renamed to Férinel Inc., with a reoriented focus on real
            estate.Arnault remained with the company till 1984. He used USD 15
            million of his own wealth to raise a total of USD 80 million
            required to purchase Boussac Saint-Frères. This marked a turning
            point in his career as Boussac Saint-Frères owned the fashion house,
            Christian Dior. On the personal front, Arnault’s family includes his
            second wife, Hélène Mercier. He has five children – Delphine,
            Antoine, Alexandre, Frédéric and Jean. All five are involved with
            LVMH in various capacities.
          </Typography>
          <Typography
            sx={{
              backgroundColor: "yellow",
              height: 75,
              marginBottom: 15,
              fontWeight: "bold",
              textAlign: "center",
              fontSize: 30,
              fontFamily: "monospace",
              verticalAlign: "baseline",
            }}
          >
            THE REAL-TIME BILLIONAIRES LIST
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
                  <TableRow sx={{ backgroundColor: "yellow" }}>
                    <TableCell
                      sx={{
                        fontSize: 18,
                        fontFamily: "serif",
                        fontWeight: "bold",
                      }}
                    >
                      id
                    </TableCell>
                    <TableCell
                      sx={{
                        fontSize: 18,
                        fontFamily: "serif",
                        fontWeight: "bold",
                      }}
                      align="right"
                    >
                      firstname
                    </TableCell>
                    <TableCell
                      sx={{
                        fontSize: 18,
                        fontFamily: "serif",
                        fontWeight: "bold",
                      }}
                      align="right"
                    >
                      name
                    </TableCell>
                    <TableCell
                      sx={{
                        fontSize: 18,
                        fontFamily: "serif",
                        fontWeight: "bold",
                      }}
                      align="right"
                    >
                      age
                    </TableCell>
                    <TableCell
                      sx={{
                        fontSize: 18,
                        fontFamily: "serif",
                        fontWeight: "bold",
                      }}
                      align="right"
                    >
                      networth&nbsp;($)
                    </TableCell>
                    <TableCell
                      sx={{
                        fontSize: 18,
                        fontFamily: "serif",
                        fontWeight: "bold",
                      }}
                      align="right"
                    >
                      unity
                    </TableCell>
                    <TableCell
                      sx={{
                        fontSize: 18,
                        fontFamily: "serif",
                        fontWeight: "bold",
                      }}
                      align="right"
                    >
                      country
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows
                    .filter(
                      (row) =>
                        (row.nom.toLowerCase().includes(attribut) ||
                          row.prenom.toLowerCase().includes(attribut)) &&
                        row.pays.toLowerCase().includes("usa")
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
                        <TableCell
                          sx={{ fontSize: 18, fontFamily: "serif" }}
                          align="right"
                        >
                          {row.prenom}
                        </TableCell>
                        <TableCell
                          sx={{ fontSize: 18, fontFamily: "serif" }}
                          align="right"
                        >
                          {row.nom}
                        </TableCell>
                        <TableCell
                          sx={{ fontSize: 18, fontFamily: "serif" }}
                          align="right"
                        >
                          {" "}
                          {Math.abs(
                            new Date(
                              Date.now() - new Date(row.age).getTime()
                            ).getUTCFullYear() - 1970
                          )}
                        </TableCell>
                        <TableCell
                          sx={{ fontSize: 18, fontFamily: "serif" }}
                          align="right"
                        >
                          {row.networth}
                        </TableCell>
                        <TableCell
                          sx={{ fontSize: 18, fontFamily: "serif" }}
                          align="right"
                        >
                          {row.unite}
                        </TableCell>
                        <TableCell
                          sx={{ fontSize: 18, fontFamily: "serif" }}
                          align="right"
                        >
                          {row.pays}
                        </TableCell>
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
