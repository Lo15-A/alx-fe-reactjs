const UserProfile = (props) => {
  return (
    <div
      style={{
        border: '1px solid gray',
        padding: '16px',
        margin: '20px auto',
        borderRadius: '8px',
        backgroundColor: '#f2f2f2',
        maxWidth: '400px',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <h2 style={{ color: 'blue', fontSize: '24px', marginBottom: '10px' }}>{props.name}</h2>
      <p style={{ fontSize: '16px', margin: '8px 0' }}>
        Age: <span style={{ fontWeight: 'bold' }}>{props.age}</span>
      </p>
      <p style={{ fontSize: '16px', margin: '8px 0', color: '#333' }}>
        Bio: {props.bio}
      </p>
    </div>
  );
};

export default UserProfile;
