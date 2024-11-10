import '../../../styles/homePage.css'; //custom styles


export default function AboutUs(){
    return (
        <section className="aboutUsSection">
           <div className="aboutUsBGOverlay">
                
                </div>
            <h1 className="relative text-3xl font-bold text-center py-6 z-20">Who We Are - Storm Shield Builders LLC</h1>
            
            <div className="aboutUsContentContainer">
                <p>
                    Storm Shield Builders LLC is a trusted name in roofing, construction, and disaster mitigation services in Mobile, AL, and the 
                    surrounding Gulf Coast areas. 
                </p>
                <br/>
                <p>    
                    Founded by Ryan Bethea and Jonathan Brantly, who collectively bring over 30 years of experience in
                    residential construction and property insurance, our company provides expert solutions tailored to the unique demands of our climate
                    here along the Gulf Coast.
                </p>
                <br/>

                <p>
                    From roofing repairs and replacements to full-scale residential construction and professional estimation services for contractors, we are committed to
                    delivering quality and reliability in every project.
                </p>
            </div>
            
        </section>
    )
}