import { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

enum notificationTypes {
  PhoneNumber = "phone",
  Email = "email",
}

interface IFormData {
  name: string;
  date: string;
  time: string;
  phone?: string;
  email?: string;
  noOfGuests: number;
  noOfChildren: number;
  specialRequest?: string;
}

const initialFormData = {
  name: "",
  date: "",
  time: "",
  phone: "",
  email: "",
  noOfGuests: 1,
  noOfChildren: 0,
  specialRequest: "",
};

const ReserveTable = () => {
  const navigate = useNavigate();
  const [notificationType, setNotificationType] = useState<notificationTypes>();
  const [formData, setFormData] = useState<IFormData>(initialFormData);
  const classNames = {
    inputField: "border border-gray-300 rounded p-2 w-full",
  };

  const onNotificationTypeChangeHandler = (
    e: ChangeEvent<HTMLInputElement>
  ) => {
    const type = e.target.id;
    type === notificationTypes.PhoneNumber
      ? setNotificationType(notificationTypes.PhoneNumber)
      : setNotificationType(notificationTypes.Email);
  };

  const getKeyByNameAttribute = (name: string) => {
    switch (name) {
      case "name":
        return "name";
      case "phone":
        return "phone";
      case "email":
        return "email";
      case "date":
        return "date";
      case "time":
        return "time";
      case "no-of-guests":
        return "noOfGuests";
      case "no-of-children":
        return "noOfChildren";
      case "special-request":
        return "specialRequest";
      default:
        return "";
    }
  };

  const updateInputHandler = (
    e:
      | ChangeEvent<HTMLInputElement>
      | ChangeEvent<HTMLTextAreaElement>
      | ChangeEvent<HTMLSelectElement>
  ) => {
    const key: string = getKeyByNameAttribute(e.target.name);
    const value: string | number = e.target.value;
    const state: any = { ...formData };
    state[key] = value;
    setFormData(state);
  };

  const onSubmitFormHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const reservations = localStorage.getItem("reservations");
    let id: number = parseInt(localStorage.getItem("id") ?? "0");
    if (reservations) {
      id++;
      const updatedReservations = [
        ...JSON.parse(reservations),
        { ...formData, id: id },
      ];
      localStorage.setItem("reservations", JSON.stringify(updatedReservations));
      localStorage.setItem("id", JSON.stringify(id));
    } else {
      localStorage.setItem(
        "reservations",
        JSON.stringify([{ ...formData, id: id }])
      );
    }
    toast("Table reserved successfully!");
    setFormData(initialFormData);
  };

  return (
    <div>
      <section>
        <form
          onSubmit={onSubmitFormHandler}
          id="reservations"
          className="flex flex-col max-h-screen p-5"
        >
          <h2 className="text-3xl font-bold mb-4 uppercase text-center">
            Reservation Form
          </h2>
          <div className="mb-4">
            <label htmlFor="name" className="block text-2xl">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={updateInputHandler}
              className={classNames.inputField}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="name" className="block text-2xl">
              Notification Type
            </label>
            <div className="flex items-center space-x-2">
              <input
                type="radio"
                name="notification-type"
                id={notificationTypes.PhoneNumber}
                onChange={onNotificationTypeChangeHandler}
              />
              <label htmlFor={notificationTypes.PhoneNumber}>Phone</label>
              <input
                type="radio"
                name="notification-type"
                id={notificationTypes.Email}
                onChange={onNotificationTypeChangeHandler}
              />
              <label htmlFor={notificationTypes.Email}>Email</label>
              {notificationType === notificationTypes.PhoneNumber && (
                <input
                  type="tel"
                  name="phone"
                  id="phone-notification"
                  value={formData.phone}
                  onChange={updateInputHandler}
                  className={`${classNames.inputField} block`}
                />
              )}{" "}
              {notificationType === notificationTypes.Email && (
                <input
                  type="email"
                  name="email"
                  id="email-notification"
                  value={formData.email}
                  onChange={updateInputHandler}
                  className={`${classNames.inputField} block`}
                />
              )}
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="date" className="block text-2xl">
              Select Date:
            </label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={updateInputHandler}
              className={classNames.inputField}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="time" className="block text-2xl">
              Select Time:
            </label>
            <select
              id="time"
              name="time"
              value={formData.time}
              onChange={updateInputHandler}
              className={classNames.inputField}
              required
            >
              <option value="">Select time</option>
              <option value="14:00">14:00</option>
              <option value="15:00">15:00</option>
              <option value="16:00">16:00</option>
              <option value="22:00">22:00</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="noOfGuests" className="block text-2xl">
              Number of Guests:
            </label>
            <input
              type="number"
              id="no-of-guests"
              name="no-of-guests"
              min="1"
              max="30"
              value={formData.noOfGuests}
              onChange={updateInputHandler}
              className={classNames.inputField}
            />
          </div>
          <button
            type="submit"
            className="bg-yellow-500 hover:bg-yellow-600 w-full font-bold py-2 px-4 rounded items-end my-1"
          >
            Submit
          </button>
          <button
            className="bg-yellow-500 hover:bg-yellow-600 w-full font-bold py-2 px-4 rounded items-end my-1"
            onClick={() => {
              navigate("/show-reservations");
            }}
          >
            Show reservations
          </button>
        </form>
      </section>
    </div>
  );
};

export default ReserveTable;
