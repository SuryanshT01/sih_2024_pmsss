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
  Checkbox,
  FormControlLabel,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { Formik, Field, FieldArray } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setApplicationId } from "state";
import Dropzone from "react-dropzone";

const applicationSchema = yup.object().shape({
  candidateName: yup.string().required("Required"),
  fatherName: yup.string().required("Required"),
  motherName: yup.string().required("Required"),
  dateOfBirth: yup.date().required("Required"),
  gender: yup.string().required("Required"),
  reserveCategory: yup.boolean(),
  category: yup.string().when("reserveCategory", {
    is: true,
    then: yup.string().required("Required"),
  }),
  email: yup.string().email("Invalid email").required("Required"),
  totalFamilyIncome: yup.number().positive("Must be positive").required("Required"),
  bankAccountNumber: yup.string().required("Required"),
  confirmedBankAccountNumber: yup.string()
    .oneOf([yup.ref('bankAccountNumber'), null], 'Account numbers must match')
    .required("Required"),
  ifscCode: yup.string().required("Required"),
  branchName: yup.string().required("Required"),
  academicDetails: yup.array().of(
    yup.object().shape({
      exam: yup.string().required("Required"),
      schoolName: yup.string().required("Required"),
      yearOfPassing: yup.number().required("Required"),
      percentage: yup.number().min(0).max(100).required("Required"),
    })
  ),
  addressLine1: yup.string().required("Required"),
  addressLine2: yup.string(),
  addressLine3: yup.string(),
  city: yup.string().required("Required"),
  state: yup.string().required("Required"),
  zipCode: yup.string().required("Required"),
});

const initialValuesApplication = {
  candidateName: "",
  fatherName: "",
  motherName: "",
  dateOfBirth: "",
  gender: "",
  reserveCategory: false,
  category: "",
  email: "",
  totalFamilyIncome: "",
  bankAccountNumber: "",
  confirmedBankAccountNumber: "",
  ifscCode: "",
  branchName: "",
  academicDetails: [
    { exam: "10th", schoolName: "", yearOfPassing: "", percentage: "" },
    { exam: "12th", schoolName: "", yearOfPassing: "", percentage: "" },
  ],
  addressLine1: "",
  addressLine2: "",
  addressLine3: "",
  city: "",
  state: "",
  zipCode: "",
  documents: {
    profilePhoto: null,
    signaturePhoto: null,
    aadharCard: null,
    matriculationCertificate: null,
    intermediateCertificate: null,
    casteCertificate: null,
    incomeCertificate: null,
    other: null,
  },
};

