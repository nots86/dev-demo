"use client";

import React, { useState, ChangeEvent } from "react";
import "./line.css";

export default function Lines() {
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

  // Handle input change
  const handleInputChange = (e: ChangeEvent<HTMLInputElement  | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
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

      {/* Container 1 */}
      <div  className="container">
        <h2>Line Information</h2>
        <form>
          <div  className="form-group">
            <label  htmlFor="country">Country</label>
            <select  id="country" name="country" value={formData.country} onChange={handleInputChange}>
              <option  value="">Choose from countries</option>
              {/* Add country options here */}
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
        </form>
      </div>
    </div>
  );
}