// export const Background = ()=> {
//     return(
//         <div className="background">
//         {/* <div class="ocean"> */}
//           <div className="wave wave-2"></div>
//           <div className="wave wave-1"></div>
//           {/* <div class="wave wave-1"></div> */}
//           {/* <div class="wave"></div> */}
//         {/* </div> */}
//       </div>
//     )
// }

// import React from 'react';
// import './main-page.scss'; // o el nombre correcto

export const Background = ({ animate, isDouble }) => {
  
  return (
    (isDouble? (
    <div className="background">
      <div className={`wave wave-1 ${animate ? 'wave-animated' : ''}`} />
      <div className={`wave wave-2 ${animate ? 'wave-animated' : ''}`} />
    </div>
    ) : (
    <div className="background">
      {/* <div className={`wave wave-1 ${animate ? 'wave-animated' : ''}`} /> */}
      <div className={`wave wave-2 wave-2-bottom ${animate ? 'wave-animated' : ''}`} />
    </div>

    ))
  );
}