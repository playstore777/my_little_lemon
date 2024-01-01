import { useNavigate } from "react-router-dom";

const ContactUs = () => {
  const navigate = useNavigate();
  const classNames = {
    inputField: "border border-gray-300 rounded p-2 w-full",
  };

  const goTo = (to: string) => {
    navigate(to);
  };
  return (
    <form
      onSubmit={() => {
        goTo("/");
      }}
      className="flex flex-col max-h-screen p-5"
    >
      <div className="mb-4">
        <label htmlFor="name" className="block text-2xl">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className={classNames.inputField}
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          className={classNames.inputField}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="reason">Reason</label>
        <select
          name="reason"
          id="reason"
          className={classNames.inputField}
          required
        >
          <option value="casual">Casual connect</option>
          <option value="hire">Want to hire me</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div className="mb-4">
        <label htmlFor="message">Message</label>
        <textarea className={classNames.inputField} required />
      </div>
      <button className="bg-yellow-500 hover:bg-yellow-600 w-full font-bold py-2 px-4 rounded items-end my-1">
        Submit
      </button>
    </form>
  );
};

export default ContactUs;
