import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Tools } from '@/components/Tools'
import { Guides } from '@/components/Guides'
import { Footer } from '@/components/Footer'
import { FAQ } from '@/components/FAQ'
// import { Community } from '@/components/Community'
// import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Tools />
      <Guides />
      {/* <Community />*/}
      <FAQ />
      <Footer /> 
    </main>
  )
}