import React from 'react'
import { useRef } from 'react'
import { useForm } from 'react-hook-form';

const App = () => {

  const {register, handleSubmit} = useForm()
  // console.log(data)
  
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">

      <form onSubmit={handleSubmit((e)=> console.log(e))} className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg">

        <h1 className="text-2xl font-bold text-center mb-6">
          Registration Form
        </h1>

        {/* Name */}
        <div className="mb-4">
          <label className="block mb-2 font-medium text-gray-700">
            Name
          </label>

          <input 
          {...register("name")}
            type="text"
            placeholder="Enter your name"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg
                       outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block mb-2 font-medium text-gray-700">
            Email
          </label>

          <input 
          {...register("email")}
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg
                       outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Password */}
        <div className="mb-4">
          <label className="block mb-2 font-medium text-gray-700">
            Password
          </label>

          <input 
          {...register("password")}
            type="password"
            placeholder="Enter your password"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg
                       outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Confirm Password */}
        <div className="mb-6">
          <label className="block mb-2 font-medium text-gray-700">
            Confirm Password
          </label>

          <input 
          {...register("cnfrmpswrd")}
            type="password"
            placeholder="Confirm your password"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg
                       outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg
                     font-semibold hover:bg-blue-700
                     active:scale-95 transition"
        >
          Submit
        </button>

      </form>

    </div>
  )

}

export default App



//use of "useref" in more detail 

// import React from 'react'
// import { useRef } from 'react'

// const App = () => {

//   const useRefHook1 = useRef({})
//   // const useRefHook2 = useRef()
//   // const useRefHook3 = useRef()
//   // const useRefHook4 = useRef()

//   console.log(useRefHook1)
//   const submitHandler = (e)=>{
//     e.preventDefault()
//     // console.log(e)
//     // console.log(useRefHook1)
//     // console.log(useRefHook2.current.value)
//     // console.log(useRefHook3.current.value)
//     // console.log(useRefHook4.current.value)
//     console.log(useRefHook1.current.name.value)
//     console.log(useRefHook1.current.email.value)
//     console.log(useRefHook1.current.password.value)
//     console.log(useRefHook1.current.cnfrmpswrd.value)
//   }
//   return (
//     <div className="min-h-screen bg-gray-100 flex items-center justify-center">

//       <form onSubmit={submitHandler} className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg">

//         <h1 className="text-2xl font-bold text-center mb-6">
//           Registration Form
//         </h1>

//         {/* Name */}
//         <div className="mb-4">
//           <label className="block mb-2 font-medium text-gray-700">
//             Name
//           </label>

//           <input 
//             type="text"
//             placeholder="Enter your name"
//             className="w-full px-4 py-2 border border-gray-300 rounded-lg
//                        outline-none focus:ring-2 focus:ring-blue-500"
//           />
//         </div>

//         {/* Email */}
//         <div className="mb-4">
//           <label className="block mb-2 font-medium text-gray-700">
//             Email
//           </label>

//           <input 
//           ref={(e)=> useRefHook1.current.email = e } 
//             type="email"
//             placeholder="Enter your email"
//             className="w-full px-4 py-2 border border-gray-300 rounded-lg
//                        outline-none focus:ring-2 focus:ring-blue-500"
//           />
//         </div>

//         {/* Password */}
//         <div className="mb-4">
//           <label className="block mb-2 font-medium text-gray-700">
//             Password
//           </label>

//           <input 
//           ref={(e)=> useRefHook1.current.password = e }
//             type="password"
//             placeholder="Enter your password"
//             className="w-full px-4 py-2 border border-gray-300 rounded-lg
//                        outline-none focus:ring-2 focus:ring-blue-500"
//           />
//         </div>

//         {/* Confirm Password */}
//         <div className="mb-6">
//           <label className="block mb-2 font-medium text-gray-700">
//             Confirm Password
//           </label>

//           <input 
//           ref={(e)=> useRefHook1.current.cnfrmpswrd = e }
//             type="password"
//             placeholder="Confirm your password"
//             className="w-full px-4 py-2 border border-gray-300 rounded-lg
//                        outline-none focus:ring-2 focus:ring-blue-500"
//           />
//         </div>

//         {/* Submit Button */}
//         <button
//           type="submit"
//           className="w-full bg-blue-600 text-white py-2 rounded-lg
//                      font-semibold hover:bg-blue-700
//                      active:scale-95 transition"
//         >
//           Submit
//         </button>

//       </form>

//     </div>
//   )

// }

// export default App