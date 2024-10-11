import '../../../styles/homePage.css'; //custom styles


export default function InfoSection(){
    return (
        <section className="flex flex-col gap-4 infoSection m-1">
            
            <div className="flex bg-slate-500 w-full min-h-52 rounded-xl overflow-hidden">
                <img className="infoSecPic" src="/images/roofingWork1.png"></img>
                <div className="ml-auto p-2 justify-center">
                    <h1 className="text-2xl text-center">Your Top Mobile, AL Roofing Company</h1>
                </div>
            </div>
            
            <div className="flex bg-slate-500 w-full min-h-52">
                <img className="infoSecPic ml-auto" src="/images/roofingWork2.png"></img>
            </div>
            
            <div className="flex bg-slate-500 w-full min-h-52">
                <img className="infoSecPic" src="/images/roofingWork3.png"></img>
            </div>
            
        </section>
    )
}