import { useState } from "react";
import { validateEmail } from "../../utils/helpers";

const Contact = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const { name, email, message } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      console.log("Submit Form", formState);
    }
  };

  const handleChange = (e) => {
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage("Your email is invalid.");
      } else {
        setErrorMessage("");
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage("");
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
      console.log("Handle Form", formState);
    }
  };

  return (
    <section className="flex justify-center mt-16">
      <form
        id="contact-form"
        className="flex flex-col w-2/4"
        onSubmit={handleSubmit}
      >
        <div className="text-center my-2">
          <h1>Contact me</h1>
        </div>
        <input
          type="text"
          name="name"
          defaultValue={name}
          onBlur={handleChange}
          className="bg-red-400"
          placeholder="Name"
        />
        <input
          type="email"
          name="email"
          defaultValue={email}
          onBlur={handleChange}
          className="bg-red-400 my-4"
          placeholder="Email"
        />
        <textarea
          name="message"
          rows="5"
          defaultValue={message}
          onBlur={handleChange}
          className="bg-red-400"
          placeholder="Message"
        />
        {errorMessage && (
          <div>
            <p className="font-bold text-center my-2">{errorMessage}</p>
          </div>
        )}
        <button data-testid="button" type="submit">
          Submit
        </button>
      </form>
    </section>
  );
};

export default Contact;
