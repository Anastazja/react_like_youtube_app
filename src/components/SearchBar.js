import React from 'react';

class SearchBar extends React.Component{

    state = { text: ''};

    onFormSubmit = e => {
        e.preventDefault();
        //make sure we call callback from parent component
    };

    render() {
        return(
            <div className="search-bar ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <label>Video Search</label>
                        <input
                            type="text"
                            value={this.state.text}
                            onChange={e => this.setState({ text: e.target.value})}
                        />
                    </div>
                </form>
            </div>
        );
    };
}

export default SearchBar;