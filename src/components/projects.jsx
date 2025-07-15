import { ProjectCard } from "./projectcard";
import '../ui/projects.css'

export const Projects = () => {
    return (
        <div id='project'>
            <section>
                <div className="heading">
                    <h1>Projects</h1>
                    <div className="line"></div>
                </div>
                <div className="project-container">
                    <ProjectCard img="/image/one.png" alt="One Piece" title="One Piece Website" projectlink="https://onepieceprojects.netlify.app/" />
                    <ProjectCard img="/image/spotify.png" alt="Spotify" title="Spotify Clone" projectlink="https://spotify-clone-21.netlify.app/" />
                    <ProjectCard img="/image/Amazon.png" alt="Amazon" title="Amazon Clone" projectlink="https://clone-amazon-21.netlify.app/" />
                    <ProjectCard img="/image/tic.png" alt="Tic Tac Toe" title="Tic Tac Toe" projectlink="https://nirajtictactoe.netlify.app/" />
                    <ProjectCard img="/image/roc.png" alt="Rock-Paper-Scissor" title="Rock Paper Scissor" projectlink="https://gamerockpapers.netlify.app/" />
                    <ProjectCard img="/image/calculator.png" alt="Calculator" title="Calculator" projectlink="https://nirajcalc.netlify.app/" />
                    <ProjectCard img="/image/night.png" alt="Night Mode" title="Night Mode" projectlink="https://nightmodes.netlify.app/" />
                </div>
            </section>
        </div>
    );
};
