const backToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
export const Footer = () => {
  return (
    <>
      <footer className="footer">
        <a
          href="https://twitter.com/victorroe_"
          target="_blank"
          className="line"
        >
          <span className="hover-underline-animation-footer">Twitter</span>
        </a>
        <a
          className="line"
          href="https://www.linkedin.com/in/victorrangelromero/"
          target="_blank"
        >
          <span className="hover-underline-animation-footer">LinkedIn</span>
        </a>
        <a
          className="line"
          href="https://www.instagram.com/victorroe_/"
          target="_blank"
        >
          <span className="hover-underline-animation-footer">Instagram</span>
        </a>

        <a className="pushRight" onClick={backToTop}>
          back to top
        </a>
      </footer>
    </>
  );
};
