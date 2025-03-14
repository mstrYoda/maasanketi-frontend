import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import '../styles/Landing.css';

const Landing = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="landing-container">
      {/* Hero Section */}
      <div className={`landing-hero ${isLoaded ? 'loaded' : ''}`}>
        <div className="hero-content">
          <h1>Software Engineer Salary <span className="highlight">Insights</span></h1>
          <p className="hero-description">
            Empowering transparency in the tech industry through data-driven salary insights.
            Create, participate, and explore software engineering compensation trends.
          </p>
          <div className="hero-buttons">
            <Link to="/create-survey" className="primary-button">
              Create Survey
            </Link>
            <Link to="/results" className="secondary-button">
              Explore Data
            </Link>
          </div>
        </div>
        <div className="hero-image">
          <div className="abstract-shape shape-1"></div>
          <div className="abstract-shape shape-2"></div>
          <div className="abstract-shape shape-3"></div>
          <div className="chart-illustration">
            <div className="chart-bar bar-1"></div>
            <div className="chart-bar bar-2"></div>
            <div className="chart-bar bar-3"></div>
            <div className="chart-bar bar-4"></div>
            <div className="chart-bar bar-5"></div>
          </div>
        </div>
      </div>
      
      {/* Features Section */}
      <div className="features-section">
        <h2 className="section-title">What You Can Do</h2>
        <div className="landing-cards">
          <div className="landing-card">
            <div className="card-icon create-icon"></div>
            <h3>Create a Survey</h3>
            <p>Design custom salary surveys to gather insights that matter to your community</p>
            <Link to="/create-survey" className="card-link">
              Get Started <span className="arrow">→</span>
            </Link>
          </div>
          
          <div className="landing-card">
            <div className="card-icon participate-icon"></div>
            <h3>Ongoing Surveys</h3>
            <p>Contribute to active surveys and help build a more transparent industry</p>
            <Link to="/ongoing-surveys" className="card-link">
              View Surveys <span className="arrow">→</span>
            </Link>
          </div>
          
          <div className="landing-card">
            <div className="card-icon results-icon"></div>
            <h3>Explore Results</h3>
            <p>Discover salary trends and make informed career decisions with our analytics</p>
            <Link to="/results" className="card-link">
              See Insights <span className="arrow">→</span>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Statistics Section */}
      <div className="stats-section">
        <div className="stat-card">
          <span className="stat-number">10k+</span>
          <span className="stat-label">Participants</span>
        </div>
        <div className="stat-card">
          <span className="stat-number">35+</span>
          <span className="stat-label">Countries</span>
        </div>
        <div className="stat-card">
          <span className="stat-number">42</span>
          <span className="stat-label">Active Surveys</span>
        </div>
        <div className="stat-card">
          <span className="stat-number">8</span>
          <span className="stat-label">Years of Data</span>
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="cta-section">
        <h2>Ready to contribute to salary transparency?</h2>
        <p>Join thousands of software engineers making the industry more equitable through data sharing</p>
        <Link to="/create-survey" className="cta-button">
          Start Now
        </Link>
      </div>
      
      <footer className="landing-footer">
        <div className="footer-content">
          <div className="footer-info">
            <h3>Software Engineer Salary Survey</h3>
            <p>Helping improve salary transparency in the software engineering industry</p>
          </div>
          <div className="footer-links">
            <div className="link-group">
              <h4>Resources</h4>
              <Link to="/results">Survey Results</Link>
              <Link to="/ongoing-surveys">Active Surveys</Link>
              <a href="#">Methodology</a>
            </div>
            <div className="link-group">
              <h4>About</h4>
              <a href="#">Our Mission</a>
              <a href="#">Privacy</a>
              <a href="#">Contact</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Software Engineer Salary Insights. All data is anonymized.</p>
        </div>
      </footer>
    </div>
  );
};

export default Landing; 