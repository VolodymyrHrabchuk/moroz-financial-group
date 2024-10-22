import React from "react";
import {
  Html,
  Head,
  Preview,
  Body,
  Container,
  Heading,
  Text,
  Hr,
} from "@react-email/components";

const ContactEmail = ({ firstName, lastName, email, message }) => (
  <Html>
    <Head />
    <Preview>New Contact Form Submission</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>New Contact Form Submission</Heading>
        <Hr style={hr} />
        <div style={contentWrapper}>
          <Heading as="h2" style={h2}>Contact Information</Heading>
          <Text style={paragraph}>
            <strong>First Name:</strong> {firstName}
          </Text>
          <Text style={paragraph}>
            <strong>Last Name:</strong> {lastName}
          </Text>
          <Text style={paragraph}>
            <strong>Email:</strong> {email}
          </Text>
          <Hr style={hr} />
          <Heading as="h2" style={h2}>Message</Heading>
          <Text style={paragraph}>{message}</Text>
        </div>
      </Container>
    </Body>
  </Html>
);

export default ContactEmail;

const main = {
  backgroundColor: "#f6f9fc",
  fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
  padding: "20px 0",
};

const container = {
  backgroundColor: "#ffffff",
  border: "1px solid #e1e1e1",
  borderRadius: "5px",
  boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
  margin: "0 auto",
  maxWidth: "600px",
  padding: "40px 0", // Removed left and right padding here
};

const contentWrapper = {
  paddingLeft: "40px", // Added left padding here
  paddingRight: "40px", // Added right padding for consistency
};

const h1 = {
  color: "#333333",
  fontSize: "24px",
  fontWeight: "bold",
  margin: "0 0 20px",
  padding: "0",
  textAlign: "center",
};

const h2 = {
  color: "#0066cc",
  fontSize: "18px",
  fontWeight: "bold",
  margin: "0 0 10px",
  padding: "0",
};

const paragraph = {
  color: "#555555",
  fontSize: "16px",
  lineHeight: "1.5",
  margin: "0 0 15px",
};

const hr = {
  borderColor: "#e1e1e1",
  margin: "20px 0",
};