import React, { useState } from "react";
import "./assets/styles/style.css";

//option 1
const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      subject: "Q2 Financial Report",
      description: "Prepare consolidated P&L and balance sheet for Q2.",
      due_date: "2026-04-10",
      assigned_to: "Priya Sharma",
      assigned_by: "Rajesh Kumar",
      status: "In Progress",
      priority: "High",
    },
    {
      id: 2,
      subject: "Redesign Onboarding Flow",
      description:
        "Revamp the user onboarding UX based on latest usability tests.",
      due_date: "2026-04-18",
      assigned_to: "Anika Patel",
      assigned_by: "Sonal Mehta",
      status: "In Progress",
      priority: "High",
    },
    {
      id: 3,
      subject: "API Rate Limiting",
      description: "Implement rate limiting on all public API endpoints.",
      due_date: "2026-04-05",
      assigned_to: "Dev Narayan",
      assigned_by: "Keerthi Rajan",
      status: "Done",
      priority: "High",
    },
    {
      id: 4,
      subject: "Vendor Contract Renewal",
      description: "Review and renew SaaS vendor contracts expiring in May.",
      due_date: "2026-04-25",
      assigned_to: "Lakshmi Iyer",
      assigned_by: "Rajesh Kumar",
      status: "To Do",
      priority: "Medium",
    },
    {
      id: 5,
      subject: "Mobile App Bug Fixes",
      description: "Resolve 14 outstanding bugs reported from the iOS beta.",
      due_date: "2026-04-08",
      assigned_to: "Dev Narayan",
      assigned_by: "Sonal Mehta",
      status: "In Progress",
      priority: "High",
    },
    {
      id: 6,
      subject: "Marketing Campaign Brief",
      description: "Draft the brief for the summer product launch campaign.",
      due_date: "2026-04-20",
      assigned_to: "Riya Desai",
      assigned_by: "Arjun Nair",
      status: "To Do",
      priority: "Medium",
    },
    {
      id: 7,
      subject: "Database Indexing Audit",
      description:
        "Audit slow queries and add missing indexes in production DB.",
      due_date: "2026-04-12",
      assigned_to: "Keerthi Rajan",
      assigned_by: "Dev Narayan",
      status: "In Review",
      priority: "High",
    },
    {
      id: 8,
      subject: "Employee Handbook Update",
      description: "Update policies for remote work, leave, and conduct.",
      due_date: "2026-05-01",
      assigned_to: "Meena Sundaram",
      assigned_by: "Rajesh Kumar",
      status: "To Do",
      priority: "Low",
    },
    {
      id: 9,
      subject: "Social Media Calendar",
      description:
        "Create content calendar for April and May across platforms.",
      due_date: "2026-04-03",
      assigned_to: "Riya Desai",
      assigned_by: "Arjun Nair",
      status: "Done",
      priority: "Medium",
    },
    {
      id: 10,
      subject: "CI/CD Pipeline Setup",
      description: "Configure GitHub Actions for automated deploy to staging.",
      due_date: "2026-04-14",
      assigned_to: "Vikram Bose",
      assigned_by: "Keerthi Rajan",
      status: "In Progress",
      priority: "High",
    },
    {
      id: 11,
      subject: "Customer Churn Analysis",
      description: "Analyse last 6 months of churn data and present findings.",
      due_date: "2026-04-22",
      assigned_to: "Priya Sharma",
      assigned_by: "Arjun Nair",
      status: "To Do",
      priority: "Medium",
    },
    {
      id: 12,
      subject: "Legal Compliance Review",
      description: "Ensure product features comply with DPDP Act 2023.",
      due_date: "2026-04-30",
      assigned_to: "Lakshmi Iyer",
      assigned_by: "Rajesh Kumar",
      status: "Blocked",
      priority: "High",
    },
    {
      id: 13,
      subject: "Office Equipment Inventory",
      description: "Conduct full inventory of IT and office assets.",
      due_date: "2026-05-05",
      assigned_to: "Meena Sundaram",
      assigned_by: "Rajesh Kumar",
      status: "To Do",
      priority: "Low",
    },
    {
      id: 14,
      subject: "Investor Deck Refresh",
      description: "Update the pitch deck with Q1 metrics and new roadmap.",
      due_date: "2026-04-16",
      assigned_to: "Anika Patel",
      assigned_by: "Arjun Nair",
      status: "In Review",
      priority: "High",
    },
    {
      id: 15,
      subject: "Localization – Tamil & Telugu",
      description: "Add Tamil and Telugu language support to the web app.",
      due_date: "2026-05-10",
      assigned_to: "Vikram Bose",
      assigned_by: "Sonal Mehta",
      status: "To Do",
      priority: "Medium",
    },
    {
      id: 16,
      subject: "Payment Gateway Integration",
      description: "Integrate Razorpay as secondary payment provider.",
      due_date: "2026-04-28",
      assigned_to: "Dev Narayan",
      assigned_by: "Keerthi Rajan",
      status: "To Do",
      priority: "High",
    },
    {
      id: 17,
      subject: "Weekly Newsletter",
      description: "Write and schedule the product newsletter for subscribers.",
      due_date: "2026-04-04",
      assigned_to: "Riya Desai",
      assigned_by: "Sonal Mehta",
      status: "Done",
      priority: "Low",
    },
    {
      id: 18,
      subject: "Load Testing",
      description:
        "Run Locust load tests and identify performance bottlenecks.",
      due_date: "2026-04-19",
      assigned_to: "Vikram Bose",
      assigned_by: "Keerthi Rajan",
      status: "In Progress",
      priority: "Medium",
    },
    {
      id: 19,
      subject: "Refund Policy Revision",
      description: "Draft updated refund policy aligned with RBI guidelines.",
      due_date: "2026-04-26",
      assigned_to: "Lakshmi Iyer",
      assigned_by: "Arjun Nair",
      status: "To Do",
      priority: "Medium",
    },
    {
      id: 20,
      subject: "Data Backup Verification",
      description: "Verify automated backups are running and restorable.",
      due_date: "2026-04-07",
      assigned_to: "Keerthi Rajan",
      assigned_by: "Dev Narayan",
      status: "Done",
      priority: "High",
    },
    {
      id: 21,
      subject: "New Hire Onboarding – May Batch",
      description: "Prepare onboarding materials for 5 new joiners.",
      due_date: "2026-05-02",
      assigned_to: "Meena Sundaram",
      assigned_by: "Rajesh Kumar",
      status: "To Do",
      priority: "Medium",
    },
    {
      id: 22,
      subject: "Feature Flag Cleanup",
      description: "Remove stale feature flags from codebase.",
      due_date: "2026-04-11",
      assigned_to: "Vikram Bose",
      assigned_by: "Dev Narayan",
      status: "In Review",
      priority: "Low",
    },
    {
      id: 23,
      subject: "SEO Audit",
      description: "Run technical SEO audit and fix critical issues.",
      due_date: "2026-04-24",
      assigned_to: "Riya Desai",
      assigned_by: "Sonal Mehta",
      status: "Blocked",
      priority: "Medium",
    },
    {
      id: 24,
      subject: "Annual Budget Planning",
      description: "Compile departmental budget requests for FY 2026-27.",
      due_date: "2026-04-29",
      assigned_to: "Priya Sharma",
      assigned_by: "Rajesh Kumar",
      status: "In Progress",
      priority: "High",
    },
    {
      id: 25,
      subject: "Accessibility Improvements",
      description: "Fix WCAG 2.1 AA violations across the dashboard.",
      due_date: "2026-05-08",
      assigned_to: "Anika Patel",
      assigned_by: "Keerthi Rajan",
      status: "To Do",
      priority: "Medium",
    },
  ]);
  return (
    <>
      <div className="page-title">My Todo App</div>
      <div className="container">
        <div className="col-1">
          <h3>Create Tasks</h3>
        </div>
        <div className="col-2">
          <h3>Tasks</h3>
          <div className="task-filters">Filters</div>
          <div className="task-list">
            {tasks.map((task) => (
              <div className="task-card">
                <h5>{task.subject}</h5>
                <p>{task.description}</p>
                <div className="task-details">
                  <div>Due Date: {task.due_date}</div>
                  <div>Assigned To: {task.assigned_to}</div>
                  <div>Priority: {task.priority}</div>
                  <div>Status: {task.status}</div>
                  <div>Assigned By: {task.assigned_by}</div>
                </div>
                <hr />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default App;
