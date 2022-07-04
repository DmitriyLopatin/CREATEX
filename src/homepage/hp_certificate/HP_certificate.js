import classess from './HP_certificate.module.css'
import DMS from './certificate_DMS.svg'
import NAT from './certificate_NAT.svg'
import SC from './certificate_SC.svg'

export default function Certificate(){
    return(
        <section className={classess.main}>
            <div className={classess.container}>
                <h6 className={classess.id}>CREATEX CERTIFICATE</h6>
                <p className={classess.conformation}>Your expertise will be confirmed</p>
                <p className={classess.proof}>We are accredited by international professional organizations and institutes:</p>
                <div className={classess.links}>
                    <a href="#"><img src={DMS} alt="Del Mar Strategy" /></a>
                    <a href="#"><img src={SC} alt="SENTINAL CONSULTING" /></a>
                    <a href="#"><img src={NAT} alt="NATIONAL" /></a>
                </div>
            </div>
        </section>
    )
}