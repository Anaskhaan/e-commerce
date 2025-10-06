// "use client";
// import { useState } from "react";
// import { useRouter, useSearchParams } from "next/navigation";

// // Validation helpers
// const validateCardNumber = (num: string) => {
//   const sanitized = num.replace(/\D/g, "");
//   if (sanitized.length !== 16) return false;
//   // Luhn Algorithm
//   let sum = 0;
//   let shouldDouble = false;
//   for (let i = sanitized.length - 1; i >= 0; i--) {
//     let digit = parseInt(sanitized.charAt(i));
//     if (shouldDouble) {
//       digit *= 2;
//       if (digit > 9) digit -= 9;
//     }
//     sum += digit;
//     shouldDouble = !shouldDouble;
//   }
//   return sum % 10 === 0;
// };

// const validateExpiry = (expiry: string) => {
//   const match = expiry.match(/^(\d{2})\/(\d{2})$/);
//   if (!match) return false;
//   const month = parseInt(match[1]);
//   const year = parseInt(match[2]) + 2000;
//   const now = new Date();
//   const exp = new Date(year, month - 1, 1);
//   return (
//     month >= 1 &&
//     month <= 12 &&
//     exp >= new Date(now.getFullYear(), now.getMonth(), 1)
//   );
// };

// const validateCVV = (cvv: string) => /^[0-9]{3,4}$/.test(cvv);
// const validatePhone = (phone: string) =>
//   /^\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/.test(phone);
// const validateEmail = (email: string) =>
//   /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

// export default function PaymentPage() {
//   const router = useRouter();
//   const searchParams = useSearchParams();

//   const productName = searchParams.get("name");
//   const productPrice = parseFloat(searchParams.get("price") || "0");
//   const productPlan = searchParams.get("plan");

//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     address: "",
//     cardNumber: "",
//     expiry: "",
//     cvv: "",
//   });

//   const [errors, setErrors] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     address: "",
//     cardNumber: "",
//     expiry: "",
//     cvv: "",
//   });

//   const [loading, setLoading] = useState(false);
//   const [success, setSuccess] = useState(false);

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     let { name, value } = e.target;

//     // Format card number: XXXX XXXX XXXX XXXX
//     if (name === "cardNumber") {
//       value = value.replace(/\D/g, "").slice(0, 16);
//       value = value.match(/.{1,4}/g)?.join(" ") || value;
//     }

//     // Format expiry: MM/YY
//     if (name === "expiry") {
//       value = value.replace(/\D/g, "").slice(0, 4);
//       if (value.length > 2) value = value.slice(0, 2) + "/" + value.slice(2);
//     }

//     // Format US phone: (XXX) XXX-XXXX
//     if (name === "phone") {
//       value = value.replace(/\D/g, "").slice(0, 10);
//       if (value.length > 6)
//         value = `(${value.slice(0, 3)}) ${value.slice(3, 6)}-${value.slice(6)}`;
//       else if (value.length > 3)
//         value = `(${value.slice(0, 3)}) ${value.slice(3)}`;
//       else if (value.length > 0) value = `(${value}`;
//     }

//     setForm({ ...form, [name]: value });

//     // Real-time validation
//     switch (name) {
//       case "name":
//         setErrors({ ...errors, name: value ? "" : "Enter your full name" });
//         break;
//       case "email":
//         setErrors({
//           ...errors,
//           email: validateEmail(value) ? "" : "Enter a valid email",
//         });
//         break;
//       case "phone":
//         setErrors({
//           ...errors,
//           phone: validatePhone(value) ? "" : "Enter a valid US phone number",
//         });
//         break;
//       case "address":
//         setErrors({ ...errors, address: value ? "" : "Enter your address" });
//         break;
//       case "cardNumber":
//         setErrors({
//           ...errors,
//           cardNumber: validateCardNumber(value) ? "" : "Invalid card number",
//         });
//         break;
//       case "expiry":
//         setErrors({
//           ...errors,
//           expiry: validateExpiry(value) ? "" : "Invalid expiry",
//         });
//         break;
//       case "cvv":
//         setErrors({ ...errors, cvv: validateCVV(value) ? "" : "Invalid CVV" });
//         break;
//     }
//   };

