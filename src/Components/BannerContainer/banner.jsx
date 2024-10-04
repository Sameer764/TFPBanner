import './banner.css'
import './bannerResponsive.css'
import { data } from './data'
function BannerContainer() {

    return (
        <div className='Banner-container'>
            <div className=' subcontainer'>
                <div className='container1'>
                    <div className='inner-container1'>
                        <div className='mode-of-class'>
                            <img src='/src/assets/img/Star 4.svg' />
                            <img src='/src/assets/img/Star 5.svg' />
                            <p className='mode-of-class-txt'>
                                Offline Classroom
                            </p>
                        </div>
                        <div className='inner-container1-logoTitle'>
                            <div className='logo'>
                                <div className='polygon'>

                                </div>
                                <p className='logo-txt'> Programming Pathshala</p>
                            </div>
                            <h2 className="logo-heading">Tech  Fellowship Program</h2>
                        </div>

                    </div>
                    <div className='inner-container2'>
                        <div className='row'>
                            <img src='/src/assets/img/Frame 21073.svg' />
                            <img src='/src/assets/img/Frame 21074.svg' />
                        </div>
                        <div className='row'>
                            <img src='/src/assets/img/Frame 21074 (1).svg' />
                            <img src='/src/assets/img/Frame 21074 (2).svg' />
                        </div>
                        <div className='row'>
                            <img src='/src/assets/img/Frame 21075.svg' />
                            <img src='/src/assets/img/Frame 21076.svg' />
                        </div>
                    </div>
                </div>

            </div>
            <div className='container2'>
                <div className='title'>
                    <h2>Tech Fellowship Program</h2>
                    <p className='title-txt'>Launch Your Tech Career with Hands-On Experience in Real Projects from Leading Companies</p>
                </div>
                <div className='features'>

                    {data.map((item, index) => (
                        <div className='list-of-features' style={{ width: item.size }}>
                            <div className='list-box' key={index} >
                                <p className='list-txt'>{item.f1}</p>
                            </div>
                            <div className='list-box' key={index}>
                                <p className='list-txt'>{item.f2}</p>
                            </div>
                        </div>

                    ))}


                </div>
                <div className='more-details'>
                    <button >
                        <p className='button-txt'>Known more</p>
                    </button>
                    <p className='more-details-txt'> Live the Code, Don’t Just Learn It!</p>
                </div>
            </div>
        </div>
    )
}

export default BannerContainer;