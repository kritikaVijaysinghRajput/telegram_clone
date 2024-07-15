export const getInitials = (nameOrEmail) => {
    const name = nameOrEmail.trim().split(' ');
    if (name.length === 1) {
      return name[0].substring(0, 2).toUpperCase();
    } else {
      return name[0][0].toUpperCase() + name[1][0].toUpperCase();
    }
  };
  
  export const getRandomGradient = () => {
    const colors = [
      '#FF5733', '#FF8D1A', '#FFC300', '#DAF7A6', '#33FF57', 
      '#33FFF7', '#339CFF', '#8D33FF', '#FF33B8', '#FF3389'
    ];
    const randomColor1 = colors[Math.floor(Math.random() * colors.length)];
    const randomColor2 = colors[Math.floor(Math.random() * colors.length)];
    return `linear-gradient(135deg, ${randomColor1}, ${randomColor2})`;
  };
  
  export const formatDate = (dateString) => {
    const options = { hour: 'numeric', minute: 'numeric', hour12: true };
    const date = new Date(dateString);
    return date.toLocaleString('en-US', options);
  };
  