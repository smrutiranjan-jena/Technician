import me from '../assets/images/1683734801930.jpg'
import { Button } from 'reactstrap';
import React, { useState } from 'react';
const AdminHome = (props) => {
    return (
        <div>
            <div className="commonContainer">
                <div className="boxContainer">
                    <div className="imagearea">
                        <img src={me} style={{borderRadius:'45%',border:"3px solid #4472C4"}}/>
                    </div>
                    <div className="textarea">
                        <p>
                            <p style={{ fontSize: "40px", color: "blue" }}>Hii ): Smruti  Ranjan Jena</p>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AdminHome