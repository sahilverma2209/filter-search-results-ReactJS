import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchRepo, clearRepo } from '../actions/index';
 

class SearchBar extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            searchQuery: ''
        };

        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }
    
    onInputChange(event) {
        this.setState({ searchQuery: event.target.value });
    }

    onFormSubmit(event) {
        event.preventDefault();
        this.props.fetchRepo(this.state.searchQuery);
       // console.log('Q : ', this.state.searchQuery);
    }

    clear() {
        console.log('clearclicked');
        this.props.clearRepo();
    }

    render() {
        return (
            <div>
            
                <input 
                    placeholder="Enter Username "
                    className="form-input"
                    value={this.state.searchQuery}
                    onChange={this.onInputChange}
                />
                <button type="submit" onClick={this.onFormSubmit} className="button">Go</button>
                <button onClick={this.clear.bind(this)} className="button2">Clear</button></div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchRepo, clearRepo }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
