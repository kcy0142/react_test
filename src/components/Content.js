import React from 'react';

class Content extends React.Component {

    constructor (props) {
        super(props);
    
        this.state = {
          value: ""
        }
    
        this.handleChangeTextValue = this.handleChangeTextValue.bind(this);
        // 위의 소스에서 생성자 내부(constructor)를 다시 보자. 
        // this.handleChangeTextValue = this.handleChangeTextValue.bind(this); 라는 구문이 존재한다. 
        // render() 메소드에서 해당 함수를 호출하기 때문에 bind 없이 호출 시 handleChangeTextValue()의
        // this가 null, undefined, window 중 하나가 되기 때문에 생성자에서 this를 bind 해줘야 해당
        // Component에서 this를 사용할 수 있다.

      }
    
      //Component의 render() 메소드가 호출되기 전에 실행된다. 서버 사이드 랜더링을 여기에서 실행한다.
      componentWillMount () {
        console.log('Component WillMount');
      }

    //   Component의 rendor() 메소드가 호출된 후 실행된다.
    //   Ajax 통신, Dom 변화, 이벤트 추가 같은 Side Effect를 여기에서 실행한다.
      componentDidMount () {
        console.log('Component DidMount');
      }
      
    //   이 메소드는 새로운 Props 객체를 받았을 때 실행된다.
    //    this.setState()를 사용해도 rendering 되지 않는다. props에 따라 state를 업데이트 해야할 때 사용하면 유용하다.
      componentWillReceiveProps (nextProps) {
        console.log('Component WillReceiveProps');
      }
      

    //   componentWillUpdate()가 호출되기 전에 실행되며 false를 return 하여 업데이트 및 render() 메소드가 실행되지 않게 한다.
    //   기본으로는 true를 return한다.
    //   이 메소드는 랜더링이 필요 없다고 판단 될 때 유용하며 쓸데없는 rendering을 막아 앱의 성능을 높힐 수 있다. 
    //   이 결정을 내리는 기준은 nextState 및 nextProps와 기존의 this.state 및 this.props를 비교한 결과를
    //   바탕으로 할 수 있다. 또는 Component가 정적이며 변경되지 않는 다는 것을 미리 알 수 있는 경우도 있다.
      shouldComponentUpdate (nextProps, nextState) {
        console.log('Component shouldUpdate');
      
        if (nextState.value !== this.state.value) {
          return true;
        } else {
          return false;
        }
      }
      
    //   Component가 Props나 State의 변경에 의해 re-rendering 되면서 render() 메소드가 호출되기 전에 실행된다.
    //    여기에서 setState를 하면 무한루프에 빠진다. 
      componentWillUpdate (nextProps, nextState) {
        console.log('Component WillUpdate');
      }
      
    //   Component가 Props나 State의 변경에 의해 re-rendering 되면서 render() 메소드가 호출 된 후 
    //   새로우 변경 사항이 적용된 후에 실행된다.
      componentDidUpdate (prevProps, prevState) {
        console.log('Component DidUpdate');
      }
      
      //Component가 DOM에서 제거되기 직전에 실행된다
      componentWillUnmount() {
        console.log('Component WillUnmount');
      }
      
      handleChangeTextValue (event) {
        this.setState({
          value: event.target.value
        })
      }
    

    render() {
        return (
            <div>
                <h2>Content2 {this.props.title}</h2>
                <p>Hey2!  {this.props.body}</p>

                <span>{this.state.value}</span>
                <br/>
                <input type="text" onChange={(e) => {this.handleChangeTextValue(e)}}/>

            </div>
        );
    }
}

export default Content