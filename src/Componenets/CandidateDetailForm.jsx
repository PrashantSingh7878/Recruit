import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { updateCandidate } from "../../store/CandidateSlice";

const CandidateDetailForm = ({ showForm, setShowForm }) => {
  const dispatch = useDispatch();
  const candidateData = useSelector((state) => state.candidate.data);

  const { register, handleSubmit, reset, setValue } = useForm({
    defaultValues: {}
  });

  // 🔑 transform array -> object
  const transformCandidateData = (dataArray) => {
    const map = {};
    dataArray.forEach((item) => {
      const key = item.label
        .replace(/\s+/g, "")     // remove spaces
        .replace(/[^a-zA-Z]/g, ""); // remove symbols
      map[key] = item.value;
    });
    return map;
  };

  useEffect(() => {
    if (candidateData?.length) {
      const transformed = transformCandidateData(candidateData);
      reset(transformed);
    }
  }, [candidateData, reset]);

const onSubmit = (formValues) => {
  console.log("Form Raw Values:", formValues);

  // Convert back into array of {label, value}
  const formatted = [
    { label: "Current Organization", value: formValues.CurrentOrganization },
    { label: "Skills", value: formValues.Skills },
    { label: "Available From", value: formValues.AvailableFrom },
    { label: "Current Salary", value: formValues.CurrentSalary },
    { label: "Notice Period", value: formValues.NoticePeriod },
    { label: "Full Address", value: formValues.FullAddress },
    { label: "Total Experience", value: formValues.TotalExperience },
    { label: "Relevent Experience", value: formValues.ReleventExperience },
    { label: "Salary Expectation", value: formValues.SalaryExpectation },
    { label: "Current Employment Status", value: formValues.CurrentEmploymentStatus },
    { label: "Date of Birth", value: formValues.DateofBirth },
    { label: "Language Skills", value: formValues.LanguageSkills },
    // add Resume, Summary, Status, SalaryType if they exist in your form
  ];

  console.log("Formatted for Redux:", formatted);

  dispatch(updateCandidate(formatted)); // now always array
  setShowForm(false);
};
  return (
    showForm && (
      <div className="modal-overlay">
        <div className="modal-content">
          <h2 className="form-title">Candidate Details</h2>

          <form onSubmit={handleSubmit(onSubmit)} className="candidate-form">
            <div className="form-row">
              <div className="input-card">
                <label>Current Organization</label>
                <input type="text" {...register("CurrentOrganization")} />
              </div>
              <div className="input-card">
                <label>Skills</label>
                <input type="text" {...register("Skills")} />
              </div>
              <div className="input-card">
                <label>Available From</label>
                <input type="text" {...register("AvailableFrom")} />
              </div>
              <div className="input-card">
                <label>Current Salary</label>
                <input type="text" {...register("CurrentSalary")} />
              </div>
              <div className="input-card">
                <label>Notice Period</label>
                <input type="text" {...register("NoticePeriod")} />
              </div>
              <div className="input-card">
                <label>Full Address</label>
                <input type="text" {...register("FullAddress")} />
              </div>
              <div className="input-card">
                <label>Total Experience</label>
                <input type="text" {...register("TotalExperience")} />
              </div>
              <div className="input-card">
                <label>Relevant Experience</label>
                <input type="text" {...register("ReleventExperience")} />
              </div>
              <div className="input-card">
                <label>Salary Expectation</label>
                <input type="text" {...register("SalaryExpectation")} />
              </div>
              <div className="input-card">
                <label>Employment Status</label>
                <input type="text" {...register("CurrentEmploymentStatus")} />
              </div>
              <div className="input-card">
                <label>Date of Birth</label>
                <input type="text" {...register("DateofBirth")} />
              </div>
              <div className="input-card">
                <label>Language Skills</label>
                <input type="text" {...register("LanguageSkills")} />
              </div>
            </div>

            <div className="modal-actions">
              <button type="submit" className="btn-primary">🚀 Submit</button>
              <button
                type="button"
                className="contact-btn close-btn"
                onClick={() => setShowForm(false)}
              >
                ❌ Close
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  );
};

export default CandidateDetailForm;
