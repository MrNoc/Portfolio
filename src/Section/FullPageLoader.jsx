import React, { Component } from 'react'
import LoaderGif from '../Main/images/loader.gif'
import { connect } from 'react-redux';
import '../Section/loader.css'

export class FullPageLoader extends Component {
  render() {
    const {loading} = this.props;

    if(!loading) return null;



    return (
      <div class="loader-container">
        <div class="loader">
          <img src={LoaderGif}/>
        </div>
        
      </div>
    )
  }
}

const mapStateToProps = state => ({ loading: state.application.loading })
export default connect(mapStateToProps)(FullPageLoader);
