import { useEffect, useState } from 'react'

import './App.css'
import SideBar from './Componenets/SideBar'
import Header from './Componenets/Header'
import SubHeader from './Componenets/SubHeader'
import { setCandidate } from '../store/CandidateSlice'
import AssignedJobs from './Componenets/AssignedJobs'
import Notes from './Componenets/Notes'
import Headermini from './Componenets/Headermini'
import CandidateDetails from './Componenets/CandidateDetails'
import CandidateDetailForm from './Componenets/CandidateDetailForm'
import { useDispatch } from 'react-redux'

const mockCandidate = [
  
    { label: "Current Organization", value: "World Bank Group" },
    { label: "Skills", value: "HTML, CSS, Javascript" },
    { label: "Available From", value: "Jul, 14, 2023" },
    { label: "Current Salary", value: "$6000" },
    { label: "Notice Period", value: "90 Days" },
    { label: "Full Address", value: "9400 Ashton Rd, Philadelphia…" },
    { label: "Resume", value: "Resume" },
    { label: "Total Experience", value: "5 Years" },
    { label: "Summary", value: "Current Organization" },
    { label: "Current Employment Status", value: "Employed" },
    { label: "Date of Birth", value: "15 June 1993" },
    { label: "Relevent Experience", value: "7 Years" },
    { label: "Salary Expectation", value: "$9000" },
    { label: "Status", value: "Submitted to Client" },
    { label: "Salary Type", value: "Annual" },
    { label: "Language Skills", value: "English (Elementary proficiency)" },
  ];


// mock fetch API
window.fetch = async (url, options) => {
  if (url === "candidate/fetchCandidate" && options?.method === "GET") {
    return {
      ok: true,
      json: async () => mockCandidate,
    };
  }
  return Promise.reject(new Error("Unknown API endpoint"));
};

function App() {

 const [showForm, setShowForm] = useState(false);
 const dispatch = useDispatch();
 useEffect(() => {
    
    
    
   const fetchdata = async() => {
      try {
        const response  = await fetch('candidate/fetchCandidate' , {
          method: 'GET',
          
        });
        const data = await response.json();
        dispatch(setCandidate(data));
        
      } catch (error) {
        console.error("Error fetching candidate data:", error);
        
      }

    }
    fetchdata();
    
  }, [dispatch]);
  return (
    <>




      <div className="containerMain">

        <div className="MainSection">

          <SideBar />
          <main className="CandidateFormDiv">
            <Header />
            <div className='MainSection '>
                <section className='sectionA'>
              <Headermini />
              <SubHeader showForm  = {showForm} setShowForm = {setShowForm} />
              <CandidateDetails />
                <AssignedJobs />

            </section>
            <section className='sectionB '>
              <Notes />
            </section>
            </div>
           


            <div className="CandidateFormDiv ">

            
            <CandidateDetailForm showForm = {showForm} setShowForm = {setShowForm}  />


            </div>
          </main>

        </div>
      </div>







    </>
  )
}

export default App
