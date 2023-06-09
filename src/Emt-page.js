import * as React from "react";
import { useEffect } from "react";
import "semantic-ui-css/semantic.min.css";
import { useParams } from "react-router-dom";
import axios from "./api/axios";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Emt_page = () => {
  const { token } = useParams();

  const loaddata = async () => {
    try {
      await axios.get(`/verify/${token}`).then((res) => {
        if (res.data.status === "failed") {
          console.log("failed");
        } else if (res.data.status === "success") {
          console.log("eiei");
          window.location.replace("/login");
        }
        console.log(res.data);
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loaddata();
  }, []);

  return <div></div>;
};

export default Emt_page;
