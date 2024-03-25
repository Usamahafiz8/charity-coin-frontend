import { Box, TextField, Button, Typography } from "@mui/material";
import React, { useState } from "react";

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
    name: "",
    email: "",
    Your_Message: "",
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
    <form
      onSubmit={handleSubmit}
      style={
        {
          // display: "flex",
          // justifyContent: "center",
          // flexDirection: "column",
          // alignItems: "center",
        }
      }
    >
      <CustomTextField
        id="name"
        label="Name"
        value={formData.name}
        onChange={handleChange}
      />
      <CustomTextField
        id="email"
        label="Email"
        value={formData.email}
        onChange={handleChange}
      />
      <CustomTextField
        id="Your_Message"
        label="Your Message"
        // multiline
        value={formData.Your_Message}
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
          Contact Form
        </Typography>
        <GeneralForm />
      </Box>
    </div>
  );
};

export default InboundForm;
