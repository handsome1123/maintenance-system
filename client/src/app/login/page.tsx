// app/login/page.tsx
"use client";

import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-sm bg-white rounded-lg shadow p-6 space-y-6">
        <div className="text-center">
          <h1 className="text-2xl text-gray-500 font-semibold">Sign In</h1>
          <p className="text-sm text-gray-500">Enter your credentials</p>
        </div>

        <form className="space-y-4">
          <div>
            <label className="block text-sm text-gray-500 font-medium mb-1">Email</label>
            <input
              type="email"
              className="w-full text-gray-500 border rounded px-3 py-2 focus:outline-none focus:ring"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-gray-500 text-sm font-medium mb-1">Password</label>
            <input
              type="password"
              className="w-full border text-gray-500 rounded px-3 py-2 focus:outline-none focus:ring"
              placeholder="•••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 text-gray-500">
              <input type="checkbox" className="h-4 w-4" />
              Remember me
            </label>
            <button type="button" className="text-blue-600 hover:underline">
              Forgot Password?
            </button>
          </div>

          <button
            type="submit"
            className="w-full py-2 rounded bg-blue-600 text-white font-medium hover:bg-blue-700"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}
