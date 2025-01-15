export default function PrivacyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>
      
      <div className="prose max-w-none">
        <p className="lead text-xl mb-8">
          At RedNoteBridge, we prioritize your privacy and are committed to maintaining 
          the trust and confidence of our visitors.
        </p>

        <section className="mb-8">
          <h2>No Data Collection Policy</h2>
          <p>
            We want to be clear about our stance on data collection: <strong>We do not collect, 
            store, or process any personal information</strong>. Our tools are designed to work 
            without requiring any user data storage.
          </p>
        </section>

        <section className="mb-8">
          <h2>How Our Tools Work</h2>
          <ul>
            <li>All translations and generations are processed in real-time</li>
            <li>No user inputs or results are stored on our servers</li>
            <li>No cookies are used to track user behavior</li>
            <li>No user accounts or registration required</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2>Third-Party Services</h2>
          <p>
            We use OpenAI's API to power our translation and generation tools. Your inputs are 
            only used to generate immediate results and are not stored or used for any other 
            purpose.
          </p>
        </section>

        <section className="mb-8">
          <h2>Open Access</h2>
          <p>
            Our tools are freely available to everyone. We believe in providing equal access 
            to cultural bridge-building tools without barriers or data collection requirements.
          </p>
        </section>

        <section className="mb-8">
          <h2>Contact Us</h2>
          <p>
            If you have any questions about our privacy practices, please feel free to 
            contact us at privacy@rednotebrige.com
          </p>
        </section>

        <section className="text-sm text-gray-600 mt-12">
          <p>Last updated: {new Date().toLocaleDateString()}</p>
        </section>
      </div>
    </div>
  )
} 