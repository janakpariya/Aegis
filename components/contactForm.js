import React, { Component } from "react";
import { Input, Textarea } from "@innovaccer/design-system";
import { Button } from "@innovaccer/design-system";

class ContactForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      phone: "",
      message: "",
    };
  }

  onNameChange = (e) => this.setState({ name: e.target.value });
  onPhoneChange = (e) => this.setState({ phone: e.target.value });
  onEmailChange = (e) => this.setState({ email: e.target.value });
  onMessageChange = (e) => this.setState({ message: e.target.value });
  onClear = () => {
    this.setState({
      name: "",
      phone: "",
      email: "",
      message: "",
    });
  };
  onSubmit = () => {
    console.log("Sent!");
  };

  render() {
    return (
      <div className="facenter d-flex--column">
        <h1 className="mb--8">Contact Form</h1>
        <div
          className="d-flex--column"
          style={{
            border: "2px solid black",
            borderRadius: "8px",
            width: "400px",
            height: "400px",
          }}
        >
          <div className="d-flex facenter fjbetween p--16">
            <h3 style={{ width: "30%" }}>Name</h3>
            <Input
              type="text"
              placeholder="Name"
              value={this.state.name}
              onChange={this.onNameChange}
              className="formInput"
            />
          </div>
          <div className="d-flex facenter fjbetween p--16">
            <h3 style={{ width: "30%" }}>Phone number</h3>
            <Input
              type="text"
              placeholder="Phone number"
              value={this.state.phone}
              onChange={this.onPhoneChange}
              className="formInput"
            />
          </div>
          <div className="d-flex facenter fjbetween p--16">
            <h3 style={{ width: "30%" }}>Email</h3>
            <Input
              type="email"
              placeholder="Email"
              value={this.state.email}
              onChange={this.onEmailChange}
              className="formInput"
            />
          </div>
          <div className="d-flex facenter fjbetween p--16">
            <h3 style={{ width: "30%" }}>Message</h3>
            <Textarea
              placeholder="Message"
              value={this.state.message}
              onChange={this.onMessageChange}
              className="formMessage"
            />
          </div>
          <div className="d-flex fjend p--16">
            <Button className="mr--8" appearance="alert" onClick={this.onClear}>
              Clear
            </Button>
            <Button appearance="primary" onClick={this.onSubmit}>
              Send
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactForm;
