import { useForm } from "react-hook-form";
import './Form3.css'


export default function Form3() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Submitted:", data);
  };

  return (
    <div className="form-container">
      
      <h2>University Registry Form</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        
        {/* Name of Institution */}
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

        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </div>
  );
}
