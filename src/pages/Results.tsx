import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  PieChart, Pie, Cell, LineChart, Line, ScatterChart, Scatter, ZAxis, 
  RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar,
  AreaChart, Area, ComposedChart
} from 'recharts';
import '../styles/Results.css';

// Mock data - in a real app, this would come from an API
const salaryByExperience = [
  { experience: '0-2', salary: 70000 },
  { experience: '3-5', salary: 95000 },
  { experience: '6-8', salary: 120000 },
  { experience: '9-12', salary: 145000 },
  { experience: '13+', salary: 170000 },
];

const salaryByRole = [
  { role: 'Frontend', salary: 95000 },
  { role: 'Backend', salary: 105000 },
  { role: 'Fullstack', salary: 110000 },
  { role: 'DevOps', salary: 115000 },
  { role: 'Data Engineer', salary: 125000 },
  { role: 'ML Engineer', salary: 135000 },
];

const salaryByLocation = [
  { location: 'US', salary: 120000 },
  { location: 'EU', salary: 80000 },
  { location: 'UK', salary: 85000 },
  { location: 'Canada', salary: 90000 },
  { location: 'Australia', salary: 95000 },
  { location: 'Asia', salary: 60000 },
];

const companyTypeData = [
  { name: 'Startup', value: 25 },
  { name: 'Midsize', value: 35 },
  { name: 'Enterprise', value: 40 },
];

const COLORS = ['#4361ee', '#4895ef', '#4cc9f0', '#f72585', '#3a0ca3', '#7209b7'];

const salaryTrendData = [
  { year: 2018, salary: 80000 },
  { year: 2019, salary: 85000 },
  { year: 2020, salary: 90000 },
  { year: 2021, salary: 100000 },
  { year: 2022, salary: 110000 },
  { year: 2023, salary: 120000 },
];

// Experience vs Salary scatter plot data
const experienceSalaryCorrelation = [
  { yearsExperience: 1, salary: 65000, name: 'Junior Frontend' },
  { yearsExperience: 2, salary: 72000, name: 'Frontend' },
  { yearsExperience: 3, salary: 85000, name: 'Frontend' },
  { yearsExperience: 4, salary: 90000, name: 'Senior Frontend' },
  { yearsExperience: 2, salary: 75000, name: 'Junior Backend' },
  { yearsExperience: 3, salary: 88000, name: 'Backend' },
  { yearsExperience: 5, salary: 105000, name: 'Senior Backend' },
  { yearsExperience: 7, salary: 115000, name: 'Senior Backend' },
  { yearsExperience: 2, salary: 80000, name: 'Junior Fullstack' },
  { yearsExperience: 4, salary: 98000, name: 'Fullstack' },
  { yearsExperience: 6, salary: 110000, name: 'Senior Fullstack' },
  { yearsExperience: 8, salary: 132000, name: 'Lead Fullstack' },
  { yearsExperience: 3, salary: 95000, name: 'DevOps' },
  { yearsExperience: 5, salary: 120000, name: 'Senior DevOps' },
  { yearsExperience: 7, salary: 140000, name: 'Lead DevOps' },
  { yearsExperience: 4, salary: 110000, name: 'Data Engineer' },
  { yearsExperience: 6, salary: 130000, name: 'Senior Data Engineer' },
  { yearsExperience: 3, salary: 105000, name: 'ML Engineer' },
  { yearsExperience: 5, salary: 125000, name: 'Senior ML Engineer' },
  { yearsExperience: 8, salary: 150000, name: 'Lead ML Engineer' },
];

// Role and level breakdown data
const roleLevelData = [
  { role: 'Frontend', junior: 70000, mid: 95000, senior: 120000, lead: 145000 },
  { role: 'Backend', junior: 75000, mid: 100000, senior: 125000, lead: 150000 },
  { role: 'Fullstack', junior: 80000, mid: 105000, senior: 130000, lead: 160000 },
  { role: 'DevOps', junior: 85000, mid: 110000, senior: 140000, lead: 170000 },
  { role: 'Data Engineer', junior: 90000, mid: 115000, senior: 145000, lead: 175000 },
];

// Benefit types by company size
const benefitData = [
  { subject: 'Health Insurance', startup: 80, midsize: 90, enterprise: 95 },
  { subject: 'Retirement Plan', startup: 60, midsize: 80, enterprise: 90 },
  { subject: 'Remote Work', startup: 95, midsize: 80, enterprise: 70 },
  { subject: 'Education Budget', startup: 70, midsize: 75, enterprise: 85 },
  { subject: 'Stock Options', startup: 90, midsize: 60, enterprise: 40 },
  { subject: 'Flexible Hours', startup: 85, midsize: 75, enterprise: 65 },
];

