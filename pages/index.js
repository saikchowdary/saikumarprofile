
import Head from 'next/head'
import Lottie from 'lottie-react'
import animationData from '../animations/loop.json'

export default function Home() {
  return (
    <>
      <Head>
        <title>Saikumar Portfolio</title>
      </Head>
      <main className="min-h-screen px-4 py-16 bg-gradient-to-br from-yellow-100 to-white">
        <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-bold text-yellow-600">Hi, I’m Saikumar</h1>
            <p className="text-lg mt-4">
              MSc in Clean Energy Processes | ML Enthusiast | Materials Scientist
            </p>
          </div>
          <div className="w-full flex justify-center">
            <Lottie animationData={animationData} loop={true} style={{ height: 300, width: 300 }} />
          </div>
        </div>
      </main>
    </>
  )
}
