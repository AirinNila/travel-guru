import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";

const Login = () => {
    return (
        <div className=" container mx-auto flex flex-col items-center gap-4 md:gap-8 justify-center">
            <Navbar></Navbar>
            
            <div className="md:w-2/5 w-full p-2 ">
                <form >

                    <div className="card-body p-2 md:p-8  border-2 border-[#ABABAB] rounded-md">
                        <fieldset className="fieldset">
                            <h2 className="text-lg font-bold">Login</h2>
                            <label className="label">Email</label>
                            <input type="email" className="input w-full" placeholder="Email" />
                            <label className="label">Password</label>
                            <input type="password" className="input w-full" placeholder="Password" />
                            <div className="flex justify-between">
                                <div className="flex gap-2 items-center">
                                    <input type="checkbox" name="remember" id="" />
                                    <p>Remember me</p>
                                </div>
                                <a className="link link-hover primary-c">Forgot password?</a>
                            </div>
                            <div>
                                <button className="btn w-full primary-bg mt-4">Login</button>
                            </div>
                            <h3 className="text-base font-bold text-center">Don't have an Account?<span className="primary-c"><Link to="/register">Create an Account.</Link></span></h3>
                        </fieldset>
                    </div>

                </form>
                <div className="flex items-center my-4">
                    <hr className="flex-grow border-t border-[#ABABAB]" />
                    <span className="mx-4 text-gray-500">or</span>
                    <hr className="flex-grow border-t border-[#ABABAB]" />
                </div>
                <div className="flex flex-col gap-2">
                <div className="flex items-center justify-center gap-2 font-semibold text-base p-2 border-2 rounded-full border-[#ABABAB]">
                    <img src="/public/images/icons/fb.png" className="w-8 " alt="" />
                    <p >Continue with Facebook</p>
                </div>
                
                <div className="flex items-center justify-center gap-2 font-semibold text-base p-2 border-2 rounded-full border-[#ABABAB]">
                    <img src="/public/images/icons/google.png" className="w-8" alt="" />
                    <p>Continue with Google</p>
                </div>
                </div>
            </div>

        </div>
    );
};

export default Login;