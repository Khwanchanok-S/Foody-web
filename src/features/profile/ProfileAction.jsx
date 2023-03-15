import React, { useRef, useState } from 'react';
import useAuth from '../../hook/useAuth';

export default function ProfileAction() {
  const authenticatedUser = useAuth();
  console.log(authenticatedUser);
  const [image, setImage] = useState(null);
  const inputEl = useRef();
  return (
    <div className="mb-3 align-self-md-end">
      <input
        type="file"
        className="hidden"
        ref={inputEl}
        onChange={e => {
          if (e.target.files[0]) {
            setImage(e.target.files[0]);
          }
        }}
      />
      <button
        className="border rounded-md w-40"
        onClick={() => inputEl.current.click()}
      >
        <i className="fa-solid fa-pen" /> Edit Profile
      </button>
    </div>
  );
}
