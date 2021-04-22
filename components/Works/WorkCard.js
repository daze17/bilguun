import styles from './WorkCard.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import BrowserFrame from '../Frames/BrowserFrame'

export default function WorkCard({ work }) {
    const { title, text, demoLink, githubLink, slug, stack, thumbnail } = work.fields
    return (
        <>
        <div className={styles.container}>
            <h1 className={styles.project_title}>{title}</h1>
            <div className={styles.wrapper}>
                <div>
                    {documentToReactComponents(text)}
                    <div className={styles.details}>
                        <Link href={'/projects/' + slug}>
                            <a>Details...</a>
                        </Link>
                    </div> 
                </div>
                <div className={styles.links}> 
                    <a href={githubLink} target="_blank" rel="noreferrer"> Github </a>
                    <a href={demoLink} target="_blank" rel="noreferrer"> Demo Link </a>
                </div>   
            </div>
            <div className={styles.thumbnail}>
                <Link href={'/projects/' + slug}>
                    <a>
                    <BrowserFrame>
                        <Image src={'https:' + thumbnail.fields.file.url}
                        width={thumbnail.fields.file.details.image.width} 
                        height={thumbnail.fields.file.details.image.height}/>
                    </BrowserFrame>
                    </a>
                </Link>
                <div className={styles.tools}>
                     {stack.map(tool => (
                         <span key={tool}>
                             {tool}
                         </span>
                     ))}
                </div>
            </div>
        </div>
        
        <hr/>
        </>
    )
}
