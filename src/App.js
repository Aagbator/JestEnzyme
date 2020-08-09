import React, { Component } from 'react';
import './app.scss';
import Header from './component/header/header/header.component';
import Headline from './component/header/headline/headline.component';
import SharedButton from './component/header/button/button.component';
import { connect } from 'react-redux';
import { fetchPosts } from './actions/index';
import ListItem from './component/listitem/listitem.component';

const tempArr = [{
  fName: 'Ben',
  lName: 'Smith',
  email: ' bensmith@gmail.con',
  age: 34,
  onlineStatus: true
}]

class App extends Component {

  constructor(props){
    super(props);
    this.fetch = this.fetch.bind(this);
  }

  fetch(){
    this.props.fetchPosts();
  }

  render(){

    const { posts } = this.props;

    const configButton = {
      buttonText: 'Get posts',
      emitEvent: this.fetch
    }

    return (
      <div className="App">
          <Header></Header>
          <main>
            <Headline header="Posts" desc="Click the button to render posts" tempArr={tempArr}></Headline>
            <SharedButton {...configButton} />
            {posts.length > 0 && 
            <div>
              {posts.map((post, index) => {
                const {title, body} = post;
                const configListItem = {
                  title,
                  desc: body
                }
                return (
                  <ListItem {...configListItem} />
                )
              })}
            </div>}
          </main>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts
  }
}

// const mapDispatchToProps = state => {
//   return {
//     fetchPosts: fetchPosts
//   }
// }

export default connect(mapStateToProps, {fetchPosts})(App);
