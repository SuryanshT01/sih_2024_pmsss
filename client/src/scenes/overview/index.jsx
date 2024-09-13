import React, { useState, useEffect } from "react";
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
} from "@mui/material";
import Header from "components/Header";
import { useGetAllApplicationsQuery } from "state/api";
import { useDispatch, useSelector } from "react-redux";
import { setApplications } from "state";

const ApplicationCard = ({
  _id,
  fullName,
  email,
  phoneNumber,
  dateOfBirth,
  gender,
  nationality,
  educationLevel,
  institutionName,
  courseOfStudy,
  applicationStatus,
}) => {
  const theme = useTheme();
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Card
      sx={{
        backgroundImage: "none",
        backgroundColor: theme.palette.background.alt,
        borderRadius: "0.55rem",
      }}
    >
      <CardContent>
        <Typography
          sx={{ fontSize: 14 }}
          color={theme.palette.secondary[700]}
          gutterBottom
        >
          {applicationStatus}
        </Typography>
        <Typography variant="h5" component="div">
          {fullName}
        </Typography>
        <Typography sx={{ mb: "1.5rem" }} color={theme.palette.secondary[400]}>
          Email: {email}
        </Typography>
        <Typography variant="body2">Education: {educationLevel}</Typography>
      </CardContent>
      <CardActions>
        <Button
          variant="primary"
          size="small"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          See More
        </Button>
      </CardActions>
      <Collapse
        in={isExpanded}
        timeout="auto"
        unmountOnExit
        sx={{
          color: theme.palette.neutral[300],
        }}
      >
        <CardContent>
          <Typography>Application ID: {_id}</Typography>
          <Typography>Phone: {phoneNumber}</Typography>
          <Typography>Date of Birth: {new Date(dateOfBirth).toLocaleDateString()}</Typography>
          <Typography>Gender: {gender}</Typography>
          <Typography>Nationality: {nationality}</Typography>
          <Typography>Institution: {institutionName}</Typography>
          <Typography>Course of Study: {courseOfStudy}</Typography>
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

  useEffect(() => {
    if (data) {
      dispatch(setApplications({ applications: data }));
    }
  }, [data, dispatch]);

  if (isLoading) return <Typography>Loading...</Typography>;
  if (error) return <Typography color="error">Error: {error.message}</Typography>;

  return (
    <Box m="1.5rem 2.5rem">
      <Header title="APPLICATION HISTORY" subtitle="Overview of Student Applications" />
      {applications && applications.length > 0 ? (
        <Box
          mt="20px"
          display="grid"
          gridTemplateColumns="repeat(4, minmax(0, 1fr))"
          justifyContent="space-between"
          rowGap="20px"
          columnGap="1.33%"
          sx={{
            "& > div": { gridColumn: isNonMobile ? "span 1" : "span 4" },
          }}
        >
          {applications.map((application) => (
            <ApplicationCard
              key={application._id}
              {...application}
            />
          ))}
        </Box>
      ) : (
        <Typography color={theme.palette.secondary[400]}>No applications found.</Typography>
      )}
    </Box>
  );
};

export default Overview;