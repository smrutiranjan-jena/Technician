import tech from '../assets/images/handyman-with-tools-full-portrait-white.jpg'
import { Button } from 'reactstrap';
import React, { useState } from 'react';
const TechHome = (props) => {
    return (
        <div>
            <div className="commonContainer">
                <div className="boxContainer">
                    <div className="imagearea">
                        <img src={tech} />
                    </div>
                    <div className="textarea">
                        <p>
                            <p style={{ fontSize: "40px", color: "blue" }}>Hii Technician ! Good Luck...</p>
                            <br />
                            <br />
                            <span className="commonmagic">Welcome To Technician.com : </span> Here you can get benifit
                            as much you can . just helps to our millions+ customers.
                            <br />
                            <br />
                            <span className="commonmagic">Are you a Technician ?: </span> create your profile details
                            which will be helping to customers to reaching with you.
                        </p>
                        <br/>
                        <br/>
                        <Button
                            color="primary"
                            outline
                            onClick={() => {
                               props.history.push('/profile')
                            }}
                        >
                            Create Profile
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default TechHome