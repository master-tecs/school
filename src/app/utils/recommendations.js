
//   export function getRecommendations(formData) {
//     // This is a mock function. In a real application, you would use this data to query a database or API.
//     const mockRecommendations = [
//       {
//         schoolName: "University of Toronto",
//         country: "Canada",
//         program: "Computer Science",
//         level: "Undergraduate",
//         requirements: "High school diploma, IELTS 6.5+",
//         website: "https://www.utoronto.ca/"
//       },
//       {
//         schoolName: "Imperial College London",
//         country: "UK",
//         program: "Electrical Engineering",
//         level: "Postgraduate",
//         requirements: "Bachelor's degree, IELTS 7.0+",
//         website: "https://www.imperial.ac.uk/"
//       },
//       {
//         schoolName: "Massachusetts Institute of Technology",
//         country: "US",
//         program: "Business Analytics",
//         level: "Postgraduate",
//         requirements: "Bachelor's degree, GMAT 700+",
//         website: "https://www.mit.edu/"
//       },
//       {
//         schoolName: "University of Melbourne",
//         country: "Australia",
//         program: "Environmental Science",
//         level: "Undergraduate",
//         requirements: "High school diploma, IELTS 6.5+",
//         website: "https://www.unimelb.edu.au/"
//       },
//       {
//         schoolName: "ETH Zurich",
//         country: "Switzerland",
//         program: "Robotics",
//         level: "PhD",
//         requirements: "Master's degree, GRE 320+",
//         website: "https://ethz.ch/en.html"
//       }
//     ]
  
//     // Filter recommendations based on user input
//     return mockRecommendations.filter(rec => {
//       const countryMatch = formData.countries.toLowerCase().includes(rec.country.toLowerCase())
//       const levelMatch = formData.intendedStudyLevel.toLowerCase() === rec.level.toLowerCase()
//       return countryMatch && levelMatch
//     })
//   }

import axios from 'axios';

export async function getRecommendations(formData) {
  try {
    const response = await axios.post('/api/recommend', {
      preferredCountries: formData.countries,
      highestEducation: formData.educationLevel,
      fieldOfStudy: formData.fieldOfStudy,
      gpa: formData.gpa,
      standardizedTests: formData.standardizedTests,
      intendedLevel: formData.intendedStudyLevel,
      desiredIntake: formData.desiredIntake,
    });

    return response.data.recommendations; // Assuming the API response structure
  } catch (error) {
    console.error('Error fetching recommendations:', error);
    return [];
  }
}
  
  