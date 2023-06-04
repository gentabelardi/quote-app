'use client'
import Card from '@/components/Card'
import Navbar from '@/components/Navbar'

export default function Home() {
  return (
    <main className="flex h-screen flex-col items-center justify-center p-24">
      <Navbar />
      <Card />
    </main>
  )
}
