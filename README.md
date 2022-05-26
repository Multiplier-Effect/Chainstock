<!-- @format -->

# Chainstock

## ChainStock를 소개합니다!

ChainStock은 비상장주식 중 비통일주식의 복잡한 거래방식과 주식 소유자 위변조 문제를 해결하는 블록체인 기반 비상장주식 거래 플랫폼입니다. 

현재 투자자들의 많은 관심을 받고 있는 비상장주식은 거래 규모와 그 가치가 점점 더 커지고 있으나 비상장주식을 거래하는 데에는 많은 서류와 절차가 필요한 상황입니다. 또한 비상장주식의 소유자를 확인할 수 있는 방법이 시스템화 되어 있지 않아 양도자의 소유권 확인 역시 복잡하고 위변조 가능성이 있습니다. ChainStock은 블록체인을 통해 거래내역을 기록하고 소유권을 증명하여 이러한 불편함과 위험성을 없앴습니다.

## ChainStock의 기술 소개

ChainStock은 NEAR Protocol을 기반으로 운영되며 NFT 기술을 사용하고 Smart Contract를 통해 이를 구현합니다.

**Near Protocol**

NEAR Protocol은 레거시 블록체인의 문제점인 비싼 비용과 느린 처리 속도를 해결하기 위해 등장했으며, 최종 확인 처리 속도 1초와 저렴한 수수료가 특징인 블록체인이며 Sharding 기술을 도입하고 구현하는 최초의 블록체인입니다. Mass adoption을 위해 개발자 친화성, 사용성에 포커스를 맞춘 NEAR Protocol을 사용해 빠르고 저렴한 비용에 유저들이 비상장 주식 거래를 할 수 있도록 DApp을 빌딩하고 있습니다.

더 많은 NEAR Protocol에 대한 설명은 NEAR Protocol 홈페이지를 참고해주세요.

[NEAR Protocol | Reimagine your World](https://near.org)

**NFT 기술**

NFT는 ‘대체 불가능한 토큰’으로 희소성을 가진 디지털 자산 즉, 디지털 세계에서 등기부등본과 같은 개념입니다. 최초의 창작자가 누구인지, 어떤 사람들이 소유해왔는지를 고유한 암호로 저장하기 때문에 소유권의 위변조가 불가능한 것이 특징입니다. ‘원본’을 증명할 수 있는 기술로 주식의 소유자 증명과 거래시 위변조를 막을 수 있기 때문에 주요 기술로 사용하였습니다. 비통일주식 1주를 NFT 토큰으로 발행하는 데 사용됩니다.

**ERC721 기반 Smart Contract**

한 주 단위로 구성되어있는 주식의 특성과 맞게 비통일주식을 스마트 컨트랙트를 통해 ERC721 표준을 따른 NFT 토큰으로 발행하고 거래하는 형태로 구현합니다. 

스마트 컨트랙트 주요 기능은 

1. 비통일 주식을 NFT로 만들기 위해 발행하고 `approve` 과정을 거치기 

2. 비통일 주식을 토큰으로 구매하고 사용자 간 `transfer`를 구현하기 입니다.

## ChainStock의 기대효과

**간편한 비통일주식 발행으로 스타트업, 벤처 생태계 활성화 가능**

그동안 복잡한 비통일주식 거래 방식으로 인해 스타트업도 비통일주식을 발행하기 어려웠고 투자자 역시 구입하기 어려웠습니다. 하지만 NFT 기술을 이용한다면 발행과 구매, 거래가 모두 간편해지기 때문에 투자가 활성화될 수 있습니다.

**비통일주식 거래의 단순화, 간편화**

기존에 많은 서류들이 필요했던 것에 비해 플랫폼에 가입하고 계좌나 지갑을 연결하고 플랫폼 위에서 바로 거래하기만 하면 되므로 매우 간편합니다.

**주주명부 관리 간편화**

기업에서 직접 관리해야했던 주주명부 역시 토큰 소유권 확인을 통해 자동으로 관리되고 간편하고 빠르게 확인할 수 있습니다.

**비통일주식 관련 서류 위변조검사 기능**

기존에 많은 서류들이 위변조 되었는지 구매자와 기업 측에서 검사를 했어야 하는데 반면 NFT 기술을 사용한다면 트랜잭션만 확인하면 되므로 위변조검사 기능이 매우 간편해집니다.

**비통일주식 거래 장부화 및 투명화**

블록체인 기술의 장점을 이용해 21세기에 맞지 않는 거래 과정이 수기로 이루어지는 복잡하고 불투명했던 방식을 간편하고 투명하게 디지털화시켜 변화시킬 수 있습니다. 

## 개인 사용자를 위한 사용설명서

### 1. 회원가입 / 로그인

ChainStock은 NEAR Protocol 공식 wallet을 사용하여 로그인합니다.

1-1. [https://wallet.near.org](https://wallet.near.org/) NEAR Protocol 공식 월렛 홈페이지에서 자신의 지갑을 생성합니다.

![스크린샷 2022-05-26 오후 10.38.16.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/4b635c08-158b-4900-9706-9e7acf25477d/스크린샷_2022-05-26_오후_10.38.16.png)

1-2. 지갑 생성이 완료되었다면 메인화면 오른쪽 상단의 버튼을 눌러 NEAR wallet에 로그인해주세요.

![스크린샷 2022-05-26 오후 10.40.23.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/56f72a76-6e1a-4a02-8f28-e0d2036617ab/스크린샷_2022-05-26_오후_10.40.23.png)

### 2. 종목 확인

- 로그인시 바로 만날 수 있는 페이지 입니다.
- 왼쪽 메뉴바에서 'Market'을 눌러서도 다음과 같이 전체 기업 종목 확인을 할 수 있습니다.
- 구매가능한 주식의 이름과 가격, 소유주를 확인할 수 있습니다.
- 각 주식의 ‘view’를 누르면 각 매물의 상세페이지로 이동하게 됩니다.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/af6a9505-fb26-4411-8fc9-eec388a371d1/Untitled.png)

### 3. 주식 구매

- 2에서 view를 누르면 볼 수 있는 매물의 상세 페이지입니다.
- 구매하고자 하는 주식의 기업정보와 소유자, 가격을 볼 수 있습니다.
- 구매하기 버튼을 클릭하면 해당 매물을 구매할 수 있는 페이지로 이동합니다.
- 구매 페이지에서 Approve를 누르면 구매가 완료됩니다.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/97f0d09a-7547-4525-a146-da61521442e3/Untitled.png)

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/85311129-1c45-4515-b233-e1df44b5c3e2/Untitled.png)

### 4. 마이페이지 / 종목 판매

- 왼쪽 메뉴바의 'MyPage'를 누르면 본 화면으로 이동할 수 있습니다.
- 보유 중인 주식 목록과 현재 판매중인 주식 목록을 확인할 수 있습니다.
- 보유 중인 주식 목록에서 판매 버튼을 누르면 판매할 수 있는 팝업이 생성됩니다.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/e02eb860-adc8-4798-a8f3-0d76f11bf1ef/Untitled.png)

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/4845ddbe-435d-479d-9464-e9ecac343eff/Untitled.png)

### 5. 주주 명부 확인

- 주식을 소유 중인 사람들과 그 거래를 증명하는 거래 증명서를 확인할 수 있습니다.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/849811fc-0329-4b4a-848d-c9e1f31afc1d/Untitled.png)

- '거래 증명서' 칸을 누르면 다음과 같이 실제 NEAR transaction을 확인할 수 있는 페이지로 이동하게 됩니다.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/2e13b25c-a656-45c5-a8bb-1e12f0a53675/Untitled.png)
