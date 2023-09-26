import { useState,useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { startGetOwnDetails } from "../redux/actions/technicianActions";
const TechDetailsShow=()=>{
    useEffect(()=>{
       dispatch(startGetOwnDetails())
    },[])
    const dispatch=useDispatch()
    const technician=useSelector((state)=>{
        return state.technician
    })
    return(
        <div>
             <div className="textarea">
                        <p><span className="commonmagic">Technician Details</span>
                            <br /><br />
                            <i className="fa fa-user"></i>
                            {technician.ownDetails.name}
                            <br /><br />
                            <i className="fa fa-mobile"></i>
                            {technician.ownDetails.mobile}
                            <br /><br />
                            <i className="fa fa-tasks"></i>
                            {technician.ownDetails.category}
                            <br /><br />
                            City :
                            {technician.ownDetails.city}
                            <br /><br />
                            availability : 
                            {technician.ownDetails.availability? 'yes' : 'no'}
                            <br /><br />
                            Experience(YOE) : 
                            {technician.ownDetails.experience}yrs
                        </p>
                    </div>
        </div>
    )
}
export default TechDetailsShow