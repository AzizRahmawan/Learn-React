// import { useState } from 'react'
/* import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'  */
import './App.css'
import ColorSwitcher from './ColorSwitcher'
import Counter from './Counter'
import DynamicList from './DynamicList'
import { Hello } from './Hello'
import MouseTracker from './MouseTracker'
import TextInput from './TextInput'
import ToggleVisibility from './ToggleVisibility'
import WindowResizer from './WindowResizer'
import Form from './form'

function App() {
  //const [count, setCount] = useState(0)
  const students = ['Bujang','Budi','Fulan','Fulanah']
  return(
    <div>
      <h1 className='text-secondary'>Lorem</h1>
      {students.filter((student) => student === 'Fulan').map((student,index) => (
        <Hello key={index} name={student} className='text-primary'/>
      ))}
      <Hello className='' name = "Jack"/>
      <Counter />
      <ToggleVisibility />
      <TextInput />
      <Form />
      <Button />
      <Spinners />
      <DynamicList />
      <ColorSwitcher />
      <WindowResizer />
      <MouseTracker />
    </div>
  )
}

export default App

function Button(){
  return (
    <div>
      <button type="button" className='btn-primary '>Button</button>
      <button type="button" className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-gray-800 text-white hover:bg-gray-900 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 dark:bg-white dark:text-gray-800">
        Button
      </button>
      <button type="button" className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-gray-500 text-white hover:bg-gray-600 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
        Button
      </button>
      <button type="button" className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-teal-500 text-white hover:bg-teal-600 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
        Button
      </button>
      <button type="button" className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
        Button
      </button>
      <button type="button" className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-red-500 text-white hover:bg-red-600 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
        Button
      </button>
      <button type="button" className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-yellow-500 text-white hover:bg-yellow-600 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
        Button
      </button>
    </div>
  )
}
function Spinners() {
  return (
    <>
      <div
        className="animate-spin inline-block w-6 h-6 border-[3px] border-current border-t-transparent text-gray-800 rounded-full dark:text-white"
        role="status"
        aria-label="loading"
      >
        <span className="sr-only">Loading...</span>
      </div>

      <div
        className="animate-spin inline-block w-6 h-6 border-[3px] border-current border-t-transparent text-gray-400 rounded-full"
        role="status"
        aria-label="loading"
      >
        <span className="sr-only">Loading...</span>
      </div>

      <div
        className="animate-spin inline-block w-6 h-6 border-[3px] border-current border-t-transparent text-red-600 rounded-full"
        role="status"
        aria-label="loading"
      >
        <span className="sr-only">Loading...</span>
      </div>

      <div
        className="animate-spin inline-block w-6 h-6 border-[3px] border-current border-t-transparent text-yellow-600 rounded-full"
        role="status"
        aria-label="loading"
      >
        <span className="sr-only">Loading...</span>
      </div>

      <div
        className="animate-spin inline-block w-6 h-6 border-[3px] border-current border-t-transparent text-green-600 rounded-full"
        role="status"
        aria-label="loading"
      >
        <span className="sr-only">Loading...</span>
      </div>

      <div
        className="animate-spin inline-block w-6 h-6 border-[3px] border-current border-t-transparent text-blue-600 rounded-full dark:text-blue-500"
        role="status"
        aria-label="loading"
      >
        <span className="sr-only">Loading...</span>
      </div>

      <div
        className="animate-spin inline-block w-6 h-6 border-[3px] border-current border-t-transparent text-indigo-600 rounded-full"
        role="status"
        aria-label="loading"
      >
        <span className="sr-only">Loading...</span>
      </div>

      <div
        className="animate-spin inline-block w-6 h-6 border-[3px] border-current border-t-transparent text-purple-600 rounded-full"
        role="status"
        aria-label="loading"
      >
        <span className="sr-only">Loading...</span>
      </div>

      <div
        className="animate-spin inline-block w-6 h-6 border-[3px] border-current border-t-transparent text-pink-600 rounded-full"
        role="status"
        aria-label="loading"
      >
        <span className="sr-only">Loading...</span>
      </div>

      <div
        className="animate-spin inline-block w-6 h-6 border-[3px] border-current border-t-transparent text-orange-600 rounded-full"
        role="status"
        aria-label="loading"
      >
        <span className="sr-only">Loading...</span>
      </div>
    </>
  )
}
// function Form() {
//   const [formData, setFormData] = useState({
//     username: '',
//     email: '',
//   });
//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert(`Username: ${formData.username}, Email: ${formData.email},`);
//   };
//   return (
//     <div className="justify-center items-center m-4">
//       <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-2" onSubmit={handleSubmit}>
//         <div className="mb-2">
//           <label className="block text-gray-700 text-sm font-bold " htmlFor="username">
//             username
//           </label>
//           <input
//             type="text"
//             id="username"
//             name="username"
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             placeholder="Enter username"
//             value={formData.username}
//             onChange={handleChange}
//           />
//         </div>
//         <div className="mb-4">
//             <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
//                 Email
//             </label>
//             <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                 placeholder="Enter email"
//                 value={formData.email}
//                 onChange={handleChange}
//             />
//         </div>
//         <div className="flex items-center justify-between">
//           <button
//             type="submit"
//             className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//           >
//             Sign In
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }
