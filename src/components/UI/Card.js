import './Card.css';

const Card = (props) => {
    // const classes = 'card '+ props.className; //this makes card + that component specific css to be applied
    // if its only 'card' then the css formatting for those specific components don't get applied
    return <div className = {'card '+ props.className}>{props.children}</div> ;
    // props.children ensures you can wrap the jsx code in 'card' component
    // without props.children you cannot wrap jsx code in anything other than div
}

export default Card;