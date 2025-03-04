import { useForm } from "react-hook-form";
import './Form2.css'

export default function Form2() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };

  return (
    <div className="form-container">
      <h2>Next of Kin & Referees Form</h2>
      <form onSubmit={handleSubmit(onSubmit)}>

        {/* Next of Kin Section */}
        <h3>Next of Kin</h3>

        <div className="form-group">
          <label>Name</label>
          <input type="text" {...register("nextOfKinName", { required: "Name is required" })} />
          {errors.nextOfKinName && <p className="error">{errors.nextOfKinName.message}</p>}
        </div>

        <div className="form-group">
          <label>Address</label>
          <input type="text" {...register("nextOfKinAddress", { required: "Address is required" })} />
          {errors.nextOfKinAddress && <p className="error">{errors.nextOfKinAddress.message}</p>}
        </div>

        <div className="form-group">
          <label>Phone Number</label>
          <input type="tel" {...register("nextOfKinPhone", { required: "Phone number is required" })} />
          {errors.nextOfKinPhone && <p className="error">{errors.nextOfKinPhone.message}</p>}
        </div>

        <div className="form-group">
          <label>Occupation</label>
          <input type="text" {...register("nextOfKinOccupation")} />
        </div>

        <div className="form-group">
          <label>Designation</label>
          <input type="text" {...register("nextOfKinDesignation")} />
        </div>

        <div className="form-group">
          <label>Relationship</label>
          <input type="text" {...register("nextOfKinRelationship", { required: "Relationship is required" })} />
          {errors.nextOfKinRelationship && <p className="error">{errors.nextOfKinRelationship.message}</p>}
        </div>

        <div className="form-group">
          <label>Office Address</label>
          <input type="text" {...register("nextOfKinOfficeAddress")} />
        </div>

        {/* Children Section */}
        <h3>Children Details</h3>

        <div className="form-group">
          <label>How many children do you have?</label>
          <input type="number" {...register("childrenCount")} />
        </div>

        {[...Array(4)].map((_, index) => (
          <div key={index} className="form-group">
            <label>Child {index + 1} Name & Age</label>
            <div className="child-group">
              <input type="text" placeholder="Name" {...register(`child${index + 1}Name`)} />
              <input type="number" placeholder="Age" {...register(`child${index + 1}Age`)} />
            </div>
          </div>
        ))}

        {/* Referees Section */}
        <h3>Referees</h3>

        {[...Array(3)].map((_, index) => (
          <div key={index} className="form-group">
            <label>Referee {index + 1} Name</label>
            <input type="text" {...register(`referee${index + 1}Name`, { required: "Referee Name is required" })} />
            {errors[`referee${index + 1}Name`] && <p className="error">{errors[`referee${index + 1}Name`].message}</p>}
            
            <label>Address</label>
            <input type="text" {...register(`referee${index + 1}Address`, { required: "Referee Address is required" })} />
            {errors[`referee${index + 1}Address`] && <p className="error">{errors[`referee${index + 1}Address`].message}</p>}
          </div>
        ))}

        <p className="note">One of the referees <strong>MUST</strong> be from the Human Resource Department of your last place of employment.</p>

        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </div>
  );
}
