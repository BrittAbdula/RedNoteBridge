export default function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Terms of Service</h1>
      
      <div className="prose max-w-none">
        <p className="lead text-xl mb-8">
          By using RedNoteBridge&apos;s tools and services, you agree to these terms. 
          Please read them carefully.
        </p>

        <section className="mb-8">
          <h2>1. Service Description</h2>
          <p>
            RedNoteBridge provides AI-powered tools for translating and adapting content 
            for Chinese social media. Our services are provided &quot;as is&quot; without any 
            warranties or guarantees.
          </p>
        </section>

        <section className="mb-8">
          <h2>2. Open Access Policy</h2>
          <p>
            Our tools are freely available to all users. No registration or account 
            creation is required. We do not discriminate or restrict access based on 
            user location or any other factors.
          </p>
        </section>

        <section className="mb-8">
          <h2>3. User Responsibilities</h2>
          <ul>
            <li>Use the tools responsibly and ethically</li>
            <li>Do not attempt to reverse engineer or manipulate the services</li>
            <li>Do not use the tools for any illegal purposes</li>
            <li>Respect intellectual property rights</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2>4. Content Guidelines</h2>
          <p>
            Users are responsible for the content they submit for translation or 
            generation. Do not submit content that is:
          </p>
          <ul>
            <li>Illegal or promotes illegal activities</li>
            <li>Harassing, hateful, or discriminatory</li>
            <li>Deliberately false or misleading</li>
            <li>Violating others&apos; intellectual property rights</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2>5. Disclaimer of Warranties</h2>
          <p>
            While we strive for accuracy, we cannot guarantee the perfect cultural 
            appropriateness or accuracy of translations and generations. Users should 
            use their judgment when applying the results.
          </p>
        </section>

        <section className="text-sm text-gray-600 mt-12">
          <p>Last updated: {new Date().toLocaleDateString()}</p>
        </section>
      </div>
    </div>
  )
} 