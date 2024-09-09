import React from "react";
import FlexBetween from "components/FlexBetween";
import Header from "components/Header";
import {
  DownloadOutlined,
  Email,
  PointOfSale,
  PersonAdd,
  Traffic,
} from "@mui/icons-material";
import BackupTableIcon from "@mui/icons-material/BackupTable";
import PendingActionsIcon from "@mui/icons-material/PendingActions";
import AlignVerticalBottomIcon from "@mui/icons-material/AlignVerticalBottom";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import {
  Box,
  Button,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import BreakdownChart from "components/BreakdownChart";
import OverviewChart from "components/OverviewChart";
import { useGetAllCasesQuery, useGetDashboardQuery } from "state/api";
import StatBox from "components/StatBox";
import { BarChart } from "@mui/x-charts/BarChart";
import { axisClasses } from "@mui/x-charts";
import { PieChart } from "@mui/x-charts/PieChart";
import Footer from "components/Footer";

const Dashboard = () => {
  const theme = useTheme();
  const isNonMediumScreens = useMediaQuery("(min-width: 1200px)");
  //const { data, isLoading } = useGetDashboardQuery();
  const { data } = useGetAllCasesQuery();

  const chartSetting = {
    xAxis: [
      {
        label: "Time Taken",
      },
    ],
    width: 650,
    height: 400,
  };
  const dataset = [
    {
      london: 59,
      paris: 5,
      newYork: 86,
      seoul: 3,
      month: "",
    },
    {
      london: 50,
      paris: 9,
      newYork: 78,
      seoul: 5,
      month: "Issues",
    },
    {
      london: 47,
      paris: 7,
      newYork: 106,
      seoul: 4.5,
      month: "Payment",
    },
    {
      london: 45,
      paris: 10,
      newYork: 92,
      seoul: 7.5,
      month: "Overall",
    },
    // },
    // {
    //   london: 57,
    //   paris: 9,
    //   newYork: 92,
    //   seoul: 7,
    //   month: 'May',
    // },
    // {
    //   london: 60,
    //   paris: 10,
    //   newYork: 103,
    //   seoul: 8,
    //   month: 'June',
    // },
    // {
    //   london: 59,
    //   paris: 11,
    //   newYork: 105,
    //   seoul: 9,
    //   month: 'July',
    // },
    // {
    //   london: 65,
    //   paris: 12,
    //   newYork: 106,
    //   seoul: 10,
    //   month: 'Aug',
    // },
    // {
    //   london: 51,
    //   paris: 13,
    //   newYork: 95,
    //   seoul: 11,
    //   month: 'Sept',
    // },
    // {
    //   london: 60,
    //   paris: 14,
    //   newYork: 97,
    //   seoul: 13,
    //   month: 'Oct',
    // },
    // {
    //   london: 67,
    //   paris: 15,
    //   newYork: 76,
    //   seoul: 14,
    //   month: 'Nov',
    // },
    // {
    //   london: 61,
    //   paris: 16,
    //   newYork: 103,
    //   seoul: 15,
    //   month: 'Dec',
    // },
  ];
  const chartSetting1 = {
    yAxis: [
      {
        label: "",
      },
    ],
    width: 700,
    height: 300,
    sx: {
      [`.${axisClasses.left} .${axisClasses.label}`]: {
        transform: "rotate(-90deg) translate(0px, -20px)",
      },
    },
  };
  const dataset1 = [
    {
      london: 55,
      paris: 120,
      newYork: 280,
      seoul: 21,
      month: "1st",
    },
    {
      london: 0,
      paris: 0,
      newYork: 0,
      seoul: 28,
      month: "",
    },
    {
      london: 67,
      paris: 200,
      newYork: 270,
      seoul: 41,
      month: "2nd",
    },
    {
      london: 0,
      paris: 0,
      newYork: 0,
      seoul: 73,
      month: "      ",
    },
    {
      london: 63,
      paris: 160,
      newYork: 260,
      seoul: 99,
      month: "3rd",
    },
    {
      london: 0,
      paris: 0,
      newYork: 0,
      seoul: 144,
      month: " ",
    },
    {
      london: 63,
      paris: 120,
      newYork: 180,
      seoul: 319,
      month: "4th",
    },
    {
      london: 1,
      paris: 1,
      newYork: 1,
      seoul: 131,
      month: "     ",
    },
    {
      london: 56,
      paris: 180,
      newYork: 290,
      seoul: 249,
      month: "5th",
    },
    {
      london: 0,
      paris: 0,
      newYork: 0,
      seoul: 55,
      month: "  ",
    },
    {
      london: 65,
      paris: 170,
      newYork: 370,
      seoul: 48,
      month: "6th",
    },
    {
      london: 0,
      paris: 0,
      newYork: 0,
      seoul: 25,
      month: "    ",
    },
    {
      london: 75,
      paris: 200,
      newYork: 450,
      seoul: 25,
      month: "7th",
    },
    {
      london: 0,
      paris: 0,
      newYork: 0,
      seoul: 25,
      month: "   ",
    },
  ];

  const valueFormatter1 = (value) => `${value}Ths`;
  const valueFormatter2 = (value) => `${value}Lks`;
  const valueFormatter3 = (value) => `${value}Lks`;

  console.log("length");
  const columns = [
    {
      field: "_id",
      headerName: "ID",
      flex: 1,
    },
    {
      field: "userId",
      headerName: "User ID",
      flex: 1,
    },
    {
      field: "createdAt",
      headerName: "CreatedAt",
      flex: 1,
    },
    {
      field: "products",
      headerName: "# of Products",
      flex: 0.5,
      sortable: false,
      renderCell: (params) => params.value.length,
    },
    {
      field: "cost",
      headerName: "Cost",
      flex: 1,
      renderCell: (params) => `$${Number(params.value).toFixed(2)}`,
    },
  ];
  //console.log("dashboard",data);
  console.log("allcases", data);
  return (
    <Box m="1.5rem 2.5rem">
      <FlexBetween>
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />

        <Box>
          <Button
            sx={{
              backgroundColor: theme.palette.secondary.light,
              color: theme.palette.background.alt,
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
          >
            <DownloadOutlined sx={{ mr: "10px" }} />
            Download Reports
          </Button>
        </Box>
      </FlexBetween>
      <Box
        mt="20px"
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="160px"
        gap="20px"
        sx={{
          "& > div": { gridColumn: isNonMediumScreens ? undefined : "span 12" },
        }}
      >
        {/* ROW 1 */}
        <StatBox
          title="Submission Status"
          value="Pending"
          increase=""
          description="Since last month"
          icon={
            <BackupTableIcon
              sx={{ color: theme.palette.secondary[300], fontSize: "26px" }}
            />
          }
        />
        <StatBox
          title="Payment Status"
          value="Awaiting Approval"
          increase=""
          description=""
          icon={
            <PendingActionsIcon
              sx={{ color: theme.palette.secondary[300], fontSize: "26px" }}
            />
          }
        />
        <Box
          gridColumn="span 8"
          gridRow="span 2"
          backgroundColor={theme.palette.background.alt}
          p="1.5rem"
          borderRadius="0.55rem"
        >
          <BarChart
            dataset={dataset1}
            xAxis={[{ scaleType: "band", dataKey: "month" }]}
            series={[
              { dataKey: "london", label: "Verified", valueFormatter1 },
              { dataKey: "paris", label: "Initiated", valueFormatter1 },
              { dataKey: "newYork", label: "Processed", valueFormatter1 },
              // { dataKey: 'seoul', label: 'Seoul', valueFormatter },
            ]}
            {...chartSetting1}
          />
        </Box>
        <StatBox
          title="Document Verification"
          value="Done"
          increase=""
          description="Since last month"
          icon={
            <AlignVerticalBottomIcon
              sx={{ color: theme.palette.secondary[300], fontSize: "26px" }}
            />
          }
        />
        <StatBox
          title="Document Uploaded"
          value="3"
          increase=""
          description="DigiLocker Uploaded"
          icon={
            <AnalyticsIcon
              sx={{ color: theme.palette.secondary[300], fontSize: "26px" }}
            />
          }
        />

        {/* <StatBox
          title="Easy Cases"
          value="3"
          increase="+43%"
          description="Since last month"
          icon={
            <Traffic
              sx={{ color: theme.palette.secondary[300], fontSize: "26px" }}
            />
          }
        /> */}
        <Box
          gridColumn="span 8"
          gridRow="span 3"
          sx={{
            "& .MuiDataGrid-root": {
              border: "none",
              borderRadius: "5rem",
            },
            "& .MuiDataGrid-cell": {
              borderBottom: "none",
            },
            "& .MuiDataGrid-columnHeaders": {
              backgroundColor: theme.palette.background.alt,
              color: theme.palette.secondary[100],
              borderBottom: "none",
            },
            "& .MuiDataGrid-virtualScroller": {
              backgroundColor: theme.palette.background.alt,
            },
            "& .MuiDataGrid-footerContainer": {
              backgroundColor: theme.palette.background.alt,
              color: theme.palette.secondary[100],
              borderTop: "none",
            },
            "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
              color: `${theme.palette.secondary[200]} !important`,
            },
          }}
        >
          {/* <DataGrid
            loading={!data}
            getRowId={(row) => row._id}
            rows={(data && data.transactions) || []}
            columns={columns}
          /> */}
          <Box
            mt="1px"
            display="grid"
            gridTemplateColumns="repeat(2, 1fr)"
            gridAutoRows="160px"
            gap="10px"
            sx={{
              "& > div": {
                gridColumn: isNonMediumScreens ? undefined : "span 20",
              },
            }}
          >
            <BarChart
              dataset={dataset}
              yAxis={[{ scaleType: "band", dataKey: "month" }]}
              series={[
                { dataKey: "seoul", label: "Allocated" },
                { dataKey: "paris", label: "Actual Time" },
              ]}
              layout="horizontal"
              {...chartSetting}
            />
          </Box>
        </Box>

        <Box
          gridColumn="span 4"
          gridRow="span 2"
          mt="20px"
          backgroundColor={theme.palette.background.alt}
          p="0rem"
          borderRadius="0.55rem"
        >
          <Typography variant="h4" sx={{ color: theme.palette.secondary[100] }}>
            Document Status
          </Typography>
          {/* <BreakdownChart isDashboard={true} /> */}
          <PieChart
            colors={["cyan", `#008080`, `#DDFF94`]}
            series={[
              {
                data: [
                  { id: 0, value: 10, label: "In Verification" },
                  { id: 1, value: 15, label: "Approved" },
                  { id: 2, value: 20, label: "Rejected" },
                ],
              },
            ]}
            width={400}
            height={200}
          />
          <Typography
            p="0 0.6rem"
            fontSize="0.8rem"
            sx={{ color: theme.palette.secondary[200] }}
          >
            Status of all documents and information uploaded by you.
          </Typography>
        </Box>
      </Box>
      {/* Footer Component */}
      <Footer />
    
    </Box>
    
  );
};

export default Dashboard;
