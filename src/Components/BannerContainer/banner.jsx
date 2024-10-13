import './banner.css'
import './bannerResponsive.css'
import { data } from './data'
function BannerContainer() {
    const handleClick = () => {
        window.location.href = 'https://programmingpathshala.com/tech-fellowship-program';
    };



    return (
        <div className='ppa-landing-page-tfp-banner-container'>
                <div className='ppa-landing-page-tfp-container-right'>
                    <div className='ppa-landing-page-tfp-inner-container-right'>
                        <div className='ppa-landing-page-tfp-mode-of-class'>
                            <img className="ppa-landing-page-tfp-star-image" src='/src/assets/img/starImg.svg' />
                            {/* <img src='/src/assets/img/Star 5.svg' /> */}
                            <p className='ppa-landing-page-tfp-mode-of-class-txt'>
                                Offline Classroom
                            </p>
                        </div>
                        <div className='ppa-landing-page-tfp-inner-container-right-logoTitle'>
                            <div className='ppa-landing-page-tfp-logo'>
                                <img className="ppa-landing-page-tfp-logo-img" src="/src/assets/img/LOGO.svg" />


                            </div>
                            <h2 className="ppa-landing-page-tfp-logo-heading">Tech  Fellowship Program</h2>
                        </div>

                    </div>
                    <div className='ppa-landing-page-tfp-inner-container-left'>
                        <div className='ppa-landing-page-tfp-row'>
                            <img src='/src/assets/img/Frame 21073.svg' />
                            <img src='/src/assets/img/Frame 21074.svg' />
                        </div>
                        <div className='ppa-landing-page-tfp-row'>
                            <img src='/src/assets/img/Frame 21074 (1).svg' />
                            <img src='/src/assets/img/Frame 21076.svg' />

                        </div>
                        <div className='ppa-landing-page-tfp-row'>
                            <img src='/src/assets/img/Frame 21075.svg' />
                            <img src='/src/assets/img/Frame 21074 (2).svg' />

                        </div>
                    </div>
                </div>


            <div className='ppa-landing-page-tfp-container-left'>
                <div className='ppa-landing-page-tfp-title'>
                    <h2 className='ppa-landing-page-tfp-title-heading'>Tech Fellowship Program</h2>
                    <p className='ppa-landing-page-tfp-title-txt'>Launch Your Tech Career with Hands-On Experience in Real Projects from Leading Companies</p>
                </div>
                <div className='ppa-landing-page-tfp-features'>

                    {data.map((item, index) => (
                        <div className='ppa-landing-page-tfp-list-of-features'>
                            <div className='ppa-landing-page-tfp-list-box' key={index} >
                                <p className='ppa-landing-page-tfp-list-txt'>{item.f1}</p>
                            </div>
                            <div className='ppa-landing-page-tfp-list-box' key={index}>
                                <p className='ppa-landing-page-tfp-list-txt'>{item.f2}</p>
                            </div>
                        </div>

                    ))}


                </div>
                <div className='ppa-landing-page-tfp-more-details'>
                    <button onClick={handleClick} >
                        <p className='ppa-landing-page-tfp-button-txt'>Know more</p>
                    </button>
                    <p className='ppa-landing-page-tfp-more-details-txt'> Live the Code, Don't Just Learn It!</p>
                </div>
            </div>
        </div>
    )
}
export default BannerContainer;