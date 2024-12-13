import { Link } from "react-router-dom";
import "./Signup.css";
const Signup = () => {
  return (
    <div className="signup">
      <div className="signup-box">
        <h1>Sign Up</h1>
        <form>
          <div className="form-div">
            <div className="label">
            <label htmlFor="username">Username:</label>
            <input type="username" name="username" />
            </div>
            <div className="label"><label htmlFor="password">Password:</label>
            <input type="password" name="password" /></div>
            <div className="label">
            <label htmlFor="email">Email:</label>
            <input type="email" name="email" />
            </div>
            <div className="label">
            <label htmlFor="mobile">Mobile:</label>
            <input type="text" name="mobile" />
            </div>
            <button className="btn">Register</button>
          </div>
        </form>
        <Link className="link" to={"/signin"}>
          Already have an account? Sign In
        </Link>
      </div>
    </div>
  );
};

export default Signup;
