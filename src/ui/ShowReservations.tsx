import { useEffect, useState } from "react";
import { toast } from "react-toastify";

type reservationType = {
  id: number;
  name: string;
  date: string;
  time: string;
  noOfGuests: number;
  noOfChildren: number;
  specialRequest: string;
};

const ShowReservations = () => {
  const [reservations, setReservations] = useState<reservationType[]>([]);

  useEffect(() => {
    const persistentData = localStorage.getItem("reservations");
    if (persistentData) {
      setReservations(JSON.parse(persistentData));
    }
  }, []);

  const removeReservation = (id: number) => {
    let updatedReservations = [...reservations];
    updatedReservations = updatedReservations.filter(
      (booking: any) => booking.id !== id
    );
    setReservations(updatedReservations);
    localStorage.setItem("reservations", JSON.stringify(updatedReservations));
    toast("reservation has been removed!", { type: "error" });
  };

  return (
    <div className="p-5 md:flex gap-5">
      {reservations.map((booking: any) => (
        <div
          className="drop-shadow-lg w-full flex flex-col items-center md:w-max p-4 rounded-xl border"
          key={booking.id}
        >
          <div className="name">Name: {booking.name}</div>
          <div className="date">Date: {booking.date}</div>
          <div className="time">Time: {booking.time}</div>
          <div className="guests">No. of Guests: {booking.noOfGuests}</div>
          {/* <div className="children">
            No. of Children: {booking.noOfChildren}
          </div> */}
          {booking.specialRequest?.trim().length > 0 && (
            <div className="special-request">
              Special request: {booking.specialRequest}
            </div>
          )}
          <button
            className="bg-red-500 px-2 py-1 rounded-xl text-white self-stretch"
            onClick={() => removeReservation(booking.id)}
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
};

export default ShowReservations;