const Form = () => {
  const { palette } = useTheme();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const submitApplication = async (values, onSubmitProps) => {
    const formData = new FormData();
    for (let key in values) {
      if (key === 'documents') {
        for (let docKey in values.documents) {
          formData.append(docKey, values.documents[docKey]);
        }
      } else if (key === 'academicDetails') {
        formData.append(key, JSON.stringify(values[key]));
      } else {
        formData.append(key, values[key]);
      }
    }

    const savedApplicationResponse = await fetch("http://localhost:5001/application", {
      method: "POST",
      body: formData,
    });
    const savedApplication = await savedApplicationResponse.json();
    dispatch(
      setApplicationId({
        applicationId: savedApplication.id,
      })
    );

    navigate("/dashboard");

    onSubmitProps.resetForm();
  };

  const handleFormSubmit = async (values, onSubmitProps) => {
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
              label="Candidate Name"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.candidateName}
              name="candidateName"
              error={Boolean(touched.candidateName) && Boolean(errors.candidateName)}
              helperText={touched.candidateName && errors.candidateName}
              sx={{ gridColumn: "span 2" }}
            />
            <TextField
              label="Father's Name"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.fatherName}
              name="fatherName"
              error={Boolean(touched.fatherName) && Boolean(errors.fatherName)}
              helperText={touched.fatherName && errors.fatherName}
              sx={{ gridColumn: "span 2" }}
            />
            <TextField
              label="Mother's Name"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.motherName}
              name="motherName"
              error={Boolean(touched.motherName) && Boolean(errors.motherName)}
              helperText={touched.motherName && errors.motherName}
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
            <FormControlLabel
              control={
                <Checkbox
                  checked={values.reserveCategory}
                  onChange={handleChange}
                  name="reserveCategory"
                />
              }
              label="Do you belong to reserve category?"
              sx={{ gridColumn: "span 2" }}
            />
            {values.reserveCategory && (
              <FormControl sx={{ gridColumn: "span 2" }}>
                <InputLabel>Category</InputLabel>
                <Select
                  value={values.category}
                  label="Category"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  name="category"
                  error={Boolean(touched.category) && Boolean(errors.category)}
                >
                  <MenuItem value="SC">SC</MenuItem>
                  <MenuItem value="ST">ST</MenuItem>
                  <MenuItem value="EBC">EBC</MenuItem>
                  <MenuItem value="BC">BC</MenuItem>
                  <MenuItem value="EWS">EWS</MenuItem>
                </Select>
              </FormControl>
            )}
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
              label="Total Family Income"
              type="number"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.totalFamilyIncome}
              name="totalFamilyIncome"
              error={Boolean(touched.totalFamilyIncome) && Boolean(errors.totalFamilyIncome)}
              helperText={touched.totalFamilyIncome && errors.totalFamilyIncome}
              sx={{ gridColumn: "span 2" }}
            />

            <Typography variant="h6" sx={{ gridColumn: "span 4" }}>Bank Details</Typography>
            <TextField
              label="Bank Account Number"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.bankAccountNumber}
              name="bankAccountNumber"
              error={Boolean(touched.bankAccountNumber) && Boolean(errors.bankAccountNumber)}
              helperText={touched.bankAccountNumber && errors.bankAccountNumber}
              sx={{ gridColumn: "span 2" }}
            />
            <TextField
              label="Confirm Bank Account Number"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.confirmedBankAccountNumber}
              name="confirmedBankAccountNumber"
              error={Boolean(touched.confirmedBankAccountNumber) && Boolean(errors.confirmedBankAccountNumber)}
              helperText={touched.confirmedBankAccountNumber && errors.confirmedBankAccountNumber}
              sx={{ gridColumn: "span 2" }}
            />
            <TextField
              label="IFSC Code"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.ifscCode}
              name="ifscCode"
              error={Boolean(touched.ifscCode) && Boolean(errors.ifscCode)}
              helperText={touched.ifscCode && errors.ifscCode}
              sx={{ gridColumn: "span 2" }}
            />
            <TextField
              label="Branch Name"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.branchName}
              name="branchName"
              error={Boolean(touched.branchName) && Boolean(errors.branchName)}
              helperText={touched.branchName && errors.branchName}
              sx={{ gridColumn: "span 2" }}
            />

            <Typography variant="h6" sx={{ gridColumn: "span 4" }}>Academic Details</Typography>
            <TableContainer component={Paper} sx={{ gridColumn: "span 4" }}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Exam</TableCell>
                    <TableCell>School Name</TableCell>
                    <TableCell>Year of Passing</TableCell>
                    <TableCell>Percentage</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <FieldArray name="academicDetails">
                    {() => (
                      values.academicDetails.map((detail, index) => (
                        <TableRow key={index}>
                          <TableCell>{detail.exam}</TableCell>
                          <TableCell>
                            <Field
                              as={TextField}
                              name={`academicDetails.${index}.schoolName`}
                              variant="standard"
                            />
                          </TableCell>
                          <TableCell>
                            <Field
                              as={TextField}
                              name={`academicDetails.${index}.yearOfPassing`}
                              type="number"
                              variant="standard"
                            />
                          </TableCell>
                          <TableCell>
                            <Field
                              as={TextField}
                              name={`academicDetails.${index}.percentage`}
                              type="number"
                              variant="standard"
                            />
                          </TableCell>
                        </TableRow>
                      ))
                    )}
                  </FieldArray>
                </TableBody>
              </Table>
            </TableContainer>

            <Typography variant="h6" sx={{ gridColumn: "span 4" }}>Address Details</Typography>
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
              label="Address Line 2 (Optional)"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.addressLine2}
              name="addressLine2"
              sx={{ gridColumn: "span 4" }}
            />
            <TextField
              label="Address Line 3 (Optional)"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.addressLine3}
              name="addressLine3"
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

<Typography variant="h6" sx={{ gridColumn: "span 4" }}>Document Upload</Typography>
            {Object.keys(values.documents).map((docKey) => (
              <Box key={docKey} sx={{ gridColumn: "span 2" }}>
                <Typography>{docKey.charAt(0).toUpperCase() + docKey.slice(1)}</Typography>
                <Dropzone
                  acceptedFiles=".jpg,.jpeg,.png,.pdf"
                  multiple={false}
                  onDrop={(acceptedFiles) =>
                    setFieldValue(`documents.${docKey}`, acceptedFiles[0])
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
                      {!values.documents[docKey] ? (
                        <p>Add file here</p>
                      ) : (
                        <Typography>{values.documents[docKey].name}</Typography>
                      )}
                    </Box>
                  )}
                </Dropzone>
              </Box>
            ))}

            <Button
              fullWidth
              type="submit"
              sx={{
                m: "2rem 0",
                p: "1rem",
                backgroundColor: palette.primary.main,
                color: palette.background.alt,
                "&:hover": { color: palette.primary.main },
                gridColumn: "span 4",
              }}
            >
              Submit Application
            </Button>

            <Button
              fullWidth
              onClick={() => {
                // Implement DigiLocker integration here
                console.log("Fetch documents from DigiLocker");
              }}
              sx={{
                m: "1rem 0",
                p: "1rem",
                backgroundColor: palette.secondary.main,
                color: palette.background.alt,
                "&:hover": { color: palette.secondary.main },
                gridColumn: "span 4",
              }}
            >
              Fetch Documents from DigiLocker
            </Button>
          </Box>
        </form>
      )}
    </Formik>
  );
};

export default Form;