import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "../../shadcncomponents/ui/button";
import ConfirmationModal from "../popupModal/confirmBookNow";
import { BookingClass } from "../../redux/classSlice";
import { RootState } from "../../redux/store"; // Adjust the path according to your store setup
import { ClassData } from "../../types/classDataTypes";

interface BookNowBtnProps {
  classId: string; // Pass the class ID as a prop
}

const BookNowBtn: React.FC<BookNowBtnProps> = ({ classId }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();

  // Access classes from the Redux store
  const classData = useSelector((state: RootState) =>
    state.classes.classes.find(
      (classItem: ClassData) => classItem.id === classId
    )
  );

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const handleConfirmBooking = () => {
    if (classData) {
      const updatedClassData = { ...classData, Booked: true };
      dispatch(BookingClass(updatedClassData));
    }
    setIsModalOpen(false);
  };

  return (
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
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
      />
    </div>
  );
};

export default BookNowBtn;
