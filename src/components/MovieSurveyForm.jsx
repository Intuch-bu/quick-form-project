import { useState } from 'react'
import { Film, RotateCcw, Send } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Textarea } from '@/components/ui/textarea'
import { movies } from '@/constants/movies'
import { validateSurveyForm } from '@/utils/validate'

function RequiredMark() {
  return <span className="text-destructive">*</span>
}

function MovieSurveyForm({ onSubmit }) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [selectedMovie, setSelectedMovie] = useState('')
  const [comment, setComment] = useState('')
  const [errors, setErrors] = useState({})

  const handleReset = () => {
    setName('')
    setEmail('')
    setSelectedMovie('')
    setComment('')
    setErrors({})
  }

  const handleNameChange = (e) => {
    setName(e.target.value)
    if (errors.name) {
      setErrors((prev) => ({ ...prev, name: undefined }))
    }
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
    if (errors.email) {
      setErrors((prev) => ({ ...prev, email: undefined }))
    }
  }

  const handleMovieChange = (value) => {
    setSelectedMovie(value)
    if (errors.movie) {
      setErrors((prev) => ({ ...prev, movie: undefined }))
    }
  }

  const handleSubmit = () => {
    const validationErrors = validateSurveyForm({ name, email, selectedMovie })

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    const movie = movies.find((item) => item.id === selectedMovie)

    onSubmit({
      name: name.trim(),
      email: email.trim(),
      movieTitle: movie?.title ?? '',
      comment: comment.trim(),
    })
  }

  return (
    <div className="flex min-h-svh items-center justify-center bg-muted/40 p-6">
      <Card className="w-full max-w-lg pt-0 shadow-sm">
        <CardHeader className="bg-primary px-6 py-4 text-primary-foreground">
          <div className="flex items-center gap-2">
            <Film className="size-5" />
            <CardTitle className="text-base text-primary-foreground">
              Movie Survey
            </CardTitle>
          </div>
        </CardHeader>

        <CardContent className="space-y-6 pt-6">
          <div className="space-y-2">
            <Label htmlFor="name">
              ชื่อ <RequiredMark />
            </Label>
            <Input
              id="name"
              placeholder="กรุณากรอกชื่อของคุณ"
              value={name}
              onChange={handleNameChange}
              aria-invalid={!!errors.name}
            />
            {errors.name && (
              <p className="text-sm text-destructive">{errors.name}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">
              อีเมล <RequiredMark />
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="example@email.com"
              value={email}
              onChange={handleEmailChange}
              aria-invalid={!!errors.email}
            />
            {errors.email && (
              <p className="text-sm text-destructive">{errors.email}</p>
            )}
          </div>

          <div className="space-y-3">
            <Label>
              เลือกหนังที่คุณชอบ <RequiredMark />
            </Label>
            <RadioGroup
              value={selectedMovie}
              onValueChange={handleMovieChange}
              className="items-start gap-3"
              aria-invalid={!!errors.movie}
            >
              {movies.map((movie) => (
                <div key={movie.id} className="flex w-full items-start justify-start gap-3 text-left">
                  <RadioGroupItem
                    value={movie.id}
                    id={movie.id}
                    className="mt-0.5"
                  />
                  <Label
                    htmlFor={movie.id}
                    className="flex cursor-pointer flex-col items-start gap-0.5 text-left font-normal"
                  >
                    <span className="font-medium text-foreground">
                      {movie.title} ({movie.year})
                    </span>
                    <span className="text-xs text-muted-foreground">
                      Director: {movie.director}
                    </span>
                  </Label>
                </div>
              ))}
            </RadioGroup>
            {errors.movie && (
              <p className="text-sm text-destructive">{errors.movie}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="comment">ความคิดเห็นเกี่ยวกับหนัง</Label>
            <Textarea
              id="comment"
              placeholder="พิมพ์ความคิดเห็นของคุณที่นี่..."
              rows={4}
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
          </div>
        </CardContent>

        <CardFooter className="justify-between">
          <Button type="button" variant="outline" onClick={handleReset}>
            <RotateCcw data-icon="inline-start" />
            รีเซ็ต
          </Button>
          <Button type="button" onClick={handleSubmit}>
            <Send data-icon="inline-start" />
            ส่งแบบสำรวจ
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

export default MovieSurveyForm
