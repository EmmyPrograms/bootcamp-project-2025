export default function ContactPage() {
  return (
    <div className="flex flex-col items-center gap-8">
      <title>Contact</title>
      <h1>
        <i>Feel free to contact!</i>
      </h1>
      <form className=" bg-white rounded-2xl top-50 right-40 text-secondary p-6 max-w-4x2 ml-12 font‑mono animate-floatUp shadow-lg font-mono font-normal text-sm leading-relaxed">
        <label htmlFor="text"> Name: </label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Your Name"
          className="input"
        />
        <label htmlFor="email"> Email: </label>
        <input
          type="email"
          id="name"
          placeholder="Your Email"
          className="input"
        />
        <textarea
          id="message"
          placeholder="Your Message: "
          className="input h-32 outline-none w-full"
        />
        <button type="submit" id="submit-button">
          Submit
        </button>
      </form>
      <div className="text=base font-normal text-secondary leading-normal">
        <p>Phone: (916)218-0827</p>
        <p>Email: ameliaharris492@gmail.com</p>
      </div>
      <footer className="footer">
        © 2025 Amelia Harris | All Rights Reserved
      </footer>
    </div>
  );
}
