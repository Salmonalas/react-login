import React, { useState, useEffect } from 'react';
import './Profile.css';
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBBtn, MDBTypography } from 'mdb-react-ui-kit';
import axios from "./api/axios";
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
          window.location.replace('/login');
        }
        else if (res.data.status === 'success') {
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
          }
        }

      })
    } catch (error) {
      console.log(error)
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
                </div>
              </div>
              <div className="p-4 text-black" style={{ backgroundColor: '#f8f9fa' }}>
                <div className="d-flex justify-content-end text-center py-1">
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

                <FavList/>

              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
}
export default Profile;