import React, { Component } from 'react';
import { connect } from 'react-redux';


class RepoList extends Component {
    
    render() {
        console.log('repo_red = ', this.props.rlist[0]);

        if (this.props.rlist[0] !== undefined) {
            if (this.props.rlist[0].length !== 0) {
                return this.props.rlist[0].map((repo) => (
                    <a className="repo-item-link" href={repo.svn_url} key={repo.id} target="_blank">
                        <div className="repolist-item" key={repo.id}>
                            {repo.name}
                        </div>
                    </a>
                ));
            } else {
                return (<div className="repo_list_placeholderN">No repos found !</div>);
            }
        } else {
            return (<div className="repo_list_placeholderS">Search by Username</div>);
        }
    }
}

function mapStateToProps({ rlist }) {
    return { rlist };
}


export default connect(mapStateToProps)(RepoList);
