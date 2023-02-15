// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import useAuth from '../../hook/useAuth';
// import Avatar from '../../components/Avatar';

// export default function ReviewCreateToggle() {
//   const { authenticatedUser } = useAuth();

//   const { id, firstName, profileImage } = authenticatedUser;

//   const [open, setOpen] = useState(false);
//   return (
//     <>
//       {/* <showReview /> */}

//       <div className="border bg-white shadow-sm px-3 rounded-lg tw-py-3">
//         <div className="d-flex gap-2">
//           <Link to={`/profile/${id}`}>
//             <Avatar size="40" />
//           </Link>
//           <input
//             className="btn rounded-pill text-muted text-start flex-1 btn-gray-200"
//             placeholder="what is your review"
//           />
//         </div>
//         {/* <Modal /> */}
//       </div>
//     </>
//   );
// }
