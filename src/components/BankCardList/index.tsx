import { BankItem } from '@/types';
import styles from './styles.module.scss'

interface BankCardProps {
  banks: BankItem[]
}

const BankCardList = ({ banks }: BankCardProps) => {
  return (
    <div className={styles['c-bank-card']}>
      {
        banks.map(bank => (
          <div key={bank.id} className={styles['c-bank-card__item']}>
            <div className='px-3 py-2'>
              <div className='flex mb-3 h-16'>
                <img src={bank.img}/>
                <p className='my-auto ml-3'>{ bank.name }</p>
              </div>
              <div className='flex gap-10 mb-3'>
                <div>
                  <p className='text-xs text-current mb-1'>Suku bunga mulai dari</p>
                  <p className='text-base'>{ bank.interestRate }</p>
                </div>
                <div>
                  <p className='text-xs text-current mb-1'>Tenor</p>
                  <p className='text-base'>{ bank.tenor }</p>
                </div>
              </div>
              <div className='mb-3'>
                <p className='text-xs text-current mb-1'>Limit Kredit</p>
                <p className='text-base'>{ bank.tenor }</p>
              </div>
            </div>
            <div className='bg-blue-100 rounded-b-xl'>
              <div className='p-3 flex justify-between'>
                <button className='p-2 w-full bg-inherit text-blue-600'>{`Lihat ${bank.programs} Program`}</button>
                <button className='p-2 w-full bg-blue-600 rounded-lg text-white'>Saya Tertarik</button>
              </div>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default BankCardList