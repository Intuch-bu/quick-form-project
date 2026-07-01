import { useState } from 'react'
import MovieSurveyForm from '@/components/MovieSurveyForm'
import MovieSurveySuccess from '@/components/MovieSurveySuccess'

function App() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState(null)

  const handleSubmit = (data) => {
    setFormData(data)
    setIsSubmitted(true)
  }

  const handleRestart = () => {
    setIsSubmitted(false)
    setFormData(null)
  }

  if (isSubmitted && formData) {
    return <MovieSurveySuccess data={formData} onRestart={handleRestart} />
  }

  return <MovieSurveyForm onSubmit={handleSubmit} />
}

export default App
