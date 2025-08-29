// This is the "About Us" page.
// The URL will be yourdomain.com/about
export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24 bg-white">
      <div className="w-full max-w-5xl text-left">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          About Our Company
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-700">
          We are a team of passionate individuals dedicated to delivering excellence. 
          Our mission is to provide innovative solutions that empower our clients and 
          drive success in an ever-changing digital landscape.
        </p>
        <p className="mt-4 text-lg leading-8 text-gray-700">
          Founded in 2024, our company has been at the forefront of the industry, 
          consistently pushing boundaries and setting new standards.
        </p>
      </div>
    </main>
  );
}
