import React, { ReactElement } from 'react'
import styles from './Footer.module.css'
import Markdown from '@shared/Markdown'
import { useSiteMetadata } from '@hooks/useSiteMetadata'
import MarketStats from './MarketStats'
import BuildId from './BuildId'
import Links from './Links'

export default function Footer(): ReactElement {
  const { copyright } = useSiteMetadata()
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <BuildId />
      <MarketStats />

      <div className={styles.grid}>
        <Links />
        <div className={styles.copyright}>
          © {year} <Markdown text={copyright} />
        </div>
      </div>
    </footer>
  )
}
