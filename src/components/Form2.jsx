import { useForm } from "react-hook-form";
import { useState } from "react";
import './Form1.css';

export default function Form1() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [message, setMessage] = useState("");

  const onSubmit = async (data) => {
    setMessage("Submitting...");

    try {
      const response = await fetch("https://hbase.onrender.com/submit-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        setMessage("✅ Form submitted successfully! Check your email for confirmation.");
      } else {
        setMessage(`❌ Error: ${result.error}`);
      }
    } catch (error) {
      setMessage("❌ Failed to submit form. Please try again later.");
    }
  };

  return (
    <div className="form-container">
      <h2>Basic Information, Referee, and Certificate Verification Form</h2>
      {message && <p className="message">{message}</p>}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label>Full Name</label>
          <input type="text" {...register("fullName", { required: "Full Name is required" })} />
          {errors.fullName && <p className="error">{errors.fullName.message}</p>}
        </div>

        <div className="form-group">
          <label>Email</label>
          <input type="email" {...register("email", { required: "Email is required" })} />
          {errors.email && <p className="error">{errors.email.message}</p>}
        </div>

        <div className="form-group">
          <label>Phone Number</label>
          <input type="tel" {...register("mobile", { required: "Phone number is required" })} />
          {errors.mobile && <p className="error">{errors.mobile.message}</p>}
        </div>

        {/* Add the rest of your form fields here... */}

        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </div>
  );
}