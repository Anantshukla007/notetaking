import { useAuth0 } from "@auth0/auth0-react";
import { LogIn, StickyNote, Sparkles, Lock } from "lucide-react";
import Notes from "./pages/Notes";

export default function App() {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-16 w-16 border-4 border-indigo-600 border-t-transparent mb-4"></div>
          <p className="text-xl text-gray-700 font-medium">Loading your notes...</p>
        </div>
      </div>
    );
  }


  return isAuthenticated ? <Notes /> : <Login />;
}

function Login() {
  const { loginWithRedirect } = useAuth0();
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        {/* Main Card */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-white">
          {/* Icon Header */}
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl blur-xl opacity-50 animate-pulse"></div>
              <div className="relative bg-gradient-to-r from-indigo-600 to-purple-600 p-4 rounded-2xl">
                <StickyNote className="text-white" size={48} />
              </div>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-4xl font-bold text-center mb-3 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Notes App
          </h1>
          
          <p className="text-center text-gray-600 mb-8">
            Your thoughts, organized beautifully ✨
          </p>

          {/* Features List */}
          <div className="space-y-3 mb-8">
            <div className="flex items-center gap-3 text-gray-700">
              <div className="bg-indigo-100 p-2 rounded-lg">
                <Sparkles size={20} className="text-indigo-600" />
              </div>
              <span>Create and manage notes effortlessly</span>
            </div>
            <div className="flex items-center gap-3 text-gray-700">
              <div className="bg-purple-100 p-2 rounded-lg">
                <Lock size={20} className="text-purple-600" />
              </div>
              <span>Secure and private with Auth0</span>
            </div>
            <div className="flex items-center gap-3 text-gray-700">
              <div className="bg-pink-100 p-2 rounded-lg">
                <StickyNote size={20} className="text-pink-600" />
              </div>
              <span>Access your notes from anywhere</span>
            </div>
          </div>

          {/* Login Button */}
          <button
            onClick={() => loginWithRedirect()}
            className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-4 rounded-xl font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group"
          >
            <LogIn size={20} className="group-hover:translate-x-1 transition-transform" />
            <span>Log In to Get Started</span>
          </button>

          {/* Footer Text */}
          <p className="text-center text-sm text-gray-500 mt-6">
            Secure authentication powered by Auth0
          </p>
        </div>

        {/* Decorative Elements */}
        <div className="mt-8 text-center">
          <p className="text-gray-600 text-sm">
            Start capturing your ideas today 💡
          </p>
        </div>
      </div>
    </div>
  );
}