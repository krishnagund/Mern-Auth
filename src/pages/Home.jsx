import React from "react";
import Navbar from "../components/Navbar.jsx";
import Header from "../components/Header.jsx";

const Home = () => {
    return (
        <div className='min-h-screen bg-[url("/bg_img.png")] bg-cover bg-center'>
            <Navbar />
            <div className="flex flex-col items-center justify-center pt-32">
                <Header />
            </div>
        </div>
    );
};

export default Home;
