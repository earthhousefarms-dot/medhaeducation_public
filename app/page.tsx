export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold text-blue-900">
              Medha Education
            </h1>
            <nav className="hidden md:flex space-x-6">
              <a href="#" className="text-gray-600 hover:text-blue-900 transition">Courses</a>
              <a href="#" className="text-gray-600 hover:text-blue-900 transition">About</a>
              <a href="#" className="text-gray-600 hover:text-blue-900 transition">Contact</a>
            </nav>
            <button className="px-4 py-2 bg-blue-900 text-white rounded-lg hover:bg-blue-800 transition">
              Get Started
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Unlock Your Learning Potential
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Comprehensive educational resources and courses designed to help you achieve your academic and professional goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-blue-900 text-white rounded-lg hover:bg-blue-800 transition">
              Browse Courses
            </button>
            <button className="px-8 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12">Why Choose Medha Education?</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📚</span>
              </div>
              <h4 className="text-xl font-semibold mb-2">Expert Content</h4>
              <p className="text-gray-600">Curated by industry experts and experienced educators</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h4 className="text-xl font-semibold mb-2">Personalized Learning</h4>
              <p className="text-gray-600">Adaptive learning paths tailored to your pace and goals</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏆</span>
              </div>
              <h4 className="text-xl font-semibold mb-2">Certification</h4>
              <p className="text-gray-600">Earn recognized certificates upon course completion</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-8 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Medha Education</h2>
          <p className="text-gray-600 mb-4">Empowering learners worldwide</p>
          <div className="flex justify-center space-x-6 text-sm text-gray-500">
            <a href="#" className="hover:text-gray-900 transition">Privacy Policy</a>
            <a href="#" className="hover:text-gray-900 transition">Terms of Service</a>
            <a href="#" className="hover:text-gray-900 transition">Support</a>
          </div>
        </div>
      </footer>
    </main>
  );
}