import { v4 as uuidv4 } from "uuid";
import { ClassData } from "../types/classDataTypes";

export const classData: ClassData[] = [
  {
    id: uuidv4(),
    name: "UI/UX Designing",
    date: new Date("2024-08-10T10:00:00"),
    staff: "Suriya R",
    staffDetails: "Additional details",

    imgSrc:
      "https://img.freepik.com/free-photo/portrait-optimistic-businessman-formalwear_1262-3600.jpg",
    Booked: true,
    Live: true,
  },
  {
    id: uuidv4(),
    name: "Graphic Designing",
    date: new Date("2024-08-10T12:00:00"),
    staff: "Leslie Alexander",
    staffDetails: "Additional details",

    imgSrc:
      "https://t3.ftcdn.net/jpg/05/65/15/20/360_F_565152029_AtUNb3iu02IuazIm7HuAN4dcTVP3Zn0F.webp",
    Booked: false,
    Live: false,
  },

  {
    id: uuidv4(),
    name: "Design Hierarchy",
    date: new Date("2024-08-11T14:00:00"),
    staff: "Courtney Henry",
    staffDetails: "Additional details",

    imgSrc:
      "https://www.shutterstock.com/image-photo/cheerful-arabian-indian-young-man-600nw-2183402233.jpg",
    Booked: false,
    Live: false,
  },
  {
    id: uuidv4(),
    name: "Basics of Frontend",
    date: new Date("2024-08-13T14:00:00"),
    staff: "Arlene McCoy",
    staffDetails: "Additional details",

    imgSrc:
      "https://media.licdn.com/dms/image/C4D12AQFBwRUfyBn5yQ/article-cover_image-shrink_600_2000/0/1520110535291?e=2147483647&v=beta&t=9zFPqxuqLOcN0xHA_v5jHZVEW5WNLMxhVCj4eOOwJFI",
    Booked: false,
    Live: false,
  },
  {
    id: uuidv4(),
    name: "Node.js Basics",
    date: new Date("2024-08-10T16:00:00"),
    staff: "Ayesha A",
    staffDetails: "Additional details",

    imgSrc:
      "https://media.licdn.com/dms/image/C5612AQHOzhZg_MFiDQ/article-cover_image-shrink_600_2000/0/1622942317805?e=2147483647&v=beta&t=RNK2scPCa1QiuHm9ahLRGXWX8aLUUpH7JoEYtpfE35w",
    Booked: false,
    Live: false,
  },
  {
    id: uuidv4(),
    name: "Database Management",
    date: new Date("2024-08-14T10:00:00"),
    staff: "Vikram S",
    staffDetails: "Additional details",

    imgSrc:
      "https://www.shutterstock.com/image-photo/cheerful-arabian-indian-young-man-600nw-2183402233.jpg",
    Booked: false,
    Live: false,
  },

  {
    id: uuidv4(),
    name: "TypeScript Essentials",
    date: new Date("2024-08-11T16:00:00"),
    staff: "Divya P",
    staffDetails: "Additional details",

    imgSrc:
      "https://i.pinimg.com/564x/98/51/1e/98511ee98a1930b8938e42caf0904d2d.jpg",
    Booked: false,
    Live: false,
  },
];
