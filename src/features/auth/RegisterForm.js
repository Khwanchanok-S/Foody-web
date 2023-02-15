// / วางกลไก เวลากรอก ว่ากรแกถูกต้องต้องโชว์อะไร
import { useState } from 'react';
import { toast } from 'react-toastify';
import validateRegister from '../../validators/validate-register';
import Input from '../../components/Input';
import * as authApi from '../../apis/auth-api';
const initialInput = {
  firstName: '',
  lastName: '',
  email: '',
  mobile: '',
  password: '',
  confirmPassword: '',
};
console.log(initialInput);
export default function RegisterForm({ onClose }) {
  const [input, setInput] = useState(initialInput);
  const [error, setError] = useState({});

  const handleChangeInput = e => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmitForm = async e => {
    try {
      e.preventDefault();
      console.log(input);
      const result = validateRegister(input);
      if (result) {
        setError(result);
      } else {
        console.log('no error');
        setError({});
        await authApi.register(input);
        setInput(initialInput);
        onClose();
        toast.success('successfully registered');
      }
    } catch (err) {
      toast.error(err.response?.data.message);
    }
  };

  return (
    <div className="flex flex-col h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8 border-2 border-r-red-600 ">
      <h2> Create New Accout</h2>
      <i className=" fa-solid fa-bowl-food fa-7x  border-2 border-r-red-600" />

      <form className="" onSubmit={handleSubmitForm}>
        <div className="mb-6">
          <label
            type="firstName"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            First Name
          </label>
          <Input
            name="firstName"
            value={input.firstName}
            onChange={handleChangeInput}
            error={error.firstName}
          />
        </div>
        <div className="mb-6">
          <label
            type="lastName"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Last Name
          </label>
          <Input
            name="lastName"
            value={input.lastName}
            onChange={handleChangeInput}
            error={error.lastName}
          />
        </div>
        <div className="mb-6">
          <label
            type="phone"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your Mobile
          </label>
          <Input
            name="mobile"
            value={input.mobile}
            onChange={handleChangeInput}
            error={error.mobile}
          />
        </div>
        <div className="mb-6">
          <label
            type="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your email
          </label>
          <Input
            name="email"
            value={input.email}
            onChange={handleChangeInput}
            error={error.email}
          />
        </div>
        <div className="mb-6">
          <label
            type="password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            password
          </label>
          <Input
            type="password"
            name="password"
            value={input.password}
            onChange={handleChangeInput}
            error={error.password}
          />
        </div>
        <div className="mb-6">
          <label
            type="password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Confirm password
          </label>
          <Input
            type="password"
            name="confirmPassword"
            value={input.confirmPassword}
            onChange={handleChangeInput}
            error={error.confirmPassword}
          />
        </div>

        <div className="mb-6">
          <button
            type="submit"
            className="text-white bg-orange-400 hover:bg-orange-400 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Sign Up
          </button>

          {/* <div className="justify-between  "> */}
          <a
            href="#"
            className="font-medium text-orange-400 hover:text-orange-400 "
          ></a>
        </div>
      </form>
    </div>
  );
}
