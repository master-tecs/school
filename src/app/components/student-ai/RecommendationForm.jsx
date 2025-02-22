'use client'

import { useState } from 'react'
import { getRecommendations } from '../../utils/recommendations'

export function RecommendationForm({ setRecommendations }) {
  const [formData, setFormData] = useState({
    countries: '',
    educationLevel: '',
    fieldOfStudy: '',
    gpa: '',
    standardizedTests: '',
    intendedStudyLevel: '',
    desiredIntake: '',
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     const recommendations = getRecommendations(formData)
//     setRecommendations(recommendations)
//   }

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
        console.log(formData, '<===formData from client :> calling');
      const recommendations = await getRecommendations(formData); // Call the API
      setRecommendations(recommendations); // Update state with recommendations
    } catch (error) {
      console.error('Error handling form submission:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded-lg shadow-lg mx-auto" style={{maxWidth: '600px'}}>
      <div className="mb-3">
        <label htmlFor="countries" className="form-label">Preferred Country/Countries for Study</label>
        <input type="text" className="form-control" id="countries" name="countries" value={formData.countries} onChange={handleChange} placeholder="e.g., Canada, UK, US, Australia" required />
      </div>

      <div className="mb-3">
        <label htmlFor="educationLevel" className="form-label">Highest Level of Education Completed</label>
        <select className="form-select" id="educationLevel" name="educationLevel" value={formData.educationLevel} onChange={handleChange} required>
          <option value="">Select education level</option>
          <option value="highSchool">High School Diploma</option>
          <option value="associate">Associate Degree (OND/HND)</option>
          <option value="bachelor">Bachelor&apos;s Degree</option>
          <option value="master">Master&apos;s Degree</option>
          <option value="phd">PhD</option>
        </select>
      </div>

      <div className="mb-3">
        <label htmlFor="fieldOfStudy" className="form-label">Field of Study (If Applicable)</label>
        <input type="text" className="form-control" id="fieldOfStudy" name="fieldOfStudy" value={formData.fieldOfStudy} onChange={handleChange} placeholder="e.g., Computer Science, Business, Engineering" />
      </div>

      <div className="mb-3">
        <label htmlFor="gpa" className="form-label">GPA or Equivalent (If Known)</label>
        <input type="text" className="form-control" id="gpa" name="gpa" value={formData.gpa} onChange={handleChange} placeholder="e.g., 3.5" />
      </div>

      <div className="mb-3">
        <label htmlFor="standardizedTests" className="form-label">Standardized Tests (If Any)</label>
        <input type="text" className="form-control" id="standardizedTests" name="standardizedTests" value={formData.standardizedTests} onChange={handleChange} placeholder="e.g., IELTS: 7.5, TOEFL: 100, GRE: 320" />
      </div>

      <div className="mb-3">
        <label htmlFor="intendedStudyLevel" className="form-label">Intended Level of Study</label>
        <select className="form-select" id="intendedStudyLevel" name="intendedStudyLevel" value={formData.intendedStudyLevel} onChange={handleChange} required>
          <option value="">Select intended study level</option>
          <option value="undergraduate">Undergraduate</option>
          <option value="postgraduate">Postgraduate</option>
          <option value="phd">PhD</option>
          <option value="diploma">Diploma/Certificate</option>
        </select>
      </div>

      <div className="mb-3">
        <label htmlFor="desiredIntake" className="form-label">Desired Intake or Semester</label>
        <input type="text" className="form-control" id="desiredIntake" name="desiredIntake" value={formData.desiredIntake} onChange={handleChange} placeholder="e.g., Fall 2025, Winter 2025" required />
      </div>

      <button type="submit" className="sc-primary-btn btn btn-primary w-100">Get Recommendations</button>
    </form>
  )
}

