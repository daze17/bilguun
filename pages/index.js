import About from '../components/About/About'
import Contact from '../components/Contact/Contact'
import Header from '../components/Header/Header'
import Work from '../components/Works/Work'
import { createClient } from 'contentful'
import Head from 'next/head'

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
      <Head>
        <title>Home | Bilguun</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Bilguun Baasansuren"/>
        <link rel="shortcut icon" href="https://cdn.myanimelist.net/r/360x360/images/characters/7/391655.jpg?s=4ef9dad16dcddb5da22698fe9881cd46"/>
      </Head>
      <Header/>
      <About/>
      <Work works={works}/>
      <Contact/>
    </div>
  )
}
