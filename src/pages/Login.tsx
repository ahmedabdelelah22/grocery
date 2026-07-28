import { heroSectionData } from "../assets/assets"
import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BikeIcon, Loader2Icon, UserIcon } from "lucide-react";
const Login = () => {
const [email, setEmail] = useState(""); 
const [password, setPassword] = useState("");
const [name, setName] = useState("");
const [isLogin, setIsLogin] = useState(true);
const [isLoading] = useState(false);
const navgiate= useNavigate()

const handleSubmit:React.FormEventHandler<HTMLFormElement> = (e) => {
  e.preventDefault();

  console.log({
    email,
    password,
  });
  navgiate("/");
};

  return (
    <div className="min-h-screen flex">
     <div className="w-1/2 hidden md:flex items-center justify-center relative bg-app-green">
     <img src={heroSectionData.hero_image} alt="login" className="h-full object-cover inset-0 absolute opacity-10 bg-center" /> 
   <div className="relative px-12 text-center">  
     <h1 className="text-4xl font-semibold mb-4 text-white">
        Welcome Back! <br />
        Please login to your account
     </h1>
     <p className="text-white/60 font-serif text-xl max-w-sm ">groceies and orgin produce , dlivered to your doorstep. </p>
      </div>
     </div>
     {/*================================= Right Section =================================*/ }
     <div className="flex-1 flex-center bg-app-cream py-12 px-4">
     <div className="w-full max-w-md">
     <div className="text-center mb-8">
<Link to="/" className="inline-flex items-center gap-2 mb-6">
     <BikeIcon className="size-8  text-app-green" />
      <span className="text-2xl font-semibold text-app-green" >Instacart</span>
      </Link>
      <h1 className="text-2xl font-semibold text-app-green mb-2">{isLogin ?
      "Sign in to your account " : "Sign up for an account "}</h1>
      <p>{isLogin ? "Don't have an account ?" : "Already have an account ?" } <button onClick={() => setIsLogin(!isLogin)} className="text-orange-500 font-semibold ml-1 hover:text-orange-600 transition-colors">
        {isLogin ? "Create one" : "Login here" }
        </button></p>
     </div>
    
     <form onSubmit={handleSubmit} className="space-y-5"> 
      {!isLogin && (
          <label className="text-sm flex flex-col gap-1">
          Name
       
          <div className="relative">
          <UserIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-app-text-light" />
          <input
             type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
            placeholder="Enter your name"
            className="w-full pl-11 pr-4 py-3 text-sm bg-white  border rounded-xl not-focus:border-app-border  transition-all"
          />
        </div>
         </label>
        )
      }
       
  <label className="block text-left mb-2 mt-4">
  Email


<div className="relative mb-4">

  <MdEmail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

  <input
     type="email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
    placeholder="Enter your email"
    className="w-full pl-11 pr-4 py-3 text-sm bg-white  border rounded-xl not-focus:border-app-border transition-all"
  />

</div>
</label>

<label className="block text-left mb-2">
  Password

<div className="relative mb-4">

  <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

  <input
  type="password"
  value={password}
  onChange={(e) => setPassword(e.target.value)}
    placeholder="Enter your password"
    className="w-full pl-11 pr-4 py-3 text-sm bg-white  border rounded-xl not-focus:border-app-border transition-all"
  />

</div>
</label>

        <button type="submit" disabled={isLoading} className="w-full flex-center  bg-green-950 text-white font-semibold  py-3 rounded-xl hover:bg-green-900 transition-colors disabled:opacity-50">{isLoading ? <Loader2Icon className="animate-spin"/> : isLogin ? "sign In " : "sign Up"} </button>
     </form>
     </div>
      </div>
    </div>
  )
}

export default Login