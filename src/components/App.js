import React from 'react';

class App extends React.Component {

    helloEveryone(){
        alert("testaaa");
    }

    helloEveryone2(){
        alert("2222222222222");
    }
    render() {
        let text="Dev23";
        return (
            <div>
                <h1>Hello React Skeleton</h1>
                <h1>Hello {text}</h1>
                <button onClick={this.helloEveryone}>인사</button>
                <button onClick={text=="Dev"? this.helloEveryone:this.helloEveryone2}>인사2</button>
               
            </div>
        );
    }
}

export default App;


