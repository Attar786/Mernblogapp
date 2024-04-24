import { Alert, Button, Label, TextInput } from "flowbite-react"
import { useState } from "react";
import { Link } from "react-router-dom"

const SignUp = () => {
  const [formData , setformData] = useState({});
  const [errorMessage, seterrorMessage] = useState(null);
  const [loading , setloading] = useState(false); 
  const HandleChange = (e) => {
  setformData({
   ...formData,
    [e.target.id]: e.target.value.trim()
  });
};
const handleSubmit = async (e) => {
e.preventDefault();
if (!formData.username || !formData.password ||formData.email)
{
    
  return seterrorMessage('all fields required');


}
try {
  const res = await fetch("api/auth/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(formData)
  });
  const data = await res.json();
  // Handle response
} catch (error) {
  // Handle error
}

}
  return (
    <div className="min-h-screen mt-20">
<div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row ms:items-center gap-5">
<div className="flex-1">
<Link
                to="/" 
                className="font-bold dark:text-white text-3xl"
            >
                <span className="py-2 px-1  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
                    Attar
                </span>
                blogs{" "}
            </Link>
<p className="text-sm mt-5">
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet maxime quae fugiat enim adipisci architecto!
</p>
</div>

<div className="flex-1">
  <form className="flex gap-3 flex-col" action=""   onSubmit={handleSubmit}>
<div>
  <Label value="Your username"/>
  <TextInput  type="text" placeholder="Username " id="username" onChange={HandleChange}/>
</div>
<div>
  <Label value="Your Email "/>
  <TextInput  type="email" placeholder="Email" id="email" onChange={HandleChange}/>
</div>
<div>
  <Label value="Your Password"/>
  <TextInput  type="password" placeholder="Password" id="password" onChange={HandleChange}/>
</div>
<Button gradientDuoTone={'purpleToPink'} type='submit'>Sign up</Button>
  </form>
  <div className="flex gap-3 mt-3">
    <span>Already have an Account?</span>
    <Link to="/signin" className="text-blue-500 font-bold">Sign in</Link>
  </div>
{
  errorMessage.message && (
    <Alert className="mt-5" color={'failure'}>
      {errorMessage}
    </Alert>
  )
}

</div>
</div>
    </div>
  )
}

export default SignUp