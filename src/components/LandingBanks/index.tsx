import { BankItem } from '@/types'
import axios from 'axios'
import { useEffect, useState } from 'react'
import BankCardList from '../BankCardList'
import styles from './styles.module.scss'

const LandingBanks = () => {
  const [data, setData] = useState([] as BankItem[])
  const [isLoading, setLoading] = useState(false)

  const loadBanks = async () => {
    setLoading(true)
    try {
      const { data } = await axios.get('https://api.npoint.io/32bbcc24b64b7d176c62')
      console.log(data)
      const bankList = data.data.map((bank:any) => mapBankItem(bank))
      setData(bankList)
    } catch(e) {
    } finally {
      setLoading(false)
    }
  }

  const mapBankItem = ({ attributes, id} : any): BankItem => {
    let minInterest = Number.MAX_VALUE
    let interestRate = ''
    let tenor = ''
    attributes.bankRates.forEach((rate: any) => {
      if(rate.rate < minInterest) {
        minInterest = rate.rate
        interestRate = rate.interestRate
        tenor = rate.tenor
      }
    });
    return {
      id,
      img: attributes.imageLogo.data.attributes.url,
      interestRate, 
      tenor,
      programs: attributes.bankRates.length,
      name: attributes.bankName
    }
  }

  useEffect(() => {
    loadBanks()
  }, [])

  return (
    <div className={`${styles['c-banks']} c-container`}>
      <div className={styles['c-banks__title']}>
        Pillihan Bank Kredit Multiguna
      </div>
      <div className={styles['c-banks__desc']}>
        Daftar bank dengan bunga KPR menarik. Cek pilihannya hanya di Rumah123!
      </div>
      {
        isLoading 
          ? <div> loading </div> 
          : <BankCardList banks={data}/>
      }
    </div>
  )
}

export default LandingBanks