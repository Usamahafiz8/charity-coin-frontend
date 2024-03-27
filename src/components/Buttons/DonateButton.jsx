import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import QRCode from "qrcode.react"; // Import QRCode library
import FileCopyOutlinedIcon from "@mui/icons-material/FileCopyOutlined";
import "./styles.css";
import { IconButton, Snackbar } from "@mui/material";
import ContentCopyOutlinedIcon from "@mui/icons-material/ContentCopyOutlined";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 300,
  bgcolor: "background.paper",
  borderRadius: "8px",
  boxShadow: 24,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  p: 4,
};

const DonateButton = () => {
  const [open, setOpen] = React.useState(false);
  const [donationLink, setDonationLink] = React.useState(
    "Cr3Cv5GVJqDHvjeUgzPfz5ALDVjtnL5KTfrCvNs1bfDh"
  );
  const [copied, setCopied] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setCopied(false); // Reset copied state when closing modal
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(donationLink);
    setCopied(true);
  };

  const displayAddress = `${donationLink.slice(0, 15)}...${donationLink.slice(-8)}`;

  return (
    <div>
      <button class="button-6" role="button" onClick={handleOpen}>
        Donate Directly
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Donate Now
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Scan the QR code below or copy the link to donate directly:
          </Typography>
          {/* Render QR code with donation link */}
          <Box sx={{ mt: 2, display: "flex", justifyContent: "center" }}>
            <QRCode value={donationLink} />
          </Box>
          {/* Display donation link and copy button */}
          <Box sx={{ mt: 2, display: "flex", alignItems: "center" }}>
            {displayAddress}
            <IconButton onClick={copyToClipboard}>
              <ContentCopyOutlinedIcon />
            </IconButton>
          </Box>
        </Box>
      </Modal>
      <Snackbar
        open={copied}
        autoHideDuration={2000}
        onClose={() => setCopied(false)}
        message="Address copied to clipboard"
      />
    </div>
  );
};

export default DonateButton;
