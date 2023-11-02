"use client";
import React, { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { message } from "@/helper/apiHelper";
import "../admin.css";
type userType = {
 
    id: string;
    name: string;
    email: string;
    message: string;
  
};
const User = ({ userId, setUserById, id, toggle, setToggle, user}: {userId: null | string;setUserById: React.Dispatch<React.SetStateAction<null | string>>;id: string;toggle: boolean;setToggle: React.Dispatch<React.SetStateAction<boolean>>;user:userType}) => {
  return (
    <>
      <div className="wrapper">
        <div className="user">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 448 512"
          >
            <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
          </svg>
          <div>
            <span className="block">{user.name}</span>
            <span className="block">{user.email}</span>
          </div>
        </div>
        <div
          className="toogle_message"
          onClick={() => {
            setUserById(id);
            setToggle(!toggle);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            style={{ rotate: userId === id && toggle ? "90deg" : "0deg" }}
            height="1em"
            viewBox="0 0 384 512"
          >
            <path d="M3.4 81.7c-7.9 15.8-1.5 35 14.3 42.9L280.5 256 17.7 387.4C1.9 395.3-4.5 414.5 3.4 430.3s27.1 22.2 42.9 14.3l320-160c10.8-5.4 17.7-16.5 17.7-28.6s-6.8-23.2-17.7-28.6l-320-160c-15.8-7.9-35-1.5-42.9 14.3z" />
          </svg>
        </div>
      </div>
      {userId === id && toggle && (
        <div className="message">
          <p>{user.message}</p>
        </div>
      )}
    </>
  );
};

export default function Page() {
  const [userId, setUserById] = React.useState<null | string>(null);
  const [toggle, setToggle] = React.useState<boolean>(false);
  const { data, isLoading} = useQuery({queryKey: ["users"],queryFn: message});
  return (
    <div className="Container">
      {data && data.users.map((user:userType) => (
          <User
            key={user.id}
            userId={userId}
            id={user.id}
            setUserById={setUserById}
            toggle={toggle}
            user={user}
            setToggle={setToggle}
          />
        ))}
    </div>
  );
}