//   const handlePayment = async () =>
//     new Promise((resolve) => setTimeout(resolve, 2000));

//   const handleSubmit = async (e?: React.FormEvent) => {
//     e?.preventDefault();

//     // Prevent submission if any errors
//     const hasError =
//       Object.values(errors).some((err) => err) ||
//       Object.values(form).some((val) => !val);
//     if (hasError) return alert("Please fix errors before submitting");

//     setLoading(true);
//     const orderData = {
//       ...form,
//       product: { name: productName, plan: productPlan, price: productPrice },
//     };

//     try {
//       await handlePayment();

//       const res = await fetch("/api/orders", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(orderData),
//       });
//       if (!res.ok) throw new Error("Failed to save order");

//       setSuccess(true);
//       router.push("/thank-you");
//     } catch (err) {
//       alert("Error processing payment or saving order");
//       console.error(err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const subtotal = productPrice;
//   const tax = productPrice * 0.05;
//   const total = subtotal + tax;

//   const inputClass = (field: string) =>
//     `w-full border rounded-lg px-4 py-3 focus:ring-2 outline-none ${
//       errors[field]
//         ? "border-red-500 focus:ring-red-400"
//         : "border-gray-200 focus:ring-[#ba55d3]"
//     }`;

//   return (
//     <section className='min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100 py-16 px-6'>
//       <div className='max-w-7xl mx-auto'>
//         {/* Header */}
//         <div className='text-center mb-12'>
//           <h1 className='text-4xl font-bold text-gray-900 mb-3'>
//             Complete Your Purchase
//           </h1>
//           <p className='text-gray-600 text-lg max-w-2xl mx-auto'>
//             Fill in your details and complete your order securely
//           </p>
//         </div>

//         <div className='grid lg:grid-cols-3 gap-8 items-start'>
//           {/* Progress Steps */}
//           <div className='lg:col-span-3 mb-8'>
//             <div className='flex justify-center items-center space-x-4'>
//               {["Cart", "Details", "Payment"].map((step, index) => (
//                 <div key={step} className='flex items-center'>
//                   <div
//                     className={`flex items-center justify-center w-10 h-10 rounded-full ${
//                       index === 1
//                         ? "bg-purple-600 text-white border-2 border-purple-600"
//                         : index < 1
//                         ? "bg-green-500 text-white border-2 border-green-500"
//                         : "bg-white text-gray-400 border-2 border-gray-300"
//                     } font-semibold text-sm`}>
//                     {index < 1 ? "✓" : index + 1}
//                   </div>
//                   <span
//                     className={`ml-2 font-medium ${
//                       index === 1
//                         ? "text-purple-600"
//                         : index < 1
//                         ? "text-green-500"
//                         : "text-gray-400"
//                     }`}>
//                     {step}
//                   </span>
//                   {index < 2 && (
//                     <div
//                       className={`w-16 h-0.5 mx-4 ${
//                         index < 1 ? "bg-green-500" : "bg-gray-300"
//                       }`}
//                     />
//                   )}
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Form Section */}
//           <div className='lg:col-span-2 space-y-8'>
//             {/* Personal Information Card */}
//             <div className='bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden'>
//               <div className='bg-gradient-to-r from-purple-600 to-indigo-600 p-6'>
//                 <h2 className='text-xl font-semibold text-white flex items-center'>
//                   <svg
//                     className='w-5 h-5 mr-2'
//                     fill='none'
//                     stroke='currentColor'
//                     viewBox='0 0 24 24'>
//                     <path
//                       strokeLinecap='round'
//                       strokeLinejoin='round'
//                       strokeWidth={2}
//                       d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'
//                     />
//                   </svg>
//                   Personal Information
//                 </h2>
//               </div>
//               <div className='p-6 space-y-6'>
//                 {/* Name */}
//                 <div>
//                   <label className='block text-sm font-semibold mb-3 text-gray-700 flex items-center'>
//                     <span className='bg-purple-100 text-purple-600 w-5 h-5 rounded-full flex items-center justify-center text-xs mr-2'>
//                       1
//                     </span>
//                     Full Name
//                   </label>
//                   <input
//                     type='text'
//                     name='name'
//                     value={form.name}
//                     onChange={handleChange}
//                     className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-200 ${
//                       errors.name
//                         ? "border-red-300 bg-red-50"
//                         : "border-gray-200 hover:border-purple-300 focus:border-purple-500"
//                     } focus:ring-2 focus:ring-purple-200 outline-none`}
//                     placeholder='John Doe'
//                   />
//                   {errors.name && (
//                     <p className='text-red-500 text-sm mt-2 flex items-center'>
//                       <svg
//                         className='w-4 h-4 mr-1'
//                         fill='currentColor'
//                         viewBox='0 0 20 20'>
//                         <path
//                           fillRule='evenodd'
//                           d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z'
//                           clipRule='evenodd'
//                         />
//                       </svg>
//                       {errors.name}
//                     </p>
//                   )}
//                 </div>

