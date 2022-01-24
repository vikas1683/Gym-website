import { useState, useEffect } from "react";
import LoginSharpIcon from '@mui/icons-material/LoginSharp';

function ContactUs() {
  const initialValues = { username: "", email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [name, setName] = useState("")





  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {

    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);

  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.username) {
      errors.username = "Username is required!";
    }

    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }

    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (values.password.length > 10) {
      errors.password = "Password cannot exceed more than 10 characters";
    }
    return errors;
  };

  return (
    <>
      <section className="form-container">
      {/* <img src="https://i.postimg.cc/4x3S3Y5P/1244829.jpg" alt="img" /> */}


        {/* inki vajah se  side me text dikhai deta he jo input me dalte he  */}
        {Object.keys(formErrors).length === 0 && isSubmit ? (
          <div style={{color:"black",backgroundColor:'red',borderRadius:"5vw"}}>Signed in successfully</div>
        ) : (
          <pre>{(formValues, undefined)}</pre>
        )}

        <form  style={{color:"blue",backgroundColor:'lightblue',borderRadius:"1vw",height:"22vw",width:"21vw"}} onSubmit={handleSubmit} >
          <h1 id="login-form">Login Form</h1>
          <div className="ui divider"></div>
          <div className="ui form">

            <div className="style">

              <div className="field">

                <label id="label-all">Username</label>
                <input
                  style={{ position: "relative", left: "0.3vw" }}
                  type="text"
                  name="username"
                  placeholder="Username"
                  value={formValues.username}
                  onChange={handleChange}
                />


              </div>

              <p>{formErrors.username}</p>
              <div className="field">
                <label id="label-all">Email</label>
                <input
                  type="text"
                  name="email"
                  placeholder="Email"
                  value={formValues.email}
                  onChange={handleChange}
                />
              </div>

              <p>{formErrors.email}</p>
              <div className="field">
                <label id="label-all">Password</label>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formValues.password}
                  onChange={handleChange}
                />
              </div>

              <p>{formErrors.password}</p>
              <button id="button-style" style={{ position: "relative", top: "2vw", width: "7vw", color: "blue",backgroundColor:"red" }} className="fluid ui button blue" onClick={() => alert("Hello , My name is Vikas Kumar Choudhary , My contact number is : 9982720527 and this is also my whatsapp number . If you join my Fitness Center so you contact me.")} > <LoginSharpIcon />
              </button>

            </div>

          </div>
        </form>

      </section>
    </>
  );
}

export default ContactUs;



