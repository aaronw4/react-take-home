import React from "react";
import link from './images/link.png';
import arrow from './images.Combined-Shape.png';

const Campaigns = (props) => {
    const campaigns = props.campaigns

    return (
        <div id='APP'>
            <h5 className='campTitle'>PLUGS</h5>
            {campaigns.map(campaign => (
                <div>
                    <div key={campaign.id} className='campCont'>
                        <img 
                            src={campaign.campaign_icon_url} 
                            alt={campaign.campaign_name}
                            className='campImg'
                        />
                        <p className='campText'>{campaign.campaign_name}</p>
                    </div>
                    <div className='mediaCont'>
                        {campaign.medias.map(media => (
                            <div>
                                {console.log(media)}
                                <div>
                                    <img
                                        src={media.cover_photo_url}
                                        alt=''
                                        className='mediaImg'
                                    />
                                </div>
                                <div>
                                    <button>
                                        <img src={link} alt=''/>
                                    </button>
                                    <button>
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