// FIRST WAYS PASSING PROPS

// const Button = (props) =>{
//     const hello = props.btnText
//     return (
//      <>
//         <div>
//             <button>{hello}</button>
//         </div>
//      </>
//     )
// }
// export default Button;




// SECOND WAYS PASSING PROPS

// const Button = (props) =>{
//     return (
//      <>
//         <div>
//             <button>{props.btnText}</button>
//         </div>
//      </>
//     )
// }
// export default Button;



// THIRDS WAYS PASSING PROPS USING DESTRUCTRED

const Button = ({btnText}) =>{
    const hello = props.btnText
    return (
     <>
        <div>
            <button>{btnText}</button>
        </div>
     </>
    )
}
export default Button;