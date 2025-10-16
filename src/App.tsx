import { Routes, Route } from "react-router-dom"
import { Toaster } from "sonner"
import Layout from "./components/Layout"
import HomePage from "./pages/HomePage"
import AboutPage from "./pages/AboutPage"
import ContactPage from "./pages/ContactPage"
import EventsPage from "./pages/EventsPage"
import GalleryPage from "./pages/GalleryPage"

export default function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
        </Route>
      </Routes>
      <Toaster />
    </>
  )
}
