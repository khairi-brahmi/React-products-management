import React, { Component } from "react";
import { Link } from "react-router-dom";

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fullname: "",
      email: "",
      password: ""
    };

    this.update = this.update.bind(this);

    this.displayLogin = this.displayLogin.bind(this);
  }

  update(e) {
    let name = e.target.name;
    let value = e.target.value;
    this.setState({
      [name]: value
    });
  }

  displayLogin(e) {
    e.preventDefault();
    console.log("Votre compte a été créé avec succés");
    console.log(this.state);
    this.setState({
      fullname: "",
      email: "",
      password: ""
    });
  }

  render() {
    return (
      <div className="register">
        <form onSubmit={this.displayLogin}>
          <h2>Créer un compte</h2>

          <div className="name">
            <input
              type="text"
              placeholder="Votre nom"
              name="fullname"
              value={this.state.fullname}
              onChange={this.update}
            />
          </div>

          <div className="email">
            <input
              type="text"
              placeholder="Votre email"
              name="email"
              value={this.state.email}
              onChange={this.update}
            />
          </div>

          <div className="pasword">
            <input
              type="password"
              placeholder="Mot de passe"
              name="password"
              value={this.state.password}
              onChange={this.update}
            />
          </div>

          <div className="password">
            <input
              type="password"
              placeholder="Confirmer mot de passe"
              name="password1"
            />
          </div>

          <input type="submit" value="Enregistrer" />
        </form>

        <Link to="/client">Se connecter</Link>
      </div>
    );
  }
}

export default Register;
