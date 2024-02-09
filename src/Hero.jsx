
import heroImg from './assets/hero.svg'
const Hero = () => {
    return <section className="hero">
        <div className="hero-center">
            <div className="hero-title">
              <h1>Contentful CMS</h1>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus voluptates dignissimos velit culpa iste numquam nemo provident, molestias consectetur laudantium dolore nam obcaecati blanditiis totam, ducimus facilis, eaque earum voluptatem?</p>  
            </div>
            <div className="img-container">
                <img src={heroImg} alt="woman and the browser" className="img" />
            </div>
        </div>
    </section>
};
export default Hero; 