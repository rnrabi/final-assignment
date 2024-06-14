import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { Helmet } from "react-helmet-async";



const Login = () => {
    const { logInUser, googleSignUp , twitterSignUp} = useAuth()
    const axiosPublic = useAxiosPublic()
    const location = useLocation()
    const navigate = useNavigate()
    const { register, handleSubmit } = useForm()

    const onSubmit = (data) => {
        // console.log(data)
        const email = data.email;
        const password = data.password;
        // console.log(email, password)
        logInUser(email, password)
            .then(result => {
                console.log(result.user)
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Successfully log in",
                    showConfirmButton: false,
                    timer: 1500
                });

                navigate(location.state || '/')
            })
            .catch(err => {
                console.log(err.message)
            })
    }

    // google log in here
    const handleGoogleLogIn = () => {
        googleSignUp()
            .then(async result => {
                console.log(result.user)
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "You have successfully log in",
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate(location.state || '/')

                const name = result.user.displayName;
                const email = result.user.email;
                // const password = data.password;
                const roll = 'User';
                const image = result.user.photoURL;
                // console.log(name, email, roll, image)

                const userInfo = { name, email, roll, image}
                const response = await axiosPublic.post('/users', userInfo)
                console.log(response.data)

            })
            .catch(err => console.log(err.message))
    }
    // Twitter log in 
    const handleTwitterLogIn = () => {
        twitterSignUp()
        .then(result => {
            console.log(result.user)
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "You have successfully log in",
                showConfirmButton: false,
                timer: 1500
            });
            navigate('/')
        })
        .catch(err => console.log(err.message))
    }

    return (
        <div>
             <Helmet>
                <title>MediGlam | Login</title>
            </Helmet>
            <div className="w-full mx-auto max-w-md p-4 rounded-md shadow sm:p-8 dark:bg-gray-50 dark:text-gray-800">
                <h2 className="mb-3 text-3xl font-semibold text-center">Please Login</h2>
                <p className="text-sm text-center dark:text-gray-600">Do not have account?
                    <Link to='/register' className="focus:underline hover:underline">Sign up here</Link>
                </p>
                <div className="my-6 space-y-4">
                    <button onClick={handleGoogleLogIn} aria-label="Login with Google" type="button" className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-600 focus:dark:ring-violet-600">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                            <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                        </svg>
                        <p>Login with Google</p>
                    </button>

                    <button onClick={handleTwitterLogIn} aria-label="Login with Twitter" role="button" className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-600 focus:dark:ring-violet-600">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                            <path d="M31.937 6.093c-1.177 0.516-2.437 0.871-3.765 1.032 1.355-0.813 2.391-2.099 2.885-3.631-1.271 0.74-2.677 1.276-4.172 1.579-1.192-1.276-2.896-2.079-4.787-2.079-3.625 0-6.563 2.937-6.563 6.557 0 0.521 0.063 1.021 0.172 1.495-5.453-0.255-10.287-2.875-13.52-6.833-0.568 0.964-0.891 2.084-0.891 3.303 0 2.281 1.161 4.281 2.916 5.457-1.073-0.031-2.083-0.328-2.968-0.817v0.079c0 3.181 2.26 5.833 5.26 6.437-0.547 0.145-1.131 0.229-1.724 0.229-0.421 0-0.823-0.041-1.224-0.115 0.844 2.604 3.26 4.5 6.14 4.557-2.239 1.755-5.077 2.801-8.135 2.801-0.521 0-1.041-0.025-1.563-0.088 2.917 1.86 6.36 2.948 10.079 2.948 12.067 0 18.661-9.995 18.661-18.651 0-0.276 0-0.557-0.021-0.839 1.287-0.917 2.401-2.079 3.281-3.396z"></path>
                        </svg>
                        <p>Login with Twitter</p>
                    </button>
                </div>
                <div className="flex items-center w-full my-4">
                    <hr className="w-full dark:text-gray-600" />
                    <p className="px-3 dark:text-gray-600">OR</p>
                    <hr className="w-full dark:text-gray-600" />
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <label htmlFor="email" className="block text-sm">Email</label>
                            <input {...register("email")} type="email" name="email" id="email" placeholder="leroy@jenkins.com" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
                        </div>
                        <div className="space-y-2">
                            <div className="flex justify-between">
                                <label htmlFor="password" className="text-sm">Password</label>
                                <a rel="noopener noreferrer" href="#" className="text-xs hover:underline dark:text-gray-600">Forgot password?</a>
                            </div>
                            <input {...register("password")} type="password" name="password" id="password" placeholder="password" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
                        </div>
                    </div>
                    <button className="w-full px-8 py-3 font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50 btn">Sign in</button>
                </form>
            </div>
        </div>
    );
};

export default Login;