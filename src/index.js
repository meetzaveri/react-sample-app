import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import Donut from './containers/donut.js';
import { ProgressBar } from './containers/progress-layer-donut';
import PropTypes from 'prop-types';

class Doughnut extends Component {
    render() {
      return (
        
        <Donut hasEqualParts={this.props.equalparts} doughnutsize={this.props.size} doughnutparts={4} doughnutcolors={{c1:'#D1A917',c2:'#2C9DC2',c3:'#D12A6A',c4:'#535353',c5:'#AC6946'}} doughnutvalues={{p1:5,p2:20,p3:25,p4:25,p5:12}} completionrate={240} />
        
      );
    }
  }
           
Doughnut.propTypes = {
    equalparts: PropTypes.bool,
    size: PropTypes.string.isRequired,
  };
    
export default Doughnut;

