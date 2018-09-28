// Packages
import React from 'react';
import SimpleLineIcon from 'react-simple-line-icons';
//Actions
import {
  alertify,
  HTTP_204_NO_CONTENT
} from "../../actions/baseActions";
import { deleteRezervation } from "../../actions/rezervationActions";

// Local Modules
import './index.css';

export default class DeleteRezervButton extends React.Component {

  onDelete(rezervation_id) {
    alertify.confirm("Are you sure you want to delete?", function () {
      deleteRezervation(rezervation_id, (response) => {
        if (response) {
          if (response.statusCode === HTTP_204_NO_CONTENT) {
            alertify.success("Task deleted.");
            window.location.reload()
          } else {
            alertify.error("An unexpected error has occurred and try again later.");
          }
        } else {
          alertify.error("An unexpected error has occurred and try again later.");
        }
      });
    });
  }

  render() {
    return(
      <div className="container">
        <div className="row deleteRezerv-button">
          <div className="rezervation-delete-button">
            <SimpleLineIcon name="close" onClick={() => this.onDelete(this.props.rezervation.id)} />
          </div>
        </div>
      </div>
    );
  }
}
