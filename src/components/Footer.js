const Footer = () => (
    <footer style={footerStyle}>
      <h4 style={{color: '393e46'}}>Copyright© 2021.Hansol.All rights reserved</h4>
    </footer>
)

const footerStyle = {
  position: 'fixed',
  bottom:0,
  left: 0,
  right: 0,
  width: '100%',
  backgroundColor: '#f6f6f6',
  marginTop: 20,
  zIndex: 100,
  textAlign: 'center'
}

export default Footer;