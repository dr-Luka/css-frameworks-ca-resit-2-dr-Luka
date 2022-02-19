export default function Contact() {
  return (
    <>
      <h2>Contact</h2>
      <form>
        <label>Name</label>
        <input type="text" id="name"></input>
        <label>Email</label>
        <input type="text" id="email"></input>
        <label>Massage</label>
        <textarea id="message"></textarea>
        <a href="/sent" className="send-button blue">
          Send
        </a>
      </form>
      <div className="checkbox-container">
        <input type="checkbox"></input>
        <p className="checkbox-text">
          I agree to egregious terms and conditions
        </p>
      </div>
    </>
  );
}
