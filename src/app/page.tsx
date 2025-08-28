import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-4xl font-bold text-center mb-8">
          Welcome to Vegah Site - Azure CI/CD Working!
        </h1>
        <div className="space-y-4">
          <Link 
            href="/register" 
            className="block w-full bg-blue-600 text-white text-center py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Register
          </Link>
          <Link 
            href="/login" 
            className="block w-full bg-green-600 text-white text-center py-3 px-4 rounded-lg hover:bg-green-700 transition-colors"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}