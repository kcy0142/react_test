import React from 'react';
import Header from './Header';
import Header1 from './Header1';
import Content from './Content';

import StateExample from './StateExample';

import Counter from './Counter';

import ContractApp from './ContractApp';
import KanbanBoard from './board/KanbanBoard';


let cardsList=[
  {
      id:1,
      title:'Read the Book',
      description:'I should read the whole book',
      color:'#BD8D31',
      status:'in-progress',
      tasks:[]
  
  },
  {
      id:2,
      title:'Write some code',
      description:'Code along with the samples in the book',
      color:'#3A7E28',
      status:'todo',
      tasks:[
          {
              id:1,
              name:'ContractList example',
              done:true
          },
          {
              id:2,
              name:'Kanban example',
              done:false
          },
          {
              id:3,
              name:'My Own experiments',
              done:false
          }
  
      ]
  
  },
  {
    id:3,
    title:'책 다 읽음',
    description:'나미야 잡화점 책 다 읽음',
    color:'#4A7E29',
    status:'done',
    tasks:[]

  },
  {
    id:4,
    title:'Read the 나미야 Book',
    description:'I should read the whole 나미야 book',
    color:'#3A7F20',
    status:'in-progress',
    tasks:[]

}
  
  ];


    const contacts=[
        {name:"james",email:"test@naver.com"},
        {name:"gate",email:"gate@naver.com"},
        {name:"game",email:"game@naver.com"},
        {name:"giant",email:"giant@naver.com"},
        {name:"moon",email:"moon@naver.com"},
        {name:"dull",email:"dull@naver.com"},
        {name:"time",email:"time@naver.com"},
        {name:"love",email:"love@naver.com"},
    ];
class App2 extends React.Component {

  

    drawList (list) {
        let elementsList = [];
      
        if (list.length <= 0 ) {
          return null;
        }
      
        elementsList = list.map((item, index) => {
          return (
            <li>{item}</li>
          );
        });
      
        return (
          <ul>
            {elementsList}
          </ul>
        );
      }

      
    render() {
        return (
            <div>
                 {this.drawList(['모모', '미나', '채영'])}
                <Header title={this.props.headerTitle}/>
                <Header1  title="인디 음악 백과사전"  subTitle="인디 음악 파이팅!"  />

                <Content title={this.props.contentTitle} body={this.props.contentBody}/>
                <br/>
                <br/>
                state example
                <StateExample/>

                <Counter />

                

                <KanbanBoard cardsList={cardsList} />

                <ContractApp contractsList={contacts}/> 
            </div>
        );
    }
}

// class Header extends React.Component {
//     render() {
//         return (
//             <h1>Header</h1>
//         )
//     }
// }

// class Content extends React.Component {
//     render() {
//         return (
//             <div>
//                 <h2>Content</h2>
//                 <p>Hey!</p>
//             </div>
//         );
//     }
// }

App2.defaultProps={
headerTitle:'ttttttt'
};

export default App2;


