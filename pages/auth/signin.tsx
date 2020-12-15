import { NextPage } from 'next';
import { useState } from 'react';
import Login from '../../components/Login/Login';
import Register from '../../components/Register/Register';

const SignIn: NextPage = () => {
  const [isRegistration, setRegistration] = useState(false);
  if (isRegistration) return <Register setRegistation={setRegistration} />;
  return <Login setRegistation={setRegistration} />;
};

export default SignIn;
