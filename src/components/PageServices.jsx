import React from 'react';
import prewed from '../assets/PreWed.jpg'
import wedimage from '../assets/WeddingShoot.jpg'
import HaldiShoot from '../assets/HaldiShoot.jpg'
import AlbumDes from '../assets/AlbumDes.jpg'
import babyshoot from '../assets/BabyShoot.jpg'
import videography from '../assets/4kVideography.jpg'
import droneshoot from '../assets/DroneShoot.jpg'
import photobooth from '../assets/360Photobooth.jpg'
import cinematography from '../assets/Cinematography.jpg'
import { Link } from 'react-router-dom';
function PageServices() {
  return (
    <>
      <div>
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            {/* Added mx-auto to center the container */}
            <div className="flex flex-col text-center w-full mb-20">
              <h1 className="text-2xl font-medium title-font mb-4 text-gray-900 tracking-widest">
                OUR SERVICES
              </h1>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                We offer a wide range of services to capture your special moments
                and create lasting memories. Explore our options below!
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              {/* Added justify-center to center the cards */}
              <Card image ={prewed} title="Pre-Wedding Shoot" description="Capture the love and excitement leading up to your big day." />
              <Card image ={HaldiShoot} title="Haldi Ceremony Shoot" description="Document the vibrant colors and traditions of your Haldi ceremony." />
              <Card image ={wedimage} title="Wedding Shoot" description="Preserve the magic and emotions of your wedding day with stunning photography." />
              <Card image ={AlbumDes} title="Album Designing" description="Create a beautiful and personalized album to cherish your memories forever." />
              <Card image ={photobooth} title="360 Photobooth" description="Add a fun and interactive element to your event with a 360 photobooth." />
              <Card image ={cinematography} title="Cinematography" description="Tell the story of your wedding day through a captivating cinematic experience." />
              <Card image ={droneshoot} title="Drone Shoot" description="Capture breathtaking aerial views of your wedding venue and surroundings." />
              <Card image ={videography} title="4K Videography" description="Enjoy high-quality videography that captures every detail of your special day." />
              <Card image ={babyshoot} title="Baby Shoot" description="Celebrate precious milestones with beautiful baby portraits." />
              {/* Add more cards here with unique titles and descriptions */}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

function Card({ title, description, image }) {
  return (
    <div className="card card-compact bg-base-100 w-full md:w-1/2 lg:w-1/4 shadow-xl">
      <figure>
        <img
          src={image}
          alt={title}
          className="rounded-lg"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
        <Link to="/booknow" className="btn border-indigo-950 bg-transparent text-indigo-950">Book Now</Link> 
        </div>
      </div>
    </div>
  );
}

export default PageServices;