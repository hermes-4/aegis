import React, { useState } from "react";

function AddNewPassword() {
  const [formData, setFormData] = useState({
    site: "",
    pass: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const response = await fetch("", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Error submitting form");
        // alert("Please complete the form");
      } else {
        alert("Form submitted successfully");
      }
    } catch (error) {
      alert("Error submitting form");
    }
  };

  return (
    <div className="body">
      <form onSubmit={handleSubmit}>
        <label className="add-new-form-label">
          Site:
          <input
            className="add-new-form-input"
            type="text"
            name="site"
            value={formData.site || ""}
            onChange={handleChange}
          />
        </label>
        <label className="add-new-form-label">
          Password:
          <input
            className="add-new-form-input"
            type="password"
            name="pass"
            value={formData.pass || ""}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Save</button>
      </form>
    </div>
  );
}

export default AddNewPassword;
