import React from 'react';
import myprofile from './Images/myprofile/myprofile.jpeg';
import SocialLinks from './SocialLinks';




export default function Profile() {
  return (
    <div className="flex flex-col items-center justify-center h-screen ">
      <h1 className="text-4xl font-bold mb-8">About Me</h1>
      <div className="text-center  mt-[30px] ">
        <img className="rounded-full w-[250px] object-cover" src={myprofile} alt="My Profile" />
        <h2 className="text-xl font-semibold mt-4">Mayur Gavhane</h2>
        <h2 className="text-lg">Front End Developer</h2>
        <h2 className="text-black">+91 9422564958</h2>
        <h2 className="text-black">2020bec075@sggs.ac.in</h2>
        <SocialLinks  />
      </div>
    </div>
  );
}
