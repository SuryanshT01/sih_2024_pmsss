// scenes/overview/index.js
import React, { useState } from "react";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  Collapse,
  Button,
  Typography,
  useTheme,
  useMediaQuery,
  Chip,
  Grid,
} from "@mui/material";
import Header from "components/Header";
import { useGetAllApplicationsQuery } from "state/api";
import { useDispatch, useSelector } from "react-redux";
import { setApplications } from "state";

const ApplicationCard = ({ application }) => {
  const theme = useTheme();
  const [isExpanded, setIsExpanded] = useState(false);

  const getStatusColor = (status) => {
    switch (status) {
      case 'Approved':
        return 'success';
      case 'Rejected':
        return 'error';
      default:
        return 'warning';
    }
  };

  return (
    <Card
      sx={{
        backgroundImage: "none",
        backgroundColor: theme.palette.background.alt,
        borderRadius: "0.55rem",
      }}
    >
      <CardContent>
        <Typography variant="h5" component="div">
          {application.candidateName}
        </Typography>
        <Typography sx={{ mb: "1.5rem" }} color={theme.palette.secondary[400]}>
          {application._id}
        </Typography>
        <Chip
          label={application.applicationStatus}
          color={getStatusColor(application.applicationStatus)}
          sx={{ mb: "0.5rem" }}
        />
        <Typography variant="body2">Email: {application.email}</Typography>
        <Typography variant="body2">
          Date of Birth: {new Date(application.dateOfBirth).toLocaleDateString()}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          variant="primary"
          size="small"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? "See Less" : "See More"}
        </Button>
      </CardActions>
      <Collapse in={isExpanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Typography variant="body2">Father's Name: {application.fatherName}</Typography>
              <Typography variant="body2">Mother's Name: {application.motherName}</Typography>
              <Typography variant="body2">Gender: {application.gender}</Typography>
              <Typography variant="body2">Reserve Category: {application.reserveCategory ? "Yes" : "No"}</Typography>
              <Typography variant="body2">Category: {application.category}</Typography>
              <Typography variant="body2">Total Family Income: ${application.totalFamilyIncome}</Typography>
              <Typography variant="body2">Bank Account: {application.bankAccountNumber}</Typography>
              <Typography variant="body2">IFSC Code: {application.ifscCode}</Typography>
              <Typography variant="body2">Branch Name: {application.branchName}</Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="body2">Address: {application.addressLine1}, {application.addressLine2}, {application.addressLine3}</Typography>
              <Typography variant="body2">City: {application.city}</Typography>
              <Typography variant="body2">State: {application.state}</Typography>
              <Typography variant="body2">Zip Code: {application.zipCode}</Typography>
            </Grid>
          </Grid>
          <Typography variant="body2" sx={{ mt: "1rem", fontWeight: "bold" }}>
            Academic Details:
          </Typography>
          {application.academicDetails.map((detail, index) => (
            <Box key={index} sx={{ ml: "1rem", mt: "0.5rem" }}>
              <Typography variant="body2">Exam: {detail.exam}</Typography>
              <Typography variant="body2">School: {detail.schoolName}</Typography>
              <Typography variant="body2">Year of Passing: {detail.yearOfPassing}</Typography>
              <Typography variant="body2">Percentage: {detail.percentage}%</Typography>
            </Box>
          ))}
          <Typography variant="body2" sx={{ mt: "1rem", fontWeight: "bold" }}>
            Documents:
          </Typography>
          <Grid container spacing={2}>
            {Object.entries(application.documents).map(([key, value]) => (
              <Grid item xs={12} sm={6} key={key}>
                <Typography variant="body2">{key}: {value ? "Uploaded" : "Not uploaded"}</Typography>
              </Grid>
            ))}
          </Grid>
        </CardContent>
      </Collapse>
    </Card>
  );
};

const Overview = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const { data, isLoading, error } = useGetAllApplicationsQuery();
  const applications = useSelector((state) => state.global.applications);
  const isNonMobile = useMediaQuery("(min-width: 1000px)");

  React.useEffect(() => {
    if (data) {
      dispatch(setApplications({ applications: data }));
    }
  }, [data, dispatch]);

  if (isLoading) return <Typography>Loading...</Typography>;
  if (error) return <Typography>Error: {error.message}</Typography>;

  return (
    <Box m="1.5rem 2.5rem">
      <Header title="OVERVIEW" subtitle="View all scholarship applications" />
      <Box
        mt="20px"
        display="grid"
        gridTemplateColumns="repeat(4, minmax(0, 1fr))"
        justifyContent="space-between"
        rowGap="20px"
        columnGap="1.33%"
        sx={{
          "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
        }}
      >
        {applications && applications.length > 0 ? (
          applications.map((application) => (
            <ApplicationCard key={application._id} application={application} />
          ))
        ) : (
          <Typography>No applications found.</Typography>
        )}
      </Box>
    </Box>
  );
};

export default Overview;