import "bulma/css/bulma.css";
import "./App.css";
import Navbar from "./components/Navbar";
import FormField from "./components/FormField";
import SignupForm from "./components/SignupForm";
import Message from "./components/Message";

function App() {
  return (
    <div className="App">
      <Navbar />
      <FormField label="Name" type="text" placeholder="Alex Smith" />
      <FormField
        label="Email"
        type="email"
        placeholder="Alex.Smith@gmail.com"
      />
      <SignupForm />
      <Message isInfo title="Hello World">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
        <strong>Pellentesque risus mi</strong>.
      </Message>
    </div>
  );
}

export default App;