//                 {/* Email & Phone */}
//                 <div className='grid md:grid-cols-2 gap-6'>
//                   <div>
//                     <label className='block text-sm font-semibold mb-3 text-gray-700 flex items-center'>
//                       <span className='bg-purple-100 text-purple-600 w-5 h-5 rounded-full flex items-center justify-center text-xs mr-2'>
//                         2
//                       </span>
//                       Email Address
//                     </label>
//                     <input
//                       type='email'
//                       name='email'
//                       value={form.email}
//                       onChange={handleChange}
//                       className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-200 ${
//                         errors.email
//                           ? "border-red-300 bg-red-50"
//                           : "border-gray-200 hover:border-purple-300 focus:border-purple-500"
//                       } focus:ring-2 focus:ring-purple-200 outline-none`}
//                       placeholder='you@example.com'
//                     />
//                     {errors.email && (
//                       <p className='text-red-500 text-sm mt-2 flex items-center'>
//                         <svg
//                           className='w-4 h-4 mr-1'
//                           fill='currentColor'
//                           viewBox='0 0 20 20'>
//                           <path
//                             fillRule='evenodd'
//                             d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z'
//                             clipRule='evenodd'
//                           />
//                         </svg>
//                         {errors.email}
//                       </p>
//                     )}
//                   </div>
//                   <div>
//                     <label className='block text-sm font-semibold mb-3 text-gray-700 flex items-center'>
//                       <span className='bg-purple-100 text-purple-600 w-5 h-5 rounded-full flex items-center justify-center text-xs mr-2'>
//                         3
//                       </span>
//                       Phone Number
//                     </label>
//                     <input
//                       type='tel'
//                       name='phone'
//                       value={form.phone}
//                       onChange={handleChange}
//                       className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-200 ${
//                         errors.phone
//                           ? "border-red-300 bg-red-50"
//                           : "border-gray-200 hover:border-purple-300 focus:border-purple-500"
//                       } focus:ring-2 focus:ring-purple-200 outline-none`}
//                       placeholder='(123) 456-7890'
//                     />
//                     {errors.phone && (
//                       <p className='text-red-500 text-sm mt-2 flex items-center'>
//                         <svg
//                           className='w-4 h-4 mr-1'
//                           fill='currentColor'
//                           viewBox='0 0 20 20'>
//                           <path
//                             fillRule='evenodd'
//                             d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z'
//                             clipRule='evenodd'
//                           />
//                         </svg>
//                         {errors.phone}
//                       </p>
//                     )}
//                   </div>
//                 </div>

