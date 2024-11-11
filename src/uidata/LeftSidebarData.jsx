//============================= Import all the icons Images of dashboard ============================= 
import dashboardIcon from "../assets/default.svg";
import ecommerceIcon from "../assets/eCommerce.svg";
import projectsIcon from "../assets/project.svg";
import onlineCoursesIcon from "../assets/OnlineCourses.svg";
import userProfileIcon from "../assets/UserProfile.svg";
import accountIcon from "../assets/account.svg";
import corporateIcon from "../assets/corporate.svg";
import blogIcon from "../assets/blog.svg";
import socialIcon from "../assets/social.svg";


// ============================= dashboard menu =============================

const dashboardItems = [
    { text: "Default", icon: dashboardIcon },
    { text: "eCommerce", icon: ecommerceIcon },
    { text: "Projects", icon: projectsIcon },
    { text: "Online Courses", icon: onlineCoursesIcon },
  ];

//============================= page menu =============================

  const pageItems = [
    {
      text: "User Profile",
      icon: userProfileIcon,
      dropdowns: ["Overview", "Projects", "Campaigns", "Documents", "Followers"],
    },
    { text: "Account", icon: accountIcon },
    { text: "Corporate", icon: corporateIcon },
    { text: "Blog", icon: blogIcon },
    { text: "Social", icon: socialIcon },
  ];



  export{
    dashboardItems, pageItems,
  };