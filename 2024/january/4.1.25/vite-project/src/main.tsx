import { createRoot } from 'react-dom/client'
import './index.css'
import avatarImage from './assets/avatar-jessica.jpeg';
createRoot(document.getElementById('root')!).render(
<div className="flex items-center justify-center min-h-screen bg-gray-900">
  <div className="bg-gray-800 text-white rounded-lg shadow-lg p-8 w-80 flex flex-col items-center">
  <img
      src={avatarImage}
      
      className="w-20 h-20 rounded-full mb-4"
    />
    
    <div className="text-2xl font-bold">Jessica Randall</div>
   
    <div className="text-green-400 font-semibold text-sm mb-2 mt-1">London, United Kingdom</div>
    
    <div className="text-gray-400 text-center italic mb-6 text-sm">
      "Front-end developer and avid reader."
    </div>
    
    <div className="space-y-4 w-full">
      <button className="w-full bg-gray-700 text-sm  py-2 font-semibold rounded-md">
        GitHub
      </button>
      <button className="w-full bg-gray-700 text-sm  font-semibold py-2 rounded-md">
        Frontend Mentor
      </button>
      <button className="w-full bg-gray-700 text-sm  font-semibold py-2 rounded-md">
        LinkedIn
      </button>
      <button className="w-full bg-gray-700 text-sm  font-semibold py-2 rounded-md">
        Twitter
      </button>
      <button className="w-full bg-gray-700 text-sm  font-semibold py-2 rounded-md">
        Instagram
      </button>
    </div>
  </div>
</div>

)
