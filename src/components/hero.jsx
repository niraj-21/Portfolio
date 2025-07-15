import '../ui/hero.css'

export const Hero = () => {
    return (
        <div id='home'>
            <div className="hero-container">
                <div className="hero-details">
                    <h1>Hi, I'm Niraj Mallah</h1>
                    <p>Web Developer | Frontend | Code + Creativity</p>
                    <p>I specialize in building responsive websites and web apps that are fast, accessible, and visually appealing.</p>
                    <p>With a strong foundation in HTML, CSS, JavaScript, React.</p>
                    <p>Let’s build something great together.</p>
                </div>
                <div className="hero-img">
                    <img src="/image/Niraj.jpeg" alt="niraj" />
                </div>
            </div>
        </div>
    )
}