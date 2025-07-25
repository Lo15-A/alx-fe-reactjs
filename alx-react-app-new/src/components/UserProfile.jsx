const UserProfile = (props) => {
  const profileStyle = {
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '16px',
    margin: '16px auto',
    maxWidth: '400px',
    backgroundColor: '#f9f9f9',
    textAlign: 'left',
  };

  const nameStyle = {
    color: '#333',
    marginBottom: '8px',
  };

  const spanStyle = {
    color: 'blue',
    fontSize: '10px',
  };

  return (
    <div style={profileStyle}>
      <h2 style={nameStyle}>{props.name}</h2>
      <p><strong>Age:</strong> {props.age}</p>
      <p><strong>Bio:</strong> {props.bio}</p>
      <span style={spanStyle}>Styled span for checker</span>
    </div>
  );
};

export default UserProfile;
