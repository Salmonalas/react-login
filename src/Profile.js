import React, { useState, useEffect } from 'react';
import './Profile.css';
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBBtn, MDBTypography } from 'mdb-react-ui-kit';
import axios from "./api/axios";
import Navbar from './component/Navbar/Navbar';
import { Sticky } from 'semantic-ui-react';
import FavList from './Fav-list';


const Profile = (props) => {

  const [showprofile, setshowprofile] = useState([])

  const realToken = localStorage.getItem('token')
  axios.defaults.headers.common['authorization'] = `Bearer ${realToken}`;

  useEffect(() => {
    loaddata();
  }, [])

  const loaddata = async () => {

    try {
      await axios.post('/getprofile').then((res) => {
        if (res.data.status === 'failed') {
          console.log(res.data)
          window.location.replace('/login');
        }
        else if (res.data.status === 'success') {
          console.log(res.data);
          if (res.data.data.m_IMG === null) {
            let data = {
              email: res.data.data.m_Email,
              Pname: res.data.data.m_PName,
              Fname: res.data.data.m_FName,
              Lname: res.data.data.m_LName,
              Tel: res.data.data.m_Tel,
              Img: 'http://127.0.0.1:3333/images/no-pic.png',
            }
            setshowprofile(data)
            console.log(data);
          } else {
            let data = {
              email: res.data.data.m_Email,
              Pname: res.data.data.m_PName,
              Fname: res.data.data.m_FName,
              Lname: res.data.data.m_LName,
              Tel: res.data.data.m_Tel,
              Img: res.data.data.m_IMG,
            }
            setshowprofile(data)
            console.log(data);
          }
        }

      })
    } catch (error) {
      console.log(error)
      // window.location.replace('/login');
    }
  }

  return (
    <div className="gradient-custom-2" style={{ backgroundColor: '#9de2ff', height:'1100px' }}>

      <MDBContainer className="py-5 h-100">
        <MDBRow className="justify-content-center h-100">
          <MDBCol lg="9" xl="7">
            <MDBCard>
              <div className="rounded-top text-white d-flex flex-row" style={{ backgroundColor: '#000', height: '200px' }}>
                <div className="ms-4 mt-5 d-flex flex-column" style={{ width: '150px' }}>
                  <MDBCardImage src={showprofile.Img}
                    alt="Generic placeholder image" className="mt-4 mb-2 img-thumbnail" fluid style={{ width: '150px', zIndex: '1' }} />
                  <MDBBtn outline color="dark" style={{ height: '36px', overflow: 'visible' }} href='/edit'>
                    Edit profile
                  </MDBBtn>
                </div>
                <div className="ms-4" style={{ marginTop: '150px' }}>
                  <MDBTypography tag="h1">{showprofile.Pname}</MDBTypography>
                  {/* <MDBCardText>New York</MDBCardText> */}
                </div>
              </div>
              <div className="p-4 text-black" style={{ backgroundColor: '#f8f9fa' }}>
                <div className="d-flex justify-content-end text-center py-1">
                  {/* <div>
                    <MDBCardText className="mb-1 h5">253</MDBCardText>
                    <MDBCardText className="small text-muted mb-0">Photos</MDBCardText>
                  </div>
                  <div className="px-3">
                    <MDBCardText className="mb-1 h5">1026</MDBCardText>
                    <MDBCardText className="small text-muted mb-0">Followers</MDBCardText>
                  </div>
                  <div>
                    <MDBCardText className="mb-1 h5">478</MDBCardText>
                    <MDBCardText className="small text-muted mb-0">Following</MDBCardText>
                  </div> */}
                </div>
              </div>
              <MDBCardBody className="text-black p-4">
                <div className="mb-5">
                  <p className="lead fw-normal mb-1">About</p>
                  <div className="p-4" style={{ backgroundColor: '#f8f9fa' }}>
                    <MDBCardText className="font-italic mb-1">Name: {showprofile.Fname} {showprofile.Lname}</MDBCardText>
                    <MDBCardText className="font-italic mb-1">Email: {showprofile.email}</MDBCardText>
                    <MDBCardText className="font-italic mb-1">Tel: {showprofile.Tel}</MDBCardText>
                  </div>
                </div>
                {/* <div className="d-flex justify-content-between align-items-center mb-4">
                  <MDBCardText className="lead fw-normal mb-0">Favorite list</MDBCardText>
                  <MDBCardText className="mb-0"><a href="#!" className="text-muted">Show all</a></MDBCardText>
                </div> */}
                <FavList/>
                {/* <MDBRow>
                  <MDBCol className="mb-2">
                    <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(112).webp"
                      alt="image 1" className="w-100 rounded-3" />
                  </MDBCol>
                  <MDBCol className="mb-2">
                    <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(107).webp"
                      alt="image 1" className="w-100 rounded-3" />
                  </MDBCol>
                </MDBRow>
                <MDBRow className="g-2">
                  <MDBCol className="mb-2">
                    <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(108).webp"
                      alt="image 1" className="w-100 rounded-3" />
                  </MDBCol>
                  <MDBCol className="mb-2">
                    <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(114).webp"
                      alt="image 1" className="w-100 rounded-3" />
                  </MDBCol>
                </MDBRow> */}
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
}
export default Profile;