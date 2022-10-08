function Navigation(props) {
    const { currentNav, setCurrentNav } = props;
    return (
      // This is the for the navgigation bar on top button and also the className of thr btn color
      <ul className="btn-list">
        <button className={`btn btn-light ${currentNav === "about" && "btn-active"}`}onClick={() => setCurrentNav("about")}> About Me</button>
        <button className={`btn btn-light ${currentNav === "portfolio" && "btn-active"}`} onClick={() => setCurrentNav("portfolio")}>Portfoilo</button>
        <button className={`btn btn-light ${currentNav === "contact" && "btn-active"}`} onClick={() => setCurrentNav("contact")}>Contact</button>
        <button className={`btn btn-light ${currentNav === "resume" && "btn-active"}`} onClick={() => setCurrentNav("resume")}>Resume</button>
      </ul>
    );
}

export default Navigation;