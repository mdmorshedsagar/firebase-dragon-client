import { ListGroup } from 'react-bootstrap';
import { FaGoogle,FaGithub,FaFacebook,FaTwitter,FaInstagram } from 'react-icons/fa';
import QZone from '../QZone/QZone';
import bg from "../../../../public/bg.png"
import { useContext } from 'react';
import { AuthContext } from '../../../providers/Providers';
import toast, { Toaster } from 'react-hot-toast';

const RightNav = () => {
    const {createGoogle,createGithub} = useContext(AuthContext);
    const handleGoogle = () =>{
        createGoogle()
        .then((result) => {
           
            const user = result.user;
            toast.success('google sign in successfully',
            {
              style: {
                borderRadius: '10px',
                background: '#333',
                color: '#fff',
              },
            }
          );
            console.log(user);
          }).catch((error) => {
            
            const errorMessage = error.message;
           console.log(errorMessage)
          });
    }
    const handleGithub = () =>{
        createGithub()
        .then((result) => {
           
            const user = result.user;
            toast.success('github sign in successfully ',
            {
              style: {
                borderRadius: '10px',
                background: '#333',
                color: '#fff',
              },
            }
          );
            console.log(user)
          }).catch((error) => {
           
            const errorMessage = error.message;
            console.log(errorMessage)
          })
    }
    return (
        <div>
         <div>
         <h3>Login with</h3>
          <button onClick={handleGoogle} type="button" className="btn btn-outline-info d-block w-100 my-2"><FaGoogle /> Login with google <Toaster  position="top-right"
         
  reverseOrder={false} /> </button>
          <button onClick={handleGithub} type="button" className="btn btn-outline-dark d-block w-100"> <FaGithub/> Login with github</button>
         </div>
         <div className='mt-2'>
            <h3>Find us now</h3>
             <ListGroup>
      <ListGroup.Item> <FaFacebook className='text-primary'></FaFacebook > Facebook</ListGroup.Item>
      <ListGroup.Item><FaTwitter className='text-info'/> Twitter</ListGroup.Item>
      <ListGroup.Item><FaInstagram className='text-danger'/> Instagram</ListGroup.Item>
     
    </ListGroup>
         </div>
         <QZone></QZone>
         <div className="position-relative text-center mt-5 ">
            <img  src={bg} alt="" />
            <div className="position-absolute top-0  text-primary">
                <h3 className='fs-3 text-white p-4'>
                Create an Amazing Newspaper
                </h3>
                <p className='text-white'>
                Discover thousands of options, easy to customize layouts, one-click to import demo and much more.
                </p>
                <button className='btn btn-danger mt-2 '>Learn more</button>
            </div>
         </div>
        </div>
    );
};

export default RightNav;