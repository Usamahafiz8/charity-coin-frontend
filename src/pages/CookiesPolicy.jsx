import { Box } from "@mui/material";
import * as React from "react";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import Heading700 from "../components/headings/heading700";

function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

const BasicBreadcrumbs = () => {
  return (
    <div
      role="presentation"
      onClick={handleClick}
      style={{
        marginBottom: "56px",
      }}
    >
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="/">
          Charity Coin
        </Link>
        <Typography color="text.primary"> Cookies Policy </Typography>
      </Breadcrumbs>
    </div>
  );
};

const CookiesPolicy = () => {
  return (
    <Box>
      <div
        style={{
          height: "400px",
          backgroundColor: "black",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Heading700
          styles={{
            color: "#03EEEF",
          }}
        >
          Privacy Policy
        </Heading700>
      </div>
      <Box sx={{ padding: "50px" }}>
        <BasicBreadcrumbs />
        <Heading700
          styles={{
            marginBottom: "16px",
            textAlign: "center",
          }}
        >
          Privacy Policy
        </Heading700>
        <Typography
          variant="body1"
          gutterBottom
          style={{
            textAlign: "left",
          }}
        >
          At UCURS, we value your privacy and are committed to protecting your
          personal information. This privacy policy explains how we collect,
          use, and disclose your personal information when you use our website
          or services.
        </Typography>
        <Box>
          <PolicySection
            title="1. Information we collect:"
            content={[
              "When you create an account on UCURS, we collect the following information:",
              "- Your name, email address, and password.",
              "- Your billing and shipping address.",
              "- Your phone number.",
              "- Your payment information.",
              "We also collect information about your use of our website, such as your IP address, browser type, and operating system.",
            ]}
          />
          <PolicySection
            title="2. Information we collect:"
            content={[
              "When you create an account on UCURS, we collect the following information:",
              "- Your name, email address, and password.",
              "- Your billing and shipping address.",
              "- Your phone number.",
              "- Your payment information.",
              "We also collect information about your use of our website, such as your IP address, browser type, and operating system.",
            ]}
          />
          <PolicySection
            title="3. Information we collect:"
            content={[
              "When you create an account on UCURS, we collect the following information:",
              "- Your name, email address, and password.",
              "- Your billing and shipping address.",
              "- Your phone number.",
              "- Your payment information.",
              "We also collect information about your use of our website, such as your IP address, browser type, and operating system.",
            ]}
          />
        </Box>
      </Box>
    </Box>
  );
};

const PolicySection = ({ title, content }) => {
  return (
    <Box
      style={{
        textAlign: "left",
        marginBottom: "28px",
      }}
    >
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      {content.map((item, index) => (
        <Typography variant="body1" gutterBottom key={index}>
          {item}
        </Typography>
      ))}
    </Box>
  );
};

export default CookiesPolicy;
