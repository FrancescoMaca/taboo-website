export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Welcome to Ta-Boo
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          The most entertaining mobile word game for your social gatherings
        </p>
        
        <div className="flex justify-center space-x-4 mb-12">
          <a 
            href="#"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
          >
            Download for iOS
          </a>
          <a 
            href="#"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700"
          >
            Download for Android
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="p-6 bg-white rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-2">Fun for Everyone</h3>
            <p className="text-gray-600">Perfect for parties, family gatherings, or any social event</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-2">Easy to Play</h3>
            <p className="text-gray-600">Simple rules, endless entertainment</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-2">Free to Download</h3>
            <p className="text-gray-600">Get started with Ta-Boo today</p>
          </div>
        </div>
      </div>
    </div>
  )
}