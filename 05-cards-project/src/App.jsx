import React from 'react'
import Card from './components/Card';

function App() {

  const jobOpenings= [
  {
    "brandlogo": "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    "name": "Google",
    "datePosted": "5 days ago",
    "post": "Frontend Developer",
    "tag1": "Full Time",
    "tag2": "Junior Level",
    "pay": "$45/hour",
    "location": "Mumbai, India"
  },
  {
    "brandlogo": "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
    "name": "Apple",
    "datePosted": "2 weeks ago",
    "post": "iOS Developer",
    "tag1": "Full Time",
    "tag2": "Senior Level",
    "pay": "$75/hour",
    "location": "Bengaluru, India"
  },
  {
    "brandlogo": "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    "name": "Amazon",
    "datePosted": "10 days ago",
    "post": "Backend Engineer",
    "tag1": "Full Time",
    "tag2": "Mid Level",
    "pay": "$55/hour",
    "location": "Hyderabad, India"
  },
  {
    "brandlogo": "https://upload.wikimedia.org/wikipedia/commons/0/05/Meta_Platforms_Inc._logo.svg",
    "name": "Meta",
    "datePosted": "3 weeks ago",
    "post": "React Developer",
    "tag1": "Contract",
    "tag2": "Senior Level",
    "pay": "$80/hour",
    "location": "Gurugram, India"
  },
  {
    "brandlogo": "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    "name": "Microsoft",
    "datePosted": "1 week ago",
    "post": "Cloud Engineer",
    "tag1": "Full Time",
    "tag2": "Mid Level",
    "pay": "$65/hour",
    "location": "Pune, India"
  },
  {
    "brandlogo": "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
    "name": "Netflix",
    "datePosted": "4 days ago",
    "post": "DevOps Engineer",
    "tag1": "Full Time",
    "tag2": "Senior Level",
    "pay": "$90/hour",
    "location": "Remote, India"
  },
  {
    "brandlogo": "https://upload.wikimedia.org/wikipedia/sco/2/21/Nvidia_logo.svg",
    "name": "NVIDIA",
    "datePosted": "6 weeks ago",
    "post": "AI/ML Engineer",
    "tag1": "Full Time",
    "tag2": "Senior Level",
    "pay": "$85/hour",
    "location": "Bengaluru, India"
  },
  {
    "brandlogo": "https://upload.wikimedia.org/wikipedia/commons/8/8d/Adobe_Corporate_logo.svg",
    "name": "Adobe",
    "datePosted": "8 days ago",
    "post": "UI/UX Designer",
    "tag1": "Part Time",
    "tag2": "Mid Level",
    "pay": "$50/hour",
    "location": "Noida, India"
  },
  {
    "brandlogo": "https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg",
    "name": "Salesforce",
    "datePosted": "9 weeks ago",
    "post": "Salesforce Developer",
    "tag1": "Full Time",
    "tag2": "Senior Level",
    "pay": "$70/hour",
    "location": "Hyderabad, India"
  },
  {
    "brandlogo": "https://upload.wikimedia.org/wikipedia/commons/b/bb/Tesla_T_symbol.svg",
    "name": "Tesla",
    "datePosted": "12 days ago",
    "post": "Software Engineer",
    "tag1": "Full Time",
    "tag2": "Junior Level",
    "pay": "$60/hour",
    "location": "Mumbai, India"
  }
]
  return (
    <div className='parent'>
      {jobOpenings.map(function(elem,idx){
        return <div key={idx}>
          <Card company={elem.name} logo={elem.brandlogo} datePosted={elem.datePosted} 
          post={elem.post} tag1={elem.tag1} tag2={elem.tag2} pay={elem.pay} 
          location={elem.location}
          />
        </div>
      })}
    </div>
  )
}

export default App;
