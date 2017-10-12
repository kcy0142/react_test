import React from 'react';

import PropTypes from 'prop-types'; //React v15.5부터 PropsTypes를 쓰려면 추가해야 한다. 

//import Nav from './nav/Nav';

class Header1 extends React.Component {

    constructor (props) {
        super(props);
      }
    
    render() {
      //- background-color 라는 원래 속성명이 아닌 backgroundColor로 변환해서 사용 
      let style = {
        color: "red",
        backgroundColor: "#000"
       }

        return (
            <div className="header"> Header1 start
              <h1>{this.props.title}</h1>
              <h2>{this.props.subTitle}</h2>
            
              Header1 end
              <div style={style}> background-color 라는 원래 속성명이 아닌 backgroundColor로 변환해서 사용</div>
            </div>
          );
      
    }
}

Header1.propTypes = {
  title: PropTypes.string.isRequired, //필수 props.
  subTitle: PropTypes.string
}

export default Header1;