import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import DoughnutWrapper from '../../../components/wrapper';
import Slice from '../../../components/slice';
import Pie from '../../../components/pie';
import DistributedLayerDoughnut from '../distributedLayerDoughnut';

const DoughnutIcingWrapper = styled.div1`
    top: -190px;
    background: transparent;
    border: 10px solid rgba(255,255,255,0.5);
    left: 30px;
    width: ${props=>props.donutwidth ? props.donutwidth + 'px' : '220px'};
    height: ${props=>props.donutwidth ? props.donutwidth + 'px' : '220px'};
`

class Circle extends Component{
    constructor(props){
        super(props);
        this.state = {
            leaveEqual : this.props.shouldRemainEqual,
            pie : this.props.pievalues,
        }
    }
    
    render(){
        const { p1,p2,p3,p4,p5 } = this.state.pie;
        return(
            <div style={{'marginTop' : '8%'}}>
                { 
                  this.state.leaveEqual === true ? (
                    <div style={{position : 'relative'}}> 
                        <Slice  slicedegree="0">
                            <Pie mainbg={this.props.bgclr} widthoffset="0" piebg={ this.props.paintShades.c1 } degree="360" />
                        </Slice>
                        <Slice clipnative slicedegree="180">
                            <Pie mainbg={this.props.bgclr} clipnative widthoffset="0" piebg={ this.props.paintShades.c2 } degree="360" />
                        </Slice>
                    </div>
                  ) :(
                <div className ="wrapper" style={{position : 'relative'}}>
                    <Slice piebg="yellow">
                        <Slice  slicedegree={ 0 - p1 } >
                            <Pie mainbg={this.props.bgclr} widthoffset="0" piebg={ this.props.paintShades.c1 } degree={ 360 + p1} />
                        </Slice> 
                        <Slice clipnative slicedegree={ 180 - p2 }  z_axis={p2}>
                            <Pie mainbg={this.props.bgclr} clipnative widthoffset="0" piebg={ this.props.paintShades.c2 } degree={ 360 + p2 } />
                        </Slice> 
                    </Slice>
                </div> 
                 )
                }
                
                <DoughnutWrapper donutwidth="220" setpos="40"/>
                <DoughnutIcingWrapper donutwidth="240" setpos="40" />
            </div>
        );
    }
}

Circle.propTypes = {
    shouldRemainEqual : PropTypes.bool,
    pievalues : PropTypes.object,
    paintShades : PropTypes.object
}

export default Circle;
