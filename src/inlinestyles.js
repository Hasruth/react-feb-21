import "./externalstyle.css"



//there are four ways to style in react
//1 ->Inline style or Object styling
//2 ->External style or Stylesheet styling 
//3 ->Extenal Module styling
//4 ->Sass styling [i.e Using Bootstrap or other frameworks]



//INLINE STYLE
//const InlineStyles=()=>{
//return(
 //   <div>
  //      <ul>
   //         <li style={{color:"red",fontSize:"40px",backgroundColor:"gray",textAlign:"center"}}>One</li>
  //          <li>Two</li>
  //          <li>Three</li>
  //      </ul>
 //   </div>
//)
//}

//OBJECT STYLING
//const InlineStyles=()=>{
 //   const apply={
  //      color:"red",
   //     backgroundColor:"yellow",
    //    fontSize:"45px"

    //}
   // return(
    //    <div>
     //       <ul>
      //          <li style={apply}>One</li>
       //         <li>Two</li>
       //         <li>Three</li>
        //    </ul>
   //     </div>
  //  )
//}

//External Styling
//To use external styling create one externa css file
//import that file with path in this file wr we want to use that css
//than give the class or id name what we took in external file 
const InlineStyles=()=>{
     return(
        <div>
            <ul>
                <li className="one">One</li>
                <li>Two</li>
                <li>Three</li>
            </ul>
        </div>
    )
}
export default InlineStyles