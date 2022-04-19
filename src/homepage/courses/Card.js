import './Card.scss'
// import Bell from './staff/Jerome_Bell.jpg'
function Card(props) {
    let style = {
        backgroundColor: props.col
    }
    return (
        <>
            <div className="card_content">
                <img src={props.path} />
                <div className="card_content-text">
                    <span className='card_position' style={style}> {props.position} </span>
                    <p className='card_course_name'>{props.cor}</p>
                    <p className='card_footer'><span className='card_cost'>{props.cost}</span>| {props.aut}</p>
                </div>
            </div>
        </>
    )
}
export default Card