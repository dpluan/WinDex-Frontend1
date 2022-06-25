import { useState } from 'react'
import { ITransactions } from 'templates/dashboard/blocks/Transactions/ITransactions';

import Button from '../Button'
import Dropdown from '../Dropdown'
import Icon from '../Icon'
import Input from '../Input'
import Link from '../Link'
import Range from '../Range'
import * as S from './styles'

export type MarketOrderActionProps = {
  type?: 'Sell' | 'Buy',
  add?: (transaction: ITransactions) => void
}
const MarketOrderAction = ({ type = 'Buy', add }: MarketOrderActionProps) => {
  const [state, setState] = useState<number>(50);
  const [price, setPrice] = useState<number>(0);
  const [amount, setAmount] = useState<number>(0);

  const onChangePrice = (e) => {
    setPrice(e.target.value);
  }

  const onChangeAmount = (e) => {
    setAmount(e.target.value);
  }

  const handleSubmit = () => {
    const transaction = {
      id: (Math.random()*(1000-10)) + 10,
      date: new Date("2020-01-01"),
      pair: "DOT",
      coin: "BTC",
      side: type,
      price: price,
      fee: 0.000129,
      total: amount,
      status: true
    };

    add(transaction);
  };

  return (
    <S.WrapperOrder>
      <S.ContainerWallet>
        <Icon source="Wallet" background="DarkGray" size="Medium" />
        <S.WrapperBalance>
          <span>Available</span>
          <S.Span>0.93871332 DOT</S.Span>
        </S.WrapperBalance>
      </S.ContainerWallet>
      <S.ContainerForm>
        <form onSubmit={() => console.log("Submiting..")}>
          <Input label="Price" icon="ArrowVerticalTop" placeholder="0.0000000" type="text" inputInfo="BTC" fullWidth={true} onChange={onChangePrice} />
          <Input label="Amount" icon="ArrowVerticalBottom" placeholder="0.0000000" type="text" inputInfo="DOT" fullWidth={true} onChange={onChangeAmount}/>
          <S.WrapperActions>
            <p>Equivalent ~
            <span> $92.54</span>
            </p>
            <Dropdown title="Fee 0.0001 BTC">
              <Link title="Custom Fee" />
            </Dropdown>
          </S.WrapperActions>
          <Range />
          <Button type="button" title={type} fullWidth={true} click={handleSubmit} />
        </form>
      </S.ContainerForm>
    </S.WrapperOrder>
  )
}

export default MarketOrderAction
