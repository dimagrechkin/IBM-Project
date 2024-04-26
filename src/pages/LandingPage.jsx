const LandingPage = () => (
  <>
    <div className="text-center p-20">
      <h1 className="text-6xl font-bold mb-4">It’s A Big World Out There, Go Explore.</h1>
      <p className="mb-8">Discover new attractions and experiences to match your interests and travel style.</p>
      <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 bg-white text-gray-900 hover:bg-gray-100">
        Book Now
      </button>
    </div>
    <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 space-x-4 flex">
      <div className="rounded-lg border text-card-foreground shadow-sm bg-white bg-opacity-80" data-v0-t="card">
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-900">Top Choices</h3>
          <p className="text-gray-700">Total of 600+ destinations you can explore.</p>
        </div>
      </div>
      <div className="rounded-lg border text-card-foreground shadow-sm bg-white bg-opacity-80" data-v0-t="card">
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-900">Quality Guidance</h3>
          <p className="text-gray-700">Our tour guide has 20+ years of experience.</p>
        </div>
      </div>
      <div className="rounded-lg border text-card-foreground shadow-sm bg-white bg-opacity-80" data-v0-t="card">
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-900">Easy Bookings</h3>
          <p className="text-gray-700">Best in class ticket booking system.</p>
        </div>
      </div>
    </div>
  </>
)

export default LandingPage
