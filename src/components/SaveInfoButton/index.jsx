// Packages
import React from 'react';

// Local Modules
import './index.css';

export default class SaveInfoButton extends React.Component {
 render() {
   return(
     <div className="container">
       <div className="row saveInfo-button">
         <div className="col-xs-12">
           <button className="save-button" type="submit"><p>Güncelle</p></button>
         </div>
       </div>
     </div>
   );
 }
}
