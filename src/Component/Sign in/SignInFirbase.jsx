// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";

// function SignInFirbase() {
//   const [values, setValues] = useState({
//     name: "",
//     email: "",
//     password: "",
//   });
//   const navigate = useNavigate();

//   const handelInput = (event) => {
//     setValues((prev) => ({
//       ...prev,
//       [event.target.name]: event.target.value,
//     }));
//   };

//   const handelSubmit = async (e) => {
//     e.preventDefault();
//     const { name, email, password } = values;
//     // localStorage.setItem("signindata", JSON.stringify(values));

//     const option = {
//       method: "POST",
//       Headers: { "content-Type": "aplication/json" },
//       body: JSON.stringify({ name, email, password }),
//     };
//     const res = await fetch(
//       "https://e-commerce-web-2077a-default-rtdb.asia-southeast1.firebasedatabase.app/userData.json",
//       option
//     );
//     if (res) {
//       alert("data store succesfully");
//     } else {
//       alert("error");
//     }
//     navigate("/");
//   };

//   return (
//     <div>
//       <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 ">
//         <div className="  h-[80vh] ">
//           <div className="sm:mx-auto sm:w-full sm:max-w-sm">
//             <img
//               className="mx-auto h-10 w-auto"
//               src="https://img.freepik.com/free-vector/colorful-bird-illustration-gradient_343694-1741.jpg?size=626&ext=jpg&ga=GA1.1.447959664.1699399500&semt=sph"
//               alt="Your Company"
//             />
//             <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
//               Login in your account
//             </h2>
//           </div>
//           <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm ">
//             <form
//               className="space-y-6"
//               action=""
//               onSubmit={handelSubmit}
//               method="POST"
//             >
//               <div>
//                 <label
//                   htmlFor="email"
//                   className="block text-sm font-medium leading-6 text-gray-900"
//                 >
//                   Name
//                 </label>

//                 <div className="mt-2">
//                   <input
//                     onChange={handelInput}
//                     id="name"
//                     name="name"
//                     type="text"
//                     autoComplete="email"
//                     required
//                     className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                   />
//                 </div>
//               </div>
//               <div>
//                 <label
//                   htmlFor="email"
//                   className="block text-sm font-medium leading-6 text-gray-900"
//                 >
//                   Email address
//                 </label>

//                 <div className="mt-2">
//                   <input
//                     onChange={handelInput}
//                     id="email"
//                     name="email"
//                     type="email"
//                     autoComplete="email"
//                     required
//                     className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                   />
//                 </div>
//               </div>

//               <div>
//                 <div className="flex items-center justify-between">
//                   <label
//                     htmlFor="password"
//                     className="block text-sm font-medium leading-6 text-gray-900"
//                   >
//                     Password
//                   </label>
//                 </div>
//                 <div className="mt-2">
//                   <input
//                     onChange={handelInput}
//                     id="password"
//                     name="password"
//                     type="password"
//                     autoComplete="current-password"
//                     required
//                     className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                   />
//                 </div>
//               </div>

//               <div>
//                 <button
//                   type="submit"
//                   className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
//                 >
//                   Login
//                 </button>
//               </div>
//             </form>

//             <p className="mt-10 text-center text-sm text-gray-500 ">
//               Already have a account
//               <Link
//                 to="/login"
//                 className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500 m-4"
//               >
//                 Login to your Acoount
//               </Link>
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default SignInFirbase;
