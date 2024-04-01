import { Box, TextField, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import Heading700 from "../headings/heading700";

// Custom text field component
const CustomTextField = ({ id, label, value, onChange, multiline = false }) => {
  return (
    <TextField
      id={id}
      name={id}
      label={label}
      variant="outlined"
      fullWidth
      margin="normal"
      value={value}
      onChange={onChange}
      multiline={multiline}
      rows={multiline ? 4 : undefined}
    />
  );
};

const GeneralForm = () => {
  const [formData, setFormData] = useState({
    Organization_Name: "",
    Organization_Website: "",
    Organization_Mission: "",
    Contact_Name: "",
    Contact_Email: "",
    Funding_Purpose: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add form submission logic here
    console.log(formData); // For demonstration, log form data to console
  };

  return (
    <form onSubmit={handleSubmit}>
      <CustomTextField
        id="Organization_Name"
        label="Organization Name"
        value={formData.Organization_Name}
        onChange={handleChange}
      />
      <CustomTextField
        id="Organization_Website"
        label="Organization Website"
        value={formData.Organization_Website}
        onChange={handleChange}
      />
      <CustomTextField
        id="Organization_Mission"
        label="Organization Mission"
        multiline
        value={formData.Organization_Mission}
        onChange={handleChange}
      />
      <CustomTextField
        id="Contact_Name"
        label="Contact Name"
        value={formData.Contact_Name}
        onChange={handleChange}
      />
      <CustomTextField
        id="Contact_Email"
        label="Contact Email"
        value={formData.Contact_Email}
        onChange={handleChange}
      />
      <CustomTextField
        id="Funding_Purpose"
        label="Funding Purpose"
        multiline
        value={formData.Funding_Purpose}
        onChange={handleChange}
      />
      <Button
        type="submit"
        variant="contained"
        sx={{
          backgroundColor: "#222623",
          color: "#A0F8F8", // Text color
          "&:hover": {
            backgroundColor: "#A0F8F8", // Change background color on hover
            color: "#222623", // Change text color on hover
          },
        }}
        fullWidth
      >
        Submit
      </Button>
    </form>
  );
};

const InboundForm = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        padding: "22px",
        backgroundColor: "red",
        backgroundImage: "linear-gradient(to bottom, #222623, #A0F8F8)",
      }}
    >
      <Box
        sx={{
          backgroundColor: "whitesmoke",
          padding: "22px",
          borderRadius: "8px",
        }}
      >
        <Typography variant="h5" gutterBottom sx={{ textAlign: "center" }}>
        </Typography>
        <Heading700 styles={{textAlign:"center"}}>
          Inbound Contact Form
        </Heading700>
        <GeneralForm />
      </Box>
    </div>
  );
};

export default InboundForm;
