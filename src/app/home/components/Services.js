"use client";

import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import '../styles/homePage.css'; //custom styles

export default function Cards(){
    return (
        <section className="servicesSection">
            <div className="w-full">
                <h1>Services</h1>
            </div>
            <div className="w-full">
            <Swiper
                className="pt-5"
                modules={[Navigation, Pagination]}
                spaceBetween={30}
                slidesPerView={1} //Show one card at a time on mobile
                breakpoints={{
                    640: {
                        slidesPerView: 2, // Show two cards on medium screens
                    },
                    1024: {
                        slidesPerView: 3, // Show three cards on desktop
                    },
                }}
                navigation 
                pagination={{ clickable: true }}
                >
                    <SwiperSlide className='serviceCard'>
                        <div className='serviceCardHeader'>Roof Replacement</div>
                        <div className='servicePhotoContainer'>
                            <Image 
                            src="/images/servicesPhoto1.jpg"
                            layout='fill'
                            objectFit='cover'
                            />
                        </div>
                        <div className='servicesContent'>
                            <ul>
                                <li>
                                    <p><b>Experienced Professionals:</b> With over a decade of hands-on
                                        experience, Storm Shield Builders' team delivers expert craftsmanship on every job.
                                    </p>
                                </li>

                                <li>
                                    <p>
                                        <b>Quality Materials:</b> We use high-grade, weather-resistant Materials
                                        to ensure that your roof is built to last.
                                    </p>
                                </li>

                                <li>
                                    <p>
                                        <b>Local Expertise: </b> As members of the community, we understand the local climate
                                        and building codes, ensuring each roof replacement meets local standards and withstands local
                                        weather patterns.
                                    </p>
                                </li>

                                <li>
                                    <p>
                                        <b>Transparent Process: </b> From your free initial estimate to the final inspection,
                                        we priorietize communication and transparency every step of the way.
                                    </p>
                                </li>

                                <li>
                                    <p>
                                        <b>Customized Roofing Options: </b> Every home is unique, and we provide roofing options tailored
                                        to suit both your aesthetic and functional needs. From material selection to color choices,
                                        Storm Shield Builders LLC offers a variety of roofing solutions to ensure your new roof complements
                                        your home while providing long-lasting protection.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </SwiperSlide>
                    
                    <SwiperSlide className='serviceCard'>
                        <div className='serviceCardHeader'>Roof Repair</div>
                        <div className='servicePhotoContainer'>
                            <Image 
                            src="/images/roofRepairPhoto.png"
                            layout='fill'
                            objectFit='cover'
                            />
                        </div>
                        <div className='servicesContent'>
                            <ul>
                                <li>
                                    <p><b>Gulf Coast Expertise: </b> Based right here in Mobile, AL, we know what it takes to protect your roof
                                    from the demanding Gulf Coast climate, providing service that will protect your home from challenges ranging from
                                    sudden storms to hurricane season.
                                    </p>
                                </li>

                                <li>
                                    <p>
                                        <b>Quick Response for Mobile, AL Homeowners: </b> We know that roof damage can't wait. Our Mobile-based team offers
                                        timely and efficient repairs, keeping your family protected without delays.
                                        especially  
                                    </p>
                                </li>

                                <li>
                                    <p>
                                        <b>Insurance Specialist Insight: </b> With decades of experience as property adjusters, Ryan and Jonathan can guide
                                        you through the claims process, ensuring you get the most from your insurance coverage for any storm damage repairs.
                                    </p>
                                </li>

                                <li>
                                    <p>
                                        <b>Preventative Maintenance & Inspection: </b> Along with immediate repairs, we offer comprehensive roof inspections
                                        and preventative maintenance to identify and address minor issues before they become costly repairs. Regular checkups
                                        with Storm Shield Builders LLC help extend the life of your roof and give you peace of mind through every season.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className='serviceCard'>
                        <div className='serviceCardHeader'>Disaster Mitigation</div>
                        <div className='servicePhotoContainer'>
                            <Image 
                            src="/images/disasterMitigationPhoto.jpg"
                            layout='fill'
                            objectFit='cover'
                            />
                           </div> 
                        <div className='servicesContent'>
                            <ul>
                                <li>
                                    <p>
                                        <b>Emergency Tarping & Boarding: </b> Our team provides fast, effective tarping and boarding services
                                        to secure damaged areas, prevent water infiltration, and minimize further structural damage after a storm.
                                    </p>
                                </li>

                                <li>
                                    <p>
                                        <b>Roof Reinforcement & Storm Proofing: </b> Storm Shield Builders can reinforce your roof to better withstands
                                        Gulf Coast storms, providing added peace of mind and reducing potential storm and insurance related costs.
                                    </p>
                                </li>

                                <li>
                                    <p>
                                        <b>Water Damage Prevention: </b> From gutter repairs to moisture-resistant sealing, we help prevent water damage to
                                        your roof and foundation, essential for homes in Mobile's high-rainfall climate.
                                    </p>
                                </li>

                                <li>
                                    <p>
                                        <b>Debris Removal: </b> After a storm, our team clears fallen trees, branches, and other debris, ensuring your property is
                                        safe and clear for repairs and rebuilding.
                                    </p>
                                </li>

                                <li>
                                    <p>
                                        <b>Insurance Claim Assistance: </b> With years of experience as property insurance adjusters, Ryan and Jonathan will guide you
                                        through the insurance claims process, ensuring you receive maximum support for necessary repairs and restoration.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </SwiperSlide>
                    
                    <SwiperSlide className='serviceCard'>
                        <div className='serviceCardHeader'>Residential Construction</div>
                        <div className='servicePhotoContainer'>
                            <Image 
                            src="/images/homeRemodelPhoto.jpg"
                            layout='fill'
                            objectFit='cover'
                            />
                        </div>
                        <div className='servicesContent'>
                            <ul>
                                <li>
                                    <p><b>Personalized Design & Consultation: </b> Our construction experts work closely with you to understand your goals,
                                    providing design and material recommendations that align with your budget, timeline, and vision for the perfect home.
                                    </p>
                                </li>

                                <li>
                                    <p>
                                        <b>Interior Remodeling: </b>Whether it's a kitchen overhaul, bathroom update, or basement finishing, our remodeling services
                                        bring your vision to life, blending aesthetics with practicality.   
                                    </p>
                                </li>

                                <li>
                                    <p>
                                        <b>Outdoor Living Spaces: </b> Transform your backyard with custom decks, patios, or pergolas. We create outdoor spaces perfect for 
                                        relaxing or entertaining, designed to complement your home's architecture and withstand Gulf Coast weather.
                                    </p>
                                </li>

                                <li>
                                    <p>
                                        <b>Structural Repairs & Reinforcements: </b> From foundation reinforcements to wall repairs, we provide structural improvements that ensure the
                                        integrity and safety of your home. 
                                    </p>
                                </li>

                                <li>
                                    <p>
                                        <b>Home Additions & Expansion: </b> Increase your home's space and functionality with a custom-designed addition. Our team handles everything from
                                        layout design to seamless integration, adding square footage that enhances both style and comfort.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </SwiperSlide>
                    
                    <SwiperSlide className='serviceCard'>
                        <div className='serviceCardHeader'>Estimate Services</div>
                        <div className='servicePhotoContainer'>
                            <Image 
                            src="/images/roof-estimating.png"
                            layout='fill'
                            objectFit='cover'
                            />
                        </div>

                        <div className='servicesContent'>
                            <ul>
                                <li>
                                    <p>
                                        <b>Roofing Estimates: </b> Using extensive industry experience and expertise, we provide
                                        accurate, detailed estimates for roofing projects, including material, labor, and time-frames.
                                        Our estimates are crafted to reflect current Gulf Coast conditions and market.
                                    </p>
                                </li>

                                <li>
                                    <p>
                                        <b>Construction Project Estimation:</b> For contractors handling home additions, remodels, and structural repairs,
                                        our estimates cover all aspects of construction, from permits and materials to anticipated project timelines.
                                        We account for local climate factors, ensuring realistic and reliable projections.
                                    </p>    
                                </li>

                                <li>
                                    <p>
                                        <b>Insurance-Backed Cost Analysis: </b> As experienced property insurance adjusters, Ryan and Jonathan offer estimates
                                        that align with insurance standards, making it easier for service providers to work with clients on insured repairs or
                                        renovations.  
                                    </p>
                                </li>

                                <li>
                                    <p>
                                        <b>Detailed Material and Labor Breakdown: </b> We provide clear, itemized estimates that outline every cost involved, allowing
                                        your team to present transparent and trustworthy proposals to clients.
                                    </p>    
                                </li>

                                <li>
                                    <p>
                                        <b>Consultative Support: </b> Our team works with you to understand project specifics, making adjustments based on materials,
                                        site conditions, and labor needs for a tailored and realistic estimate.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </SwiperSlide>
                </Swiper>
                </div>
        </section>
    );
};