import '../index.css'
import { CardTitle, Card, ListGroup, ListGroupItem, CardBody, Button } from 'reactstrap';
import { useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { asyncGetAllCategories } from '../redux/actions/categoryActions';
const CategoryList = (props) => {
    const dispatch = useDispatch()
    const categories = useSelector((state) => {
        return state.categories
    })
    useEffect(() => {
        (async () => {
            dispatch(asyncGetAllCategories())
        })()
    }, [])

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
                            {/* <CardText>
                                available services
                            </CardText> */}
                        </CardBody>
                        <ListGroup flush >
                            {category.mainServices.map((service) => {
                                return <ListGroupItem className='services'>
                                    {service.title} - Rs {service.price}/-
                                </ListGroupItem>
                            })}

                        </ListGroup>
                        <CardBody>
                            {/* <CardLink href="#">
                                Card Link
                            </CardLink>
                            <CardLink href="#">
                                Another Card Link
                            </CardLink> */}
                            <Button
                                color="primary"
                                outline
                            >
                                Find Technician
                            </Button>
                        </CardBody>
                    </Card>
                )
            })}
        </div>
    )
}

export default CategoryList