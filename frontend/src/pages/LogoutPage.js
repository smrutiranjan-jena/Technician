import logout from '../assets/images/5255180.jpg'
import '../index.css'
import { Button } from 'reactstrap'
const LogoutPage = (props) => {
    const redirectOne=()=>{
        localStorage.removeItem('token')
        localStorage.removeItem('role')
        props.history.push('/home')
    }
    const redirectTwo=()=>{
        props.history.push('/home')
    }
    return (
        <div>
            <h1 className="commonHeading">Exit Here</h1>
            <div className="commonContainer">
                <div className="boxContainer">
                    <div className="textarea">
                        <p className='logout'>
                            Are you sure?
                        </p>
                        <Button
                            color="primary"
                            outline
                            onClick={redirectOne}
                        >
                            Yes !
                        </Button>
                        
                        <Button
                            style={{marginLeft:"20px",paddingLeft:"20px",paddingRight:"20px"}}
                            color="primary"
                            outline
                            onClick={redirectTwo}
                        >
                            No
                        </Button>
                    </div>
                    <div className="imagearea">
                        <img src={logout} />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default LogoutPage