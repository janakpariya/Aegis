const { Component } = require("react");
import Layout from "../components/layout";

class Home extends Component {
  render() {
    return (
      <Layout title="Aegis | Home">
        <div>
          <p>Hello!</p>
          <p>This is a home page</p>
        </div>
      </Layout>
    );
  }
}

export default Home;
