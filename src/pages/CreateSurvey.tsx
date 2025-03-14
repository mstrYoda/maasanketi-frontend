import { Link } from 'react-router-dom';
import '../styles/CreateSurvey.css';

const CreateSurvey = () => {
  return (
    <div className="create-survey-container">
      <div className="results-header tw-bg-gradient-to-r tw-from-primary-light tw-to-primary-dark tw-text-white tw-py-12 tw-px-6 tw-rounded-b-2xl tw-shadow-lg tw-mb-10">
        <h1 className="tw-text-4xl tw-font-extrabold tw-mb-4">
          Create <span className="tw-text-white tw-relative tw-inline-block">
            Survey
            <span className="tw-absolute tw-bottom-0 tw-left-0 tw-w-full tw-h-1 tw-bg-accent tw-rounded"></span>
          </span>
        </h1>
        <p className="subtitle tw-text-gray-100 tw-opacity-90 tw-max-w-2xl tw-mx-auto tw-mb-6 tw-text-lg">
          Design your own salary survey and contribute to engineering compensation transparency
        </p>
        <Link to="/" className="back-link tw-inline-flex tw-items-center tw-text-white tw-bg-white/10 tw-py-2 tw-px-4 tw-rounded-lg tw-font-medium tw-transition-all tw-duration-300 hover:tw-bg-white/20">
          <span className="tw-mr-2">←</span> Back to Home
        </Link>
      </div>
      
      <div className="create-survey-form tw-bg-white tw-rounded-xl tw-p-8 tw-shadow-xl tw-mb-8 tw-border tw-border-gray-100">
        <div className="form-group">
          <label className="tw-block tw-font-medium tw-text-gray-700 tw-mb-2">Survey Title</label>
          <input 
            type="text" 
            placeholder="E.g., 2024 Software Engineer Salary Survey" 
            className="tw-w-full tw-p-3 tw-border tw-border-gray-200 tw-rounded-lg tw-text-gray-700 !tw-bg-white focus:tw-ring-2 focus:tw-ring-primary focus:tw-border-primary-light tw-transition-all tw-shadow-sm hover:tw-bg-gray-50/30"
            style={{backgroundColor: 'white', color: '#374151'}}
          />
        </div>
        
        <div className="form-group">
          <label className="tw-block tw-font-medium tw-text-gray-700 tw-mb-2">Description</label>
          <textarea 
            placeholder="Describe the purpose and goals of your survey"
            className="tw-w-full tw-p-3 tw-border tw-border-gray-200 tw-rounded-lg tw-text-gray-700 !tw-bg-white tw-min-h-[120px] focus:tw-ring-2 focus:tw-ring-primary focus:tw-border-primary-light tw-transition-all tw-shadow-sm hover:tw-bg-gray-50/30"
            style={{backgroundColor: 'white', color: '#374151'}}
          ></textarea>
        </div>
        
        <div className="form-group">
          <label className="tw-block tw-font-medium tw-text-gray-700 tw-mb-2">Target Audience</label>
          <select 
            className="tw-w-full tw-p-3 tw-border tw-border-gray-200 tw-rounded-lg tw-text-gray-700 !tw-bg-white focus:tw-ring-2 focus:tw-ring-primary focus:tw-border-primary-light tw-transition-all tw-shadow-sm hover:tw-bg-gray-50/30"
            style={{backgroundColor: 'white', color: '#374151'}}
          >
            <option value="">Select target audience</option>
            <option value="all">All Software Engineers</option>
            <option value="frontend">Frontend Developers</option>
            <option value="backend">Backend Developers</option>
            <option value="fullstack">Fullstack Developers</option>
            <option value="devops">DevOps Engineers</option>
          </select>
        </div>
        
        <div className="form-group">
          <label className="tw-block tw-font-medium tw-text-gray-700 tw-mb-2">Survey Duration</label>
          <select 
            className="tw-w-full tw-p-3 tw-border tw-border-gray-200 tw-rounded-lg tw-text-gray-700 !tw-bg-white focus:tw-ring-2 focus:tw-ring-primary focus:tw-border-primary-light tw-transition-all tw-shadow-sm hover:tw-bg-gray-50/30"
            style={{backgroundColor: 'white', color: '#374151'}}
          >
            <option value="">Select duration</option>
            <option value="1week">1 Week</option>
            <option value="2weeks">2 Weeks</option>
            <option value="1month">1 Month</option>
            <option value="3months">3 Months</option>
          </select>
        </div>
        
        <div className="form-group">
          <label className="tw-block tw-font-medium tw-text-gray-700 tw-mb-2">Questions to Include</label>
          <div className="checkbox-group tw-grid tw-grid-cols-1 sm:tw-grid-cols-2 md:tw-grid-cols-3 tw-gap-4">
            <div className="checkbox-item tw-flex tw-items-center tw-bg-gray-50 tw-p-3 tw-rounded-lg tw-shadow-sm hover:tw-shadow tw-transition-all">
              <input 
                type="checkbox" 
                id="q-salary" 
                checked 
                readOnly 
                className="tw-w-5 tw-h-5 tw-mr-3 tw-text-primary tw-rounded focus:tw-ring-primary"
              />
              <label htmlFor="q-salary" className="tw-text-gray-700 tw-font-medium">Current Salary</label>
            </div>
            <div className="checkbox-item tw-flex tw-items-center tw-bg-gray-50 tw-p-3 tw-rounded-lg tw-shadow-sm hover:tw-shadow tw-transition-all">
              <input 
                type="checkbox" 
                id="q-experience" 
                checked 
                readOnly 
                className="tw-w-5 tw-h-5 tw-mr-3 tw-text-primary tw-rounded focus:tw-ring-primary"
              />
              <label htmlFor="q-experience" className="tw-text-gray-700 tw-font-medium">Years of Experience</label>
            </div>
            <div className="checkbox-item tw-flex tw-items-center tw-bg-gray-50 tw-p-3 tw-rounded-lg tw-shadow-sm hover:tw-shadow tw-transition-all">
              <input 
                type="checkbox" 
                id="q-role" 
                checked 
                readOnly 
                className="tw-w-5 tw-h-5 tw-mr-3 tw-text-primary tw-rounded focus:tw-ring-primary"
              />
              <label htmlFor="q-role" className="tw-text-gray-700 tw-font-medium">Current Role</label>
            </div>
            <div className="checkbox-item tw-flex tw-items-center tw-bg-gray-50 tw-p-3 tw-rounded-lg tw-shadow-sm hover:tw-shadow tw-transition-all">
              <input 
                type="checkbox" 
                id="q-location" 
                checked 
                readOnly 
                className="tw-w-5 tw-h-5 tw-mr-3 tw-text-primary tw-rounded focus:tw-ring-primary"
              />
              <label htmlFor="q-location" className="tw-text-gray-700 tw-font-medium">Location</label>
            </div>
            <div className="checkbox-item tw-flex tw-items-center tw-bg-gray-50 tw-p-3 tw-rounded-lg tw-shadow-sm hover:tw-shadow tw-transition-all">
              <input 
                type="checkbox" 
                id="q-company" 
                className="tw-w-5 tw-h-5 tw-mr-3 tw-text-primary tw-rounded focus:tw-ring-primary"
              />
              <label htmlFor="q-company" className="tw-text-gray-700 tw-font-medium">Company Type</label>
            </div>
            <div className="checkbox-item tw-flex tw-items-center tw-bg-gray-50 tw-p-3 tw-rounded-lg tw-shadow-sm hover:tw-shadow tw-transition-all">
              <input 
                type="checkbox" 
                id="q-benefits" 
                className="tw-w-5 tw-h-5 tw-mr-3 tw-text-primary tw-rounded focus:tw-ring-primary"
              />
              <label htmlFor="q-benefits" className="tw-text-gray-700 tw-font-medium">Benefits</label>
            </div>
            <div className="checkbox-item tw-flex tw-items-center tw-bg-gray-50 tw-p-3 tw-rounded-lg tw-shadow-sm hover:tw-shadow tw-transition-all">
              <input 
                type="checkbox" 
                id="q-education" 
                className="tw-w-5 tw-h-5 tw-mr-3 tw-text-primary tw-rounded focus:tw-ring-primary"
              />
              <label htmlFor="q-education" className="tw-text-gray-700 tw-font-medium">Education</label>
            </div>
          </div>
        </div>
        
        <div className="form-actions tw-flex tw-justify-end tw-gap-4 tw-mt-8 sm:tw-flex-row tw-flex-col">
          <button className="primary-button tw-bg-gradient-to-r tw-from-primary tw-to-primary-dark tw-text-white tw-px-6 tw-py-3 tw-rounded-lg tw-font-medium tw-shadow-md hover:tw-shadow-lg tw-transition-all hover:tw-translate-y-[-2px]">Create Survey</button>
          <button className="secondary-button tw-bg-gray-100 tw-text-gray-600 tw-px-6 tw-py-3 tw-rounded-lg tw-font-medium tw-transition-all hover:tw-bg-gray-200">Cancel</button>
        </div>
      </div>
      
      <div className="create-survey-info tw-bg-gradient-to-br tw-from-gray-50 tw-to-blue-50/30 tw-rounded-xl tw-p-6 tw-border tw-border-primary-light/10 tw-shadow-md">
        <h3 className="tw-text-xl tw-font-semibold tw-text-gray-800 tw-mb-4">Survey Creation Guidelines</h3>
        <ul className="tw-text-gray-600 tw-space-y-3 tw-list-disc tw-pl-5">
          <li className="tw-pl-2">Keep surveys focused on specific data points for better insights</li>
          <li className="tw-pl-2">All data will be anonymized to protect participants' privacy</li>
          <li className="tw-pl-2">Results will be publicly available once the survey closes</li>
          <li className="tw-pl-2">You can edit the survey until the first submission is received</li>
        </ul>
      </div>
    </div>
  );
};

export default CreateSurvey; 