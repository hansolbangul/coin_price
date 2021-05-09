const Header = () => (
    <header style={headerStyle}>
      <h1 style={{color: '#f9f7f7'}}>코인 시세 정보</h1>
    </header>
)

const headerStyle = {
  position: 'fixed',
  top:0,
  left: 0,
  right: 0,
  width: '100%',
  backgroundColor: '#3f72af',
  marginBottom: 20,
  zIndex: 100,
  textAlign: 'center',
}

export default Header;