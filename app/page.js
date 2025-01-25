import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-blue-600 text-white py-20 sm:px-6">
        <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: "url('/hero-background.jpg')" }}></div>
        <div className="relative container mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Empowering Quant Developers. Connect, Share, Collaborate.
          </h1>
          <p className="text-lg sm:text-xl mb-8">
            Join a community of quantitative developers to chat, share ideas, and collaborate on exciting projects.
          </p>
          <div className="flex justify-center gap-4">
            <a href="#signup" className="bg-blue-800 text-white py-3 sm:px-8 px-4 rounded-full sm:text-lg hover:bg-blue-700 transition duration-300">
              Join the Community
            </a>
            <a href="#features" className="border-2 border-white text-white py-3 px-8 rounded-full sm:text-lg hover:bg-white hover:text-blue-800 transition duration-300">
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section id="features" className="py-20 bg-white text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-10">Built for Quant Developers</h2>
        <div className="flex flex-wrap justify-center gap-10">
          <div className="w-80 bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
            <img src="/chat_icon.png" alt="Chat Icon" className="w-16 h-16 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Real-Time Chat</h3>
            <p className="text-gray-600">Instant messaging for collaboration, problem-solving, and discussions around algorithms, coding, and more.</p>
          </div>
          <div className="w-80 bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
            <img src="/video_sharing_icon.png" alt="Video Icon" className="w-16 h-16 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Video Sharing</h3>
            <p className="text-gray-600">Share videos to explain complex models, coding walkthroughs, and tutorials.</p>
          </div>
          <div className="w-80 bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
            <img src="/file-icon.png" alt="File Icon" className="w-16 h-16 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">File Sharing</h3>
            <p className="text-gray-600">Easily share code, datasets, and documents in a secure and organized environment.</p>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-20 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Join the Community of Quantitative Developers</h2>
        <p className="text-lg text-gray-700 mb-8 px-1">Connect with like-minded quant developers, data scientists, financial engineers, and other experts in the field. Participate in discussions, share your knowledge, and learn from others.</p>
        <div className="flex flex-col sm:flex-row sm:justify-center sm:gap-4 px-5 gap-5">
          <a href="#community" className="bg-blue-600 text-white py-3 px-8 rounded-full text-lg hover:bg-blue-500 transition duration-300">
            Explore the Community
          </a>
          <a href="#how-it-works" className="border-2 border-blue-600 text-blue-600 py-3 px-8 rounded-full text-lg hover:bg-blue-600 hover:text-white transition duration-300">
            See How It Works
          </a>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-10">What Our Members Say</h2>
        <div className="flex flex-wrap justify-center gap-10">
          <div className="w-80 bg-gray-50 p-6 rounded-lg shadow-lg">
            <p className="text-gray-700 italic mb-4">"Quant Buddy is the best place to discuss complex trading strategies and algorithms with peers!"</p>
            <span className="font-semibold text-gray-800">John D., Quantitative Researcher</span>
          </div>
          <div className="w-80 bg-gray-50 p-6 rounded-lg shadow-lg">
            <p className="text-gray-700 italic mb-4">"The video sharing feature helped me explain my model in minutes, instead of long written descriptions."</p>
            <span className="font-semibold text-gray-800">Sara L., Data Scientist</span>
          </div>
          <div className="w-80 bg-gray-50 p-6 rounded-lg shadow-lg">
            <p className="text-gray-700 italic mb-4">"File sharing in Quant Buddy is seamless and secure, perfect for collaborative projects!"</p>
            <span className="font-semibold text-gray-800">Michael P., Quant Developer</span>
          </div>
        </div>
      </section>

      {/* Get Started Section */}
      {/* <section className="py-20 bg-blue-600 text-white text-center">
        <h2 className="text-3xl font-bold mb-6">Start Collaborating Today</h2>
        <p className="text-lg mb-8">Whether you’re a seasoned quant developer or just starting out, Quant Buddy is the perfect place to connect and share.</p>
        <div className="flex justify-center gap-4">
          <a href="#signup" className="bg-blue-800 text-white py-3 px-8 rounded-full text-lg hover:bg-blue-700 transition duration-300">
            Sign Up for Free
          </a>
          <a href="#features" className="border-2 border-white text-white py-3 px-8 rounded-full text-lg hover:bg-white hover:text-blue-800 transition duration-300">
            Explore Features
          </a>
        </div>
      </section> */}
    </div>
  );
}
export const metadata = {
  title: 'Qunat Guy',
  description: 'This is a plateform where you get a community of qunat dev enthusiaste people and connect them.',
}

//export default function Page() {}