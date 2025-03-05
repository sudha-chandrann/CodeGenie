import React from 'react'

function HeroSection() {
  return (
    <div className="container mx-auto px-4 py-20 flex flex-col md:flex-row items-center h-dvh justify-between" >
    <div className="md:w-1/2 space-y-6 ">
      <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500 text-center">
        AI Debugging Assistant
      </h1>
      <p className="text-xl text-gray-300 text-center">
        Revolutionize your coding experience with intelligent, AI-powered debugging and code generation.
      </p>
      <div className="flex space-x-4  justify-center items-center">
        <button className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-full transition duration-300">
          Get Started
        </button>
        <button className="border border-white px-6 py-3 rounded-full hover:bg-white hover:text-black transition duration-300">
          Watch Demo
        </button>
      </div>
    </div>
    <div className="md:w-1/2 mt-10 md:mt-0">
      <div className="bg-gray-900 p-6 rounded-lg shadow-2xl">
        <pre className="text-green-400 text-sm overflow-x-auto">
          <code>
{`def debug_assistant(error):
# AI-powered intelligent debugging
solution = ai.analyze(error)
return solution

try:
result = complex_function()
except Exception as e:
fix = debug_assistant(e)
print(f"AI Suggestion: {fix}")
`}
          </code>
        </pre>
      </div>
    </div>
  </div>
  )
}

export default HeroSection
