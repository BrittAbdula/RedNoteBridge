export default function CookiesPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Cookie Policy</h1>
      
      <div className="prose max-w-none">
        <p className="lead text-xl mb-8">
          RedNoteBridge is committed to transparency about our use (or rather, non-use) 
          of cookies and similar technologies.
        </p>

        <section className="mb-8">
          <h2>No-Cookie Policy</h2>
          <p>
            We are proud to announce that <strong>RedNoteBridge does not use any cookies</strong>. 
            Our tools are designed to work without the need for tracking or storing user data.
          </p>
        </section>

        <section className="mb-8">
          <h2>How We Operate Without Cookies</h2>
          <ul>
            <li>All tools work on a per-request basis</li>
            <li>No user sessions are maintained</li>
            <li>No user preferences are stored</li>
            <li>No tracking or analytics cookies</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2>Benefits of Our No-Cookie Approach</h2>
          <ul>
            <li>Enhanced privacy for all users</li>
            <li>No cookie consent banners needed</li>
            <li>Faster page loads</li>
            <li>No tracking across websites</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2>Third-Party Services</h2>
          <p>
            While our website doesn&apos;t use cookies, please note that external services 
            we use (like OpenAI&apos;s API) might have their own policies. However, these 
            services only process immediate requests and don&apos;t track user behavior on 
            our site.
          </p>
        </section>

        <section className="mb-8">
          <h2>Questions?</h2>
          <p>
            If you have any questions about our no-cookie approach, please contact us 
            at privacy@rednotebrige.com
          </p>
        </section>

        <section className="text-sm text-gray-600 mt-12">
          <p>Last updated: {new Date().toLocaleDateString()}</p>
        </section>
      </div>
    </div>
  )
} 