// Salary trends by role
const roleYearSalaryData = [
  { year: 2018, frontend: 70000, backend: 75000, fullstack: 80000, devops: 85000, data: 90000 },
  { year: 2019, frontend: 75000, backend: 80000, fullstack: 85000, devops: 95000, data: 100000 },
  { year: 2020, frontend: 80000, backend: 85000, fullstack: 90000, devops: 100000, data: 110000 },
  { year: 2021, frontend: 85000, backend: 90000, fullstack: 100000, devops: 110000, data: 120000 },
  { year: 2022, frontend: 95000, backend: 100000, fullstack: 110000, devops: 125000, data: 130000 },
  { year: 2023, frontend: 105000, backend: 110000, fullstack: 120000, devops: 135000, data: 140000 },
];

const Results = () => {
  const [activeTab, setActiveTab] = useState('byExperience');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className={`results-container ${isLoaded ? 'loaded' : ''}`}>
      <div className="results-header tw-shadow-lg tw-rounded-b-xl">
        <h1 className="tw-relative">Salary <span className="highlight tw-inline-block">Insights</span></h1>
        <p className="subtitle tw-max-w-2xl">Explore comprehensive data on software engineering compensation trends</p>
        <Link to="/" className="back-link tw-transition-all tw-duration-300">
          <span className="back-arrow">←</span> Back to Home
        </Link>
      </div>

      <div className="dashboard-nav tw-sticky tw-top-0 tw-z-10">
        <button 
          className={`${activeTab === 'byExperience' ? 'active' : ''} tw-focus:outline-none tw-focus:ring-2 tw-focus:ring-primary tw-transition-colors`}
          onClick={() => setActiveTab('byExperience')}
        >
          Experience Impact
        </button>
        <button 
          className={`${activeTab === 'byRole' ? 'active' : ''} tw-focus:outline-none tw-focus:ring-2 tw-focus:ring-primary tw-transition-colors`}
          onClick={() => setActiveTab('byRole')}
        >
          Role Analysis
        </button>
        <button 
          className={`${activeTab === 'byLocation' ? 'active' : ''} tw-focus:outline-none tw-focus:ring-2 tw-focus:ring-primary tw-transition-colors`}
          onClick={() => setActiveTab('byLocation')}
        >
          Location Factors
        </button>
        <button 
          className={`${activeTab === 'correlation' ? 'active' : ''} tw-focus:outline-none tw-focus:ring-2 tw-focus:ring-primary tw-transition-colors`}
          onClick={() => setActiveTab('correlation')}
        >
          Salary Correlations
        </button>
        <button 
          className={`${activeTab === 'trends' ? 'active' : ''} tw-focus:outline-none tw-focus:ring-2 tw-focus:ring-primary tw-transition-colors`}
          onClick={() => setActiveTab('trends')}
        >
          Multi-Year Trends
        </button>
        <button 
          className={`${activeTab === 'benefits' ? 'active' : ''} tw-focus:outline-none tw-focus:ring-2 tw-focus:ring-primary tw-transition-colors`}
          onClick={() => setActiveTab('benefits')}
        >
          Benefits Analysis
        </button>
      </div>

      <div className="dashboard-container">
        {activeTab === 'byExperience' && (
          <div className="dashboard-section fade-in">
            <div className="section-header tw-py-6">
              <h2 className="tw-text-3xl tw-font-bold tw-mb-3">How Experience Impacts Salary</h2>
              <p className="tw-text-gray-600 tw-max-w-3xl tw-mx-auto">Analysis of the relationship between years of experience and compensation</p>
            </div>
            
            <div className="chart-grid">
              <div className="chart-card tw-hover:shadow-xl tw-transition-all tw-duration-300 tw-border tw-border-gray-100">
                <h3 className="tw-text-xl tw-font-semibold tw-text-gray-800">Average Salary by Years of Experience</h3>
                <div className="chart-description">
                  <p className="tw-text-gray-600 tw-text-sm">Clear progression of salary increases with experience level across the industry</p>
                </div>
                <ResponsiveContainer width="100%" height={400}>
                  <BarChart
                    data={salaryByExperience}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="#eee" />
                    <XAxis dataKey="experience" />
                    <YAxis />
                    <Tooltip 
                      formatter={(value) => [`$${value.toLocaleString()}`, 'Average Salary']}
                      contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                    />
                    <Legend />
                    <Bar dataKey="salary" fill="#4361ee" name="Average Salary ($)" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <div className="chart-card">
                <h3>Experience-Salary Distribution</h3>
                <div className="chart-description">
                  <p>Individual data points showing the actual distribution of salaries by experience</p>
                </div>
                <ResponsiveContainer width="100%" height={400}>
                  <ScatterChart
                    margin={{ top: 20, right: 30, left: 20, bottom: 10 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="#eee" />
                    <XAxis 
                      type="number" 
                      dataKey="yearsExperience" 
                      name="Years of Experience" 
                      label={{ value: 'Years of Experience', position: 'insideBottom', offset: -5 }}
                    />
                    <YAxis 
                      type="number" 
                      dataKey="salary" 
                      name="Salary" 
                      label={{ value: 'Salary ($)', angle: -90, position: 'insideLeft' }}
                    />
                    <ZAxis type="category" dataKey="name" name="Position" />
                    <Tooltip 
                      cursor={{ strokeDasharray: '3 3' }}
                      formatter={(value, name) => [name === 'Salary' ? `$${value.toLocaleString()}` : value, name]}
                      contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                    />
                    <Legend />
                    <Scatter name="Developer Positions" data={experienceSalaryCorrelation} fill="#4361ee" />
                  </ScatterChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'byRole' && (
          <div className="dashboard-section fade-in">
            <div className="section-header">
              <h2>Role-Based Salary Analysis</h2>
              <p>Comparison of compensation across different engineering roles and seniority levels</p>
            </div>
            
            <div className="chart-grid">
              <div className="chart-card">
                <h3>Average Salary by Role</h3>
                <div className="chart-description">
                  <p>Baseline comparison of average compensation by engineering specialization</p>
                </div>
                <ResponsiveContainer width="100%" height={400}>
                  <BarChart
                    data={salaryByRole}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="#eee" />
                    <XAxis dataKey="role" />
                    <YAxis />
                    <Tooltip 
                      formatter={(value) => [`$${value.toLocaleString()}`, 'Average Salary']}
                      contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                    />
                    <Legend />
                    <Bar dataKey="salary" fill="#4895ef" name="Average Salary ($)" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <div className="chart-card">
                <h3>Salary by Role and Level</h3>
                <div className="chart-description">
                  <p>Detailed breakdown of compensation across different career levels by role</p>
                </div>
                <ResponsiveContainer width="100%" height={400}>
                  <BarChart
                    data={roleLevelData}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="#eee" />
                    <XAxis dataKey="role" />
                    <YAxis />
                    <Tooltip 
                      formatter={(value) => [`$${value.toLocaleString()}`, 'Salary']}
                      contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                    />
                    <Legend />
                    <Bar dataKey="junior" stackId="a" fill="#4cc9f0" name="Junior" radius={[4, 4, 0, 0]} />
                    <Bar dataKey="mid" stackId="a" fill="#4895ef" name="Mid-Level" />
                    <Bar dataKey="senior" stackId="a" fill="#4361ee" name="Senior" />
                    <Bar dataKey="lead" stackId="a" fill="#3a0ca3" name="Lead/Manager" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'byLocation' && (
          <div className="dashboard-section fade-in">
            <div className="section-header">
              <h2>Geographic Salary Distribution</h2>
              <p>How location and region impact software engineering compensation</p>
            </div>
            
            <div className="chart-grid">
              <div className="chart-card">
                <h3>Average Salary by Region</h3>
                <div className="chart-description">
                  <p>Geographical analysis of salary differences across major tech markets</p>
                </div>
                <ResponsiveContainer width="100%" height={400}>
                  <BarChart
                    data={salaryByLocation}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="#eee" />
                    <XAxis dataKey="location" />
                    <YAxis />
                    <Tooltip 
                      formatter={(value) => [`$${value.toLocaleString()}`, 'Average Salary']}
                      contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                    />
                    <Legend />
                    <Bar dataKey="salary" fill="#3a0ca3" name="Average Salary ($)" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <div className="chart-card">
                <h3>Company Type Distribution</h3>
                <div className="chart-description">
                  <p>Breakdown of engineer employment by company size and type</p>
                </div>
                <ResponsiveContainer width="100%" height={400}>
                  <PieChart>
                    <Pie
                      data={companyTypeData}
                      cx="50%"
                      cy="50%"
                      labelLine={true}
                      outerRadius={150}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                    >
                      {companyTypeData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip 
                      formatter={(value) => [`${value}%`, 'Percentage']}
                      contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                    />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'correlation' && (
          <div className="dashboard-section fade-in">
            <div className="section-header">
              <h2>Advanced Salary Correlations</h2>
              <p>Multi-dimensional analysis of factors affecting engineering compensation</p>
            </div>
            
            <div className="chart-grid">
              <div className="chart-card full-width">
                <h3>Experience-Salary Correlation by Role</h3>
                <div className="chart-description">
                  <p>Detailed scatter plot showing the relationship between experience, role, and compensation</p>
                </div>
                <ResponsiveContainer width="100%" height={500}>
                  <ScatterChart
                    margin={{ top: 20, right: 30, left: 20, bottom: 10 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="#eee" />
                    <XAxis 
                      type="number" 
                      dataKey="yearsExperience" 
                      name="Years of Experience" 
                      label={{ value: 'Years of Experience', position: 'insideBottom', offset: -5 }}
                    />
                    <YAxis 
                      type="number" 
                      dataKey="salary" 
                      name="Salary" 
                      label={{ value: 'Salary ($)', angle: -90, position: 'insideLeft' }}
                    />
                    <ZAxis type="category" dataKey="name" name="Position" />
                    <Tooltip 
                      cursor={{ strokeDasharray: '3 3' }}
                      formatter={(value, name) => [name === 'Salary' ? `$${value.toLocaleString()}` : value, name]}
                      contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                    />
                    <Legend />
                    <Scatter name="Developer Positions" data={experienceSalaryCorrelation} fill="#4361ee" />
                  </ScatterChart>
                </ResponsiveContainer>
              </div>
            </div>
            
            <div className="chart-grid">
              <div className="chart-card">
                <h3>Benefit Analysis by Company Size</h3>
                <div className="chart-description">
                  <p>Radar chart comparing benefit offerings across different company sizes</p>
                </div>
                <ResponsiveContainer width="100%" height={400}>
                  <RadarChart cx="50%" cy="50%" outerRadius="80%" data={benefitData}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="subject" />
                    <PolarRadiusAxis angle={30} domain={[0, 100]} />
                    <Radar name="Startup" dataKey="startup" stroke="#4361ee" fill="#4361ee" fillOpacity={0.6} />
                    <Radar name="Midsize Company" dataKey="midsize" stroke="#4cc9f0" fill="#4cc9f0" fillOpacity={0.6} />
                    <Radar name="Enterprise" dataKey="enterprise" stroke="#f72585" fill="#f72585" fillOpacity={0.6} />
                    <Legend />
                    <Tooltip 
                      contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                    />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
              <div className="chart-card">
                <h3>Role Distribution by Company Type</h3>
                <div className="chart-description">
                  <p>Comparison of engineering roles across different company environments</p>
                </div>
                <ResponsiveContainer width="100%" height={400}>
                  <ComposedChart
                    data={salaryByRole}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="#eee" />
                    <XAxis dataKey="role" />
                    <YAxis />
                    <Tooltip 
                      formatter={(value) => [`$${value.toLocaleString()}`, 'Average Salary']}
                      contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                    />
                    <Legend />
                    <Bar dataKey="salary" fill="#4361ee" name="Average Salary ($)" radius={[4, 4, 0, 0]} />
                    <Line type="monotone" dataKey="salary" stroke="#f72585" name="Trend Line" dot={{ r: 6 }} activeDot={{ r: 8 }} />
                  </ComposedChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'trends' && (
          <div className="dashboard-section fade-in">
            <div className="section-header">
              <h2>Salary Trends Over Time</h2>
              <p>Historical analysis of software engineering compensation evolution</p>
            </div>
            
            <div className="chart-grid">
              <div className="chart-card">
                <h3>Overall Salary Trends (2018-2023)</h3>
                <div className="chart-description">
                  <p>Industry-wide salary growth trends over the past six years</p>
                </div>
                <ResponsiveContainer width="100%" height={400}>
                  <LineChart
                    data={salaryTrendData}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="#eee" />
                    <XAxis dataKey="year" />
                    <YAxis />
                    <Tooltip 
                      formatter={(value) => [`$${value.toLocaleString()}`, 'Average Salary']}
                      contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                    />
                    <Legend />
                    <Line 
                      type="monotone" 
                      dataKey="salary" 
                      stroke="#4361ee" 
                      strokeWidth={3}
                      activeDot={{ r: 8 }}
                      name="Average Salary ($)" 
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
              <div className="chart-card">
                <h3>Salary Trends by Role</h3>
                <div className="chart-description">
                  <p>Comparison of salary growth rates across different engineering roles</p>
                </div>
                <ResponsiveContainer width="100%" height={400}>
                  <AreaChart
                    data={roleYearSalaryData}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="#eee" />
                    <XAxis dataKey="year" />
                    <YAxis />
                    <Tooltip 
                      formatter={(value) => [`$${value.toLocaleString()}`, '']}
                      contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                    />
                    <Legend />
                    <Area type="monotone" dataKey="frontend" stackId="1" stroke="#4cc9f0" fill="#4cc9f0" fillOpacity={0.8} name="Frontend" />
                    <Area type="monotone" dataKey="backend" stackId="2" stroke="#4361ee" fill="#4361ee" fillOpacity={0.8} name="Backend" />
                    <Area type="monotone" dataKey="fullstack" stackId="3" stroke="#3a0ca3" fill="#3a0ca3" fillOpacity={0.8} name="Fullstack" />
                    <Area type="monotone" dataKey="devops" stackId="4" stroke="#7209b7" fill="#7209b7" fillOpacity={0.8} name="DevOps" />
                    <Area type="monotone" dataKey="data" stackId="5" stroke="#f72585" fill="#f72585" fillOpacity={0.8} name="Data" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'benefits' && (
          <div className="dashboard-section fade-in">
            <div className="section-header">
              <h2>Benefits and Compensation Package Analysis</h2>
              <p>Beyond salary: The complete picture of software engineer total compensation</p>
            </div>
            
            <div className="chart-grid">
              <div className="chart-card">
                <h3>Benefits by Company Size</h3>
                <div className="chart-description">
                  <p>Comparative analysis of benefit offerings by company size and stage</p>
                </div>
                <ResponsiveContainer width="100%" height={400}>
                  <RadarChart cx="50%" cy="50%" outerRadius="80%" data={benefitData}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="subject" />
                    <PolarRadiusAxis angle={30} domain={[0, 100]} />
                    <Radar name="Startup" dataKey="startup" stroke="#4361ee" fill="#4361ee" fillOpacity={0.6} />
                    <Radar name="Midsize Company" dataKey="midsize" stroke="#4cc9f0" fill="#4cc9f0" fillOpacity={0.6} />
                    <Radar name="Enterprise" dataKey="enterprise" stroke="#f72585" fill="#f72585" fillOpacity={0.6} />
                    <Legend />
                    <Tooltip 
                      contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                    />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
              <div className="chart-card">
                <h3>Company Type Distribution</h3>
                <div className="chart-description">
                  <p>Where software engineers work based on company size and type</p>
                </div>
                <ResponsiveContainer width="100%" height={400}>
                  <PieChart>
                    <Pie
                      data={companyTypeData}
                      cx="50%"
                      cy="50%"
                      labelLine={true}
                      outerRadius={150}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                    >
                      {companyTypeData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip 
                      formatter={(value) => [`${value}%`, 'Percentage']}
                      contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                    />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="results-footer tw-bg-gradient-to-r tw-from-white tw-to-gray-50">
        <div className="results-metadata tw-flex tw-flex-wrap tw-gap-8">
          <div className="metadata-item tw-shadow-sm tw-p-3 tw-rounded-lg tw-bg-white">
            <span className="metadata-label tw-text-xs tw-uppercase">Data source:</span>
            <span className="metadata-value tw-font-semibold">{Math.floor(Math.random() * 5000) + 8000} anonymous survey responses</span>
          </div>
          <div className="metadata-item tw-shadow-sm tw-p-3 tw-rounded-lg tw-bg-white">
            <span className="metadata-label tw-text-xs tw-uppercase">Last updated:</span>
            <span className="metadata-value tw-font-semibold">{new Date().toLocaleDateString()}</span>
          </div>
          <div className="metadata-item tw-shadow-sm tw-p-3 tw-rounded-lg tw-bg-white">
            <span className="metadata-label tw-text-xs tw-uppercase">Coverage:</span>
            <span className="metadata-value tw-font-semibold">35+ countries, 6 continents</span>
          </div>
        </div>
        <div className="results-cta">
          <p className="tw-text-gray-600 tw-mb-3">Help improve this data by participating in our current salary survey</p>
          <Link to="/ongoing-surveys" className="cta-button tw-shadow-md tw-inline-flex tw-items-center tw-gap-2">
            Participate Now
            <svg xmlns="http://www.w3.org/2000/svg" className="tw-h-4 tw-w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Results; 