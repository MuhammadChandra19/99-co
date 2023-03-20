import styles from './styles.module.scss'

type RequisiteItemType = {
  image: string
  text: string
}

const LandingRequisite = () => {
  const loadContents = ():RequisiteItemType[]  => (
    [
      {
        image: '/renovasi-rumah.png',
        text: 'Renovasi rumah'
      },
      {
        image: '/modal-usaha.png',
        text: 'Modal Usaha'
      },
      {
        image: '/beli-properti-baru.png',
        text: 'Beli Properti Baru'
      },
      {
        image: '/dana-pendidikan.png',
        text: 'Dana Pendidikan'
      },
      {
        image: '/dana-kesehatan.png',
        text: 'Dana Kesehatan'
      }
    ]
  )

  return (
    <div className={`${styles['c-requisite']} c-container`}>
      <div className={styles['c-requisite__title']}>
        <h2>Penuhi Segala Kebutuhan</h2>
      </div>
      <div className={styles['c-requisite__desc']}>
        <p>Banyak kebutuhan yang bisa dipenuhi hanya dengan menjaminkan properti kamu </p>
      </div>
      <div className='relative overflow-x-scroll'>
        <div className={styles['c-requisite__content']}>
          {
            loadContents().map((item, idx) => (
              <div key={`${item.text}-${idx}`} className={styles['c-requisite__content--item']}>
                <img src={item.image} alt={item.text} className="rounded-b-lg rounded-t-lg"/>
                <div className={styles['c-requisite__content--item__text']}>
                  { item.text }
                </div>
              </div>
            ))
          }
      </div>
      </div>
    </div>
  )
}

export default LandingRequisite