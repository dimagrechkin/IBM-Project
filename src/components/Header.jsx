import { Link } from 'react-router-dom'

export const Header = () => {
  return (
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
        <span className="font-bold text-xl">Graceful Getaway</span>
      </div>
      <div className="flex space-x-8">
        <Link className="text-white hover:text-gray-300" to="/">
          Home
        </Link>
        <Link className="text-white hover:text-gray-300" to="/about">
          About
        </Link>
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
  )
}
