import { useForm } from "react-hook-form";
import './Form1.css'
export default function Form1() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // const onSubmit = (data) => {
  //   console.log("Form Data:", data);
  // };

  const onSubmit = async (data) => {
    console.log("Submitting Form Data:", data);
  
    try {
      const response = await fetch("https://mc-1-vf3z.onrender.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
  
      const result = await response.json();
      alert(result.message);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };
  

  return (
    <div className="form-container">
           
      <h2>Basic Information, Referee, and Certificate Verification Form</h2>
      <form onSubmit={handleSubmit(onSubmit)}>

         {/* Form 1 */}
        <div className="form-group">
          <label>Full Name</label>
          <input type="text" {...register("fullName", { required: "Full Name is required" })} />
          {errors.fullName && <p className="error">{errors.fullName.message}</p>}
        </div>

        <div className="form-group">
          <label>Date of Birth</label>
          <input type="date" {...register("dob", { required: "Date of Birth is required" })} />
          {errors.dob && <p className="error">{errors.dob.message}</p>}
        </div>

        <div className="form-group">
          <label>State of Origin</label>
          <input type="text" {...register("stateOfOrigin", { required: "State of Origin is required" })} />
          {errors.stateOfOrigin && <p className="error">{errors.stateOfOrigin.message}</p>}
        </div> 

        <div className="form-group">
          <label>Residential Address</label>
          <input type="text" {...register("residentialAddress", { required: "Address is required" })} />
          {errors.residentialAddress && <p className="error">{errors.residentialAddress.message}</p>}
        </div>

        <div className="form-group">
          <label>Permanent Home Address</label>
          <input type="text" {...register("permanentHomeAddress", { required: "Permanent address is required" })} />
          {errors.permanentHomeAddress && <p className="error">{errors.permanentHomeAddress.message}</p>}
        </div>

        <div className="form-group">
          <label>Phone Number (Mobile)</label>
          <input type="tel" {...register("mobile", { required: "Phone number is required" })} />
          {errors.mobile && <p className="error">{errors.mobile.message}</p>}
        </div>

        <div className="form-group">
          <label>Phone Number (Landline)</label>
          <input type="tel" {...register("landline")} />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input type="email" {...register("email", { required: "Email is required" })} />
          {errors.email && <p className="error">{errors.email.message}</p>}
        </div>

        <div className="form-group">
          <label>Identity Card Type & No</label>
          <input type="text" {...register("idCard", { required: "Identity Card is required" })} />
          {errors.idCard && <p className="error">{errors.idCard.message}</p>}
        </div>

        <div className="form-group">
          <label>Name of Spouse</label>
          <input type="text" {...register("spouse")} />
        </div>

        <div className="form-group">
          <label>Pension Details</label>
          <input type="text" {...register("pension")} />
        </div>

        <div className="form-group">
          <label>NHF Details</label>
          <input type="text" {...register("nhf")} />
        </div>

        <div className="form-group">
          <label>TAX Number</label>
          <input type="text" {...register("taxNumber")} />
        </div>

        <div className="form-group">
          <label>Position on Resumption</label>
          <input type="text" {...register("position", { required: "Position is required" })} />
          {errors.position && <p className="error">{errors.position.message}</p>}
        </div>

        <div className="form-group">
          <label>Location on Resumption</label>
          <input type="text" {...register("location", { required: "Location is required" })} />
          {errors.location && <p className="error">{errors.location.message}</p>}
        </div>

        <div className="form-group">
          <label>Date of Resumption</label>
          <input type="date" {...register("dateOfResumption", { required: "Date of Resumption is required" })} />
          {errors.dateOfResumption && <p className="error">{errors.dateOfResumption.message}</p>}
        </div>

        <div className="form-group">
          <label>Medical Condition</label>
          <input type="text" {...register("medicalCondition")} />
        </div>

        <div className="form-group">
          <label>Have you been convicted before? (Details)</label>
          <input type="text" {...register("conviction")} />
        </div>

        <div className="form-group">
          <label>Previous Employment</label>
          <textarea {...register("previousEmployment")} rows="3"></textarea>
        </div>

        <div className="form-group">
          <label>Date of Disengagement from Last Employment</label>
          <input type="date" {...register("dateOfDisengagement")} />
        </div>
        
        {/* end of form 1 */}

        {/* form 2 */}
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

        {/* End of form 2 */}

        {/* Form 3 */}
        <h3>NAMES AND ADDRESS OF YOUR UNIVERSITY REGISTRY (Postal Box Not Sufficient)</h3>

        <div className="form-group">
          <label>Name of Institution</label>
          <input type="text" {...register("institution", { required: "Institution name is required" })} />
          {errors.institution && <p className="error">{errors.institution.message}</p>}
        </div>

        {/* Address of Registry Unit */}
        <div className="form-group">
          <label>Address of the Registry Unit (Examinations and Records Unit)</label>
          <input type="text" {...register("registryAddress", { required: "Registry address is required" })} />
          {errors.registryAddress && <p className="error">{errors.registryAddress.message}</p>}
        </div>

        <h3>Attestation</h3>
        <p className="description">I confirm and hereby certify that the information given above is true.</p>

        {/* Attestation Name */}
        <div className="form-group">
          <label>Name</label>
          <input type="text" {...register("attestationName", { required: "Name is required" })} />
          {errors.attestationName && <p className="error">{errors.attestationName.message}</p>}
        </div>

        {/* Attestation Signature */}
        <div className="form-group">
          <label>Signature</label>
          <input type="text" {...register("signature", { required: "Signature is required" })} />
          {errors.signature && <p className="error">{errors.signature.message}</p>}
        </div>

        {/* Attestation Date */}
        <div className="form-group">
          <label>Date</label>
          <input type="date" {...register("date", { required: "Date is required" })} />
          {errors.date && <p className="error">{errors.date.message}</p>}
        </div>

        <h3>For Human Capital Management Only</h3>

        {/* Comments */}
        <div className="form-group">
          <label>Comments</label>
          <textarea {...register("comments")} rows="3"></textarea>
        </div>

        {/* HCM Name */}
        <div className="form-group">
          <label>Name</label>
          <input type="text" {...register("hcName", { required: "Name is required" })} />
          {errors.hcName && <p className="error">{errors.hcName.message}</p>}
        </div>

        {/* HCM Signature and Date */}
        <div className="form-group">
          <label>Signature and Date</label>
          <input type="text" {...register("hcSignature", { required: "Signature and Date is required" })} />
          {errors.hcSignature && <p className="error">{errors.hcSignature.message}</p>}
        </div>

        {/* END OF FORM 3 */}

        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </div>
  );
}
