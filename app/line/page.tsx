"use client"
import React, { useState, ChangeEvent } from "react";
import "./line.css";
import { saveNewLine } from "./actions";
import "dotenv/config"

export default  function Lines() {

  const [ message, setMessage] = useState("") // state to store success/error messages
  const [ newLine, setNewLine ] = useState([])
  // Form state
  const [formData, setFormData] = useState({
    country: "",
    site: "",
    area: "",
    processCell: "",
    hostName: "",
    hardware: "",
    dataAccessAdGroup: "",
    localSystemManagerAdGroup: "",
  });

  // Function to handle form submission.
  async function handleSubmit(event:React.FormEvent) {

    event.preventDefault(); // Prevent page refresh on form submit
      // Create a FormData object from the submitted form
    const formData = new FormData(event?.target as HTMLFormElement);

    // Call the server action (saveNewLine) to store data in databese
    const result = await saveNewLine(formData);

    console.log("Submitted:" , { formData })

    // Debugging
    console.log("Saved Result:" , result)

    // Show success/error message and refresh user list
     if(result.success){
      setMessage(result.success); // Display success message
      
    }else{
      setMessage(result.error ?? "An unexpected error occurred");
    } 
  }

    // Handle input change
  const handleInputChange = (event: ChangeEvent<HTMLInputElement  | HTMLSelectElement>) => {
    const { name, value } = event.target; // Get field name and value

    // Update only the changed field while kepping the others unchanged.
    setFormData({
      ...formData, // Keep existing form data
      [name]: value, // Update the specific field being changed
    });
  };
   return (
    <div  className="content">
      {/* Page Header */}
      <div  className="header-container">
        {/* Left: New Line Button */}
        <div  className="new-line-left-box">
          <span>icon img</span> New Line
        </div>

        {/* Right: Logo */}
        <div  className="logo-right-box">
          <span>logo img</span> Logo Name
        </div>
      </div>

      {/* Page Title Below Header */}
      <div  className="page-header">Fill in the details of the new line</div>

      <form  onSubmit={handleSubmit}>
        {/* Container 1 */}
        <div  className="container">
          <h2>Header Line Information</h2>
          <div  className="form-group">
            <label  htmlFor="country">Country</label>
            <select  id="country" name="country" value={formData.country} onChange={handleInputChange}>
              <option  value="">Choose from countries</option>
              <option  value="us">🇺🇸 United States</option>
              <option  value="uk">🇬🇧 United Kingdom</option>
              <option  value="ca">🇨🇦 Canada</option>
              <option  value="de">🇩🇪 Germany</option>
              <option  value="jp">🇯🇵 Japan</option>
            </select>
          </div>
          <div  className="form-group">
            <label  htmlFor="site">Site</label>
            <div  className="subheader">Subheader text</div>
            <input type="text" id="site" name="site" value={formData.site} onChange={handleInputChange} />
          </div>
          <div  className="form-group">
            <label  htmlFor="area">Area</label>
            <div  className="subheader">Subheader text</div>
            <input type="text" id="area" name="area" value={formData.area} onChange={handleInputChange} placeholder="-select-" />
          </div>
          <div  className="form-group">
            <label  htmlFor="processCell">Process cell</label>
            <div  className="subheader">Subheader text</div>
            <input type="text" id="processCell" name="processCell" value={formData.processCell} onChange={handleInputChange} placeholder="-select-" />
          </div>
        </div>

        {/* Container 2 */}
        <div  className="container">
          <h2>Local Host Information</h2>
          <div  className="form-group">
            <label  htmlFor="hostName">Host Name</label>
            <input type="text" id="hostName" name="hostName" value={formData.hostName} onChange={handleInputChange} placeholder="Enter host name" />
          </div>
          <div  className="form-group">
            <label  htmlFor="hardware">Hardware</label>
            <div  className="subheader">Hardware of the local machine host</div>
            <input type="text" id="hardware" name="hardware" value={formData.hardware} onChange={handleInputChange} placeholder="-select-" />
          </div>
        </div>

        {/* Container 3 */}
        <div  className="container">
          <h2>AD Groups</h2>
          <div  className="form-group">
            <label  htmlFor="dataAccessAdGroup">Data Access AD Group</label>
            <div  className="subheader">Subheader text</div>
            <div  className="input-icon">
              <input type="text" id="dataAccessAdGroup" name="dataAccessAdGroup" value={formData.dataAccessAdGroup} onChange={handleInputChange} />
              <span>Search icon</span>
            </div>
          </div>
          <div  className="form-group">
            <label  htmlFor="localSystemManagerAdGroup">Local System Manager AD Group</label>
            <div  className="subheader">Subheader text</div>
            <div  className="input-icon">
              <input type="text" id="localSystemManagerAdGroup" name="localSystemManagerAdGroup" value={formData.localSystemManagerAdGroup} onChange={handleInputChange} />
              <span>Search icon</span>
            </div>
          </div>
        </div>

        {/* Continue Button */}
        <button  type="submit" className="continue-btn">Continue</button>
      </form>
    </div>
  );
}