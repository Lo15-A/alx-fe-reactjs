function MainContent() {
  const mainStyle = {
    padding: '20px',
    backgroundColor: '#f0f8ff',
    fontSize: '18px',
    textAlign: 'center',
    color: '#333',
    margin: '20px auto',
    maxWidth: '600px',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)'
  };

  return (
    <main style={mainStyle}>
      <p>I love to visit New York, Paris, and Tokyo.</p>
    </main>
  );
}

export default MainContent;
