import React, { Component,PropTypes } from 'react';
//import PropTypes from 'prop-types';
import {render} from 'react-dom';



//주 컴포넌트 이며 SearchBar와 ContractList를 랜더링
class ContractApp extends Component {

    constructor(props){
        super(props);
        this.state={
            filterText:''
        };

        this.handleUserInput=this.handleUserInput.bind(this);
    }

    handleUserInput(searchTerm){
        this.setState({filterText:searchTerm})
    }
    render() {
        return (
            <div>
                <h1>================contactList=============</h1>
                <SearchBar  filterText={this.state.filterText} onUserInput={this.handleUserInput}/>
                <ContractList contracts={this.props.contractsList} filterText={this.state.filterText} />
            </div>
        );
    }
}

 ContractApp.propTypes = {
     contractsList:PropTypes.arrayOf(PropTypes.object)
 };

class SearchBar extends Component{
    constructor(props){
        super(props);
        this.handleChange=this.handleChange.bind(this);
    }

    handleChange(e){
        this.props.onUserInput(e.target.value)
    }
    render(){
        return <input type="search" placeholder="search"  value={this.props.filterText} onChange={this.handleChange}/>
    }

}

SearchBar.propTypes={
    onUserInput:PropTypes.func.isRequired,
    filterText:PropTypes.string.isRequired
}
class ContractList extends Component{
    render(){
        let filteredContracts=this.props.contracts.filter(
          (contract)=>contract.name.indexOf(this.props.filterText)!==-1  
        );

        return (
            <ul>
                {filteredContracts.map(
                    (contact)=> <ContractItem key={contact.email}
                                             name={contact.name}
                                             email={contact.email} />
                )}
            </ul>
        )
    }
}
ContractList.PropTypes={
    contracts:PropTypes.arrayOf(PropTypes.object)
}

class ContractItem extends Component{
    render(){
        return <li>{this.props.name} - {this.props.email}</li>
    }
}
ContractItem.propTypes={
    name:PropTypes.string.isRequired,
    email:PropTypes.string.isRequired,
}


//render(<ContractApp contracts={contracts}/>,document.getElementById('root'));
export default ContractApp; 