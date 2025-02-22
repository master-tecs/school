'use client'

import { useState } from 'react'
import { RecommendationForm } from '../components/student-ai/RecommendationForm'
import { RecommendationResults } from '../components/student-ai/RecommendationResults'

export default function Home() {
  const [recommendations, setRecommendations] = useState(null)

  return (
    <div className="min-vh-100 bg-light">
      <div className="container py-5">
      <h6 className="sec-title__tagline text-center mt-3 mb2">SCHOOLS AND COURSES</h6>
        {/* <h1 className="sec-title__title mt-4 text-center text-black mb-5">AI School/Course Recommender</h1> */}
        <h2 className="sec-title__title display-4 text-center mb-5">AI <span className="primary-color italic">Recommender</span></h2>
        
        {!recommendations ? (
          <RecommendationForm setRecommendations={setRecommendations} />
        ) : (
          <RecommendationResults recommendations={recommendations} setRecommendations={setRecommendations} />
        )}
      </div>
    </div>
  )
}

