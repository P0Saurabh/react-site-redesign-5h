"use client"

import { useState } from "react"
import { Box, TextField, Button, Typography, Alert } from "@mui/material"

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle")

  async function onSubmit(formData: FormData) {
    try {
      // simulate async submit
      await new Promise((r) => setTimeout(r, 500))
      setStatus("success")
    } catch {
      setStatus("error")
    }
  }

  return (
    <Box component="form" action={onSubmit} noValidate sx={{ display: "grid", gap: 2 }}>
      <TextField name="name" label="Full Name" required autoComplete="name" />
      <TextField name="email" type="email" label="Email" required autoComplete="email" />
      <TextField name="subject" label="Subject" required />
      <TextField name="message" label="Message" required multiline minRows={4} />
      <Button type="submit" variant="contained" color="primary">
        Send Message
      </Button>
      {status === "success" && (
        <Alert severity="success" role="status">
          Thanks! We’ll get back to you shortly.
        </Alert>
      )}
      {status === "error" && (
        <Alert severity="error" role="alert">
          Something went wrong. Please try again.
        </Alert>
      )}
      <Typography variant="caption" color="text.secondary">
        By submitting, you agree to our terms and privacy policy.
      </Typography>
    </Box>
  )
}
