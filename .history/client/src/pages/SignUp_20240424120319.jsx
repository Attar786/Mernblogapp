import { Label, TextInput } from "flowbite-react"
import { Link } from "react-router-dom"

const SignUp = () => {
  return (
    <div className="min-h-screen mt-20">
<div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row">
<div className="">
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

<div className="">
  <form action="">
<div>
  <Label value="Your username"/>
  <TextInput  type="text" placeholder="Username " id="username"/>
</div>
<div>
  <Label value="Your Email "/>
  <TextInput  type="email" placeholder="Email" id="email"/>
</div>
<div>
  <Label value="Your Password"/>
  <TextInput  type="password" placeholder="Password" id="password"/>
</div>
  </form>
</div>
</div>
    </div>
  )
}

export default SignUp