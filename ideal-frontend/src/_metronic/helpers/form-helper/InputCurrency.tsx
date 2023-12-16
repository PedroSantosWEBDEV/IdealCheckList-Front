import {FC, useState, HTMLProps} from 'react'
import {useIntl} from 'react-intl'

type Props = Omit<HTMLProps<HTMLInputElement>, 'onChange'> & {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  value?: string | number
}

const InputCurrency: FC<Props> = ({onChange, value = '', ...props}) => {
  const intl = useIntl()
  const [currencyValue, setCurrencyValue] = useState<string>(
    new Intl.NumberFormat(intl.locale, {minimumFractionDigits: 2}).format(parseFloat(value.toString()))
  )

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    var value = event.target.value

    value = value.replace(/\D/g, '')

    if (value.length) {
      const options = {minimumFractionDigits: 2}
      const result = new Intl.NumberFormat(intl.locale, options).format(parseFloat(value) / 100)

      setCurrencyValue(result)

      onChange({
        ...event,
        target: {
          ...event.target,
          value: result,
        },
      })
    }
  }

  return <input type='text' onChange={handleChange} value={currencyValue} {...props} />
}

export {InputCurrency}
