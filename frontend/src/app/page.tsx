import Image from "next/image";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Welcome to Growth LMS
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          A modern Learning Management System built with Next.js and .NET
        </p>
        <div className="space-x-4">
          <a
            href="/login"
            className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Login
          </a>
          <a
            href="/register"
            className="inline-block bg-gray-200 text-gray-800 px-6 py-2 rounded-lg hover:bg-gray-300 transition-colors"
          >
            Register
          </a>
        </div>
      </div>
    </div>
  );
}
