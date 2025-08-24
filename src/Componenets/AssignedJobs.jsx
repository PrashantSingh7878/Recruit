import React, { useState } from "react";

const AssignedJobs = () => {
  const [activeTab, setActiveTab] = useState("Assigned Jobs");

  // ...existing code...
const jobs = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "ABCD Corp",
    assignedTo: "William Sample",
    date: "2023-07-14",
    status: "Active",
  },
  {
    id: 2,
    title: "Backend Developer",
    company: "WXYZ Ltd",
    assignedTo: "William Sample",
    date: "2023-07-10",
    status: "Closed",
  },
  {
    id: 3,
    title: "Product Manager",
    company: "Recruit CRM",
    assignedTo: "William Sample",
    date: "2023-07-08",
    status: "Active",
  },
];
  // Example content for each tab
  const renderTabContent = () => {
    switch (activeTab) {
      case "Assigned Jobs":
        return (
          <>
            <div className="assigned-header">
              <span>Assigned Job to William Sample</span>
              <div className="header-actions">
                <button className="btn-primary">Assign To Job</button>
                <button className="btn-secondary">View All Assigned Jobs</button>
              </div>
            </div>
            <div className="job-list">
              {jobs.map((job) => (
                <div className="job-card" key={job.id}>
                  {/* ...existing job card code... */}
                  <div className="job-left">
                    <div className="job-avatar">M</div>
                    <div className="job-title">{job.title}</div>
                    <div className="job-company">{job.company}</div>
                  </div>
                  <div className="job-middle">
                    <div className="jobs-board">
                      <i className='bxr bx-user-circle bx-xs'></i>
                      <span className="assigned-to">{job.assignedTo}</span>
                    </div>
                    <div className="jobs-board">
                      <i className='bxr bx-clock-3 bx-xs'></i>
                      <span className="assigned-date">{job.date}</span>
                    </div>
                  </div>
                  <div>
                    <span className="status">{job.status}</span>
                  </div>
                  <div>
                    <button className="btn-secondary">View Files</button>
                  </div>
                  <div className="job-right">
                    <label className="switch">
                      <input type="checkbox" defaultChecked />
                      <span className="slider"></span>
                    </label>
                  </div>
                </div>
              ))}
            </div>
          </>
        );
      case "Related Emails":
        return <div>Related Emails Content</div>;
      case "Candidate Questions":
        return <div>Candidate Questions Content</div>;
      case "Hotlists":
        return <div>Hotlists Content</div>;
      case "Related Deals":
        return <div>Related Deals Content</div>;
      case "Contact(s) Pitched":
        return <div>Contact(s) Pitched Content</div>;
      default:
        return <div>All Details Content</div>;
    }
  };

  const tabs = [
    "All Details",
    "Assigned Jobs",
    "Related Emails",
    "Candidate Questions",
    "Hotlists",
    "Related Deals",
    "Contact(s) Pitched",
  ];

  return (
    <div className="assigned-jobs-container">
      {/* Tabs */}
      <div className="tabs">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`tab${activeTab === tab ? " active" : ""}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      <select
        className="tabs-dropdown"
        value={activeTab}
        onChange={(e) => setActiveTab(e.target.value)}
      >
        {tabs.map((tab) => (
          <option key={tab} value={tab}>
            {tab}
          </option>
        ))}
      </select>

      {/* Tab Content */}
      <section className="PaddingSection">{renderTabContent()}</section>
    </div>
  );
};

export default AssignedJobs;