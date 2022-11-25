import './App.css';

function App() {
  return (
    <div>
      <span className="rectFirstBackground"></span>
      <div>
          <span className="rect1"></span>
          <span className="rect2"></span>
      </div>
      <div className="hello"><p className="textHello">Hello;</p></div>
      <div className="info"><p className="infoText">I’m Matin Mammadli.
          I like making fun, interactive things with code,
          and I also try <br/>to design.</p>
      </div>
      <div className="worksHeading"><p className="worksText">Works</p></div>
      <div className="worksSection">
          <div className='wrapElements'>
            <span className="wrapElementBackground"></span>
            <span className="wrapElementBackground"></span>
            <span className="wrapElementBackground"></span>
            <span className="wrapElementBackground"></span>
            <span className="wrapElementBackground"></span>
            <span className="wrapElementBackground"></span>
          </div>
      </div>
      <div className="blurOnWrappedElements"><p className="textOnBlur">I’ve just started working on projects but you can check my <a href='https://github.com/Soganyy' className='gitHubLink'>GitHub</a>.</p></div>

    </div>
  );
}

export default App;
