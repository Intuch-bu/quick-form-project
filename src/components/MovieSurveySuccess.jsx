import { CheckCircle2, Film, RotateCcw } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

function MovieSurveySuccess({ data, onRestart }) {
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

        <CardContent className="space-y-4 pt-6">
          <div className="space-y-4 rounded-lg border border-green-200 bg-green-50 p-4">
            <div className="flex items-center gap-2 text-green-700">
              <CheckCircle2 className="size-5 shrink-0" />
              <p className="font-semibold">ส่งแบบสำรวจสำเร็จ!</p>
            </div>

            <div className="space-y-2 text-sm">
              <div className="flex gap-2">
                <span className="shrink-0 font-medium text-foreground">ชื่อ:</span>
                <span className="text-foreground">{data.name}</span>
              </div>
              <div className="flex gap-2">
                <span className="shrink-0 font-medium text-foreground">อีเมล:</span>
                <span className="text-foreground">{data.email}</span>
              </div>
              <div className="flex gap-2">
                <span className="shrink-0 font-medium text-foreground">หนังที่เลือก:</span>
                <span className="font-medium text-primary">{data.movieTitle}</span>
              </div>
            </div>

            {data.comment && (
              <>
                <div className="border-t border-green-200" />
                <div className="space-y-2">
                  <p className="text-sm font-medium text-foreground">ความคิดเห็น:</p>
                  <div className="rounded-md border bg-card px-3 py-2 text-sm text-foreground">
                    {data.comment}
                  </div>
                </div>
              </>
            )}
          </div>
        </CardContent>

        <CardFooter>
          <Button type="button" className="w-full" onClick={onRestart}>
            <RotateCcw data-icon="inline-start" />
            ทำแบบสำรวจใหม่
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

export default MovieSurveySuccess
