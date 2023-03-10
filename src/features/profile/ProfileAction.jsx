import React from 'react';

export default function ProfileAction() {
  return (
    <div className="mb-3 align-self-md-end">
      {/* <input
        type="file"
        className="hidden"
        ref={inputEl}
        onChange={e => {
          if (e.target.files[0]) {
            (e.target.files[0]);
          }
        }}
      /> */}
      <button className="bor">
        <i className="fa-solid fa-pen" /> Edit Profile
      </button>
    </div>
  );
}
