import { useSignup } from "../hooks/useSignup";



function SignUp() {
  const {signUpWithGoogle,user,err} = useSignup()
  console.log(user);
  return (
    <div className="min-h-screen grid place-items-center">
      <button onClick={signUpWithGoogle} className="btn btn-secondary">
        <img src="./public/icons8-google-48.png" alt="" width="40px" height="40px"/>
        Google
      </button>
    </div>
  );
}

export default SignUp;
