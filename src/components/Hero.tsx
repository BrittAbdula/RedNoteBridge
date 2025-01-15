import Image from 'next/image'
import { Button } from '@/components/Button'

export function Hero() {
    return (
      <section className="relative bg-surface-50 border-b border-surface-300">
        <div className="container mx-auto px-4 py-20">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 ">
                Your Cultural Bridge to China&apos;s Social Media RedNote
              </h1>
              <p className="text-lg mb-8">
                Navigate RedNote like a local with our AI-powered tools and cultural insights. 
                Join thousands of global creators bridging East and West.
              </p>
              <Button href="/tools" >Get Started</Button>
            </div>
            <div className="lg:w-1/2 mt-10 lg:mt-0">
              <Image
                src="/images/bridge-illustration.svg"
                alt="Cultural Bridge Illustration"
                width={600}
                height={400}
                className="w-full"
              />
            </div>
          </div>
        </div>
      </section>
    )
  }