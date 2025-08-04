import { IoLocationOutline } from "react-icons/io5";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
const Job = ({ job }) => {
    // console.log(job)
    const {id, logo, job_responsibility, location, remote_or_onsite, salary, job_type, job_title, job_description, experiences, educational_requirements, company_name
    } = job;
    return (
        <div className="card bg-base-100 w-96 shadow-sm">
            <figure>
                <img src={logo} alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{job_title}</h2>
                <p>{company_name}</p>
                <div>
                    <button className="px-5 py-2 font-extrabold border rounded border-[#7e90fe] mr-4">{remote_or_onsite}</button>
                    <button className="px-5 py-2 font-extrabold border rounded border-[#7e90fe] mr-4">{job_type}</button>
                    <div className="mt-4">
                        <h2 className="flex"><IoLocationOutline className="text-2xl mr-2"></IoLocationOutline>{location}</h2>
                         <h2 className="flex"><AiOutlineDollarCircle className="text-2xl mr-2"></AiOutlineDollarCircle>{salary}</h2>
                    </div>
                  
                </div>
                <div className="card-actions">
                    <Link to={`/job/${id}`}>
                              <button className="btn btn-primary">Buy Now</button>
                    </Link>
              
                </div>
            </div>
        </div>
    );
};

export default Job;