//                 {/* Address */}
//                 <div>
//                   <label className='block text-sm font-semibold mb-3 text-gray-700 flex items-center'>
//                     <span className='bg-purple-100 text-purple-600 w-5 h-5 rounded-full flex items-center justify-center text-xs mr-2'>
//                       4
//                     </span>
//                     Shipping Address
//                   </label>
//                   <textarea
//                     name='address'
//                     value={form.address}
//                     onChange={handleChange}
//                     rows={3}
//                     className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-200 ${
//                       errors.address
//                         ? "border-red-300 bg-red-50"
//                         : "border-gray-200 hover:border-purple-300 focus:border-purple-500"
//                     } focus:ring-2 focus:ring-purple-200 outline-none resize-none`}
//                     placeholder='Street, City, Country, ZIP Code'
//                   />
//                   {errors.address && (
//                     <p className='text-red-500 text-sm mt-2 flex items-center'>
//                       <svg
//                         className='w-4 h-4 mr-1'
//                         fill='currentColor'
//                         viewBox='0 0 20 20'>
//                         <path
//                           fillRule='evenodd'
//                           d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z'
//                           clipRule='evenodd'
//                         />
//                       </svg>
//                       {errors.address}
//                     </p>
//                   )}
//                 </div>
//               </div>
//             </div>

//             {/* Payment Information Card */}
//             <div className='bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden'>
//               <div className='bg-gradient-to-r from-purple-600 to-indigo-600 p-6'>
//                 <h2 className='text-xl font-semibold text-white flex items-center'>
//                   <svg
//                     className='w-5 h-5 mr-2'
//                     fill='none'
//                     stroke='currentColor'
//                     viewBox='0 0 24 24'>
//                     <path
//                       strokeLinecap='round'
//                       strokeLinejoin='round'
//                       strokeWidth={2}
//                       d='M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z'
//                     />
//                   </svg>
//                   Payment Details
//                 </h2>
//               </div>
//               <div className='p-6 space-y-6'>
//                 <div className='grid md:grid-cols-2 gap-6'>
//                   <div className='md:col-span-2'>
//                     <label className='block text-sm font-semibold mb-3 text-gray-700'>
//                       Card Number
//                     </label>
//                     <div className='relative'>
//                       <input
//                         type='text'
//                         name='cardNumber'
//                         placeholder='1234 5678 9012 3456'
//                         value={form.cardNumber}
//                         onChange={handleChange}
//                         className={`w-full px-4 py-3 pl-12 rounded-xl border-2 transition-all duration-200 ${
//                           errors.cardNumber
//                             ? "border-red-300 bg-red-50"
//                             : "border-gray-200 hover:border-purple-300 focus:border-purple-500"
//                         } focus:ring-2 focus:ring-purple-200 outline-none`}
//                       />
//                       <div className='absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400'>
//                         <svg
//                           className='w-5 h-5'
//                           fill='currentColor'
//                           viewBox='0 0 20 20'>
//                           <path d='M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z' />
//                           <path
//                             fillRule='evenodd'
//                             d='M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z'
//                             clipRule='evenodd'
//                           />
//                         </svg>
//                       </div>
//                     </div>
//                     {errors.cardNumber && (
//                       <p className='text-red-500 text-sm mt-2 flex items-center'>
//                         <svg
//                           className='w-4 h-4 mr-1'
//                           fill='currentColor'
//                           viewBox='0 0 20 20'>
//                           <path
//                             fillRule='evenodd'
//                             d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z'
//                             clipRule='evenodd'
//                           />
//                         </svg>
//                         {errors.cardNumber}
//                       </p>
//                     )}
//                   </div>

