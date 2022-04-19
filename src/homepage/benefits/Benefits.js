import './Benefits.scss'
const arr = ['Experienced Tutors','Feedback & Support','24/7 Online Library','Community']
export default function Benefits() {
    return (
        <section className="benefits">
            
                <div className='benefits_header'>
                    <p className='benefits_header-our'>OUR BENEFITS</p>
                    <p className='benefits_header-how'>That's how we do it</p>
                </div>
                <div className="benefits_summary">
                    {arr.map((item,index) => <p className={`benefit_${index}`}>{item}</p>)}
                </div>
                <div className='text'>
                    <h2>Only practicing tutors</h2>
                    <p>Urna nisi, arcu cras nunc. Aenean quam est lobortis mi non fames dictum suspendisse. Morbi mauris cras massa ut dolor quis sociis mollis augue. Nunc, sodales tortor sit diam mi amet massa. Fermentum diam diam sociis vestibulum. Nulla nisl accumsan, id dignissim massa ut amet. Amet enim, nisi tempus vehicula.</p>
                </div>
        
        </section>
    )
}