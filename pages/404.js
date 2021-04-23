import Link from 'next/link'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import styles from '../styles/Error.module.css'
import Head from 'next/head'

export default function NotFound() {
    const router = useRouter()
    useEffect(() => {
        setTimeout(() => {
            router.push('/')
        }, 4000)
    }, [])

    return (
        <>
            <Head>
            <title>404 | Error</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <div className={styles.container}>
                <div className={styles.not_found}>
                    <h1>404</h1>
                    <h2>Oops! That page cannot be found :(</h2>
                    <p>Redirecting to <Link href="/"><a>Homepage</a></Link>...</p>
                </div>
            </div>
        </>
    )
}
