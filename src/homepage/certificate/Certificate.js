import './Certificate.scss'
import DMS from './certificate_DMS.svg'
import NAT from './certificate_NAT.svg'
import SC from './certificate_SC.svg'

export default function Certificate(){
    return(
        <section className="certificate">
            <div className='certificate_container'>
                <h6 className='certificate_ID'>CREATEX CERTIFICATE</h6>
                <p className='certificate_conformation'>Your expertise will be confirmed</p>
                <p className='certificate_proof'>We are accredited by international professional organizations and institutes:</p>
                <div className='certificate_links'>
                    <a href="#"><img src={DMS} alt="Del Mar Strategy" /></a>
                    <a href="#"><img src={SC} alt="SENTINAL CONSULTING" /></a>
                    <a href="#"><img src={NAT} alt="NATIONAL" /></a>
                </div>
            </div>
        </section>
    )
}