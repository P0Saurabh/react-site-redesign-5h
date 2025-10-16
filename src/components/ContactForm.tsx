"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Alert, AlertDescription } from "@/components/ui/alert"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setSubmitted(true)
    setFormData({ name: "", email: "", message: "" })
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
      {submitted && (
        <Alert>
          <AlertDescription>Thank you! Your message has been sent.</AlertDescription>
        </Alert>
      )}
      <div>
        <label className="block text-sm font-medium mb-2">Name</label>
        <Input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your name" required />
      </div>
      <div>
        <label className="block text-sm font-medium mb-2">Email</label>
        <Input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="your@email.com"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-2">Message</label>
        <Textarea name="message" value={formData.message} onChange={handleChange} placeholder="Your message" required />
      </div>
      <Button type="submit" className="w-full">
        Send Message
      </Button>
    </form>
  )
}
