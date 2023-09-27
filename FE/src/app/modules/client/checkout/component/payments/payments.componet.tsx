import { css } from '@emotion/react'
import { FunctionComponent } from 'react'
interface PaymentsProps {
  props?: any
}

const Payments: FunctionComponent<PaymentsProps> = () => {
  return (
    <div className='w-[40%]'>
      <div css={delivercss} className=' max-md:hidden'>
        <h3 className=''>Chọn hình thức thanh toán</h3>
        <div className='method-list'>
          <label htmlFor='' className='radio-button flex '>
            <input type='radio' name='payment-method' readOnly checked value='cod' />
            <span className='radio-fake my-auto'></span>
            <span className='label flex my-auto'>
              <div className='style-label flex align-center'>
                <img
                  className='method-icon mr-[12px] w-[32px] h-[32px]'
                  src='https://salt.tikicdn.com/ts/upload/92/b2/78/1b3b9cda5208b323eb9ec56b84c7eb87.png'
                  alt='icon'
                />
                <div className='method-content'>
                  <div className='method-content-title mt-[10px]'>
                    <span>Thanh toán tiền mặt khi nhận hàng</span>
                  </div>
                </div>
              </div>
            </span>
          </label>
          <label htmlFor='' className='radio-button flex '>
            <input type='radio' name='payment-method' readOnly value='vnpay' className='' />
            <span className='radio-fake my-auto'></span>
            <span className='label flex my-auto'>
              <div className='style-label flex align-center'>
                <img
                  className='method-icon mr-[12px] w-[32px] h-[32px]'
                  src='https://salt.tikicdn.com/ts/upload/77/6a/df/a35cb9c62b9215dbc6d334a77cda4327.png'
                  alt='icon'
                />
                <div className='method-content'>
                  <div className='method-content-title mt-[10px]'>
                    <span>Thanh toán bằng VNPAY</span>
                  </div>
                </div>
              </div>
            </span>
          </label>
        </div>
      </div>

    </div>
  )
}

export default Payments

const delivercss = css`
  background-color: var(--color-white);
  border-radius: 4px;
  font-size: 16px;
  padding:50px 0;
  h3 {
    color: rgb(56, 56, 61);
    font-weight: 700;
    font-size: 22px;
    line-height: 24px;
    margin-bottom: 16px;
  }
  .method-list {
    position: relative;
  }
  .radio-button {
    align-item: center;
    height: 64px;
    cursor: pointer;
  }

  input[type='radio']:checked + .radio-fake {
    border-color: rgb(11, 116, 229);
  }

  input[type='radio']::before {
    
    content: '';
    width: 8px;
    height: 8px;
  }
  input[type='radio'] {
    width: 18px;
    height: 18px;
    margin-right: 8px;
    position: relative;
    z-index: 1;
    cursor: pointer;
    margin: auto 8px;
  }
`
