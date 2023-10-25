import './App.css';
import { useState } from 'react';
// import bg from './images/bg.jpg';

function App() {

  const [isDarkMode, setIsDarkMode] = useState(false);

   // Toggle function to switch between light and dark mode
   const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
  };


  return (
    < >
    <div className='flex flex-row bg-blue-950 py-4 px-2'>
    <header className=' text-white text-2xl font-bold ml-2'>Fake Content Detector</header>  
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
  {/* Content for the second div */}
</div>

    </>
  );
}

export default App;
