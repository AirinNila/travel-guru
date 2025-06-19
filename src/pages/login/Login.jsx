import Navbar from "../../components/Navbar";

const Login = () => {
    return (
        <div className=" container mx-auto flex flex-col items-center gap-4 md:gap-10 justify-center">
            <Navbar></Navbar>
             <div className="md:w-2/5 w-full p-2">
            <form >
             
                    <div className="card-body">
                        <fieldset className="fieldset">
                            <label className="label">Email</label>
                            <input type="email" className="input w-full" placeholder="Email" />
                            <label className="label">Password</label>
                            <input type="password" className="input w-full" placeholder="Password"  />
                            <div><a className="link link-hover">Forgot password?</a></div>
                            <div>
                                <button className="btn w-full btn-neutral mt-4">Login</button>
                            </div>
                        </fieldset>
                    </div>
              
            </form>
            </div>
        </div>
    );
};

export default Login;