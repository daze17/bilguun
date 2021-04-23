import styles from './Work.module.css'
import WorkCard from './WorkCard'

export default function Projects({works}) {
    return (
        <div id="projects" className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.text}>
                    <h1 className="title" data-aos="fade-up">PROJECTS</h1>
                    {works.map(work => (
                        <WorkCard key={work.sys.id} work={work}/>
                    ))}
                </div>
            </div>
        </div>
    )
}