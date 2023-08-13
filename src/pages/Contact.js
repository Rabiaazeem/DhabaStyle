import React from "react";
import Layout from "./../components/Layout/Layout";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import MailIcon from "@mui/icons-material/Mail";
import CallIcon from "@mui/icons-material/Call";
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

const Contact = () => {
  return (
    <Layout>
      <Box sx={{ my: 8, textAlign: "center", "& h4": { fontWeight: "bold", mb: 6 } }}>
        <Typography variant="h4">Contact My Restaurant</Typography>
        <p>
          "Connect with the rich flavors of DhabaStyle cuisine at our website. Explore our authentic Desi dishes, savor culinary excellence, and let your taste buds embark on a delightful journey. Contact us to experience the magic of tradition and taste in every bite."
        </p>
      </Box>
      <Box
        sx={{
          m: 3,
          width: "550px",
          marginLeft: "auto",
          marginRight: "auto",
          "@media (max-width:600px)": {
            width: "100%",
          },
        }}
      >
        <TableContainer component={Paper}>
          <Table aria-label="contact table">
            <TableHead>
              <TableRow>
                <TableCell
                  sx={{ bgcolor: "orange", color: "white" }}
                  align="center"
                >
                  Contact Us
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                  <SupportAgentIcon sx={{ color: "red", pt: 1 }} /> 000-00-0000
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <MailIcon sx={{ color: "skyblue", pt: 1 }} /> food@gmail.com
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <CallIcon sx={{ color: "green", pt: 1 }} /> 1234567890
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Layout>
  );
};

export default Contact;
