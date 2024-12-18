// import { useFetch } from '@/hooks/useFetch'
// import React from 'react'
// import { useParams } from 'react-router-dom'

// const Wishlist = () => {
//   const { id } = useParams()
//   const { data } = useFetch(`/wishlist/wishlist/${id}`)
  
//   console.log(data)
  
//   return (
//     <div className="container mx-auto px-4 py-8">
//       <p className="text-2xl font-bold text-gray-700 mb-4">Product Details</p>
      
//       <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md">
//         <div className="flex flex-col items-center mb-6">
//           <img 
//             className="w-full h-auto rounded-lg shadow-lg" 
//             src={data?.image} 
//             alt={data?.name || 'Product Image'} 
//           />
//         </div>
        
//         <div className="text-center">
//           <h2 className="text-xl font-semibold text-gray-900 mb-2">{data?.name}</h2>
//           <p className="text-gray-600 text-base mb-4">{data?.description}</p>
          
//           <div className="text-lg font-medium text-green-500">
//             ${data?.price}
//           </div>
//         </div>
        
//         <div className="mt-6 flex justify-center">
//           <button className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300">
//             Add to Cart
//           </button>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Wishlist
