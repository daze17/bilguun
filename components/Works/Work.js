import styles from './Work.module.css'
import WorkCard from './WorkCard'

export default function Projects({works}) {
    console.log(works)
    return (
        <div id="works" className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.text}>
                    <h1 className="title" data-aos="fade-up">WORKS</h1>
                    {works.map(work => (
                        <WorkCard key={work.sys.id} work={work}/>
                    ))}
                </div>
            </div>
        </div>
    )
}