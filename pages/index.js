import About from '../components/About/About'
import Contact from '../components/Contact/Contact'
import Header from '../components/Header/Header'
import Work from '../components/Works/Work'
import { createClient } from 'contentful'

export async function getStaticProps(){
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });
  const res = await client.getEntries({ content_type: 'projects' })

  return{
    props: { works: res.items },
    revalidate: 1
  }

}

export default function Home({works}) {
  return (
    <div>
      <Header/>
      <About/>
      <Work works={works}/>
      <Contact/>
    </div>
  )
}
