import React, { Component } from 'react';

import SearchBar from '../containers/search_bar';
import FilterSearch from '../containers/filter_search';
import RepoList from '../containers/repo_list';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      parentRepoList: []
    };

    this.updateParent = this.updateParent.bind(this);
  }

  updateParent(parentRepoList){
    this.setState({
      parentRepoList
    });
  }


  render() {
    return (
      <div className="main">
        <div className="src-forms"><br />
          <center><SearchBar updateParent={this.updateParent} /></center><br />
          <center><FilterSearch globalRepoList={this.state.parentList} /></center><br />
        </div>

        <RepoList />
        
      </div>
    );
  }
}
