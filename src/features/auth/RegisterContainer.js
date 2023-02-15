/// ปุ้ม  กด  create new accout

import RegisterForm from './RegisterForm';

export default function Registercontanier({ isShow, setIsShow }) {
  return (
    <>
      <div
        className={`w-full h-full bg-slate-200 flex justify-center absolute top-0  z-[100] ${
          isShow ? 'visible' : 'invisible'
        }`}
        tabIndex="1"
        onClick={() => setIsShow(false)}
      >
        <div
          className="w-fit h-fit bg-white "
          onClick={e => e.stopPropagation(false)}
        >
          <div className="flex justify-end modal-header ">
            <button
              type="button"
              className="btn-close"
              onClick={() => setIsShow(false)}
            >
              <i className="fa-solid fa-xmark "></i>
            </button>
          </div>
          <div className="modal-body">
            <RegisterForm onClose={() => setIsShow(false)} />
          </div>
        </div>
      </div>
      <div className="modal-backdrop fade show" />
    </>
  );
}
