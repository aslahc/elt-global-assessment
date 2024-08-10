import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "../../shadcncomponents/ui/button";
import ConfirmationModal from "../popupModal/confirmBookNow";
import { BookingClass } from "../../redux/classSlice";
import { RootState } from "../../redux/store";
import { ClassData } from "../../types/classDataTypes";

import { BookNowBtnProps } from "../../types/BookNowBtn";

const BookNowBtn: React.FC<BookNowBtnProps> = ({ classId }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();

  // Access classes from the Redux store
  const classData = useSelector((state: RootState) =>
    state.classes.classes.find(
      (classItem: ClassData) => classItem.id === classId
    )
  );

  // function to manage the booking confirmation modal
  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  // function to confirm the booking
  const handleConfirmBooking = () => {
    if (classData) {
      const updatedClassData = { ...classData, Booked: true };
      dispatch(BookingClass(updatedClassData));
    }
    setIsModalOpen(false);
  };

  return (
    // class book now button
    <div>
      <Button
        variant="ghost"
        size="sm"
        className="dark:text-white dark:hover:bg-gray-700"
        onClick={handleOpenModal}
      >
        Book now
      </Button>
      <ConfirmationModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onConfirm={handleConfirmBooking}
        title="Are you sure?"
        description="Are you sure you want to book this class? Once booked, you will receive a confirmation and a reminder closer to the class date."
      />
    </div>
  );
};

export default BookNowBtn;
