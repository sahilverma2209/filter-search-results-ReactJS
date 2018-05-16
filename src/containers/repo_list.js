import React, { Component } from 'react';
import { connect } from 'react-redux';


class RepoList extends Component {
    
    render() {
        console.log('repo_red = ', this.props.rlist[0]);

        if (this.props.rlist[0] !== undefined) {
            if (this.props.rlist[0].length !== 0) {
                return this.props.rlist[0].map((repo) => (
                    <div className="repolist-item" key={repo.id}>
                        {repo.name}
                    </div>
                ));
            } else {
                return (<div className="repo_list_placeholder">Search by Username</div>);
            }
        } else {
            return (<div className="repo_list_placeholder">Search by Username</div>);
        }
    }
}

function mapStateToProps({ rlist }) {
    return { rlist };
}


export default connect(mapStateToProps)(RepoList);
