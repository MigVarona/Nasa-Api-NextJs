import Link from "next/link"

function Footer() {
  return (
    <footer className="footer p-10 text-neutral-content flex justify-center gap-40 flex-wrap">
      <nav>
        <header className="footer-title gap-10">Services</header>
        <Link href="/" className="link link-hover">Branding</Link>
        <Link href="/" className="link link-hover">Design</Link>
        <Link href="/" className="link link-hover">Marketing</Link>
        <Link href="/" className="link link-hover">Advertisement</Link>
      </nav>
      <nav>
        <header className="footer-title">Company</header>
        <Link href="/" className="link link-hover">About us</Link>
        <Link href="/" className="link link-hover">Contact</Link>
        <Link href="/" className="link link-hover">Jobs</Link>
        <Link href="/" className="link link-hover">Press kit</Link>
      </nav>
      <nav>
        <header className="footer-title">Legal</header>
        <Link href="/" className="link link-hover">Terms of use</Link>
        <Link href="/" className="link link-hover">Privacy policy</Link>
        <Link href="/" className="link link-hover">Cookie policy</Link>
      </nav>
    </footer>
  );
}

export default Footer;
