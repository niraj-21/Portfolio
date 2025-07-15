import '../ui/skills.css'

export const Skills = () => {
    return (
        <div>
        <section id='skills'>
                <div className="heading">
                    <h1>Skills</h1>
                    <div className="line"></div>
                </div>
                <div className='skills-container'>
                    <div className="technologies">
                        <div className="tech-logo">
                            <img src="/image/html.png" alt="html" />
                            <div className="percent" id='html'></div>
                            <div style={{color:'white',fontSize:'4vmin'}}>80%</div>
                        </div>
                        <h4>HTML</h4>
                    </div>
                    <div className="technologies">
                        <div className="tech-logo">
                            <img src="/image/css.png" alt="css" />
                            <div className="percent" id='css'></div>
                            <div style={{color:'white',fontSize:'4vmin'}}>70%</div>
                        </div>
                        <h4>CSS</h4>
                    </div>
                    <div className="technologies">
                        <div className="tech-logo">
                            <img src="/image/js.png" alt="js" />
                            <div className="percent" id='js'></div>
                            <div style={{color:'white',fontSize:'4vmin'}}>75%</div>
                        </div>
                        <h4>JAVASCRIPT</h4>
                    </div>
                    <div className="technologies">
                        <div className="tech-logo">
                            <img src="/image/react.png" alt="react" />
                            <div className="percent" id='react'></div>
                            <div style={{color:'white',fontSize:'4vmin'}}>70%</div>
                        </div>
                        <h4>REACT JS</h4>
                    </div>
                </div>
            </section>
        </div>
    )
}