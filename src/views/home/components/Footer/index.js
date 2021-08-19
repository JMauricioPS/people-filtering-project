export default function Footer({ isAtTop }) {
  return (
    <footer>
      <div
        className={`navbar fixed-bottom bg-black ${isAtTop && "visibility"}`}
      >
        <p className="footer-title">© 2021 Mauricio PS</p>
      </div>
    </footer>
  );
}
