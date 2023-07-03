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
import SidebarComponent from "./Sidebar";
import dangote from "./images/dangote_forbes_magazin.png";
import dangoteCarousel from "./images/dangote_carousel.png";
import motsepe from "./images/motsepe.png";
import dosSantos from "./images/Miss_dos_santos.png";
import adenuga from "./images/adenuga.png";
import adenugaCarousel from "./images/adenuga_carousel.png";
import africansbill from "./images/Screenshot_africans_Billionaires.png";

const drawerWidth = 240;

export default function AfricaList() {
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
        "http://localhost:8080/api/employeur/africans"
      );

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
                src={dangoteCarousel}
                alt="Mr. Dangote"
                width="500"
                height="400"
              />
              <img
                src={motsepe}
                alt="Mr. Patrice Motsepe"
                width="500"
                height="400"
              />
              <img
                src={adenugaCarousel}
                alt="Mr. Michael Adenuga"
                width="500"
                height="400"
              />
              <img
                src={dosSantos}
                alt="Mrs. Dos Santos"
                width="500"
                height="400"
              />
            </Carousel>
          </div>
          <Typography
            paragraph
            fontFamily={"serif"}
            textAlign={"justify"}
            width={700}
            marginLeft={20}
            marginBottom={7}
          >
            Africa’s wealthiest people shed a combined $3.1 billion in the past
            12 months, following a global decline for markets in 2022. As a
            group, the continent’s 19 billionaires are worth an estimated $81.8
            billion – down from the $84.9 billion that 18 African billionaires
            had 12 months ago. The 3.6% dip on the 2023 Forbes ranking follows a
            jump of 15% last year on the back of soaring stock prices from
            Nigeria to Zimbabwe. Their fortunes faded in sync with equity values
            around the world, with the S&P All Africa index dropping more than
            20% in the first nine months of 2022, before starting a late-year
            rally that left the index down just 3% over the past 12 months. The
            fortune of Nigeria’s Alike Dangote, Africa’s richest person for the
            12th year in a row, fell $400 million to $13.5 billion. South
            African luxury goods magnate Johann Rupert held onto the No. 2 spot
            with $10.7 billion, down from $11 billion in 2022 as shares of his
            Compagnie Financiere Richemont – maker of Cartier watches and
            Montblanc pens – clawed back much – but not all – of last year’s
            decline. South African Nicky Oppenheimer, who formerly ran diamond
            mining firm DeBeers before selling it to mining firm Anglo American
            a decade ago, ranks No. 3, worth an estimated $8.4 billion. This
            year’s list sees the return of South Africa’s Christoffel Wiese, who
            lands at No. 18 with $1.1 billion. Wiese, who was worth more than $6
            billion after he sold his bargain retailer, Pepkor, to Steinhoff
            International for $5.7 billion in 2015, lost his billionaire status
            two years later when an accounting scandal cratered Steinhoff’s
            stock. He sued, and in March 2022 collected 7 billion South African
            rand (about $400 million) from Steinhoff in cash and shares totaling
            about 5% of publicly traded Pepkor.
          </Typography>
          <img
            src={africansbill}
            alt="african billionaires"
            width="800"
            height="400"
          />
          <h2>A Look Through the Rest of the Richest People in Africa</h2>
          <Typography
            paragraph
            fontFamily={"serif"}
            textAlign={"justify"}
            width={700}
            marginLeft={20}
            marginBottom={10}
          >
            At number two on the list is Johann Rupert. The chairman of Swiss
            luxury goods company, Compagnie Financiere Richemont, started his
            career with a banking apprenticeship in New York, before returning
            to South Africa and eventually pivoting to retail. Through the rest
            of those ranked, a range of diverse business activities have allowed
            these billionaires to garner their wealth. Nicky Oppenheimer (3rd)
            and Patrice Motsepe (9th)—have made fortunes in the mining industry,
            a sector which contributes nearly 10% to sub-Saharan Africa’s GDP.
            Meanwhile, Naguib Sawiris (8th) and Strive Masiyiwa (12th) have
            built telecom empires.
          </Typography>
          <h2>Billionaire Wealth Mirrors Country Wealth</h2>
          <Typography
            fontFamily={"serif"}
            textAlign={"justify"}
            paragraph
            width={700}
            marginLeft={20}
            marginBottom={10}
          >
            Only seven out of the 54 African countries are represented on
            Africa’s rich list, and even amongst them, three countries (Egypt,
            South Africa, and Nigeria) account for more than two-thirds of the
            top-ranked billionaires. The home countries for these billionaires
            reflects the nations’ contribution to the African economy as a
            whole. Nigeria, South Africa, and Egypt have the top three GDPs in
            Africa. Algeria—where Issad Rebrab (7th) is from—is ranked fourth,
            and Morocco—where Aziz Akhannouch (13th) is based—is fifth.
          </Typography>
          <img src={dangote} alt="Mr. Aliko Dangote" width="500" height="400" />
          <Typography
            fontFamily={"serif"}
            textAlign={"justify"}
            paragraph
            width={700}
            marginLeft={20}
            marginBottom={10}
            marginTop={5}
          >
            Africa's richest person was born in Kano, Nigeria, in 1957. His
            great-grandfather became one of the richest men in west Africa
            trading kola and ground nuts. Dangote's father died when he was
            eight, leaving him to be raised by his maternal grandfather, who was
            a building materials trader. After graduating from Egypt's Al-Azhar
            University with a degree in business, Dangote returned to Nigeria,
            where he started his own cement trading business funded by a loan
            from his uncle. He moved from Kano to Lagos, and ramped up imports.
            In 1981, he formed the corporation that later became Dangote Group.
            Throughout the 1980s and 1990s, Dangote diversified his operation to
            include trading sugar, flour, fish, rice, milk and iron. After
            traveling to Brazil to study manufacturing in 1996, Dangote shifted
            the company's focus from trading to manufacturing, believing there
            was an opportunity to create a local operation that would profit
            from meeting the basic consumer needs of Nigeria's growing
            population. Dangote began building salt and sugar refineries, flour
            mills and a pasta factory in 1999. A year later, he bought the Benue
            Cement Co. from the Nigerian government. He later commissioned the
            Obajana Cement Plant, currently the largest cement facility in
            sub-Saharan Africa. Today, Dangote Group's main publicly traded
            businesses -- Dangote Cement, Dangote Sugar, and Nascon Allied
            Industries -- make up about one-third of the market capitalization
            of the Nigerian Stock Exchange. A practicing Muslim, Dangote goes by
            the title "Alhaji," an honorific granted to a man who has completed
            the pilgrimage to Mecca. Twice divorced, he lives in Lagos.
          </Typography>

          <img src={adenuga} alt="Mr. Adenuga" width="400" height="400" />
          <Typography
            fontFamily={"serif"}
            textAlign={"justify"}
            paragraph
            width={700}
            marginLeft={20}
            marginBottom={10}
            marginTop={5}
          >
            Nigerian telecom billionaire and oil mogul Mike Adenuga has seen his
            net worth increase by $600 million since the start of the new year
            as the market value of his private holdings in his telecom business
            continues to track the performance of its peers on the stock market.
            The Nigerian billionaire businessman, who ended the year 2022 with a
            total wealth loss of $1.1 billion as his net worth fell from $6.7
            billion to $5.6 billion, is off to a strong start just 26 days into
            the new year, according to data tracked by Billionaires.Africa.
            According to Forbes, Adenuga, Nigeria’s third-wealthiest man, has
            seen a significant $600 million increase in his net worth, rising
            from $5.6 billion at the start of the year to a present total of
            $6.2 billion. The significant growth has offset part of the $1.1
            billion loss he experienced in 2022. The multimillion-dollar boost
            in his net worth can be attributed to the market value of his
            privately held businesses, including his investments in the telecom
            company Globacom Limited and in the Nigerian oil industry through
            Conoil Producing and Conpetro Limited. Adenuga owns 74.4 percent of
            Conoil Plc, a leading petroleum marketing company that manufactures
            and sells lubricants under the “Quarto” brand in addition to
            founding Globacom, one of Nigeria’s largest telecom service
            providers. Conoil is a major supplier of fuels such as diesel,
            kerosene, low-pour fuel, aviation fuel, and gasoline. The petroleum
            marketing company’s retained earnings have increased to more than
            $45.7 million as a result of its strong performance in recent years.
            In 2022, Adenuga received a substantial payout of $3.1 million in
            dividends from his significant stake in Conoil. With a net worth of
            $6.2 billion, Adenuga is ranked as one of the world’s most affluent
            billionaires, placing him at 409th on Forbes’ global wealth list
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
                href="http://localhost:8080/api/employeur/africans/report"
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