//                   <div>
//                     <label className='block text-sm font-semibold mb-3 text-gray-700'>
//                       Expiry Date
//                     </label>
//                     <input
//                       type='text'
//                       name='expiry'
//                       placeholder='MM/YY'
//                       value={form.expiry}
//                       onChange={handleChange}
//                       className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-200 ${
//                         errors.expiry
//                           ? "border-red-300 bg-red-50"
//                           : "border-gray-200 hover:border-purple-300 focus:border-purple-500"
//                       } focus:ring-2 focus:ring-purple-200 outline-none`}
//                     />
//                     {errors.expiry && (
//                       <p className='text-red-500 text-sm mt-2 flex items-center'>
//                         <svg
//                           className='w-4 h-4 mr-1'
//                           fill='currentColor'
//                           viewBox='0 0 20 20'>
//                           <path
//                             fillRule='evenodd'
//                             d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z'
//                             clipRule='evenodd'
//                           />
//                         </svg>
//                         {errors.expiry}
//                       </p>
//                     )}
//                   </div>

//                   <div>
//                     <label className='block text-sm font-semibold mb-3 text-gray-700'>
//                       CVV
//                     </label>
//                     <div className='relative'>
//                       <input
//                         type='text'
//                         name='cvv'
//                         placeholder='123'
//                         value={form.cvv}
//                         onChange={handleChange}
//                         className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-200 ${
//                           errors.cvv
//                             ? "border-red-300 bg-red-50"
//                             : "border-gray-200 hover:border-purple-300 focus:border-purple-500"
//                         } focus:ring-2 focus:ring-purple-200 outline-none`}
//                       />
//                     </div>
//                     {errors.cvv && (
//                       <p className='text-red-500 text-sm mt-2 flex items-center'>
//                         <svg
//                           className='w-4 h-4 mr-1'
//                           fill='currentColor'
//                           viewBox='0 0 20 20'>
//                           <path
//                             fillRule='evenodd'
//                             d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z'
//                             clipRule='evenodd'
//                           />
//                         </svg>
//                         {errors.cvv}
//                       </p>
//                     )}
//                   </div>
//                 </div>

//                 <div className='flex items-center justify-between p-4 bg-purple-50 rounded-xl border border-purple-200'>
//                   <div className='flex items-center'>
//                     <svg
//                       className='w-5 h-5 text-green-500 mr-2'
//                       fill='currentColor'
//                       viewBox='0 0 20 20'>
//                       <path
//                         fillRule='evenodd'
//                         d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
//                         clipRule='evenodd'
//                       />
//                     </svg>
//                     <span className='text-sm text-gray-700'>
//                       Secure SSL encryption
//                     </span>
//                   </div>
//                   <div className='flex space-x-2'>
//                     <div className='w-8 h-5 bg-blue-500 rounded'></div>
//                     <div className='w-8 h-5 bg-yellow-500 rounded'></div>
//                     <div className='w-8 h-5 bg-red-500 rounded'></div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Order Summary */}
//           <div className='bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden sticky top-8'>
//             <div className='bg-gradient-to-r from-purple-600 to-indigo-600 p-6'>
//               <h2 className='text-xl font-semibold text-white flex items-center'>
//                 <svg
//                   className='w-5 h-5 mr-2'
//                   fill='none'
//                   stroke='currentColor'
//                   viewBox='0 0 24 24'>
//                   <path
//                     strokeLinecap='round'
//                     strokeLinejoin='round'
//                     strokeWidth={2}
//                     d='M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z'
//                   />
//                 </svg>
//                 Order Summary
//               </h2>
//             </div>

//             <div className='p-6'>
//               {/* Product Info */}
//               <div className='flex items-center space-x-4 mb-6 p-4 bg-gray-50 rounded-xl'>
//                 <div className='w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-lg flex items-center justify-center'>
//                   <svg
//                     className='w-6 h-6 text-white'
//                     fill='none'
//                     stroke='currentColor'
//                     viewBox='0 0 24 24'>
//                     <path
//                       strokeLinecap='round'
//                       strokeLinejoin='round'
//                       strokeWidth={2}
//                       d='M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4'
//                     />
//                   </svg>
//                 </div>
//                 <div className='flex-1'>
//                   <h3 className='font-semibold text-gray-900'>{productName}</h3>
//                   <p className='text-sm text-gray-600 capitalize'>
//                     {productPlan} Plan
//                   </p>
//                 </div>
//               </div>

