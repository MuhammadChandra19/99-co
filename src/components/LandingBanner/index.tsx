import styles from './styles.module.scss'

export default function LandingBaner() {
  return (
    <div className={styles['c-banner']}>
    <img src="/99_hero.png" className={styles['c-banner__image']} />
    <div className="c-container">
      <div className={styles['c-banner__content']}>
        <h2 className={styles['c-banner__content--title']}>Kredit Multiguna R123</h2>
        <h4 className={styles['c-banner__content--desc']}>Dapatkan pembiayaan untuk berbagai kebutuhan dengan gadai sertifikat rumah</h4>
      </div>
    </div>
  </div>
  )
}