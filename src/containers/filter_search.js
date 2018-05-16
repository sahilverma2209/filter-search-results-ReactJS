import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


import { filterRepo } from '../actions/index';

class FilterSearch extends Component {
    constructor(props) {
        super(props);

        this.state = {
            term: ''
        };

        this.onInputChange = this.onInputChange.bind(this);
    }

    onInputChange(event) {
        this.setState({ term: event.target.value });
        this.props.filterRepo(event.target.value, this.props.globallist[0]);
        // console.log('search term = ', event.target.value);
    }

    render() {
        // console.log('term = ', this.state.term);
        return (
            <div>
            <input 
                placeholder="Filter Repositories "
                className="form-input2"
                value={this.state.term}
                onChange={this.onInputChange}
            />
            <button type="submit" onClick={this.onInputChange} className="button">Go</button>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ filterRepo }, dispatch);
}

function mapStateToProps(state) {
    return {
        repolist: state.rlist,
        globallist: state.glist
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterSearch);
