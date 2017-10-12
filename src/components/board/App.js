import React from 'react';
import KanbanBoard from './KanbanBoard';

let cardsList=[
{
    id:1,
    title:'Read the Book',
    description:'I should read the whole book',
    status:'in-progress',
    tasks:[]

},
{
    id:2,
    title:'Write some code',
    description:'Code along with the samples in the book',
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

}

];
React.render(<KanbanBoard cards={cardsList} />,document.getElementById('root'));
