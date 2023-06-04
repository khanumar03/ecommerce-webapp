import React from "react";
import { auth } from "./firebase";
import { useNavigate } from "react-router-dom";
import "./Profile.css";
import { Button } from "@chakra-ui/react";
import { AiOutlineArrowRight } from 'react-icons/ai'

const Profile = () => {
  const history = useNavigate();

  const handleSignout = (e) => {
    e.preventDefault();
    auth.signOut();
    history("/");
  };
  return (
    <div className="profile">
      <div className="center">
        <span className="circle">Profile</span>
        <Button
          rightIcon={<AiOutlineArrowRight />}
          colorScheme="teal"
          variant="outline"
          onClick={handleSignout}
        >
          Log out
        </Button>
      </div>
    </div>
  );
};

export default Profile;
