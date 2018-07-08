import React, { Component } from 'react';

import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import styled from 'styled-components';

import Slider from "./slider"

const Repair = styled.div `
	color: #ffffff;
	font-size: 40px;
	font-weight: 700;
	line-height: 50px;

	span {
		display:block;
		font-size: 24px;
		line-height: 30px;
	}
`

const Promotion = styled.div`
	  color: #ffffff;
	  font-size: 17px;
	  font-weight: 300;
	  line-height: 28px;
	  margin-top:54px;
`

const SendButton = styled.button `
	width: 247px;
	height: 67px;
	background-color: #ffa14b;
	color: #ffffff;
	font-size: 18px;
	font-weight: bold;
	line-height: 24px;
	border-radius: 50px;
	border: unset;
	margin-top:32px;
`

class Main extends Component {
	render() {
		return (
			<Row>
				<Col lg={5}>
					<Repair>
						Качественный ремонт
						<span> iphone за 35 минут и гарантия 1 год </span>
					</Repair>

					<Promotion> Оставьте заявку на бесплатную диагностику без очереди, <br/>
								и получите защитное стекло, стоимостью 1000 рублей, <br/>
								с установкой в подарок!
					</Promotion>

					<SendButton> Отправить заявку! </SendButton>
				</Col>
				<Col lg={6} lgOffset={1}>
					<Slider />
				</Col>
			</Row>
		)
	}
}

export default Main