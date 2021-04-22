import { createClient } from 'contentful'
import Image from 'next/image'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import styles from '../../styles/Project.module.css'
import Skeleton from '../../components/Skeleton';
import BrowserFrame from '../../components/Frames/BrowserFrame';
import TabletFrame from '../../components/Frames/TabletFrame';

const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
});

export const getStaticPaths = async () => {
  const res= await client.getEntries({
    content_type: 'projects'
  })

  const paths = res.items.map(item => {
    return {
      params: { slug: item.fields.slug }
    }
  })

  return{
    paths: paths,
    fallback: true
  }
}
    // single item iig ni zaaj ugnu params ni
export async function getStaticProps({ params }) {
  const { items } = await client.getEntries({
    content_type: 'projects',
    // limit togtooj bn
    'fields.slug': params.slug
  })

  if(!items.length) {
    return{
      redirect: {
        destination: '/404',
        permanent: false
      }
    }
  }

  return{
    props: { projects: items[0] },
    revalidate: 1
  }

}

export default function RecipeDetails({ projects }) {
  if(!projects) return <Skeleton/>

  const { title, stack, thumbnail, text, briefText, featureImage, featureImage2, mobile, tablet } = projects.fields
  console.log(projects)
  return (
    <div className={styles.container}>
                
        <div className={styles.section_top}> 
            <div className={styles.wrapper}>
              <div className={styles.grid}>
                <div className={styles.title_container}>
                  <h1 className={styles.project_title}>{title}</h1>
                  {documentToReactComponents(text)}
                  <div className={styles.stacks}>
                  {stack.map(tool => (
                      <h3 key={tool}>{tool}</h3>
                  ))}
                  </div>
                </div>
                <div className={styles.image_container}>
                  <div className={styles.block}>
                    <BrowserFrame>
                    <Image src={'https:' + thumbnail.fields.file.url} 
                    width={thumbnail.fields.file.details.image.width}
                    height={thumbnail.fields.file.details.image.height}/>
                    </BrowserFrame>
                  </div>
                </div>
            </div>
            </div>
        </div>

        
        <div className={styles.section_middle}> 
            <div className={styles.wrapper}>
              <div className={styles.grid}>
                <div className={styles.summary}>
                  <h2>IN BRIEF</h2>
                  {documentToReactComponents(briefText)}
                </div>
              </div>



              <div className={styles.album}>
                {/* image 1 */}
                <div className={styles.image_wrapper}>
                  <BrowserFrame>
                  <div className={styles.field_image}>
                      <Image src={'https:' + featureImage.fields.file.url} 
                        width={featureImage.fields.file.details.image.width}
                        height={featureImage.fields.file.details.image.height}
                        placeholder="placeholder"/>
                  </div>
                  </BrowserFrame>
                </div>
                <div style={{marginTop: '5rem'}}>

                {/* image 2 */}
                <div className={styles.image_wrapper}>
                  <BrowserFrame>
                  <div className={styles.field_image}>
                    <Image src={'https:' + featureImage2.fields.file.url} 
                      width={featureImage2.fields.file.details.image.width}
                      height={featureImage2.fields.file.details.image.height}/>
                  </div>
                  </BrowserFrame>
                </div>
                </div>


                {/* <br/>
                <div style={{width: '1100px', height: '743px'}}>
                    <div className={styles.mobile_container}>
                        <div className={styles.tablet}>
                        <TabletFrame>
                        <Image src={'https:' + tablet.fields.file.url} 
                        width={tablet.fields.file.details.image.width}
                        height={tablet.fields.file.details.image.height}/>
                        </TabletFrame>
                        </div>

                        <div className={styles.mobile}>
                        <TabletFrame>
                          <Image src={'https:' + mobile.fields.file.url} 
                          width={mobile.fields.file.details.image.width}
                          height={mobile.fields.file.details.image.height}/>
                        </TabletFrame>
                        </div>
                    </div>
                </div> */}
              </div>
            </div> 
        </div>
    </div>
  )
}