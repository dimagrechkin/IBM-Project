const LandingPage = () => {
  return (
    <div
      className="relative h-full w-full overflow-hidden bg-center bg-cover"
      style={{
        backgroundImage: `url(mainbackground.png)`,
      }}
    >
      <div className="h-[92vh] relative text-white">
        <nav className="flex justify-between items-center p-5">
          <div className="flex items-center space-x-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-white h-6 w-6"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>
            </svg>
            <span className="font-bold text-xl">Site name</span>
          </div>
          <div className="flex space-x-8">
            <a className="text-white hover:text-gray-300" href="#">
              Home
            </a>
            <a className="text-white hover:text-gray-300" href="#">
              About
            </a>
            <a className="text-white hover:text-gray-300" href="#">
              Contact
            </a>
            <a className="text-white hover:text-gray-300" href="#">
              Blog
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <input
              className="flex h-10 border border-input text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-48 px-4 py-2 bg-white bg-opacity-20 rounded-full text-white placeholder-white"
              placeholder="Search"
              type="search"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-white h-6 w-6"
            >
              <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </div>
        </nav>
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
      </div>
    </div>
  )
}

export default LandingPage
