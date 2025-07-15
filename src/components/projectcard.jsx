import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

export const ProjectCard = ({ img, alt, title,projectlink }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { threshold: 0.8 }); // fires on scroll in/out
    const [inView, setInView] = useState(false);

    useEffect(() => {
        setInView(isInView);
    }, [isInView]);

    return (
        <motion.div
            ref={ref}
            className="project"
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
        >
            <img src={img} alt={alt} />
            <h3>{title}</h3>
            <a href={projectlink} target='_blank'>See Project</a>
        </motion.div>
    );
};
