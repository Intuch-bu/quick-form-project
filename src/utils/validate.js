const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function validateSurveyForm({ name, email, selectedMovie }) {
  const errors = {}
  const trimmedName = name.trim()
  const trimmedEmail = email.trim()

  if (!trimmedName) {
    errors.name = 'โปรดใส่ชื่อของคุณ'
  }

  if (!trimmedEmail) {
    errors.email = 'โปรดใส่อีเมลของคุณ'
  } else if (!EMAIL_REGEX.test(trimmedEmail)) {
    errors.email = 'รูปแบบอีเมลไม่ถูกต้อง'
  }

  if (!selectedMovie) {
    errors.movie = 'กรุณาเลือกหนังที่คุณชอบ'
  }

  return errors
}