import React, { Component } from 'react';
import './app.scss';
import Header from './component/header/header/header.component';
import Headline from './component/header/headline/headline.component';
import SharedButton from './component/header/button/button.component';
import { connect } from 'react-redux';
import { fetchPosts } from './actions/index';
import ListItem from './component/listitem/listitem.component';
import { number } from 'prop-types';

const tempArr = [{
  fName: 'Ben',
  lName: 'Smith',
  email: ' bensmith@gmail.con',
  age: 34,
  onlineStatus: true
}]

const initialState = {
  hideBtn: false
}

class App extends Component {

  constructor(props){
    super(props);
    this.fetch = this.fetch.bind(this);
    this.hideButton = this.hideButton.bind(this);
    this.state = {
      ...initialState
    }
  }

  fetch(){
    this.props.fetchPosts();
    this.hideButton();
  }

  add5ToNumber = (num) => {
    return 5 + num;
  }

  hideButton(){
    const {hideBtn} = this.state;
    this.setState({
      hideBtn: !hideBtn
    })
  }

  render(){

    const { posts } = this.props;

    const {hideBtn} = this.state;

    const configButton = {
      buttonText: 'Get posts',
      emitEvent: this.fetch
    }

    return (
      <div className="App" data-test="appComponent">
          <Header></Header>
          <main>
            <Headline header="Posts" desc="Click the button to render posts" tempArr={tempArr}></Headline>
            {posts.length == 0 && !hideBtn ? <SharedButton {...configButton} /> : ''}
            
            {posts.length > 0 && 
            <div>
              {posts.map((post, index) => {
                const {title, body} = post;
                const configListItem = {
                  title,
                  desc: body
                }
                return (
                  <ListItem key={index} {...configListItem} />
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
