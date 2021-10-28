import React from "react";
import link from './images/link.png';
import arrow from './images/Combined-Shape.png';
import play from './images/play.png';

const Campaigns = (props) => {
    const campaigns = props.campaigns

    return (
        <div id='APP'>
            {console.log(campaigns)}
            <h5 className='campMainTitle'>PLUGS</h5>
            {campaigns.map(campaign => (
                <div>
                    <div key={campaign.id} className='campCont'>
                        <img 
                            src={campaign.campaign_icon_url} 
                            alt={campaign.campaign_name}
                            className='campImg'
                        />
                        <div className='campTitle'>
                            <p className='campText'>{campaign.campaign_name}</p>
                            <p className='campInstall'>{campaign.pay_per_install} per install</p>
                        </div>
                    </div>
                    <div className='mediaCont'>
                        {campaign.medias.map(media => (
                            <div>
                                <div>
                                    <img
                                        src={media.cover_photo_url}
                                        alt=''
                                        className='mediaImg'
                                    />
                                </div>
                                <div className='buttonCont'>
                                    <button className='mediaButton'>
                                        <img src={link} alt=''/>
                                    </button>
                                    <button className='mediaButton'>
                                        <img src={arrow} alt=''/>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Campaigns