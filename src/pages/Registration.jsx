import { Link, useLocation, useNavigate } from "react-router-dom";
import GoogleLogin from "./GoogleLogin";
import { useState } from "react";
import useAuth from "../hooks/useAuth";

const Registration = () => {
  const [passMatch, setPassMatch] = useState(true);
  const { createUser, user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location?.state?.from?.pathname || "/";

  const handleSUbmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const confirm_password = form.confirm_password.value;

    if (password !== confirm_password) {
      setPassMatch(false);
    }

    console.log(email, password, confirm_password);

    if (password === confirm_password) {
      createUser(email, password);
      if (user) {
        navigate(from);
      }
    }
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Registration!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSUbmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Confirm-Password</span>
              </label>
              <input
                type="password"
                name="confirm_password"
                placeholder="Re-password"
                className="input input-bordered"
                required
              />
            </div>
            {!passMatch && (
              <div className="my-2">
                <p className="text-red-500">Passwords do not match!</p>
              </div>
            )}
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
            <div className="mt-6">
              <GoogleLogin />
            </div>
            <div>
              <h1>
                Allready user? <Link to="/login">Login</Link>
              </h1>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registration;
