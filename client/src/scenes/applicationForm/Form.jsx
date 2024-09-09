import React from "react";
import {
  Box,
  Button,
  TextField,
  useMediaQuery,
  Typography,
  useTheme,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import { Formik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setApplicationId } from "state";
import FlexBetween from "components/FlexBetween";
import Dropzone from "react-dropzone";

const applicationSchema = yup.object().shape({
  fullName: yup.string().required("Required"),
  email: yup.string().email("Invalid email").required("Required"),
  phoneNumber: yup.string().required("Required"),
  dateOfBirth: yup.date().required("Required"),
  gender: yup.string().required("Required"),
  nationality: yup.string().required("Required"),
  addressLine1: yup.string().required("Required"),
  city: yup.string().required("Required"),
  state: yup.string().required("Required"),
  zipCode: yup.string().required("Required"),
  educationLevel: yup.string().required("Required"),
  institutionName: yup.string().required("Required"),
  courseOfStudy: yup.string().required("Required"),
  academicAchievements: yup.string(),
  extraCurricularActivities: yup.string(),
  familyIncome: yup.number().positive("Must be positive").required("Required"),
});

const initialValuesApplication = {
  fullName: "",
  email: "",
  phoneNumber: "",
  dateOfBirth: "",
  gender: "",
  nationality: "",
  addressLine1: "",
  city: "",
  state: "",
  zipCode: "",
  educationLevel: "",
  institutionName: "",
  courseOfStudy: "",
  academicAchievements: "",
  extraCurricularActivities: "",
  familyIncome: "",
};

const Form = () => {
  const { palette } = useTheme();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const submitApplication = async (values, onSubmitProps) => {
    const requestBody = JSON.stringify(values);

    const savedApplicationResponse = await fetch("http://localhost:5001/application", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: requestBody,
    });
    const savedApplication = await savedApplicationResponse.json();
    console.log("savedApplication", savedApplication);
    dispatch(
      setApplicationId({
        applicationId: savedApplication.id,
      })
    );

    navigate("/dashboard");

    onSubmitProps.resetForm();
  };

  const handleFormSubmit = async (values, onSubmitProps) => {
    console.log("FormSubmit", values);
    await submitApplication(values, onSubmitProps);
  };

  return (
    <Formik
      onSubmit={handleFormSubmit}
      initialValues={initialValuesApplication}
      validationSchema={applicationSchema}
    >
      {({
        values,
        errors,
        touched,
        handleBlur,
        handleChange,
        handleSubmit,
        setFieldValue,
      }) => (
        <form onSubmit={handleSubmit}>
          <Box
            display="grid"
            gap="30px"
            gridTemplateColumns="repeat(4, minmax(0, 1fr))"
            sx={{
              "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
            }}
          >
            <TextField
              label="Full Name"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.fullName}
              name="fullName"
              error={Boolean(touched.fullName) && Boolean(errors.fullName)}
              helperText={touched.fullName && errors.fullName}
              sx={{ gridColumn: "span 4" }}
            />
            <TextField
              label="Email"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.email}
              name="email"
              error={Boolean(touched.email) && Boolean(errors.email)}
              helperText={touched.email && errors.email}
              sx={{ gridColumn: "span 2" }}
            />
            <TextField
              label="Phone Number"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.phoneNumber}
              name="phoneNumber"
              error={Boolean(touched.phoneNumber) && Boolean(errors.phoneNumber)}
              helperText={touched.phoneNumber && errors.phoneNumber}
              sx={{ gridColumn: "span 2" }}
            />
            <TextField
              label="Date of Birth"
              type="date"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.dateOfBirth}
              name="dateOfBirth"
              InputLabelProps={{ shrink: true }}
              error={Boolean(touched.dateOfBirth) && Boolean(errors.dateOfBirth)}
              helperText={touched.dateOfBirth && errors.dateOfBirth}
              sx={{ gridColumn: "span 2" }}
            />
            <FormControl sx={{ gridColumn: "span 2" }}>
              <InputLabel>Gender</InputLabel>
              <Select
                value={values.gender}
                label="Gender"
                onChange={handleChange}
                onBlur={handleBlur}
                name="gender"
                error={Boolean(touched.gender) && Boolean(errors.gender)}
              >
                <MenuItem value="male">Male</MenuItem>
                <MenuItem value="female">Female</MenuItem>
                <MenuItem value="other">Other</MenuItem>
              </Select>
            </FormControl>
            <TextField
              label="Nationality"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.nationality}
              name="nationality"
              error={Boolean(touched.nationality) && Boolean(errors.nationality)}
              helperText={touched.nationality && errors.nationality}
              sx={{ gridColumn: "span 4" }}
            />
            <TextField
              label="Address Line 1"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.addressLine1}
              name="addressLine1"
              error={Boolean(touched.addressLine1) && Boolean(errors.addressLine1)}
              helperText={touched.addressLine1 && errors.addressLine1}
              sx={{ gridColumn: "span 4" }}
            />
            <TextField
              label="City"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.city}
              name="city"
              error={Boolean(touched.city) && Boolean(errors.city)}
              helperText={touched.city && errors.city}
              sx={{ gridColumn: "span 2" }}
            />
            <TextField
              label="State"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.state}
              name="state"
              error={Boolean(touched.state) && Boolean(errors.state)}
              helperText={touched.state && errors.state}
              sx={{ gridColumn: "span 1" }}
            />
            <TextField
              label="Zip Code"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.zipCode}
              name="zipCode"
              error={Boolean(touched.zipCode) && Boolean(errors.zipCode)}
              helperText={touched.zipCode && errors.zipCode}
              sx={{ gridColumn: "span 1" }}
            />
            <FormControl sx={{ gridColumn: "span 2" }}>
              <InputLabel>Education Level</InputLabel>
              <Select
                value={values.educationLevel}
                label="Education Level"
                onChange={handleChange}
                onBlur={handleBlur}
                name="educationLevel"
                error={Boolean(touched.educationLevel) && Boolean(errors.educationLevel)}
              >
                <MenuItem value="highschool">High School</MenuItem>
                <MenuItem value="undergraduate">Undergraduate</MenuItem>
                <MenuItem value="postgraduate">Postgraduate</MenuItem>
              </Select>
            </FormControl>
            <TextField
              label="Institution Name"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.institutionName}
              name="institutionName"
              error={Boolean(touched.institutionName) && Boolean(errors.institutionName)}
              helperText={touched.institutionName && errors.institutionName}
              sx={{ gridColumn: "span 2" }}
            />
            <TextField
              label="Course of Study"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.courseOfStudy}
              name="courseOfStudy"
              error={Boolean(touched.courseOfStudy) && Boolean(errors.courseOfStudy)}
              helperText={touched.courseOfStudy && errors.courseOfStudy}
              sx={{ gridColumn: "span 4" }}
            />
            <TextField
              label="Academic Achievements"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.academicAchievements}
              name="academicAchievements"
              multiline
              rows={4}
              error={Boolean(touched.academicAchievements) && Boolean(errors.academicAchievements)}
              helperText={touched.academicAchievements && errors.academicAchievements}
              sx={{ gridColumn: "span 4" }}
            />
            <TextField
              label="Extra-curricular Activities"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.extraCurricularActivities}
              name="extraCurricularActivities"
              multiline
              rows={4}
              error={Boolean(touched.extraCurricularActivities) && Boolean(errors.extraCurricularActivities)}
              helperText={touched.extraCurricularActivities && errors.extraCurricularActivities}
              sx={{ gridColumn: "span 4" }}
            />
            <TextField
              label="Family Income (Annual)"
              type="number"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.familyIncome}
              name="familyIncome"
              error={Boolean(touched.familyIncome) && Boolean(errors.familyIncome)}
              helperText={touched.familyIncome && errors.familyIncome}
              sx={{ gridColumn: "span 2" }}
            />
          </Box>

          <Box
            gridColumn="span 4"
            border={`1px solid ${palette.neutral.medium}`}
            borderRadius="5px"
            p="1rem"
            mt="2rem"
          >
            <Dropzone
              acceptedFiles=".jpg,.jpeg,.png,.pdf"
              multiple={false}
              onDrop={(acceptedFiles) =>
                setFieldValue("supportingDocument", acceptedFiles[0])
              }
            >
              {({ getRootProps, getInputProps }) => (
                <Box
                  {...getRootProps()}
                  border={`2px dashed ${palette.primary.main}`}
                  p="1rem"
                  sx={{ "&:hover": { cursor: "pointer" } }}
                >
                  <input {...getInputProps()} />
                  {!values.supportingDocument ? (
                    <p>Add Supporting Document Here (PDF or Image)</p>
                  ) : (
                    <FlexBetween>
                      <Typography>{values.supportingDocument.name}</Typography>
                      <EditOutlinedIcon />
                    </FlexBetween>
                  )}
                </Box>
              )}
            </Dropzone>
          </Box>

          <Button
            fullWidth
            type="submit"
            sx={{
              m: "2rem 0",
              p: "1rem",
              backgroundColor: palette.primary.main,
              color: palette.background.alt,
              "&:hover": { color: palette.primary.main },
            }}
          >
            Submit Application
          </Button>
        </form>
      )}
    </Formik>
  );
};

export default Form;