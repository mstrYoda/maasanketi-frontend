import { Link } from 'react-router-dom';
import '../styles/CreateSurvey.css';

const CreateSurvey = () => {
  return (
    <div className="create-survey-container">
      <div className="create-survey-header">
        <h1>Create a New Salary Survey</h1>
        <p>Set up a new survey to collect salary data from software engineers</p>
        <Link to="/" className="back-link">Back to Home</Link>
      </div>
      
      <div className="create-survey-form">
        <div className="form-group">
          <label>Survey Title</label>
          <input type="text" placeholder="E.g., 2024 Software Engineer Salary Survey" />
        </div>
        
        <div className="form-group">
          <label>Description</label>
          <textarea placeholder="Describe the purpose and goals of your survey"></textarea>
        </div>
        
        <div className="form-group">
          <label>Target Audience</label>
          <select>
            <option value="">Select target audience</option>
            <option value="all">All Software Engineers</option>
            <option value="frontend">Frontend Developers</option>
            <option value="backend">Backend Developers</option>
            <option value="fullstack">Fullstack Developers</option>
            <option value="devops">DevOps Engineers</option>
          </select>
        </div>
        
        <div className="form-group">
          <label>Survey Duration</label>
          <select>
            <option value="">Select duration</option>
            <option value="1week">1 Week</option>
            <option value="2weeks">2 Weeks</option>
            <option value="1month">1 Month</option>
            <option value="3months">3 Months</option>
          </select>
        </div>
        
        <div className="form-group">
          <label>Questions to Include</label>
          <div className="checkbox-group">
            <div className="checkbox-item">
              <input type="checkbox" id="q-salary" checked readOnly />
              <label htmlFor="q-salary">Current Salary</label>
            </div>
            <div className="checkbox-item">
              <input type="checkbox" id="q-experience" checked readOnly />
              <label htmlFor="q-experience">Years of Experience</label>
            </div>
            <div className="checkbox-item">
              <input type="checkbox" id="q-role" checked readOnly />
              <label htmlFor="q-role">Current Role</label>
            </div>
            <div className="checkbox-item">
              <input type="checkbox" id="q-location" checked readOnly />
              <label htmlFor="q-location">Location</label>
            </div>
            <div className="checkbox-item">
              <input type="checkbox" id="q-company" />
              <label htmlFor="q-company">Company Type</label>
            </div>
            <div className="checkbox-item">
              <input type="checkbox" id="q-benefits" />
              <label htmlFor="q-benefits">Benefits</label>
            </div>
            <div className="checkbox-item">
              <input type="checkbox" id="q-education" />
              <label htmlFor="q-education">Education</label>
            </div>
          </div>
        </div>
        
        <div className="form-actions">
          <button className="primary-button">Create Survey</button>
          <button className="secondary-button">Cancel</button>
        </div>
      </div>
      
      <div className="create-survey-info">
        <h3>Survey Creation Guidelines</h3>
        <ul>
          <li>Keep surveys focused on specific data points for better insights</li>
          <li>All data will be anonymized to protect participants' privacy</li>
          <li>Results will be publicly available once the survey closes</li>
          <li>You can edit the survey until the first submission is received</li>
        </ul>
      </div>
    </div>
  );
};

export default CreateSurvey; 