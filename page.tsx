'use client'

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Clock, Users } from 'lucide-react'

// Target date: December 5th 2024 at 11:00 PM
const TARGET_DATE = new Date('2024-12-05T23:00:00')

function calculateTimeLeft() {
  const now = new Date()
  const difference = TARGET_DATE.getTime() - now.getTime()
  
  if (difference <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 }
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / 1000 / 60) % 60),
    seconds: Math.floor((difference / 1000) % 60)
  }
}

export default function Page() {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-purple-500 to-pink-500">
      <div className="relative mx-auto max-w-6xl px-4 py-16">
        {/* Floating shapes decoration */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute left-1/4 top-1/4 h-16 w-16 rounded-full bg-white/10" />
          <div className="absolute right-1/3 top-1/2 h-12 w-12 rounded bg-white/10" />
          <div className="absolute left-1/2 bottom-1/4 h-20 w-20 rounded-full bg-white/10" />
        </div>

        {/* Main content */}
        <div className="relative">
          {/* Header */}
          <div className="mb-12 text-center">
            <h1 className="mb-4 text-4xl font-bold text-white md:text-6xl">
              Construct Hobby Jam
              <span className="block text-2xl font-normal md:text-3xl">December 2024</span>
            </h1>
            <div className="flex items-center justify-center gap-4">
              <span className="flex items-center gap-2 text-white/90">
                <Users className="h-5 w-5" />
                6 Participants
              </span>
              <span className="flex items-center gap-2 text-white/90">
                <Clock className="h-5 w-5" />
                Time until start
              </span>
            </div>
          </div>

          {/* Main card */}
          <Card className="backdrop-blur-sm bg-white/95">
            <CardHeader>
              <CardTitle>Game Jam Details</CardTitle>
              <CardDescription>Hosted by noolkit</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="overview" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="community">Community</TabsTrigger>
                </TabsList>
                <TabsContent value="overview">
                  <div className="space-y-4 py-4">
                    <div>
                      <h3 className="font-semibold">Submission Period</h3>
                      <p className="text-sm text-muted-foreground">
                        December 5th 2024 at 11:00 PM to December 16th 2024 at 11:00 PM
                      </p>
                    </div>
                    <div>
                      <h3 className="font-semibold">Time Until Start</h3>
                      <div className="mt-2 grid grid-cols-4 gap-4 text-center">
                        <div className="rounded-lg bg-muted p-2">
                          <div className="text-2xl font-bold">{timeLeft.days}</div>
                          <div className="text-xs text-muted-foreground">days</div>
                        </div>
                        <div className="rounded-lg bg-muted p-2">
                          <div className="text-2xl font-bold">{timeLeft.hours}</div>
                          <div className="text-xs text-muted-foreground">hours</div>
                        </div>
                        <div className="rounded-lg bg-muted p-2">
                          <div className="text-2xl font-bold">{timeLeft.minutes}</div>
                          <div className="text-xs text-muted-foreground">minutes</div>
                        </div>
                        <div className="rounded-lg bg-muted p-2">
                          <div className="text-2xl font-bold">{timeLeft.seconds}</div>
                          <div className="text-xs text-muted-foreground">seconds</div>
                        </div>
                      </div>
                    </div>
                    <Button 
                      className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700"
                      onClick={() => window.location.href = 'https://itch.io/jam/construct-hobby-jam-december-2024'}
                    >
                      Join Jam
                    </Button>
                  </div>
                </TabsContent>
                <TabsContent value="community">
                  <div className="py-4">
                    <p className="text-sm text-muted-foreground">
                      Join our community to discuss game ideas, share progress, and connect with other participants!
                    </p>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

