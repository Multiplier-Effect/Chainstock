/** @format */

import Divider from "@material-ui/core/Divider";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import { Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions";
import { payment } from "../../redux/action";

const InfoNft = (props, wallet) => {
	const { nft } = props;
	console.log(nft.metadata.title);
	const buy = () => {
		payment(nft.owner_id, nft.token_id, 0, nft.metadata.extra);
	};
	let data = [];
	if (nft.metadata.title === "Toss") {
		data =
			"Toss는 대한민국의 스타트업인 비바 리퍼블리카가 개발한 송금 서비스 앱이다. 이 앱은 공인인증서나 보안 매체 없이 앱을 통해 빠르고 손쉽게 송금이 가능하도록 만들었다. Toss를 운영하고 있는 비바 리퍼블리카는 보안과 관제 시스템에 대한 금융감독원의 실사와 금융위원회의 승인을 통해 전자 금융업으로 공식 등록된 업체이다. 비바 리퍼블리카는 은행과의 공식 업무 제휴를 통해 Toss 서비스를 제공하고 있다. 이 앱은 본인 명의의 스마트폰을 소유한 만 14세 이상의 금융서비스 이용자라면 모두 사용할 수 있다.";
	} else if (nft.metadata.title === "Kbank") {
		data =
			"케이뱅크는 대한민국 최초의 인터넷 전문은행으로, 2017년 4월 3일에 영업을 시작하였다. 카카오뱅크, 토스뱅크와 달리 모바일과 PC를 모두 활용할 수 있다. 인터넷 전문은행이기 때문에 시중은행과 다르게 오프라인 영업점은 없으며, 모든 ATM에서 입·출금 수수료 면제 혜택을 받을 수 있다. KT 통신 대리점을 통한 영업망 연계로 통신비를 절감할 수 있는 혜택도 있다.";
	} else if (nft.metadata.title === "Kurly") {
		data =
			"마켓컬리는 대한민국의 온라인 식재료 판매업체이다. 김슬아는 2015년 마켓 <컬리>를 설립하고 대한민국 내 최초로 새벽 배송 시대를 열었다. 샛별 배송'으로 신선식품 배달 시장을 개척하였는데, '샛별 배송'은 채소, 과일 등 신선식품을 밤 11시까지 주문하면 다음날 아침 7시 이전에 배송하는 서비스다. 대한민국 내에서는 유일하게 상품 입고부터 배송까지 유통 전 과정을 일정 온도로 유지하는 풀콜드체인(Full Cold-Chain) 시스템을 보유하였다. <컬리>의 2018년 매출액은 1571억 원, 2019년 1350억 원 규모 시리즈D 투자를 마감하며 예비 유니콘(기업가치 1조 원 이상의 비상장기업)으로 평가받았다.";
	} else if (nft.metadata.title === "Socar") {
		data =
			"쏘카는 스마트폰 애플리케이션을 통해 카셰어링 서비스를 제공하는 영리기업이다. 일반 렌터카의 직접 주유 방식과는 다르게 이동거리(km)당 주행요금이 부과되며, 주유시 결제는 반드시 차 내에 비치된 쏘카 카드로 진행해야 한다. 따라서, 렌터카처럼 주유 게이지를 맞춰서 반납해야하는 번거로움은 없지만 장거리 운행시 주행요금이 다소 비싸다는 지적이 있었다.";
	} else if (nft.metadata.title === "Yanolja") {
		data =
			"2021년 기준 향후 2~3년 내로 기업공개(IPO)를 할 것으로 보인다. 어느 증시에 상장할지 아직 확정적이지 않으나, 쿠팡이 소프트뱅크비전펀드로부터 3조 원가량의 투자를 유치한 후 미국 증시에 상장한 선례에 비춰봤을 때 이와 비슷하게 미국 증시 상장을 추진할 가능성도 점쳐지고 있다. 업계에서는 2023년 미국 상장을 목표로 계획을 짜고 있다는 시각이 우세하다. ";
	}
	return (
		<>
			<Card>
				<CardHeader title='기업 정보' />
				<Divider />
				<CardContent>
					<Typography>{data}</Typography>

					<Divider />
				</CardContent>
			</Card>
			<br />
			<Card>
				<CardHeader title='구매 정보' />
				<Divider />
				<CardContent>
					<Typography>소유자</Typography>
					<Typography>{nft.owner_id}</Typography>
					<Divider />
					<Typography>가격</Typography>
					<Typography style={{ color: "#e6b000" }}>
						{nft.metadata.extra} NEAR
					</Typography>
					<Divider />
				</CardContent>
				<CardActions style={{ flexDirection: "column" }}>
					<Button
						color='primary'
						onClick={buy}
						size='large'
						type='submit'
						variant='contained'>
						구매하기
					</Button>
				</CardActions>
			</Card>
		</>
	);
};

export default InfoNft;
