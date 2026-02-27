import { Button } from "./ui/Button";
import "../App.css";
export function Login() {
  return (
    <div className="max-w-sm w-full mx-auto mt-20 p-8 bg-[#232b38] rounded-xl shadow-lg shadow-black/40">
      <h2 className="text-3xl font-bold mb-6 text-center text-white">Login</h2>
      <form className="space-y-5">
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

        {/* Submit Button */}
        <Button
          type="submit"
          className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white"
        >
          Login
        </Button>
      </form>
    </div>
  );
}
