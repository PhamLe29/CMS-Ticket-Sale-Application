import React, { useEffect, useState } from 'react'
import { Checkbox, TimePicker, DatePicker, Select, Modal, Button, Row, Col, Form, } from 'antd'
import moment from 'moment'
import 'antd/dist/antd.css'
import './UpdateTicket.scss'
import { connect } from 'react-redux'
import { updateTicket } from '../../store/actions/ticketActions'

const UpdateTicket = (props: any) => {
  const [disableA, setDisableA] = useState(true)
  const [disableB, setDisableB] = useState(true)
  const [ticket, setTicket] = useState(props.currentTicket)
  const { Option } = Select

  const [nameEvent, setNameEvent] = useState(ticket.nameEvent)
  const [timeUse, setTimeUse] = useState(
    moment(ticket.timeUse.toDate()).format('DD/MM/YYYY')
  )
  const [timeExpired, setTimeExpired] = useState(
    moment(ticket.timeExpired.toDate()).format('DD/MM/YYYY')
  )
  const [price, setPrice] = useState(ticket.price)
  const [priceCombo, setPriceCombo] = useState(ticket.priceCombo)
  const [status, setStatus] = useState(ticket.status)
  const [ticketNumber, setTicketNumber] = useState(ticket.ticketNumber)

  const handleUpdateSubmit = () => {
    const dataUpdate = {
      id: ticket.id,
      nameEvent: nameEvent,
      timeUse: timeUse,
      timeExpired: timeExpired,
      price: price,
      priceCombo: priceCombo,
      status: status,
      ticketNumber: ticketNumber,
    }

    props.updateTicketData(dataUpdate)
    props.onHideUpdate()
  }

  const handleHideModal = () => {
    props.onHideUpdate()
  }

  const handleChange = (value: any) => {
    setStatus(value)
    console.log(`selected ${value}`)
  }

  const changeDisableA = (e: any) => {
    if (e.target.checked === true) {
      setDisableA(false)
    } else {
      setDisableA(true)
    }
  }

  const changeDisableB = (e: any) => {
    if (e.target.checked === true) {
      setDisableB(false)
    } else {
      setDisableB(true)
    }
  }

  const handleOnChangeDateUse = (date: any) => {
    setTimeUse(date.toDate())
  }

  const handleOnChangeDateExpired = (date: any) => {
    setTimeExpired(date.toDate())
  }

  useEffect(() => {
    setTicket(props.currentTicket)
  }, [props.currentTicket])

  return (
    <>
      <Modal
        title='C???p nh???t th??ng tin g??i v??'
        visible={props.show}
        footer={null}
        width={758}
        centered
      >
        <Row className='info-ticket'>
          <Col span={12} className='info-title'>
            <Col span={24} className='title'>
              M?? s??? ki???n<span className='warning'>*</span>
            </Col>

            <Col span={24} className='info-input'>
              <input
                type='text'
                value={ticket.bookingcode ? ticket.bookingcode : ''}
                disabled
              />
            </Col>
          </Col>

          <Col span={12} className='info-title'>
            {ticket.name && ticket.name === 'G??i s??? ki???n' ? (
              <>
                <Col span={24} className='title'>
                  T??n s??? ki???n
                </Col>
                <Col span={24} className='info-input event'>
                  <input
                    type='text'
                    value={nameEvent ? nameEvent : ''}
                    onChange={(e) => setNameEvent(e.target.value)}
                  />
                </Col>
              </>
            ) : (
              ''
            )}
          </Col>
        </Row>

        <Row className='day'>
          <Col span={12}>
            <Row>
              <Col span={24} className='title'>
                Ng??y ??p d???ng
              </Col>
              <Col span={12}>
                <DatePicker
                  placeholder={timeUse}
                  format='DD/MM/YYYY'
                  onChange={(date) => handleOnChangeDateUse(date)}
                />
              </Col>
              <Col span={12}>
                <TimePicker placeholder='hh:mm:ss' />
              </Col>
            </Row>
          </Col>

          <Col span={12}>
            <Row>
              <Col span={24} className='title'>
                Ng??y h???t h???n
              </Col>
              <Col span={12}>
                <DatePicker
                  placeholder={timeExpired}
                  format='DD/MM/YYYY'
                  onChange={(date) => handleOnChangeDateExpired(date)}
                />
              </Col>
              <Col span={12}>
                <TimePicker placeholder='hh:mm:ss' />
              </Col>
            </Row>
          </Col>
        </Row>

        <Row className='ticket-price'>
          <Col span={24} className='title'>
            Gi?? v?? ??p d???ng
          </Col>

          <Col span={24} className='one-ticket'>
            <Checkbox onChange={changeDisableA}>
              V?? l??? (vn??/v??) v???i gi??{' '}
              <input
                className='one-ticket-input'
                type='number'
                placeholder='Gi?? v??'
                disabled={disableA}
                value={price}
                onChange={(e) => setPrice(parseInt(e.target.value))}
              />{' '}
              / v??
            </Checkbox>
          </Col>

          <Col span={24} className='combo-ticket'>
            <Checkbox onChange={changeDisableB}>
              Combo v?? v???i gi??{' '}
              <input
                className='combo-ticket-input'
                type='number'
                placeholder='Gi?? v??'
                disabled={disableB}
                value={priceCombo}
                onChange={(e) => setPriceCombo(parseInt(e.target.value))}
              />{' '}
              /{' '}
              <input
                className='number-ticket'
                type='number'
                placeholder='S??? v??'
                disabled={disableB}
                value={ticketNumber}
                onChange={(e) => setTicketNumber(parseInt(e.target.value))}
              />{' '}
              v??
            </Checkbox>
          </Col>
        </Row>

        <Row className='status'>
          <Col span={24} className='title'>
            T??nh tr???ng
          </Col>

          <Col span={24} className='select'>
            <Select
              value={status}
              style={{ width: 176 }}
              onChange={handleChange}
            >
              <Option value='??ang s??? d???ng'>??ang s??? d???ng</Option>
              <Option value='T???t'>T???t</Option>
            </Select>
          </Col>

          <Col span={24}>
            <span className='warning'>*</span>
            <span className='info-warning'>
              <i>l?? th??ng tin b???t bu???c</i>
            </span>
          </Col>
        </Row>

        <Row>
          <Col span={24} className='button'>
            <Button className='cancel' onClick={handleHideModal}>
              H???y
            </Button>
            <Button className='submit' onClick={handleUpdateSubmit}>
              L??u
            </Button>
          </Col>
        </Row>
      </Modal>
    </>
  )
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    updateTicketData: (data: any) => dispatch(updateTicket(data)),
  }
}

export default connect(null, mapDispatchToProps)(UpdateTicket)
