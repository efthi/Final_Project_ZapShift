import React from 'react';
import bigDeliveryman from '../assets/big-deliveryman.png'

const Hero = () => {
    return (
        <>
<section className="bg-base-200 py-20">
    <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center gap-12">
      <div className="lg:w-1/2">
        <h1 className="text-4xl lg:text-6xl font-bold text-primary leading-tight">
          We Make Sure Your<br />
          <span className="text-success">Parcel Arrives On Time</span><br />
          – No Fuss.
        </h1>
        <p className="mt-6 text-lg text-gray-600">
          Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <button className="btn btn-success btn-lg">Track Your Parcel</button>
          <button className="btn btn-outline btn-lg">Be a Rider</button>
        </div>
      </div>
      <div className="lg:w-1/2">
        <img src={bigDeliveryman} alt="Delivery illustration" className="w-full h-96 rounded-xl shadow-2xl"/>
      </div>
    </div>
  </section>  
        </>
    );
};

export default Hero;