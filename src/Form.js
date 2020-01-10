import React, { Component } from "react";
import "./css/form.css";

class Form extends Component {
  render() {
    return (
     <form onSubmit={this.props.handleSubmit}>
       <input name="title" placeholder="タイトル　※必須"></input>
       <textarea name="desc" placeholder="説明を入力"></textarea>
       <button type="submit">TODOを作成</button>
     </form>
    );
  }
}

export default Form;
