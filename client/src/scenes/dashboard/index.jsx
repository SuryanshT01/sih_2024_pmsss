import React from "react";
import FlexBetween from "components/FlexBetween";
import Header from "components/Header";
import { DownloadOutlined } from "@mui/icons-material";
import BackupTableIcon from "@mui/icons-material/BackupTable";
import PendingActionsIcon from "@mui/icons-material/PendingActions";
import AlignVerticalBottomIcon from "@mui/icons-material/AlignVerticalBottom";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import ArticleIcon from '@mui/icons-material/Article';
import { Stepper, Step, StepLabel } from "@mui/material";
import {
  Box,
  Button,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { useGetAllCasesQuery } from "state/api";
import StatBox from "components/StatBox";
import Footer from "components/Footer";

const Dashboard = () => {
  const theme = useTheme();
  const isNonMediumScreens = useMediaQuery("(min-width: 1200px)");
  const { data } = useGetAllCasesQuery();

  const stages = [
    "Application Submitted",
    "Application Received",
    "Application Processed",
    "Application Sent to Finance Bureau",
    "Application Approved",
    "Payment Processed",
  ];

  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      <Box m="1.5rem 2.5rem" flexGrow={1}>
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
              Download Applications
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
            <StatBox
              title="Notices"
              value={
                <Box display="flex" flexDirection="column" gap="0.5rem">
                  <Box
                    gap="4.0rem"
                    sx={{
                      maxHeight: '200px',
                      overflowY: 'auto',
                    }}
                  >
                    {[
                      "Reservation policy of the UTs of J&K",
                      "List of Document Verification Center of LADAKH Division",
                      "List of Document Verification Center of KASHMIR Division",
                      "List of Document Verification Center of JAMMU Division",
                      "Frequently Asked Questions (FAQs) for Aspirants 2024-25",
                      "Format of Institute Bank Mandate Form 2024-25",
                      "Format of Pre-receipt of Academic Fee for 2024-25",
                    ].map((notice, index) => (
                      <Box
                        key={index}
                        sx={{
                          fontSize: "1rem",
                          marginBottom: "1.5rem",
                          cursor: "pointer",
                          textDecoration: "none",
                          color: theme.palette.secondary[300],
                          '&:hover': {
                            textDecoration: "underline",
                          },
                        }}
                      >
                        {notice}
                      </Box>
                    ))}
                  </Box>
                </Box>
              }
              increase=""
              description=""
              icon={
                <ArticleIcon
                  sx={{ color: theme.palette.secondary[300], fontSize: "26px" }}
                />
              }
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
        </Box>

        {/* Progress Tracker */}
        <Box
          gridColumn="span 12"
          gridRow="span 1"
          backgroundColor={theme.palette.background.alt}
          p="1.5rem"
          borderRadius="0.55rem"
          mt="20px"
          mb="20px" // Add margin bottom for spacing
        >
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              color: theme.palette.secondary[300],
              mb: "1rem",
            }}
          >
            Application Progress
          </Typography>

          {/* Stepper Component */}
          <Stepper activeStep={1} alternativeLabel>
            {stages.map((label, index) => (
              <Step key={index}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </Box>
      </Box>

      {/* Footer Component */}
      <Box mt="auto">
        <Footer />
      </Box>
    </Box>
  );
};

export default Dashboard;