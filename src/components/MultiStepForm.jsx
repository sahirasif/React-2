import { useState } from "react";

function MultiStepForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  return (
    <div className="card">
      <h2 className="card-title">📝 Multi Step Form</h2>

      <div className="step-indicator">
        <span className={step >= 1 ? "active" : ""}>1</span>
        <span className={step >= 2 ? "active" : ""}>2</span>
        <span className={step >= 3 ? "active" : ""}>3</span>
      </div>

      {step === 1 && (
        <div className="form-step">
          <input
            type="text"
            placeholder="Enter Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          <button onClick={nextStep}>Next</button>
        </div>
      )}

      {step === 2 && (
        <div className="form-step">
          <input
            type="email"
            placeholder="Enter Email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
          <div className="form-buttons">
            <button onClick={prevStep}>Back</button>
            <button onClick={nextStep}>Next</button>
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="form-step">
          <input
            type="password"
            placeholder="Enter Password"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          />
          <div className="form-buttons">
            <button onClick={prevStep}>Back</button>
            <button onClick={() => alert("Form submitted ✅")}>Finish</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default MultiStepForm;
