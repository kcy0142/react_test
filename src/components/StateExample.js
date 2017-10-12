import React from 'react';


var obj = [1,2,3,4]; 
var [one, ...obj] = obj; // one = 1, obj = [2,3,4] 

console.log(one); // 1


class StateExample extends React.Component {


    // 4) props 쓰임새
    
    // - 컴포넌트에 필요한 값, 고정적인 데이터를 다룰 때 사용
    
    // - 컴포넌트의 고정적인 데이터를 다룰 때 사용함
    
    // - 상위 컴포넌트에서 하위 컴포넌트로 전달할 수 있음 : 수정은 못함(상위에서 수정가능)
    
    
    
    // [state]
    
    // - 컴포넌트의 유동적인 데이터 담당
    
    // - 초기값 설정이 필수
    
    // - 메서드(setState)를 통해서 컴포넌트 내에서 데이터 수정 가능 : props와 다름
    
    // - setState를 통해서 값을 변경하는 작업이 이뤄지면 리랜더링을 함
    
    // - 메서드를 통하지않고 state 값을 변경하면 절대 사용하지 말 것 : 바뀐 부분만 변경하겠다는 리액트 장점을 무시하는 것, 전체 리랜더링..

    constructor(props) {
        super(props);
        this.state = {
            header: "header state",
            content: "content state"
        };
    }

   
    
    updateHeader(text) {
        this.setState({
            header: "header has changed"
        });
    }

    handleUpdateContent (singer) {
        this.setState({
          content: singer
        });
      }
    
    render() {

        return (

            <div>
                <h1>{this.state.header}</h1>
                <h2>{this.state.content}</h2>
                <button onClick={this.updateHeader.bind(this)}>update</button>
                <button onClick={() => {this.handleUpdateContent("nell")}}>클릭</button>
            </div>
        );

    }
}


export default StateExample;