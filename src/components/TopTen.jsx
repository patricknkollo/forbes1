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

export default function TopTenList() {
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
      const result = await axios.get(
        "http://localhost:8080/api/employeur/topten"
      );

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
            // width={700}
            //marginLeft={20}
            marginBottom={10}
            marginTop={5}
          >
            The World's Billionaires is an annual ranking of people who are
            considered to have a net worth of $1 billion or more, by the
            American business magazine Forbes. The list was first published in
            March 1987.[1] The total net worth of each individual on the list is
            estimated and is cited in United States dollars, based on their
            documented assets and accounting for debt and other factors. Royalty
            and dictators whose wealth comes from their positions are excluded
            from these lists.[3] This ranking is an index of the wealthiest
            documented individuals, excluding any ranking of those with wealth
            that is not able to be completely ascertained.[4] In 2018, Amazon
            founder Jeff Bezos was ranked at the top for the first time and
            became the first centibillionaire included in the ranking,[5]
            surpassing Microsoft founder Bill Gates, who had topped the list 18
            of the previous 24 years. In 2022, after topping the list for four
            years, Bezos was surpassed by Elon Musk.[6] In 2023, Musk was in
            turn surpassed by French businessman Bernard Arnault, after topping
            the list for just a year. Arnault became the first French person to
            top the list.
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
            marginBottom={10}
            marginTop={5}
          >
            <p>
              {" "}
              Bernard Jean Étienne Arnault (French: [bɛʁnaʁ ʒɑ̃ etjɛn aʁno]; born
              5 March 1949) is a French business magnate, investor, and art
              collector.[1][2] He is the founder, chairman, and chief executive
              officer of LVMH Moët Hennessy Louis Vuitton, the world's largest
              luxury goods company.[3] Arnault and his family have an estimated
              net worth of US$187 billion as of June 2023, according to BBC
              News, making him the second wealthiest person in the world.
            </p>
            <p>
              Bernard Jean Étienne Arnault was born on 5 March 1949 in
              Roubaix.[5][6] His mother, Marie-Josèphe Savinel, daughter of
              Étienne Savinel, had a "fascination for Dior".[citation needed]
              His father, manufacturer Jean Léon Arnault, a graduate of École
              Centrale Paris, owned the civil engineering company
              Ferret-Savinel.[6] Raised in a "strict Catholic-Auvergne" style by
              his devoutly Catholic grandmother, Arnault attended elite Catholic
              schools as a child.[7][8]
            </p>
            <p>
              Arnault began his career in 1971, at Ferret-Savinel, and was its
              president from 1978 to 1984.[6][10] In 1984, Arnault, then a young
              real estate developer, heard that the French government was set to
              choose someone to take over the Boussac Saint-Frères empire, a
              textile and retail conglomerate that owned Christian Dior.[11]
              With the help of Antoine Bernheim, a senior partner of Lazard
              Frères, Arnault acquired the Financière Agache, a luxury goods
              company.[12] He became the CEO of Financière Agache and
              subsequently won the bidding war for Boussac Saint-Frères, buying
              the group for a ceremonial one franc and effectively took control
              of Boussac Saint-Frères. Along with Christian Dior, Boussac's
              assets included the department store Le Bon Marché, the retail
              shop Conforama, and the nappy manufacturer Peaudouce.[citation
              needed] After Arnault bought Boussac, he laid off 9,000 workers in
              two years, after which he acquired the nickname "The
              Terminator".[11] He then sold nearly all of the company's assets,
              keeping only the Christian Dior brand and Le Bon Marché department
              store.[citation needed] By 1987, the company was profitable again
              and booked earnings of $112 million on a revenue stream of $1.9
              billion
            </p>
          </Typography>

          <img src={gates} alt="Mr. Bill gates" width="500" height="500" />
          <Typography
            paragraph
            fontFamily={"serif"}
            textAlign={"justify"}
            justifyContent={"center"}
            //width={700}
            //marginLeft={20}
            marginBottom={15}
            marginTop={5}
          >
            <p>
              William Henry Gates III (born October 28, 1955) is an American
              business magnate, investor, and philanthropist. He is best known
              for co-founding software giant Microsoft, along with his late
              childhood friend Paul Allen.[2][3] During his career at Microsoft,
              Gates held the positions of chairman, chief executive officer
              (CEO), president and chief software architect, while also being
              its largest individual shareholder until May 2014.[4] He was a
              major entrepreneur of the microcomputer revolution of the 1970s
              and 1980s.
            </p>
            <p>
              Bill Gates was born in Seattle, Washington on October 28, 1955.[3]
              He is the son of William H. Gates Sr.[b] (1925–2020) and Mary
              Maxwell Gates (1929–1994).[22] His ancestry includes English,
              German, and Irish/Scots-Irish.[23] His father was a prominent
              lawyer, and his mother served on the board of directors for First
              Interstate BancSystem and the United Way of America. Gates's
              maternal grandfather was J. W. Maxwell, a national bank president.
              Gates has an older sister Kristi (Kristianne) and a younger sister
              Libby. He is the fourth of his name in his family but is known as
              William Gates III or "Trey" (i.e., three) because his father had
              the "II" suffix.[24][25] The family lived in the Sand Point area
              of Seattle in a home that was damaged by a rare tornado when Gates
              was seven years old
            </p>
            <p>
              Early in his life, Gates observed that his parents wanted him to
              pursue a law career.[27] When he was young, his family regularly
              attended a church of the Congregational Christian Churches, a
              Protestant Reformed denomination.[28][29][30] Gates was small for
              his age and was bullied as a child.[25] The family encouraged
              competition; one visitor reported that "it didn't matter whether
              it was hearts or pickleball or swimming to the dock; there was
              always a reward for winning and there was always a penalty for
              losing".[31] Gates (right) with Paul Allen seated at Teletype
              Model 33 ASR terminals in Lakeside School, 1970 At 13, he enrolled
              in the private Lakeside prep school,[32][33] where he wrote his
              first software program.[34] When he was in the eighth grade, the
              Mothers' Club at the school used proceeds from Lakeside School's
              rummage sale to buy a Teletype Model 33 ASR terminal and a block
              of computer time on a General Electric (GE) computer for the
              students.[35] Gates took an interest in programming the GE system
              in BASIC, and he was excused from math classes to pursue his
              interest. He wrote his first computer program on this machine, an
              implementation of tic-tac-toe that allowed users to play games
              against the computer. Gates was fascinated by the machine and how
              it would always execute software code perfectly.[36] After the
              Mothers Club donation was exhausted, Gates and other students
              sought time on systems including DEC PDP minicomputers. One of
              these systems was a PDP-10 belonging to Computer Center
              Corporation (CCC) which banned Gates, Paul Allen, Ric Weiland, and
              Gates's best friend and first business partner Kent Evans, for the
              summer after it caught them exploiting bugs in the operating
              system to obtain free computer time.[3]
            </p>
          </Typography>

          <img src={musk} alt="Mr. Musk" width="500" height="400" />
          <Typography
            fontFamily={"serif"}
            textAlign={"justify"}
            paragraph
            //width={700}
            //marginLeft={20}
            marginBottom={15}
            marginTop={5}
          >
            <p>
              Elon Reeve Musk (/ˈiːlɒn/ EE-lon; born June 28, 1971) is a
              business magnate and investor. He is the founder, CEO and chief
              engineer of SpaceX; angel investor, CEO and product architect of
              Tesla, Inc.; owner, CTO and chairman of Twitter; founder of the
              Boring Company and X Corp.; co-founder of Neuralink and OpenAI;
              and president of the philanthropic Musk Foundation. Musk is the
              wealthiest person in the world according to the Bloomberg
              Billionaires Index and Forbes's Real Time Billionaires list as of
              June 2023, primarily from his ownership stakes in Tesla and
              SpaceX, with an estimated net worth of around $225 billion
              according to Bloomberg and $235 billion according to
              Forbes.[4][5][6]
            </p>
            <p>
              Musk was born in Pretoria, South Africa, and briefly attended the
              University of Pretoria before moving to Canada at age 18,
              acquiring citizenship through his Canadian-born mother. Two years
              later, he matriculated at Queen's University and transferred to
              the University of Pennsylvania, where he received bachelor's
              degrees in economics and physics. He moved to California in 1995
              to attend Stanford University. After two days, he dropped out and,
              with his brother Kimbal, co-founded the online city guide software
              company Zip2. In 1999, Zip2 was acquired by Compaq for $307
              million and Musk co-founded X.com, a direct bank. X.com merged
              with Confinity in 2000 to form PayPal, which eBay acquired for
              $1.5 billion in 2002. With $175.8 million, Musk founded SpaceX in
              2002, a spaceflight services company. In 2004, he was an early
              investor in the electric vehicle manufacturer Tesla Motors, Inc.
              (now Tesla, Inc.). He became its chairman and product architect,
              assuming the position of CEO in 2008. In 2006, he helped create
              SolarCity, a solar energy company that was later acquired by Tesla
              and became Tesla Energy. In 2015, he co-founded OpenAI, a
              nonprofit artificial intelligence research company. The following
              year, he co-founded Neuralink—a neurotechnology company developing
              brain–computer interfaces—and the Boring Company, a tunnel
              construction company. Musk has also proposed a hyperloop
              high-speed vactrain transportation system. In 2022, his
              acquisition of Twitter for $44 billion was completed.
            </p>
            <p>
              Musk has expressed views that have made him a polarizing figure.
              He has been criticized for making unscientific and misleading
              statements, including that of spreading COVID-19 misinformation.
              In 2018, the U.S. Securities and Exchange Commission (SEC) sued
              Musk for falsely tweeting that he had secured funding for a
              private takeover of Tesla. Musk stepped down as chairman of Tesla
              and paid a $20 million fine as part of a settlement agreement with
              the SEC.
            </p>
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
                    <TableCell>id</TableCell>
                    <TableCell align="right">prenom</TableCell>
                    <TableCell align="right">nom</TableCell>
                    <TableCell align="right">age</TableCell>
                    <TableCell align="right">networth&nbsp;($)</TableCell>
                    <TableCell align="right">unite</TableCell>
                    <TableCell align="right">country</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
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
                        {" "}
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
                href="http://localhost:8080/api/employeur/topten/report"
                color="success"
                id="pdfbutton"
                /*  sx={{ height: 15, marginBottom: 0, marginTop: 5 }} */
              >
                pdf
              </Button>
            </div>
          </div>
          <Button>Primary</Button>
          <Button disabled>Disabled</Button>
          <Button href="#text-buttons">Link</Button>
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
