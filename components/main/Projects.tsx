import React from "react";
import ProjectCard from "./sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/tiktok.png"
          title=" Full Stack TikTok App "
          description="Full Stack TikTok clone using Next.js, React, TypeScript, Tailwind CSS, Zustand, and Appwrite. Leverage Next.js for server-side rendering and routing, React for UI components, TypeScript for type safety, and Tailwind CSS for styling."
          
          />
          <ProjectCard
          src="/booktown.png"
          title=" Full Stack MERN BookTown App "
          description="MERN app project named Book Town. In below video we can be able to see how it works and Book town is bookstore web which helps for reading, uploading and editing books when we signup. Books are fetched from my MongoDB database ,authentications can maintained."
          />
        <ProjectCard
          src="/keeper.png"
          title="React Keeper App"
          description="Keeper app is a React App project which is clone of google keeper notes app and It works only on Client side and It is also Responsive , In this we can add some notes we want to remember.It uses babel , hooks and props in this project for ease working"
        />
        {/* <ProjectCard
          src="/drumkit.png"
          title="Drum Kit"
          description="This is drum kit website created using javascript and when the buttons click on keyboard and on mouse it will produce sound."
        />
         <ProjectCard
          src="/boot.png"
          title="TinDog Websitw"
          description="This is website created using html and css and for styling it fully uses bootstrap framework only and It is alos responsive."
        />
         <ProjectCard
          src="/personal.png"
          title="Personal Website"
          description="This is personal website created using html and css and and It has all informations about the user and contact details."
        /> */}
      </div>
    </div>
  );
};

export default Projects;