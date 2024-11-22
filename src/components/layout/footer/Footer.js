import './Footer.css'

export default function Footer(){
    return (
        <footer className="footer">


            <div className="flex justify-around mt-5 items-center pb-5">
            <ul className="flex space-x-7">
                <li>
                    <a href="https://www.facebook.com/profile.php?id=61564218812242"><i class="fa-brands fa-facebook text-3xl text-slate-200 footerIcon"></i></a> 
                </li>
                <li>
                    <a href="mailto:Stormshieldbuildersllc@gmail.com"><i class="fa-regular fa-envelope text-3xl text-slate-200 footerIcon"></i></a> 
                </li>
            </ul>
            </div>

            <div className='licenseNumberSection'>
                License #: 31887
            </div>

            <div className="signature">
                <p>Powered by: 
                <a href="https://www.github.com/privers251"
                target="_blank">Patrick Rivers</a></p>
            </div>
        </footer>
    )
}