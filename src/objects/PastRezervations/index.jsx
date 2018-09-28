// Packages
import React from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import { Scrollbars } from 'react-custom-scrollbars';

//Actions
import {
  alertify,
  isAuthentication,
  HTTP_200_OK,
  HTTP_201_CREATED,
  HTTP_400_BAD_REQUEST
} from "../../actions/baseActions";
import { listRezervation} from "../../actions/rezervationActions";
//Components
import RezervationListContent from '../../components/RezervationListContent/index';

// Local Modules
import './index.css';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

Modal.setAppElement("#root");
export default class PastRezervations extends React.Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false,
      rezervations: [],
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.setRezv = this.setRezv.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  componentWillMount() {


      if (isAuthentication()) {
        listRezervation((response) => {
          if (response) {
            if (response.statusCode === HTTP_200_OK) {
              this.setRezv(response.body);
            } else {
              alertify.error("An unexpected error has occurred and try again later.");
            }
          } else {
            alertify.error("An unexpected error has occurred and try again later.");
          }
        });
      }
    }

    setRezv = (rezervations) => {
      this.setState({
        rezervations: rezervations
      });
    }

  render() {
    const { rezervations } = this.state;
    let rezvlist_content = null;
    rezvlist_content = <RezervationListContent rezervations={rezervations}></RezervationListContent>;

    return(
      <div className="pastRezervation">
        <Link to="#" className="save-rezervation" onClick={this.openModal}>Geçmiş Rezervasyonlarım</Link>
        <Modal
        isOpen={this.state.modalIsOpen}
        onRequestClose={this.closeModal}
        style={customStyles}
        >
          <h3 className="past-title" ref={subtitle => this.subtitle = subtitle}>Geçmiş Rezervasyonlarım</h3>
          <button className="past-close" onClick={this.closeModal}>X</button>
          <form>
          <div className="container rezvlist-page">
            <div className="rezvlist-table">
             <div className="rezvlist-table__content">
               <Scrollbars style={{height: 320}}
                           thumbSize={150}
                           renderThumbVertical={props => < div {...props} className="thumb-vertical"/>}
                           renderTrackVertical={props => < div {...props} className="track-vertical"/>}>
                 {rezvlist_content}
               </Scrollbars>
             </div>
            </div>
          </div>
          </form>
        </Modal>
      </div>

    );
  }
}
