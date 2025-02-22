"use client"

import { useState, useEffect } from "react"

export default function UnderConstructionPage() {
  const [completionDate, setCompletionDate] = useState("")

  useEffect(() => {
    // Calculate completion date (30 days from now)
    const date = new Date()
    date.setDate(date.getDate() + 30)
    setCompletionDate(date.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" }))

  }, [])

  return (
    <div className="min-vh-100 d-flex align-items-center justify-content-center bg-light">
      <div className="text-center">
        <div className="display-1 text-warning mb-4">
          <i className="bi bi-cone-striped"></i>
        </div>
        <h1 className="display-4 mb-4">Under Construction</h1>
        <p className="lead mb-4">We&apos;re working hard to bring you something amazing. Please check back soon!</p>
        <div className="card bg-white p-4 shadow-sm">
          <h2 className="h4 mb-3">Site Launch</h2>
          <div className="d-flex align-items-center justify-content-center">
            <i className="bi bi-calendar-event text-primary me-2"></i>
            <p className="mb-0">Expected Completion: {completionDate}</p>
          </div>
        </div>
        <div className="mt-5">
          <h3 className="h5 mb-3">Stay Connected</h3>
          <div className="d-flex justify-content-center">
            <a href="#" className="btn btn-outline-dark mx-2">
              <i className="bi bi-facebook"></i>
            </a>
            <a href="#" className="btn btn-outline-dark mx-2">
              <i className="bi bi-twitter"></i>
            </a>
            <a href="#" className="btn btn-outline-dark mx-2">
              <i className="bi bi-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

