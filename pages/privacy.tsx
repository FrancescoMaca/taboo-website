export default function Privacy() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>
      
      <div className="prose prose-lg">
        <p className="mb-6">
          This privacy policy applies to the Ta-Boo app (hereby referred to as "Application") 
          for mobile devices that was created by Swondi LLC (hereby referred to as "Service Provider") 
          as a Free service. This service is intended for use "AS IS".
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          What information does the Application obtain and how is it used?
        </h2>
        <p className="mb-6">
          The Application does not obtain any information when you download and use it. 
          Registration is not required to use the Application.
        </p>

        {/* Add more sections following the same pattern */}
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">Contact Us</h2>
        <p className="mb-6">
          If you have any questions regarding privacy while using the Application, 
          or have questions about the practices, please contact the Service Provider 
          via email at{' '}
          <a href="mailto:francesco.macaluso@swondi.com" className="text-blue-600 hover:text-blue-800">
            francesco.macaluso@swondi.com
          </a>
        </p>
      </div>
    </div>
  )
}