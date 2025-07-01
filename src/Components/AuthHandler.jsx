// import { useEffect } from 'react'
// import { getAuth, getRedirectResult, onAuthStateChanged } from 'firebase/auth'
// import { useNavigate } from 'react-router-dom'
// import { app } from '../Firebase.jsx'

// export default function AuthHandler() {
//   const auth = getAuth(app)
//   const navigate = useNavigate()

//   useEffect(() => {
//     getRedirectResult(auth)
//       .then((result) => {
//         if (result && result.user) {
//           console.log('✅ Got redirect result:', result.user)
//           navigate('/')
//         }
//       })
//       .catch(console.error)

//     const unsubscribe = onAuthStateChanged(auth, (user) => {
//       if (user) {
//         console.log('✅ Got auth state:', user)
//         navigate('/')
//       }
//     })

//     return unsubscribe
//   }, [auth, navigate])

//   return null
// }
