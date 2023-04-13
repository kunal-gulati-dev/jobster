import main from "../assets/images/main.svg"
import Wrapper from "../assets/wrappers/LandingPage"
import {Logo} from '../components' 

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint
            laborum illo ipsa officiis aliquam a animi harum repellat eius
            quidem.orum illo ipsa officiis aliquam a animi harum repellat eius
            quidem.
          </p>
          <button className="btn btn-hero">Login/Register</button>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
}



export default Landing