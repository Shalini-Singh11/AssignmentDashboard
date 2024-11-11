export const tableContainStyle  = (theme) => ({
    [theme.breakpoints.down("sm")]: {
        width: "365px",
        overflowX: "auto",
      },
  });

export const pageHeaderStyle = {
    marginBottom: '16px',
    color: 'black',
    fontWeight: 'bold',
  };
  
  export const filterBoxStyle = (isDarkMode) => ({
    backgroundColor: isDarkMode ? '#333333' : '#f5f5f5',
    padding: 2 ,
    borderRadius: 1,
    marginBottom: 2,
    color: isDarkMode ? '#FFFFFF0D' : 'black',
  });

  export const tableRowStyle = {
    '&:hover': {
      backgroundColor: '#f4f4f4',
    },
  };
  
  export const statusColorStyle = (status, isDarkMode) => {
    switch (status) {
      case 'In Progress':
        return { color: isDarkMode ? '#8A8CD9' : '#8A8CD9' };
      case 'Complete':
        return { color: isDarkMode ? '#4AA785' : '#4AA785' };
      case 'Pending':
        return { color: isDarkMode ? '#59A8D4' : '#59A8D4' };
      case 'Approved':
        return { color: isDarkMode ? '#FFC555' : '#FFC555' };
      case 'Rejected':
        return { color: isDarkMode ? '#FFFFFF66' : '#1C1C1C66' };
      default:
        return { color: 'black' };
    }
  };
  
  export const modalBoxStyle = (isDarkMode) => ({
    padding: '32px',
    backgroundColor: isDarkMode ? '#333333' : 'white',
    width: '400px',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '8px',
    boxShadow: '24px',
    color: isDarkMode ? '#FFFFFF' : 'black',
  });
  
  export const modalTextFieldStyle = {
    margin: '8px 0',
    color: 'black',
  };
  
  export const formControlStyle = {
    margin: '8px 0',
  };
  
  export const buttonStyle = {
    marginTop: '16px',
    width: '100%',
  };
  