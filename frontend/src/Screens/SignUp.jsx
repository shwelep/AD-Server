import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

const SignUp = () => {
    const navigate = useNavigate()
    const [userName, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [userType, setUserType] = useState('publisher')

    const formData = {
        UserName: userName,
        Email: email,
        Password: password,
        UserType: userType
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
      
        const formData = {
          UserName: userName,
          Email: email,
          Password: password,
          UserType: userType,
        };
      
        try {
          const response = await fetch('http://localhost:3002/user/signup', {
            method: 'POST',
            body: JSON.stringify(formData),
            headers: { "Content-Type": "application/json" },
          });
      
          if (!response.ok) {
            throw new Error(`Signup failed with status: ${response.status}`);
          }
      
          console.log('Signup successful:', response); // Log for debugging
      
          // Navigate to dashboard after successful signup
          navigate('/'); // Assuming you have `useNavigate` hook from react-router-dom
        } catch (error) {
          console.error('An error occurred during signup:', error);
          // Handle signup errors (e.g., display error message)
        }
      };

    return (
        <div className="container">
            <div className="signup-container">
                <h2>Sign Up</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            value={userName}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="emailname">email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="userType">User type</label>
                        <select
                            value={userType}
                            onChange={(e) => setUserType(e.target.value)}
                        >
                            <option value={"publisher"}>Publisher</option>
                            <option value={"advertiser"}>Advertiser</option>
                        </select>
                    </div>
                    <button type="submit" className="btn-submit">Sign Up</button>
                </form>
            </div>
        </div>
    )
}

export default SignUp