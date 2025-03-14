import { Link } from 'react-router-dom';
import '../styles/OngoingSurveys.css';

// Mock data for ongoing surveys
const ongoingSurveys = [
  {
    id: 1,
    title: '2024 Frontend Developer Salary Survey',
    description: 'Collecting salary data from frontend developers worldwide to analyze trends and disparities.',
    participants: 487,
    endDate: '2024-06-15',
    creator: 'DevCareer Insights',
  },
  {
    id: 2,
    title: 'Remote Work Impact on Tech Salaries',
    description: 'Analyzing how remote work policies have affected compensation in the tech industry.',
    participants: 312,
    endDate: '2024-05-30',
    creator: 'Future of Work Initiative',
  },
  {
    id: 3,
    title: 'Junior vs Senior Developer Compensation Gap',
    description: 'Studying the salary differences between junior and senior developers across different regions.',
    participants: 639,
    endDate: '2024-07-10',
    creator: 'Tech Equity Alliance',
  },
  {
    id: 4,
    title: 'DevOps and SRE Salary Comparison',
    description: 'Comparing compensation between DevOps engineers and Site Reliability Engineers.',
    participants: 218,
    endDate: '2024-06-05',
    creator: 'Operations Professionals Network',
  },
];

const OngoingSurveys = () => {
  return (
    <div className="ongoing-surveys-container">
      <div className="ongoing-surveys-header">
        <h1>Ongoing Salary Surveys</h1>
        <p>Participate in active surveys and contribute to salary transparency</p>
        <Link to="/" className="back-link">Back to Home</Link>
      </div>
      
      <div className="survey-filters">
        <div className="search-bar">
          <input type="text" placeholder="Search surveys..." />
          <button>Search</button>
        </div>
        
        <div className="filter-options">
          <select defaultValue="">
            <option value="">All Roles</option>
            <option value="frontend">Frontend</option>
            <option value="backend">Backend</option>
            <option value="fullstack">Fullstack</option>
            <option value="devops">DevOps</option>
          </select>
          
          <select defaultValue="newest">
            <option value="newest">Newest First</option>
            <option value="closing">Closing Soon</option>
            <option value="popular">Most Participants</option>
          </select>
        </div>
      </div>
      
      <div className="survey-list">
        {ongoingSurveys.map(survey => (
          <div key={survey.id} className="survey-card">
            <h2>{survey.title}</h2>
            <p className="survey-description">{survey.description}</p>
            
            <div className="survey-stats">
              <div className="stat-item">
                <span className="stat-label">Participants:</span>
                <span className="stat-value">{survey.participants}</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">Closing:</span>
                <span className="stat-value">{new Date(survey.endDate).toLocaleDateString()}</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">Created by:</span>
                <span className="stat-value">{survey.creator}</span>
              </div>
            </div>
            
            <div className="survey-actions">
              <button className="participate-button">Participate</button>
              <button className="details-button">View Details</button>
            </div>
          </div>
        ))}
      </div>
      
      <div className="pagination">
        <button className="pagination-button active">1</button>
        <button className="pagination-button">2</button>
        <button className="pagination-button">3</button>
        <button className="pagination-button">Next &rarr;</button>
      </div>
      
      <div className="ongoing-surveys-note">
        <p>All survey responses are anonymous and will be used only for statistical purposes.</p>
      </div>
    </div>
  );
};

export default OngoingSurveys; 