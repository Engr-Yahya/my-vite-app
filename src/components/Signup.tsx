import { Button } from "./ui/Button";
export function Signup() {
  return (
    <div className="max-w-xl w-full mx-auto mt-20 p-8 bg-[#232b38] rounded-xl shadow-lg shadow-black/40">
      <h2 className="text-3xl font-bold mb-6 text-center text-white">Signup</h2>
      <form className="space-y-5">
        {/* Name */}
        <div className="flex flex-col">
          <label
            htmlFor="name"
            className="mb-2 text-sm font-medium text-gray-300"
          >
            Full Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="Enter your name"
            className="bg-[#1a222c] border border-gray-600 rounded-md p-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Email */}
        <div className="flex flex-col">
          <label
            htmlFor="email"
            className="mb-2 text-sm font-medium text-gray-300"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="you@example.com"
            className="bg-[#1a222c] border border-gray-600 rounded-md p-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Password */}
        <div className="flex flex-col">
          <label
            htmlFor="password"
            className="mb-2 text-sm font-medium text-gray-300"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            className="bg-[#1a222c] border border-gray-600 rounded-md p-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Confirm Password */}
        <div className="flex flex-col">
          <label
            htmlFor="confirmPassword"
            className="mb-2 text-sm font-medium text-gray-300"
          >
            Confirm Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            placeholder="Re-enter your password"
            className="bg-[#1a222c] border border-gray-600 rounded-md p-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Signup Button */}
        <Button
          type="submit"
          className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white"
        >
          Signup
        </Button>
      </form>
    </div>
  );
}
