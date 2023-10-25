import './App.css';
import { useState } from 'react';
// import bg from './images/bg.jpg';

function App() {

  const [isDarkMode, setIsDarkMode] = useState(true);

   // Toggle function to switch between light and dark mode
   const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
  };


  return (
    < >
    <div className={`flex flex-row ${isDarkMode? 'bg-blue-950': 'bg-blue-200'}  py-4 px-2`}>
    <header className={`${isDarkMode? 'text-white':'text-black'} text-2xl font-bold ml-2`} >Fake Content Detector</header>  
   <button
      className={`w-16 h-8 rounded-full p-1 shadow-md ml-auto mr-1 ${
        isDarkMode ? 'bg-gray-700' : 'bg-blue-500'
      }`}
      onClick={toggleMode}
    >
      <div
        className={`w-6 h-6 rounded-full bg-white transform duration-300 ${
          isDarkMode ? 'translate-x-8' : ''
        }`}
      ></div>
    </button>
    </div>
    

    <div className="bg-cover bg-no-repeat w-full h-[676px]" style={{ backgroundImage: `url(${require('./images/bg.jpg')})` }}>
  <div className=' p-8 w-[600px] text-7xl leading-relaxed text-white font-extrabold font-serif'>
    FAKE CONTENT/NEWS DETECTION 
  </div>
  <button className={` ${isDarkMode? 'bg-blue-950 text-white':'bg-blue-200 text-black'} rounded-md p-4 ml-12  font-semibold text-base `}>Check Now!</button>
    </div>

    <div className={`${isDarkMode? 'bg-blue-900' : 'bg-white'}  h-fit flex flex-col`}>
<span className={`mx-auto my-10 text-3xl ${isDarkMode? 'text-white':'text-black'}  font-bold`}>Check if the news is real or fake!</span>
<textarea className={`mx-auto my-6 w-[700px] p-2 rounded-md ${isDarkMode?'bg-white':'bg-blue-200'}`} placeholder='Enter Tagline'></textarea>

<textarea className={`mx-auto my-6 w-[700px] p-2 rounded-md h-44 ${isDarkMode?'bg-white':'bg-blue-200'} `} placeholder='Enter Content'></textarea>
<button className={`${isDarkMode? 'bg-blue-950 text-white':'bg-blue-200 text-black'} font-semibold text-base p-4 rounded-md w-24 mx-auto`}>Predict</button>

<div className=' flex flex-row'>
<div className='p-5'>Results</div>
<div className='ml-auto mr-4 p-6 flex flex-col bg-slate-400 mb-6 rounded-md'>
  <span className={`mx-auto font-semibold text-xl ${isDarkMode? 'text-white':'text-black'}`}>
  Your Feedback
  </span>
  <textarea className='mx-auto my-6 w-[300px] p-2 rounded-md' placeholder='Feedback'></textarea>
  <button className={`${isDarkMode? 'bg-blue-950 text-white':'bg-blue-200 text-black'} font-semibold text-base p-4 rounded-md w-24 mx-auto`}>Submit</button>


 </div>
</div>
    </div>
    <footer className={`${isDarkMode? 'text-white bg-blue-950':'text-black bg-blue-200'} h-16 flex flex-row`}>
      <span className='mx-auto my-auto'>copyright@2023 | Made by Riya :)</span>
    </footer>

    </>
  );
}

export default App;
