import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import { saveJobApplication } from "../../Utility/localstorage";

const JobDetails = () => {
    const jobs = useLoaderData();
    const { id } = useParams()
    const idInt = parseInt(id);
    const job = jobs.find(job => job.id === idInt);
    console.log(job);

    const handleApplyJob = () =>{
         saveJobApplication(id)
         toast('You have applied successfully')
      
       
    }
    return (
        <div>
           
            <div className="grid gap-4 md:grid-cols-4">
                <div className="border md:col-span-3">
                    <h2 className="text-4xl">Details coming here</h2>
                     <h2>Job Details of: {job.job_title}</h2>
                    <p>Job Description: {job.job_description}</p>
                    <p>Job Responsibility: {job.job_responsibility}</p>
                    <p>Educational Requirements: {job.educational_requirements}</p>
                    <p>Experiences:{job.experiences}</p>
                </div>
                <div className="border space-x-12">
                    <h2 className="text-2xl">Side things</h2>
                    <p>Address: {job.contact_information.address}</p>
                    <p>Email: {job.contact_information.email}</p>
                    <p>Phone: {job.contact_information.phone}</p>
                    <button onClick={handleApplyJob} className="btn btn-primary w-full">Apple</button>
                </div>
            </div>
               <ToastContainer />
        </div>
    );
};

export default JobDetails;