import { createRoot } from 'react-dom/client'
import './index.css'
import  insideCard  from "./assets/illustration-article.svg";
import avatar from "./assets/image-avatar.webp";
createRoot(document.getElementById('root')!).render(
  
 <div className=" flex items-center justify-center min-h-screen bg-yellow-300 ">
  
  <div className=' bg-white text-black rounded-2xl shadow-lg p-8 w-80 flex flex-col items-center border-black border shadow-black/100 gap-3'>
  <img src={insideCard}  className='rounded-xl w-100 h-100'/>
  <div className=' flex justify-center items-center h-7 w-20 bg-yellow-300 rounded place-self-start font-semibold tracking-tighter mt-2'> Learning</div>
   <div className='place-self-start text-sm'> Published 21 Dec 2023</div>

  <div className='place-self-start font-bold'>HTML & CSS foundations</div>

<div className='text-black text-opacity-70'>  These languages are the backbone of every website, defining structure, content, and presentation.</div>
  <div className='flex place-self-start items-center gap-3 '> 
    <img src={avatar} className='w-8 h-8' /> <div className='font-bold'> Greg Hooper </div>
    </div>
  </div>
  </div>
)
