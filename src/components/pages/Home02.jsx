import React from 'react';
import { Banner, Counter, CourseCat01,Process,CourseGridPopular,Teachers, Features,About,Review,Cta}  from '../layouts/home02/index';
import HeaderTwo from '../../common/header/HeaderTwo';
import FooterTwo from '../../common/footer/FooterTwo';

const HomeTwo =() =>  {
    return (
        <div className="home-page-2">       
            <HeaderTwo />       
                    <Banner />
                    <Features />
                    <CourseCat01/>
                    <Counter />
                    <About />
                    <Teachers />
                    <Review />
                    <Cta />
            <FooterTwo />
        </div>
    );
}

export default HomeTwo;