"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"
import { Input } from "../components/ui/input"
import { Textarea } from "../components/ui/textarea"
import { Button } from "../components/ui/button"
import { Alert, AlertDescription } from "../components/ui/alert"

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      // Simulate async submit
      await new Promise((r) => setTimeout(r, 500))
      setStatus("success")
      setFormData({ name: "", email: "", subject: "", message: "" })
      setTimeout(() => setStatus("idle"), 3000)
    } catch {
      setStatus("error")
    }
  }

  return (
    <main>
      <div className="container mx-auto px-4">
        <header className="py-12 md:py-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Contact Us</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Tell us about your team and goals. We'll recommend the right training plan and follow up within 1–2 business
            days.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-12">
          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle>Send a message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Full Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    autoComplete="name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    autoComplete="email"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject
                  </label>
                  <Input id="subject" name="subject" value={formData.subject} onChange={handleChange} required />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                  />
                </div>
                <Button type="submit" className="w-full">
                  Send Message
                </Button>
                {status === "success" && (
                  <Alert className="bg-green-50 border-green-200">
                    <AlertDescription className="text-green-800">
                      Thanks! We'll get back to you shortly.
                    </AlertDescription>
                  </Alert>
                )}
                {status === "error" && (
                  <Alert className="bg-red-50 border-red-200">
                    <AlertDescription className="text-red-800">
                      Something went wrong. Please try again.
                    </AlertDescription>
                  </Alert>
                )}
                <p className="text-xs text-muted-foreground">
                  By submitting, you agree to our terms and privacy policy.
                </p>
              </form>
            </CardContent>
          </Card>

          {/* Contact Details */}
          <Card>
            <CardHeader>
              <CardTitle>Reach us</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <p className="text-sm font-medium mb-1">Email</p>
                <a href="mailto:hello@ctb.th" className="text-sm text-primary hover:underline">
                  hello@ctb.th
                </a>
              </div>
              <div>
                <p className="text-sm font-medium mb-1">Phone</p>
                <a href="tel:+6620000000" className="text-sm text-primary hover:underline">
                  +66 2 000 0000
                </a>
              </div>
              <div>
                <p className="text-sm font-medium mb-1">Location</p>
                <p className="text-sm text-muted-foreground">Bangkok, Thailand</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  )
}