//               {/* Price Breakdown */}
//               <div className='space-y-4 border-b border-gray-200 pb-6'>
//                 <div className='flex justify-between items-center py-2'>
//                   <span className='text-gray-600'>Subtotal</span>
//                   <span className='font-medium text-gray-900'>
//                     ${subtotal.toFixed(2)}
//                   </span>
//                 </div>
//                 <div className='flex justify-between items-center py-2'>
//                   <span className='text-gray-600'>Tax (5%)</span>
//                   <span className='font-medium text-gray-900'>
//                     ${tax.toFixed(2)}
//                   </span>
//                 </div>
//                 <div className='flex justify-between items-center py-2'>
//                   <span className='text-gray-600'>Discount</span>
//                   <span className='font-medium text-green-600'>-$0.00</span>
//                 </div>
//               </div>

//               {/* Total */}
//               <div className='mt-6 space-y-3'>
//                 <div className='flex justify-between items-center py-3 border-t border-gray-200'>
//                   <span className='text-lg font-semibold text-gray-900'>
//                     Total
//                   </span>
//                   <span className='text-xl font-bold text-purple-600'>
//                     ${total.toFixed(2)}
//                   </span>
//                 </div>
//               </div>

//               {/* Payment Button */}
//               <button
//                 onClick={handleSubmit}
//                 disabled={loading}
//                 className={`w-full mt-6 py-4 px-6 rounded-xl font-semibold text-white transition-all duration-200 ${
//                   loading
//                     ? "bg-gray-400 cursor-not-allowed"
//                     : "bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
//                 }`}>
//                 {loading ? (
//                   <div className='flex items-center justify-center'>
//                     <svg
//                       className='animate-spin -ml-1 mr-3 h-5 w-5 text-white'
//                       fill='none'
//                       viewBox='0 0 24 24'>
//                       <circle
//                         className='opacity-25'
//                         cx='12'
//                         cy='12'
//                         r='10'
//                         stroke='currentColor'
//                         strokeWidth='4'></circle>
//                       <path
//                         className='opacity-75'
//                         fill='currentColor'
//                         d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'></path>
//                     </svg>
//                     Processing...
//                   </div>
//                 ) : (
//                   <div className='flex items-center justify-center'>
//                     <svg
//                       className='w-5 h-5 mr-2'
//                       fill='none'
//                       stroke='currentColor'
//                       viewBox='0 0 24 24'>
//                       <path
//                         strokeLinecap='round'
//                         strokeLinejoin='round'
//                         strokeWidth={2}
//                         d='M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z'
//                       />
//                     </svg>
//                     Complete Purchase
//                   </div>
//                 )}
//               </button>

//               {success && (
//                 <div className='mt-4 p-4 bg-green-50 border border-green-200 rounded-xl flex items-center justify-center animate-pulse'>
//                   <svg
//                     className='w-5 h-5 text-green-500 mr-2'
//                     fill='currentColor'
//                     viewBox='0 0 20 20'>
//                     <path
//                       fillRule='evenodd'
//                       d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
//                       clipRule='evenodd'
//                     />
//                   </svg>
//                   <span className='text-green-700 font-medium'>
//                     Payment successful! Redirecting...
//                   </span>
//                 </div>
//               )}

//               {/* Security Badge */}
//               <div className='mt-6 text-center'>
//                 <p className='text-xs text-gray-500 flex items-center justify-center'>
//                   <svg
//                     className='w-4 h-4 mr-1 text-green-500'
//                     fill='currentColor'
//                     viewBox='0 0 20 20'>
//                     <path
//                       fillRule='evenodd'
//                       d='M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
//                       clipRule='evenodd'
//                     />
//                   </svg>
//                   256-bit SSL Secure Payment
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// app/checkout/page.jsx
"use client";

import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../Components/CheckoutForm";

const stripePromise = loadStripe("YOUR_STRIPE_PUBLISHABLE_KEY");

export default function CheckoutPage() {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements>
  );
}
