import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import styles from './AddFriendInput.css';

export default class AddFriendInput extends Component {
  static propTypes = {
    addFriend: PropTypes.func.isRequired
  }

    constructor (props) {
    super(props);
    this.state = {
      name: this.props.name || '',
      phone: this.props.phone || '',
    };
    this.handleChangeName = this.handleChangeName.bind(this)
    this.handleChangePhone = this.handleChangePhone.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChangeName (event) {
     this.setState({ name: event.target.value });
  }
 handleChangePhone (event) {
     this.setState({ phone: event.target.value });
  }

  handleSubmit (event) {

    const name = this.state.name;
    const phone = this.state.phone;
      this.props.addFriend(name, phone);
       event.preventDefault()
      this.setState({ name: '' });
      this.setState({ phone: '' })
  }


  render () {
    return (
        <form onSubmit={this.handleSubmit} >
      <input
        type="text"
        className={classnames('form-control', styles.addFriendInput)}
        placeholder="Nome"
        value={this.state.name}
        onChange={this.handleChangeName}/>
            <br/>


      <input
        type="text"
        className={classnames('form-control', styles.addFriendInput)}
        placeholder="Telefono"
        value={this.state.phone}
        onChange={this.handleChangePhone}/>

      <input type="submit" value="Aggiungi Persona"/>
        </form>
    );
  }

}
