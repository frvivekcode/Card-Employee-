import React from 'react'
import Card from './components/Card'


 
const App = () => {

  

const jobs = [
  {
    id: 1,
    companyImage: "https://www.google.com/s2/favicons?domain=amazon.com&sz=128",
    companyName: "Amazon",
    postedAgo: "2 days ago",
    post: "Senior UI/UX Designer",
    workingHours: "Full Time",
    level: "Senior Level",
    payout: "$120/hr",
    location: "Delhi, India",
  },
  {
    id: 2,
    companyImage: "https://www.google.com/s2/favicons?domain=google.com&sz=128",
    companyName: "Google",
    postedAgo: "5 days ago",
    post: "Frontend Developer",
    workingHours: "Full Time",
    level: "Junior Level",
    payout: "$90/hr",
    location: "Bangalore, India",
  },
  {
    id: 3,
    companyImage: "https://www.google.com/s2/favicons?domain=microsoft.com&sz=128",
    companyName: "Microsoft",
    postedAgo: "1 day ago",
    post: "React.js Developer",
    workingHours: "Part Time",
    level: "Mid Level",
    payout: "$100/hr",
    location: "Hyderabad, India",
  },
  {
    id: 4,
    companyImage: "https://www.google.com/s2/favicons?domain=netflix.com&sz=128",
    companyName: "Netflix",
    postedAgo: "3 days ago",
    post: "Product Designer",
    workingHours: "Full Time",
    level: "Senior Level",
    payout: "$150/hr",
    location: "Mumbai, India",
  },
  {
    id: 5,
    companyImage: "https://www.google.com/s2/favicons?domain=spotify.com&sz=128",
    companyName: "Spotify",
    postedAgo: "6 days ago",
    post: "UI Developer",
    workingHours: "Part Time",
    level: "Junior Level",
    payout: "$75/hr",
    location: "Pune, India",
  },
  {
    id: 6,
    companyImage: "https://www.google.com/s2/favicons?domain=adobe.com&sz=128",
    companyName: "Adobe",
    postedAgo: "4 days ago",
    post: "UX Researcher",
    workingHours: "Full Time",
    level: "Mid Level",
    payout: "$110/hr",
    location: "Noida, India",
  },
  {
    id: 7,
    companyImage: "https://www.google.com/s2/favicons?domain=uber.com&sz=128",
    companyName: "Uber",
    postedAgo: "2 days ago",
    post: "Backend Developer",
    workingHours: "Full Time",
    level: "Senior Level",
    payout: "$130/hr",
    location: "Gurgaon, India",
  },
  {
    id: 8,
    companyImage: "https://www.google.com/s2/favicons?domain=airbnb.com&sz=128",
    companyName: "Airbnb",
    postedAgo: "7 days ago",
    post: "Graphic Designer",
    workingHours: "Part Time",
    level: "Junior Level",
    payout: "$65/hr",
    location: "Delhi, India",
  },
  {
    id: 9,
    companyImage: "https://www.google.com/s2/favicons?domain=tesla.com&sz=128",
    companyName: "Tesla",
    postedAgo: "1 day ago",
    post: "Full Stack Developer",
    workingHours: "Full Time",
    level: "Mid Level",
    payout: "$115/hr",
    location: "Chennai, India",
  },
  {
    id: 10,
    companyImage: "https://www.google.com/s2/favicons?domain=meta.com&sz=128",
    companyName: "Meta",
    postedAgo: "3 days ago",
    post: "React.js Developer",
    workingHours: "Full Time",
    level: "Senior Level",
    payout: "$140/hr",
    location: "Bangalore, India",
  },
];


// export default jobs;


  return (
    <div className='h-screen bg-black'>
       <div className='h-auto bg-black flex  gap-3 flex-wrap p-4'>
            {jobs.map(function(elem){
              return <Card Cname={elem.companyName} Cimage={elem.companyImage} PostedAgo={elem.postedAgo 
              } Post={elem.post} workingHours={elem.workingHours} level={elem.level} payout={elem.payout}
              location={elem.location}

              />
            })}
       </div>
    </div>
  )
}

export default App
