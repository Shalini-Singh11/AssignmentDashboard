//============================= Notifications Images =============================
import bugImg from "../assets/bug.svg";
import BroadcastImg from "../assets/Broadcast.svg";
import UserRegisterImg from "../assets/UserRegister.svg";
//============================= Activites Images =============================
import activitiesImg1 from "../assets/activitiesImg1.svg";
import activitiesImg2 from "../assets/activitiesImg2.svg";
import activitiesImg3 from "../assets/activitiesImg3.svg";
import activitiesImg4 from "../assets/activitiesImg4.svg";
import activitiesImg5 from "../assets/activitiesImg5.svg";
//============================= Contact Images =============================
import ContactImg1 from "../assets/ContactImg1.svg";
import ContactImg2 from "../assets/ContactImg2.svg";
import ContactImg3 from "../assets/ContactImg3.svg";
import ContactImg4 from "../assets/ContactImg4.svg";
import ContactImg5 from "../assets/ContactImg5.svg";
import ContactImg6 from "../assets/ContactImg6.svg";


  //============================= Data of notifications, activities, and contacts =============================

  const notifications = [
    { text: 'You have a bug that needs...', time: 'Just now', img: bugImg },
    { text: 'New user registered', time: '59 minutes ago', img: BroadcastImg },
    { text: 'You have a bug that needs...', time: '12 hours ago', img: bugImg },
    { text: 'Andi Lane subscribed to you', time: 'Today, 11:59 AM', img: UserRegisterImg },
  ];

  const activities = [
    { text: 'You have a bug that needs...', time: 'Just now', img: activitiesImg1 },
    { text: 'Released a new version', time: '59 minutes ago', img: activitiesImg2 },
    { text: 'Submitted a bug', time: '12 hours ago', img: activitiesImg3 },
    { text: 'Modified A data in Page X', time: 'Today, 11:59 AM', img: activitiesImg4 },
    { text: 'Deleted a page in Project X', time: 'Feb 2, 2023', img: activitiesImg5 },
  ];

  const contacts = [
    { name: 'Natali Craig', img: ContactImg1 },
    { name: 'Drew Cano', img: ContactImg2 },
    { name: 'Orlando Diggs', img: ContactImg3 },
    { name: 'Natali Craig', img: ContactImg4 },
    { name: 'Drew Cano', img: ContactImg5 },
    { name: 'Orlando Diggs', img: ContactImg6 },
  ];


  export { 
    notifications, activities, contacts,
  };