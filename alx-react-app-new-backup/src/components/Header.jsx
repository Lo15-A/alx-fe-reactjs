function Header() {
  const headerStyle = {
    backgroundColor: 'navy',
    color: 'white',
    padding: '20px',
    textAlign: 'center'
  };

  return (
    <header style={headerStyle}>
      <h1>Welcome to my site</h1>
    </header>
  );
}

export default Header;
