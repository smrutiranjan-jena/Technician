import '../index.css'
import Swal from 'sweetalert2'
import { CardTitle, Card, ListGroup, ListGroupItem, CardBody, Button } from 'reactstrap';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { asyncGetAllCategories } from '../redux/actions/categoryActions';
import { startFindTechnician } from '../redux/actions/findTechnicianActions';
const CategoryList = (props) => {
    const token = localStorage.getItem('token')
    const [serviceTitle, setServiceTitle] = useState('')
    const [servicePrice, setServicePrice] = useState(0)
    const [categoryTitle, setCategoryTitle] = useState('')
    const [isActive, setIsActive] = useState(false);
    const [item, setItem] = useState(0)
    const [id, setId] = useState(0)
    useEffect(() => {
        (async () => {
            dispatch(asyncGetAllCategories())
        })()
    }, [])
    const dispatch = useDispatch()
    const categories = useSelector((state) => {
        return state.categories
    })
    const mainServiceAction = (serviceTitle, servicePrice, categoryTitle, index, categoryId) => {
        setItem(index)
        setId(categoryId)
        setIsActive(!isActive)
        if (token) {
            setServiceTitle(serviceTitle)
            setServicePrice(servicePrice)
            setCategoryTitle(categoryTitle)
        }
        else {
            props.history.push('/register')
        }
    }
    const findTechnician = async (categoryTitle) => {
        const { value: text } = await Swal.fire({
            input: 'text',
            inputLabel: 'Message',
            inputPlaceholder: 'Enter Your City Name...',
            inputAttributes: {
                'aria-label': 'Type your message here'
            },
            showCancelButton: false
        })
        if (text) {
            const filterQuery = {
                category: categoryTitle,
                city: text,
                availability:true
            }
            dispatch(startFindTechnician(filterQuery))
            props.history.push({
                pathname: '/techbycategory',
                state: { serviceTitle: serviceTitle, servicePrice: servicePrice, categoryTitle: categoryTitle }
            })
        }else{
            props.history.push('/home')
        }

    }

    return (
        <div className='catContainer'>
            {categories.map((category) => {
                return (
                    <Card
                        style={{
                            width: '18rem'
                        }}
                        className='catCard'
                        key={category._id}

                    >
                        <img
                            alt="Card"
                            src={category.imgUrl}
                            className='catImg'
                        />
                        <CardBody>
                            <CardTitle tag="h5" className='catTitle'>
                                {category.title}
                            </CardTitle>
                        </CardBody>
                        <ListGroup flush >
                            {category.mainServices.map((service, ind) => {
                                return <ListGroupItem
                                    className={`services ${ind === item && id === category._id && isActive ? 'service-bgcolor' : 'service-default-bgcolor'}`}
                                    onClick={() => {
                                        mainServiceAction(service.title, service.price, category.title, ind, category._id)
                                    }}
                                    key={ind}
                                >
                                    {service.title} - Rs {service.price}/-
                                </ListGroupItem>
                            })}

                        </ListGroup>
                        <CardBody>
                            {token ? (
                                <Button
                                    color="primary"
                                    outline
                                    onClick={() => {
                                        findTechnician(category.title)
                                    }}
                                >
                                    Find Technician
                                </Button>
                            ) : (
                                null
                            )}
                        </CardBody>
                    </Card>
                )
            })}
        </div>
    )
}

export default CategoryList