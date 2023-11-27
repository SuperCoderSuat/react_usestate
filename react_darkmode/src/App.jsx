import { useState } from 'react';
import './App.css';

function App() {
  const [darkmode, setDarkmode] = useState(false);
  const [buttonText, setButtonText] = useState("Change to Night");

  const toggleDarkmode = () => {
    setDarkmode((prevDarkmode) => !prevDarkmode);
    setButtonText((darkmode) => (darkmode ? "Change to Night" : "Change to Day"));
  };

  return (
    <>
      <section className={`${darkmode ? "dark" : null}`}>
        <div className='wrapper'>
          <p>{darkmode ? "Night" : "Day"}</p>
          <button onClick={toggleDarkmode}>{buttonText}</button>
        </div>
      </section>
    </>
  );
}

export default App;

// Geht auch simpler

// import { useState } from 'react';
// import './App.css';

// function App() {
//   const [darkmode, setDarkmode] = useState(false);

//   const toggleDarkmode = () => {
//     setDarkmode((prevDarkmode) => !prevDarkmode);
//   };

//   return (
//     <>
//       <section className={`${darkmode ? 'dark' : null}`}>
//         <div className='wrapper'>
//           <p>{darkmode ? 'Night' : 'Day'}</p>
//           <button onClick={toggleDarkmode}>
//             Change to {darkmode ? 'Day' : 'Night'}
//           </button>
//         </div>
//       </section>
//     </>
//   );
// }

// export default App;

