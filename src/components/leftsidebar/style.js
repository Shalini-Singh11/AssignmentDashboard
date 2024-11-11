export const arrowStyle = (isOpen) => ({
    fontSize: 12,
    color: "lightgrey",
    marginRight: "8px",
    transform: isOpen ? "rotate(90deg)" : "rotate(0deg)", 
    transition: "transform 0.3s ease", 
  });
  
  export const listItemStyle = {
    paddingX: "9px",
    paddingY: "2px", 
  };
  
  export const collapseStyle = {
    paddingLeft: "32px", 
  };
  
  export const submenuStyle = {
    paddingY: "3px", 
  };
  