// emails/ContactEmail.jsx
import React from "react";
import {
  Html,
  Head,
  Preview,
  Body,
  Container,
  Heading,
  Text,
} from "@react-email/components";

const ContactEmail = ({ firstName, lastName, email, message }) => (
  <Html>
    <Head />
    <Preview>New Contact Form Submission</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>New Contact Form Submission</Heading>
        <Text style={paragraph}>
          <strong>First Name:</strong> {firstName}
        </Text>
        <Text style={paragraph}>
          <strong>Last Name:</strong> {lastName}
        </Text>
        <Text style={paragraph}>
          <strong>Email:</strong> {email}
        </Text>
        <Text style={paragraph}>
          <strong>Message:</strong>
        </Text>
        <Text style={paragraph}>{message}</Text>
      </Container>
    </Body>
  </Html>
);

export default ContactEmail;

const main = {
  backgroundColor: "#f6f9fc",
  padding: "20px 0",
};

const container = {
  backgroundColor: "#ffffff",
  border: "1px solid #e1e1e1",
  padding: "40px",
  margin: "0 auto",
  width: "80%",
};

const h1 = {
  color: "#333333",
  fontSize: "34px",
  margin: "0 0 20px 0",
  textAlign: "center",
};

const paragraph = {
  color: "#555555",
  fontSize: "22px",
  lineHeight: "1.5",
  margin: "10px 0",
};
