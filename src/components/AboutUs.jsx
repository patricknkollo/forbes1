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
import Carousel from "react-material-ui-carousel";
import bezos from "./images/jeff_bezos.png";
import gates from "./images/bill_gates.png";
import arnault from "./images/bernard_arnault.png";
import musk from "./images/elon_musk.png";
import SidebarComponent from "./Sidebar";

const drawerWidth = 240;

export default function AboutUsComponent() {
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
          <h1>Who we are</h1>
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
            // marginLeft={20}
            marginBottom={5}
          >
            <p>
              We are the georges Le Blanc Financial Corporation and we actually
              attemp to lead the mark of the financial counseling. Our
              leadership come from the fact that we insure our clients to
              receive the mos professional and accountables services regarding
              their finances management and the business plan of the their
              company.
            </p>
          </Typography>
          <Typography
            fontFamily={"serif"}
            textAlign={"justify"}
            paragraph
            //  width={700}
            //marginLeft={20}
            marginBottom={15}
          >
            <h3>What we want</h3>
            <p>
              We want to create superior value for our clients, shareholders and
              employees. And we want to stand out as a winner in our industry:
              for our expertise, advice and execution, our contribution to
              society, our work environment, and our business success.
            </p>
            <h3>How we work</h3>
            Although making resolutions to improve your financial situation is a
            good thing to do at any time of year, many people find it easier at
            the beginning of a new year. Regardless of when you begin, the
            basics remain the same. Here are 10 key tips to getting ahead
            financially.
            <p>
              1. Get Paid What You're Worth and Spend Less Than You Earn It may
              sound simple, but many people struggle with this first rule. Make
              sure you know what your job is worth in the marketplace, by
              conducting an evaluation of your skills, productivity, job tasks,
              contribution to the company, and the going rate, both inside and
              outside the company, for what you do. Being underpaid even by
              $1,000 a year can have a significant cumulative effect over the
              course of your working life. No matter how much or how little
              you're paid, you'll never get ahead if you spend more than you
              earn. Often it's easier to spend less than it is to earn more, and
              a little cost-cutting effort in a number of areas can result in
              savings. And, it doesn't always have to involve making big
              sacrifices.
            </p>
            <p>
              2. Stick to a Budget An important step to consider when trying to
              get ahead financially is budgeting. After all, how can you know
              where your money is going if you don't budget? How can you set
              spending and saving goals if you don't know where your money is
              going? You need to set up a budget whether you make thousands or
              hundreds of thousands of dollars a year.
            </p>
            <p>
              3. Pay Off Credit Card Debt Credit card debt is the number one
              obstacle to getting ahead financially. Those little pieces of
              plastic are so convenient to use, and it's so easy to forget that
              it's real money we're dealing with when we whip them out to pay
              for a purchase, large or small. Even when we resolve to pay the
              balance off quickly, the reality is that we often don't, and end
              up paying far more for things than we would have paid if we had
              used cash.
            </p>
            <p>
              4. Contribute to a Retirement Plan If your employer offers a
              401(k) plan (or another type of employer-sponsored retirement
              savings program), you should consider contributing to it if you
              can afford to. Often, with 401(k) plans, your employer will
              contribute the same amount that you put toward your account up to
              a certain percent. This is often referred to as an "employer
              match." If your employer doesn't offer a retirement plan, consider
              an IRA.
            </p>
            <p>
              5. Have a Savings Plan You've heard it before: Pay yourself first.
              If you wait until you've met all of your other financial
              obligations before seeing what's left over for saving, chances are
              you'll never have a healthy savings account or investments.
              Resolve to set aside a minimum of 5% of your salary for savings
              before you start paying your bills. Better yet, have money
              automatically deducted from your paycheck and deposited into a
              separate account.
            </p>
            <p>
              6. Invest If you're contributing to a retirement plan and a
              savings account and you can still manage to put some money into
              other investments, all the better.
            </p>
            <p>
              7. Maximize Your Employment Benefits Employment benefits like a
              401(k) plan, flexible spending accounts, medical and dental
              insurance, etc., are worth big bucks. Make sure you're maximizing
              yours and taking advantage of the ones that can save you money by
              reducing taxes or out-of-pocket expenses.
            </p>
            <p>
              8. Review Your Insurance Coverages Too many people are talked into
              paying too much for life and disability insurance, whether it's by
              adding these coverages to car loans, buying whole-life insurance
              policies when term-life makes more sense, or buying life insurance
              when you have no dependents. On the other hand, it's important
              that you have enough insurance to protect your dependents and your
              income in the case of death or disability.
            </p>
            <p>
              {" "}
              9. Update Your Will In 2021, just 33% of Americans had a will.1 If
              you have dependents, no matter how little or how much you own, you
              need a will. If your situation isn't too complicated, you can even
              do your own with software like Quicken WillMaker from Nolo. To
              better protect your loved ones, consider writing a will.
            </p>
            <p>
              {" "}
              10. Keep Good Records If you aren't careful about keeping thorough
              records, you're probably not claiming all your allowable income
              tax deductions and credits. Set up a system now and use it all
              year. It's much easier than scrambling to find everything at tax
              time, only to miss items that might have saved you money. Checking
              In How are you doing on the above checklist? If you're not doing
              at least six of the 10, consider resolving to make improvements.
              Choose one area at a time and set a goal for incorporating all 10
              into your lifestyle.
            </p>
            <p>
              Frequently Asked Questions (FAQs) Where can you get financial
              advice for free? You probably won't find good investment ideas for
              free—financial advisors make a living offering their advice, so
              good ones will charge for their services. Other types of financial
              advice may be provided for free, especially if you have a low
              income. For example, if you need help with taxes and your income
              isn't more than $73,000, then you can use the IRS Free File
              program.2 A credit union or local nonprofit agency may be
              available to offer free or low-cost debt advice. What's the best
              way to measure financial success? There are several methods of
              measuring financial success, and the "best" will depend on exactly
              how you define success. If you define success as being able to
              live comfortably, then you can measure it by comparing your income
              to your expenses and making sure you have plenty of money to pay
              your bills. Others want to see year-over-year net income growth by
              earning more and controlling their spending. You can also measure
              the financial success of individual efforts and projects with
              financial ratios like the return on equity (ROI). Is a college
              degree necessary to achieve financial success? A college degree is
              not required to achieve financial success. However, statistics
              consistently show that higher levels of education are associated
              with higher income and lower unemployment rates. In other words,
              you may not need a college degree to achieve financial success,
              but the odds are that it'll help.
            </p>
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
