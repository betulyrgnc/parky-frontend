// Packages
import React from 'react';
import Download from '@axetroy/react-download';
// Objects
import Header from '../../objects/Header/index';
import Footer from '../../objects/Footer/index';

// Local Modules
import './index.css';

const element = document.createElement('download');
document.body.appendChild(element);

export default class Contact extends React.Component {
  render() {
    return(
      <form id="contact_form" onSubmit={this.onSubmit} onReset={this.onReset}>
        <div className="container">
          <div className="row contact-page">
            <div className="col-md-12">
              <Header></Header>
              <h1 className="head-text">HAKKIMIZDA/İLETİŞİM</h1>
            </div>
            <div className="col-md-12">
              <div className="text">
                <p><span> PRKY </span>hızlı rezervasyon sistemi için siz de otopark bilgilerinizi aşağıdaki dosyayı indirip doldurarak <a>prky@smartparky</a> adresine e-mail yollayabilirsiniz.</p>
              </div>
              <div className="download">
                <Download file="test.md" content="# hello world">
                  <button type="download-button"><p>Click and Download file</p></button>
                </Download>
              </div>
            </div>
            <div className="col-md-12">
              <Footer></Footer>
            </div>
          </div>
        </div>
      </form>
    );
  }
}
