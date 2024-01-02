function Footer() {
    return ( 
    
    <footer className="footer p-10  text-neutral-content flex justify-center gap-40 flex-wrap">
    <nav>
      <header className="footer-title gap-10">Services</header> 
      <a className="link link-hover">Branding</a>
      <a className="link link-hover">Design</a>
      <a className="link link-hover">Marketing</a>
      <a className="link link-hover">Advertisement</a>
    </nav> 
    <nav>
      <header className="footer-title">Company</header> 
      <a className="link link-hover">About us</a>
      <a className="link link-hover">Contact</a>
      <a className="link link-hover">Jobs</a>
      <a className="link link-hover">Press kit</a>
    </nav> 
    <nav>
      <header className="footer-title">Legal</header> 
      <a className="link link-hover">Terms of use</a>
      <a className="link link-hover">Privacy policy</a>
      <a className="link link-hover">Cookie policy</a>
    </nav>
  </footer> );
}

export default Footer;