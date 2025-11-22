import Card from "./components/Card";

const App = () => {
  const jobOpenings = [
    {
      brandLogo: "https://logo.clearbit.com/google.com",
      companyName: "Google",
      datePosted: "5 days ago",
      post: "Frontend Developer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$45/hr",
      location: "Bangalore, India",
    },
    {
      brandLogo: "https://logo.clearbit.com/meta.com",
      companyName: "Meta (Facebook)",
      datePosted: "2 weeks ago",
      post: "React Developer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$70/hr",
      location: "Hyderabad, India",
    },
    {
      brandLogo: "https://logo.clearbit.com/amazon.com",
      companyName: "Amazon",
      datePosted: "3 days ago",
      post: "Backend Engineer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$55/hr",
      location: "Seattle, USA",
    },
    {
      brandLogo: "https://logo.clearbit.com/apple.com",
      companyName: "Apple",
      datePosted: "1 week ago",
      post: "iOS Developer",
      tag1: "Part Time",
      tag2: "Senior Level",
      pay: "$65/hr",
      location: "Cupertino, USA",
    },
    {
      brandLogo: "https://logo.clearbit.com/netflix.com",
      companyName: "Netflix",
      datePosted: "4 days ago",
      post: "Full Stack Developer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$75/hr",
      location: "Los Angeles, USA",
    },
    {
      brandLogo: "https://logo.clearbit.com/microsoft.com",
      companyName: "Microsoft",
      datePosted: "10 weeks ago",
      post: "Cloud Engineer (Azure)",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$60/hr",
      location: "Redmond, USA",
    },
    {
      brandLogo: "https://logo.clearbit.com/tesla.com",
      companyName: "Tesla",
      datePosted: "6 days ago",
      post: "Software Engineer - Automation",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$50/hr",
      location: "Austin, USA",
    },
    {
      brandLogo: "https://logo.clearbit.com/nvidia.com",
      companyName: "NVIDIA",
      datePosted: "1 month ago",
      post: "AI/ML Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$85/hr",
      location: "Santa Clara, USA",
    },
    {
      brandLogo: "https://tse3.mm.bing.net/th/id/OIP.Cat69vJTP8Vp_yYhPDizvgHaJa?rs=1&pid=ImgDetMain&o=7&rm=3",
      companyName: "Adobe",
      datePosted: "2 weeks ago",
      post: "UI/UX Designer",
      tag1: "Part Time",
      tag2: "Mid Level",
      pay: "$40/hr",
      location: "Noida, India",
    },
    {
      brandLogo: "https://logo.clearbit.com/openai.com",
      companyName: "OpenAI",
      datePosted: "3 days ago",
      post: "AI Research Assistant",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$90/hr",
      location: "San Francisco, USA",
    },
  ];

  return (
    <div className="parent">
      {jobOpenings.map(function (elem, idx) {
        return <div key={idx}>
          <Card logo={elem.brandLogo} companyName={elem.companyName} datePosted={elem.datePosted} post={elem.post} tag1={elem.tag1} tag2={elem.tag2} pay={elem.pay} location={elem.location} />
        </div>
      })}
    </div>
  );
};

export default App;
