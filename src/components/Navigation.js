function Navigation(props) {
    const { currentNav, setCurrentNav } = props;
    return (
      <ul className="btn-list">
        <button className={`btn btn-dark ${currentNav === "about" && "btn-active"}`}onClick={() => setCurrentNav("about")}> About Me</button>
        <button className={`btn btn-dark ${currentNav === "portfoilo" && "btn-active"}`} onClick={() => setCurrentNav("portfoilo")}>Portfoilo</button>
        <button className={`btn btn-dark ${currentNav === "contact" && "btn-active"}`} onClick={() => setCurrentNav("contact")}>Contact</button>
        <button className={`btn btn-dark ${currentNav === "resume" && "btn-active"}`} onClick={() => setCurrentNav("resume")}>Resume</button>
      </ul>
    );
}

export default Navigation;