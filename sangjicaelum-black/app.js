/* =========================================================================
   SANGJI CAELUM BLACK — landing page script
   KO / EN / ZH-CN 전환, 타입 패널, 갤러리 라이트박스, 예약 폼
   ========================================================================= */
(function () {
  "use strict";

  /* ----------------------------- 번역 사전 ----------------------------- */
  const I18N = {
    ko: {
      "meta.title": "상지카일룸 블랙 | SANGJI CAELUM BLACK — 역삼동 하이엔드 레지던스",
      "meta.desc": "서울 강남구 역삼동 653-3, 지하 3층~지상 20층. 공동주택 20세대와 오피스텔 20실, 골조 약 6.7m 복층 설계의 하이엔드 레지던스 상지카일룸 블랙 안내 페이지입니다.",
      "preview.bar": "미리보기 페이지 · 상지카일룸(주)의 공식 홈페이지가 아닙니다",
      "nav.overview": "개요", "nav.architecture": "건축", "nav.residences": "타입",
      "nav.gallery": "갤러리", "nav.materials": "마감재", "nav.amenities": "커뮤니티",
      "nav.location": "입지", "nav.cta": "방문 예약",

      "hero.eyebrow": "SEOUL · GANGNAM · YEOKSAM-DONG",
      "hero.lead": "세상의 모든 빛을 품은 단 하나의 검정. 강남 역삼동, 단 40세대를 위한 하이엔드 레지던스.",
      "hero.cta1": "프로젝트 보기", "hero.cta2": "방문 예약",
      "hero.meta1": "서울 강남구 역삼동 653-3",
      "hero.meta2": "지하 3층 ~ 지상 20층",
      "hero.meta3": "공동주택 20세대 · 오피스텔 20실",
      "hero.scroll": "SCROLL",

      "statement.title": "BLACK은<br>세상의 모든 빛을<br>포용한다.",
      "statement.lead": "강남의 중심, 경복아파트사거리 코너. 봉은사로와 언주로가 만나는 자리에 단 한 동, 40세대만을 위해 지어진 이름입니다.",
      "statement.body": "상지리츠빌과 상지카일룸으로 이어온 상지의 고급 주거 경험 위에, 두 개의 층을 하나의 집으로 묶은 6.7m 복층과 절제된 소재를 얹었습니다. 면적보다 먼저 기억되는 것은 높이와 빛, 그리고 여백입니다.",
      "concept.1": "Art(예술) + Architecture(건축). 공간의 건축미학을 극대화한 BLACK의 예술적 가치.",
      "concept.2": "모든 것을 가진 당신이 채우지 못한 단 하나의 공백, 그마저 깨는 공간.",
      "concept.3": "상지리츠빌에서 상지카일룸으로 이어진 상지의 고급 주거 경험과 시공 실적.",

      "sec.overview": "프로젝트",
      "overview.title": "강남의 최중심,<br>단 하나의 주소",
      "overview.lead": "역삼동 653-3. 봉은사로와 언주로가 교차하는 경복아파트사거리 코너에서, 상지카일룸 BLACK은 2024년 6월 사용승인을 마쳤습니다.",
      "overview.cap1": "언주로에서 바라본 외관 · CG",
      "overview.note": "면적과 주차 대수는 공식 홈페이지 사업개요 및 건축물대장 기준입니다.",

      "fact.addr": "대지위치",
      "fact.addr.v": "서울특별시 강남구 역삼동 653-3<small>도로명 언주로 565 · 565, Eonju-ro, Gangnam-gu, Seoul</small>",
      "fact.scale": "규모",
      "fact.scale.v": "지하 3층 ~ 지상 20층 · 높이 73.3m<small>철근콘크리트 구조 · 승강기 2대</small>",
      "fact.use": "용도",
      "fact.use.v": "공동주택 20세대 · 오피스텔 20실 · 근린생활시설",
      "fact.site": "대지면적", "fact.floor": "건축면적", "fact.gfa": "연면적",
      "fact.ratio": "건폐율 · 용적률",
      "fact.park": "주차",
      "fact.park.v": "총 72대 (세대당 3.6대)<small>기계식 70대 · 자주식 2대 · 법정 42대</small>",
      "fact.approval": "사용승인",
      "fact.parties": "시행 · 시공 · 수탁",
      "fact.parties.v": "(주)대풍산업 · (주)상지카일룸 · 케이비신탁(주)",

      "mix.title": "용도별 구성",
      "mix.note": "건축물대장 용도별 면적 비중 · 층별 배치",
      "mix.apt": "공동주택", "mix.off": "오피스텔", "mix.com": "커뮤니티", "mix.retail": "근린생활시설",
      "mix.apt.f": "7 ~ 20층 · 20세대", "mix.off.f": "2 ~ 6층 · 20실",
      "mix.com.f": "지하 1 ~ 2층 · 체력단련장", "mix.retail.f": "1층 · 휴게음식점",

      "sec.architecture": "건축",
      "architecture.title": "높이를<br>설계한 주거",
      "architecture.lead": "골조 기준 약 6.7m. 거실 기준 약 6m. 평면의 숫자로 설명되지 않는 공간감을 위해, BLACK은 두 개의 층을 하나의 집으로 묶었습니다.",
      "arch.chart1": "일반 하이엔드 상품<small>천정 평균 3.7m</small>",
      "arch.chart2": "상지카일룸 BLACK<small>골조 기준 · 거실 약 6m</small>",
      "arch.note1": "아파트", "arch.note1.v": "1층 3.4m · 2층 3.3m · 거실 천정고 약 6m",
      "arch.note2": "오피스텔", "arch.note2.v": "천정고 2.8m · 단층형 평면",
      "arch.note3": "일반 상품", "arch.note3.v": "천정 평균 3.7m (1층 2.22m · 2층 1.45m)",
      "arch.cap": "리브로 만든 아치 볼트 · 공용부",
      "arch.rahmen.t": "라멘구조",
      "arch.rahmen.p": "독일어 'Rahmen(액자 틀)'에서 온 구조 방식으로, 내부 벽이 아닌 기둥과 보가 하중을 지지합니다. 리모델링이 자유롭고 층고를 높게 확보할 수 있으며 층간 소음이 적은 편입니다. 공사비와 기간이 더 드는 방식이지만, BLACK은 구조에서도 프리미엄을 택했습니다.",
      "arch.duplex.t": "전 세대 복층",
      "arch.duplex.p": "공동주택 A~F 타입은 모두 두 개의 층으로 이루어집니다. 아래층에 거실·주방·다이닝과 테라스를, 위층에 마스터룸과 패밀리룸·침실을 두어 생활의 소음과 휴식의 결을 분리했습니다.",
      "arch.material.t": "절제된 마감",
      "arch.material.p": "대리석과 원목 베니어, 화강석과 브론즈 글라스. 장식보다 재료의 질감과 손이 닿는 디테일에 집중했습니다. 브랜드와 구성은 호실별 상담 자료를 기준으로 안내합니다.",
      "doc.duplex": "공식 배포 자료 · 복층 천정고",
      "doc.heritage": "공식 배포 자료 · 시공 실적",
      "arch.docnote": "자료는 공식 홈페이지 및 배포 자료에서 인용했습니다.",

      "sec.residences": "세대",
      "residences.title": "열 가지 평면,<br>하나의 기준",
      "residences.lead": "공동주택 A~F 타입은 모두 복층입니다. 오피스텔 OA~OD 타입은 단층형으로, 강남의 업무와 생활을 가깝게 잇습니다.",
      "residences.apt": "공동주택 A ~ F",
      "residences.off": "오피스텔 OA ~ OD",
      "residences.hint": "아이소메트릭 평면 · 도면은 이해를 돕기 위한 것으로 실제와 다를 수 있습니다.",
      "residences.tablecap": "타입별 면적 (전용면적 기준)",
      "residences.tablenote": "면적은 공식 홈페이지 세대정보 표기 기준이며, 사업승인 변경 등에 따라 실시공 시 달라질 수 있습니다. 분양(공급)면적과 세대별 배분은 상담 자료로 안내합니다.",
      "th.type": "타입", "th.excl": "전용면적", "th.contract": "계약면적",
      "th.terrace": "테라스", "th.usable": "실사용면적", "th.guide": "자료",
      "drawing.cd": "단위세대 평면도 · 공동주택 C · D 타입",
      "drawing.oa": "단위세대 평면도 · 오피스텔 OA 타입",

      "sec.gallery": "갤러리",
      "gallery.title": "빛과 소재,<br>그리고 여백",
      "gallery.lead": "BLACK의 공간은 면적보다 먼저 분위기로 기억됩니다. 빛과 높이, 소재의 균형을 사진으로 만나보십시오.",
      "gallery.note": "이미지는 공식 홈페이지 및 배포 자료의 CG·홍보관 촬영컷입니다. 연출을 위한 가구와 소품이 포함되어 있으며, 실제 시공과 다를 수 있습니다.",

      "sec.materials": "마감재",
      "materials.title": "소재가<br>완성하는 분위기",
      "materials.lead": "마블과 우드, 메탈과 브론즈 글라스의 절제된 조합. 장식보다 재료의 질감과 손이 닿는 디테일에 집중했습니다.",
      "brand.arrital": "이탈리아 주방가구 · 냉장고와 냉동고, 와인냉장고, 스마트오븐까지 시선이 닿는 곳마다 하나의 작품으로.",
      "brand.bora": "일체형 인덕션 · 정갈함에 어울리는 세심함으로 깔끔함과 컴팩트한 디자인을 완성합니다.",
      "brand.miele": "빌트인 오븐 · 모던한 주방 디자인에 클래식하게 어우러지는 완벽한 일체감.",
      "brand.zucchetti": "이탈리아 수전 · 물결은 당신의 결을 따라서. 자연 그대로의 투명함을 구현합니다.",
      "materials.finish.t": "마감재 구성",
      "materials.finish.tile": "두오모앤코(Duomo&Co) · REX Origines · Casa Dolce Casa",
      "materials.finish.marble": "대리석 · 거실·주방 포인트 마감",
      "materials.finish.wood": "원목 베니어 · 도어·벽체 마감",
      "materials.finish.granite": "화강석 · 현관·공용부",
      "materials.finish.metal": "메탈 프레임과 브론즈 글라스",
      "materials.finish.kitchen": "래커 도어 · 메탈 도어 · 아일랜드 상판",
      "materials.note": "마감재와 가구는 자재 수급·성능 개선 등에 따라 동급 이상의 제품으로 변경될 수 있습니다. 실제 적용 범위는 호실별 상담 자료를 기준으로 합니다.",
      "doc.home": "공동주택 마감 보드", "doc.office": "오피스텔 마감 보드", "doc.detail": "타일 · 주방 브랜드",

      "sec.amenities": "커뮤니티",
      "amenities.title": "휴식까지<br>설계한 하루",
      "amenities.lead": "지하 1~2층의 커뮤니티와 입주민 전용 앱의 라이프 서비스. 집 안의 시간과 집 밖의 시간을 함께 설계했습니다.",
      "am.golf": "더프라자골프 TPZ GOLF", "am.spa": "프라이빗 테라피 & 마사지", "am.rest": "휴식과 라운지", "am.rooftop": "루프탑 가든 · 카바나", "am.valet": "24시간 발렛",
      "am.community": "커뮤니티 시설", "am.living": "라이프 서비스",
      "am.c1": "더프라자골프 스크린 골프", "am.c2": "필라테스 · 1:1 PT 센터",
      "am.c3": "프라이빗 테라피 & 마사지", "am.c4": "24시간 컨시어지 · 버틀러 · PA 서비스",
      "am.c5": "24시간 발렛 · 세차 · 공항 의전", "am.c6": "루프탑 가든 · 카바나",
      "am.s1": "가정식 딜리버리", "am.s2": "하우스키핑", "am.s3": "리무진 · 공항 의전", "am.s4": "명품 세탁",
      "am.s5": "반려동물 케어", "am.s6": "물품 보관 · 메일룸", "am.s7": "마켓 · 공동구매", "am.s8": "홈스타일링",
      "amenities.note": "커뮤니티와 라이프 서비스는 인·허가 및 협의에 따라 품목·명칭·운영 범위가 변경될 수 있습니다. 현재 운영 여부는 상담 시 확인해 주십시오.",

      "sec.location": "입지",
      "location.title": "두 개의 역,<br>하나의 강남",
      "location.lead": "9호선 언주역과 수인분당선·9호선 선정릉역. 봉은사로와 언주로가 교차하는 코너에서 강남의 업무·문화·의료 인프라가 도보권에 놓입니다.",
      "location.addr": "서울 강남구 역삼동 653-3",
      "location.addr.sub": "언주로 565 · 565, Eonju-ro, Gangnam-gu, Seoul 06135",
      "location.kakao": "카카오맵", "location.naver": "네이버 지도",
      "location.st1": "언주역", "location.st1.walk": "도보 약 7분", "location.st1.line": "400m · 9호선",
      "location.st2": "선정릉역", "location.st2.walk": "도보 약 10분", "location.st2.line": "600m · 9호선 · 수인분당선",
      "location.p1.t": "생활 인프라",
      "location.p1": "현대·갤러리아·신세계·롯데백화점, 안다즈 서울 강남, 조선 팰리스, 강남세브란스병원, 차병원이 인접합니다.",
      "location.p2.t": "문화와 녹지",
      "location.p2": "유네스코 세계유산 선정릉이 도보 약 10분(600m). 도심 속 녹지와 산책로를 가까이 둡니다.",
      "location.p3.t": "교통",
      "location.p3": "봉은사로·언주로 대로변 코너, 경부고속도로와 고속터미널 접근이 편리합니다.",
      "location.p4.t": "개발 계획",
      "location.p4": "국제교류복합지구, 현대차 GBC, 영동대로 복합환승센터, GTX-A 등 인근 사업이 추진 중입니다(외부 사업, 추진 상황은 변동될 수 있음).",
      "location.visit.t": "방문 안내",
      "location.main": "대표 번호", "location.sales": "국내 상담사", "location.global": "국외 상담전화", "location.sales.note": "공식 홍보 페이지 안내 번호",
      "location.office": "홍보관 (공식 안내)",
      "location.office.v": "서울 강남구 청담동 84 (선릉로 842)<small>매일 10:00 – 18:00 · 발렛 주차</small>",
      "location.office.note": "홍보관 정보는 공식 홈페이지의 분양 당시 안내이며, 현재 운영 여부는 전화로 확인해 주십시오.",
      "location.cta": "방문 예약하기",

      "sec.enquire": "문의",
      "enquire.title": "BLACK을 직접<br>경험하는 시간",
      "enquire.lead": "예약 고객을 위한 프라이빗 안내를 준비합니다. 가능한 호실과 조건은 담당자가 개별적으로 안내합니다.",
      "enquire.telMain": "대표 번호", "enquire.tel": "국내 상담사", "enquire.telGlobal": "국외 상담전화", "enquire.tel2": "공식 분양 문의",
      "enquire.hours": "상담 시간 · 평일 09:00 – 19:00, 주말 예약 가능",
      "form.name": "성함", "form.phone": "연락처", "form.type": "관심 타입",
      "form.type.any": "선택 안 함",
      "form.type.a": "공동주택 A · 21평형 복층", "form.type.b": "공동주택 B · 37평형 복층",
      "form.type.c": "공동주택 C · 19평형 복층", "form.type.d": "공동주택 D · 22평형 복층",
      "form.type.e": "공동주택 E · 43평형 복층", "form.type.f": "공동주택 F · 43평형 복층",
      "form.type.oa": "오피스텔 OA · 15평형", "form.type.ob": "오피스텔 OB · 13평형",
      "form.type.oc": "오피스텔 OC · 12평형", "form.type.od": "오피스텔 OD · 15평형",
      "form.date": "방문 희망일",
      "form.msg": "문의 내용",
      "form.msg.ph": "예: 46평형 잔여 호실과 임대 조건을 알고 싶습니다.",
      "form.agree": "개인정보 수집·이용(성함, 연락처)에 동의합니다. 상담 목적으로만 사용되며 처리 후 파기됩니다.",
      "form.submit": "예약 내용 보내기",
      "form.note": "입력하신 내용은 문자 또는 전화로 전달됩니다. 페이지에서 자동 접수되지 않습니다.",
      "form.err.name": "성함을 입력해 주세요.",
      "form.err.phone": "연락처를 정확히 입력해 주세요.",
      "form.err.agree": "개인정보 수집·이용에 동의해 주세요.",
      "result.title": "예약 내용이 준비되었습니다",
      "result.sms": "문자로 보내기", "result.call": "전화하기", "result.copy": "내용 복사",
      "result.copied": "복사되었습니다",
      "result.note": "문자 앱이 열리지 않으면 내용을 복사해 010-4434-2616으로 보내주십시오.",

      "notice.title": "유의사항",
      "notice.1": "본 페이지에 사용된 CG·투시도·조감도는 소비자의 이해를 돕기 위한 것으로 실제와 차이가 있을 수 있으며, 인·허가 및 협의에 따라 색채와 형태가 변경될 수 있습니다.",
      "notice.2": "인테리어 이미지는 홍보관 촬영컷으로 연출을 위한 가구와 소품이 포함되어 있습니다. 옵션 및 제공 품목은 상담 자료를 통해 확인하십시오.",
      "notice.3": "마감재와 가구는 자재 수급·성능 개선 등에 따라 동급 이상의 제품으로 변경될 수 있습니다.",
      "notice.4": "표기 면적은 전용면적 기준이며 사업승인 변경 등에 따라 실시공 시 달라질 수 있습니다. 복층 천정고는 자료에 따라 6m(거실 기준)~6.7m(골조 기준)로 표기되며, 실측은 호실별 상담 시 확인해 주십시오.",
      "notice.5": "커뮤니티와 컨시어지 서비스는 인·허가 및 협의에 따라 서비스 품목과 명칭이 변경될 수 있습니다.",
      "notice.6": "계약 전 사업부지 현장을 방문하여 도로·소음·조망·일조·진입로 등 현장 여건을 직접 확인하십시오.",
      "notice.7": "본 페이지는 정보 제공을 목적으로 제작된 상담 안내 페이지로, 상지카일룸(주) 및 시행사의 공식 홈페이지가 아닙니다. 시행·시공·수탁 및 건축 정보는 공식 자료와 건축물대장을 근거로 기재했습니다.",
      "notice.8": "금액·잔여 호실·계약 조건은 시점에 따라 달라지므로, 최종 내용은 계약서류와 상담 시점의 공식 자료를 기준으로 확인하십시오.",
      "notice.sources": "자료 출처", "notice.src1": "상지카일룸 BLACK 공식 홈페이지",
      "notice.src2": "공식 배포 브로셔 (복층·마감·시공 실적)",
      "notice.src3": "건축물대장 (사용승인일·용도별 면적·주차)",
      "notice.src4": "카카오맵 도보 경로 (역 거리)",
      "notice.disclaimer": "이미지는 공식 홈페이지 및 배포 자료에서 내려받아 사용했습니다.",

      "footer.addr": "서울특별시 강남구 역삼동 653-3 · 언주로 565",
      "footer.parties": "시행 (주)대풍산업 · 시공 (주)상지카일룸 · 수탁 케이비신탁(주)",
      "footer.contact": "대표 +82 2 563 2367 · 국내 상담 010-4434-2616 · 국외 상담 +82 10 8468 5552",
      "footer.note": "본 페이지는 상담 안내용 미리보기 페이지이며, 상지카일룸(주)의 공식 홈페이지가 아닙니다.",

      "type.duplex": "복층 레지던스", "type.single": "단층 오피스텔",
      "area.excl": "전용면적", "area.contract": "계약면적", "area.terrace": "테라스면적", "area.usable": "실사용면적",
      "type.view": "평면 보기", "unit.pyeong": "평",
      "lb.close": "닫기", "lb.prev": "이전 이미지", "lb.next": "다음 이미지",
      "a11y.skip": "본문으로 바로 가기", "a11y.nav": "주요 메뉴", "a11y.tabs": "상품 구분", "a11y.dots": "배경 이미지"
    },

    en: {
      "meta.title": "SANGJI CAELUM BLACK — High-end residences in Yeoksam-dong, Gangnam",
      "meta.desc": "653-3 Yeoksam-dong, Gangnam-gu, Seoul. Three basement levels to twenty storeys; twenty residences and twenty officetels with duplex frames of about 6.7 m.",
      "preview.bar": "Preview page · not the official website of Sangji Caelum Co., Ltd.",
      "nav.overview": "Overview", "nav.architecture": "Architecture", "nav.residences": "Residences",
      "nav.gallery": "Gallery", "nav.materials": "Materials", "nav.amenities": "Amenities",
      "nav.location": "Location", "nav.cta": "Book a visit",

      "hero.eyebrow": "SEOUL · GANGNAM · YEOKSAM-DONG",
      "hero.lead": "The one black that holds every light. A high-end residence of just 40 homes in Yeoksam-dong, Gangnam.",
      "hero.cta1": "View the project", "hero.cta2": "Book a visit",
      "hero.meta1": "653-3 Yeoksam-dong, Gangnam-gu, Seoul",
      "hero.meta2": "3 basement levels to 20 storeys",
      "hero.meta3": "20 residences · 20 officetels",
      "hero.scroll": "SCROLL",

      "statement.title": "BLACK holds<br>every light<br>in the world.",
      "statement.lead": "At Gyeongbok Apartment Junction in the heart of Gangnam, where Bongeunsa-ro meets Eonju-ro, one tower was built for forty homes alone.",
      "statement.body": "On the high-end housing heritage of Sangji Ritzvil and Sangji Caelum, BLACK layers a 6.7-metre duplex that folds two floors into one home, finished in restrained materials. What is remembered first is not the floor area but the height, the light and the space left open.",
      "concept.1": "Art + Architecture. The artistic value of BLACK, where the architectural beauty of space is taken to its limit.",
      "concept.2": "The one blank that even those who have everything could not fill — BLACK breaks that too.",
      "concept.3": "From Sangji Ritzvil to Sangji Caelum, the experience and track record behind Sangji’s high-end housing.",

      "sec.overview": "PROJECT",
      "overview.title": "The centre of Gangnam,<br>a single address",
      "overview.lead": "Yeoksam-dong 653-3. At the corner of Gyeongbok Apartment Junction, where Bongeunsa-ro crosses Eonju-ro, Sangji Caelum BLACK received its approval for use in June 2024.",
      "overview.cap1": "Facade seen from Eonju-ro · CG",
      "overview.note": "Areas and parking figures follow the official project overview and the building register.",

      "fact.addr": "Site",
      "fact.addr.v": "653-3 Yeoksam-dong, Gangnam-gu, Seoul<small>565, Eonju-ro, Gangnam-gu, Seoul</small>",
      "fact.scale": "Scale",
      "fact.scale.v": "3 basement levels to 20 storeys · 73.3 m<small>Reinforced concrete · 2 elevators</small>",
      "fact.use": "Use",
      "fact.use.v": "20 residences · 20 officetels · neighbourhood retail",
      "fact.site": "Site area", "fact.floor": "Building area", "fact.gfa": "Gross floor area",
      "fact.ratio": "Coverage · FAR",
      "fact.park": "Parking",
      "fact.park.v": "72 spaces (3.6 per home)<small>70 mechanical · 2 self-parking · legal minimum 42</small>",
      "fact.approval": "Approval for use",
      "fact.parties": "Developer · Contractor · Trustee",
      "fact.parties.v": "Daepung Industrial Co. · Sangji Caelum Co. · KB Asset Trust Co.",

      "mix.title": "Programme by use",
      "mix.note": "Share of floor area by use, per the building register · floor allocation",
      "mix.apt": "Residences", "mix.off": "Officetel", "mix.com": "Amenity", "mix.retail": "Retail",
      "mix.apt.f": "Floors 7–20 · 20 homes", "mix.off.f": "Floors 2–6 · 20 units",
      "mix.com.f": "Floors B1–B2 · fitness", "mix.retail.f": "Ground floor · café",

      "sec.architecture": "ARCHITECTURE",
      "architecture.title": "A home designed<br>around height",
      "architecture.lead": "About 6.7 m at the structural frame; about 6 m at the living room. To make a sense of space that floor areas cannot describe, BLACK folds two levels into one home.",
      "arch.chart1": "Typical high-end product<small>average ceiling 3.7 m</small>",
      "arch.chart2": "SANGJI CAELUM BLACK<small>structural frame · living room c. 6 m</small>",
      "arch.note1": "Residences", "arch.note1.v": "1F 3.4 m · 2F 3.3 m · living room ceiling c. 6 m",
      "arch.note2": "Officetel", "arch.note2.v": "ceiling 2.8 m · single-level plan",
      "arch.note3": "Typical product", "arch.note3.v": "average 3.7 m (1F 2.22 m · 2F 1.45 m)",
      "arch.cap": "Ribbed arch vault · common area",
      "arch.rahmen.t": "Rahmen structure",
      "arch.rahmen.p": "Named after the German word Rahmen, a frame: load is carried by columns and beams rather than interior walls. Remodelling is freer, ceiling heights can be greater and sound between floors is reduced. It costs more and takes longer — BLACK chose it anyway.",
      "arch.duplex.t": "Every residence a duplex",
      "arch.duplex.p": "Residence types A to F each occupy two levels: living room, kitchen, dining and terrace below; master suite, family room and bedrooms above — separating the noise of daily life from rest.",
      "arch.material.t": "Restrained finishes",
      "arch.material.p": "Marble and wood veneer, granite and bronze glass. Attention goes to the texture of material and the detail under the hand rather than to ornament. Brands and specification follow the consultation material for each unit.",
      "doc.duplex": "Official brochure · ceiling heights",
      "doc.heritage": "Official brochure · track record",
      "arch.docnote": "Material is quoted from the official website and brochure.",

      "sec.residences": "RESIDENCES",
      "residences.title": "Ten plans,<br>one standard",
      "residences.lead": "Residence types A to F are all duplexes. Officetel types OA to OD are single-level, keeping work and life in Gangnam close together.",
      "residences.apt": "Residences A – F",
      "residences.off": "Officetel OA – OD",
      "residences.hint": "Isometric plan · drawings aid understanding and may differ from the built unit.",
      "residences.tablecap": "Area by type (exclusive area basis)",
      "residences.tablenote": "Areas follow the official website’s residence data and may change at construction. Supply area and allocation per unit are given in the consultation material.",
      "th.type": "Type", "th.excl": "Exclusive area", "th.contract": "Contract area",
      "th.terrace": "Terrace", "th.usable": "Usable area", "th.guide": "Plan",
      "drawing.cd": "Unit plan · residence C · D",
      "drawing.oa": "Unit plan · officetel OA",

      "sec.gallery": "GALLERY",
      "gallery.title": "Light, material,<br>and space left open",
      "gallery.lead": "The spaces of BLACK are remembered for their atmosphere before their size. See the balance of light, height and material.",
      "gallery.note": "Images are CG and show-unit photography from the official website and brochure, including styling furniture and objects; the built unit may differ.",

      "sec.materials": "MATERIALS",
      "materials.title": "An atmosphere<br>made by material",
      "materials.lead": "A restrained combination of marble and wood, metal and bronze glass. Attention goes to texture and detail rather than ornament.",
      "brand.arrital": "Italian kitchen furniture — refrigerators, freezers, wine cabinets and smart ovens, each object within sight treated as a piece.",
      "brand.bora": "Integrated induction hob — careful detailing for a clean, compact composition.",
      "brand.miele": "Built-in oven — flawless integration with a modern kitchen.",
      "brand.zucchetti": "Italian tapware — the flow follows your line; transparency as nature intended.",
      "materials.finish.t": "Finish specification",
      "materials.finish.tile": "Duomo&Co · REX Origines · Casa Dolce Casa",
      "materials.finish.marble": "Marble · living and kitchen features",
      "materials.finish.wood": "Wood veneer · doors and wall panels",
      "materials.finish.granite": "Granite stone · entrance and common areas",
      "materials.finish.metal": "Metal frame and bronze glass",
      "materials.finish.kitchen": "Lacquered doors · metal doors · island worktop",
      "materials.note": "Finishes and furniture may be replaced with equivalent or better products due to supply and performance improvements. Applied scope follows the consultation material for each unit.",
      "doc.home": "Residence material board", "doc.office": "Officetel material board", "doc.detail": "Tile & kitchen brands",

      "sec.amenities": "AMENITIES",
      "amenities.title": "A day designed<br>down to rest",
      "amenities.lead": "Amenities on floors B1 and B2, and living services through the residents’ app — time inside the home and outside it, designed together.",
      "am.golf": "The Plaza Golf TPZ GOLF", "am.spa": "Private therapy & massage", "am.rest": "Rest and lounge", "am.rooftop": "Rooftop garden and cabana", "am.valet": "24-hour valet",
      "am.community": "Amenities", "am.living": "Living services",
      "am.c1": "Screening golf at The Plaza Golf", "am.c2": "Pilates and 1:1 PT centre",
      "am.c3": "Private therapy and massage", "am.c4": "24-hour concierge · butler · PA service",
      "am.c5": "24-hour valet · car wash · airport protocol", "am.c6": "Rooftop garden and cabana",
      "am.s1": "Home-style delivery", "am.s2": "Housekeeping", "am.s3": "Limousine · airport transfer", "am.s4": "Fine laundry",
      "am.s5": "Pet care", "am.s6": "Storage · mailroom", "am.s7": "Market · group buying", "am.s8": "Home styling",
      "amenities.note": "Amenities and services may change in scope or name following approvals and consultation. Please confirm current operation at the time of enquiry.",

      "sec.location": "LOCATION",
      "location.title": "Two stations,<br>one Gangnam",
      "location.lead": "Eonju Station on Line 9, and Seonjeongneung Station on the Suin–Bundang and Line 9. From this corner where Bongeunsa-ro meets Eonju-ro, the offices, culture and hospitals of Gangnam sit within walking distance.",
      "location.addr": "653-3 Yeoksam-dong, Gangnam-gu, Seoul",
      "location.addr.sub": "565, Eonju-ro, Gangnam-gu, Seoul 06135",
      "location.kakao": "Kakao Map", "location.naver": "Naver Map",
      "location.st1": "Eonju Stn.", "location.st1.walk": "about 7 min on foot", "location.st1.line": "400 m · Line 9",
      "location.st2": "Seonjeongneung Stn.", "location.st2.walk": "about 10 min on foot", "location.st2.line": "600 m · Line 9 · Suin–Bundang",
      "location.p1.t": "Everyday infrastructure",
      "location.p1": "Hyundai, Galleria, Shinsegae and Lotte department stores, Andaz Seoul Gangnam and Josun Palace, Gangnam Severance Hospital and CHA Hospital are close by.",
      "location.p2.t": "Culture and green",
      "location.p2": "Seonjeongneung, a UNESCO World Heritage site, is about a ten-minute walk (600 m) away.",
      "location.p3.t": "Transport",
      "location.p3": "On the corner of Bongeunsa-ro and Eonju-ro, with easy access to the Gyeongbu Expressway and the express bus terminal.",
      "location.p4.t": "Development",
      "location.p4": "The International Exchange Complex, Hyundai GBC, the Yeongdong-daero transit centre and GTX-A are being pursued nearby (external projects; their status may change).",
      "location.visit.t": "Visiting",
      "location.main": "Main line", "location.sales": "Domestic advisor", "location.global": "International line", "location.sales.note": "number listed on the official page",
      "location.office": "Sales gallery (official)",
      "location.office.v": "84 Cheongdam-dong, Gangnam-gu, Seoul (842 Seolleung-ro)<small>Daily 10:00 – 18:00 · valet parking</small>",
      "location.office.note": "Gallery information comes from the official website at the time of sale; please call to confirm whether it is open today.",
      "location.cta": "Book a visit",

      "sec.enquire": "ENQUIRE",
      "enquire.title": "Time to experience<br>BLACK itself",
      "enquire.lead": "We prepare a private viewing for those who book. Available units and terms are explained individually.",
      "enquire.telMain": "Main line", "enquire.tel": "Domestic advisor", "enquire.telGlobal": "International line", "enquire.tel2": "Official sales",
      "enquire.hours": "Hours · 09:00 – 19:00 weekdays, weekends by appointment",
      "form.name": "Name", "form.phone": "Phone", "form.type": "Type of interest",
      "form.type.any": "No preference",
      "form.type.a": "Residence A · 21 pyeong duplex", "form.type.b": "Residence B · 37 pyeong duplex",
      "form.type.c": "Residence C · 19 pyeong duplex", "form.type.d": "Residence D · 22 pyeong duplex",
      "form.type.e": "Residence E · 43 pyeong duplex", "form.type.f": "Residence F · 43 pyeong duplex",
      "form.type.oa": "Officetel OA · 15 pyeong", "form.type.ob": "Officetel OB · 13 pyeong",
      "form.type.oc": "Officetel OC · 12 pyeong", "form.type.od": "Officetel OD · 15 pyeong",
      "form.date": "Preferred date",
      "form.msg": "Message",
      "form.msg.ph": "e.g. availability and lease terms for the 46-pyeong type",
      "form.agree": "I agree to the collection and use of my name and phone number for this enquiry only; it is deleted after handling.",
      "form.submit": "Send enquiry",
      "form.note": "What you enter is passed on by text message or phone. It is not submitted to a server from this page.",
      "form.err.name": "Please enter your name.",
      "form.err.phone": "Please enter a valid phone number.",
      "form.err.agree": "Please agree to the collection and use of your information.",
      "result.title": "Your enquiry is ready",
      "result.sms": "Send by text", "result.call": "Call", "result.copy": "Copy text",
      "result.copied": "Copied",
      "result.note": "If the message app does not open, copy the text and send it to 010-4434-2616.",

      "notice.title": "Notices",
      "notice.1": "The CG, perspectives and aerial views on this page help understanding and may differ from the built result; colours and forms may change following approvals and consultation.",
      "notice.2": "Interior images are photographs of the show unit including styling furniture and objects. Options and included items should be confirmed in the consultation material.",
      "notice.3": "Finishes and furniture may be replaced with equivalent or better products due to supply and performance improvements.",
      "notice.4": "Areas are stated on an exclusive-area basis and may change at construction. Duplex ceiling heights are stated as 6 m (living room) to 6.7 m (structural frame) depending on the source; please confirm actual dimensions per unit at consultation.",
      "notice.5": "Amenity and concierge services may change in item and name following approvals and consultation.",
      "notice.6": "Before contracting, visit the site and check road, noise, view, daylight and access conditions yourself.",
      "notice.7": "This page is an information and enquiry page, not the official website of Sangji Caelum Co., Ltd. or the developer. Developer, contractor, trustee and building data are based on official material and the building register.",
      "notice.8": "Prices, remaining units and contract terms change over time; final terms should be confirmed against the contract documents and official material at the time of consultation.",
      "notice.sources": "Sources", "notice.src1": "Sangji Caelum BLACK — official website",
      "notice.src2": "Official brochure (duplex, finishes, track record)",
      "notice.src3": "Building register (approval date, area by use, parking)",
      "notice.src4": "Kakao Map walking routes (station distances)",
      "notice.disclaimer": "Images were downloaded from the official website and brochure.",

      "footer.addr": "653-3 Yeoksam-dong, Gangnam-gu, Seoul · 565 Eonju-ro",
      "footer.parties": "Developer Daepung Industrial · Contractor Sangji Caelum · Trustee KB Asset Trust",
      "footer.contact": "Main +82 2 563 2367 · Domestic 010-4434-2616 · International +82 10 8468 5552",
      "footer.note": "This is a preview page for enquiries, not the official website of Sangji Caelum Co., Ltd.",

      "type.duplex": "Duplex residence", "type.single": "Single-level officetel",
      "area.excl": "Exclusive area", "area.contract": "Contract area", "area.terrace": "Terrace", "area.usable": "Usable area",
      "type.view": "View plan", "unit.pyeong": " pyeong",
      "lb.close": "Close", "lb.prev": "Previous image", "lb.next": "Next image",
      "a11y.skip": "Skip to content", "a11y.nav": "Main menu", "a11y.tabs": "Product type", "a11y.dots": "Background image"
    },

    zh: {
      "meta.title": "相地Caelum BLACK｜江南驿三洞高端住宅",
      "meta.desc": "首尔江南区驿三洞653-3，地下3层至地上20层。20席住宅与20间写字楼，结构层高约6.7米的复式高端住宅。",
      "preview.bar": "预览页面 · 非相地Caelum（株）官方网站",
      "nav.overview": "概览", "nav.architecture": "建筑", "nav.residences": "户型",
      "nav.gallery": "图库", "nav.materials": "材质", "nav.amenities": "配套",
      "nav.location": "位置", "nav.cta": "预约参观",

      "hero.eyebrow": "SEOUL · GANGNAM · YEOKSAM-DONG",
      "hero.lead": "包容世间一切光芒的唯一之黑。江南驿三洞，仅 40 席的高端住宅。",
      "hero.cta1": "查看项目", "hero.cta2": "预约参观",
      "hero.meta1": "首尔江南区驿三洞 653-3",
      "hero.meta2": "地下 3 层 ~ 地上 20 层",
      "hero.meta3": "住宅 20 席 · 写字楼 20 间",
      "hero.scroll": "SCROLL",

      "statement.title": "BLACK，<br>包容世间的<br>一切光芒。",
      "statement.lead": "江南中心，景福公寓十字路口街角。奉恩寺路与彦州路交汇之处，一栋建筑只为四十席而建。",
      "statement.body": "在相地Ritzvil与相地Caelum累积的高端居住经验之上，叠加将两个楼层合为一个家的 6.7 米复式，并以克制的材质收尾。首先被记住的不是面积，而是层高、光线与留白。",
      "concept.1": "艺术（Art）+ 建筑（Architecture）。将空间的建筑美学推向极致的 BLACK 的艺术价值。",
      "concept.2": "拥有一切之人唯一未能填满的空白，BLACK 连那处空白也一并打破。",
      "concept.3": "从相地Ritzvil到相地Caelum，相地积累的高端居住经验与施工业绩。",

      "sec.overview": "项目",
      "overview.title": "江南的正中心，<br>唯一的地址",
      "overview.lead": "驿三洞 653-3。在奉恩寺路与彦州路交汇的景福公寓十字路口街角，相地Caelum BLACK 已于 2024 年 6 月取得使用许可。",
      "overview.cap1": "从彦州路所见的外观 · CG",
      "overview.note": "面积与停车位数据依据官方网站项目概要与建筑台账。",

      "fact.addr": "地块位置",
      "fact.addr.v": "首尔特别市江南区驿三洞 653-3<small>道路名 彦州路 565 · 565, Eonju-ro, Gangnam-gu, Seoul</small>",
      "fact.scale": "规模",
      "fact.scale.v": "地下 3 层 ~ 地上 20 层 · 高度 73.3m<small>钢筋混凝土结构 · 电梯 2 部</small>",
      "fact.use": "用途",
      "fact.use.v": "住宅 20 席 · 写字楼 20 间 · 近邻生活设施",
      "fact.site": "地块面积", "fact.floor": "建筑面积", "fact.gfa": "总建筑面积",
      "fact.ratio": "建筑密度 · 容积率",
      "fact.park": "停车",
      "fact.park.v": "共 72 位（每户 3.6 位）<small>机械式 70 · 自走式 2 · 法定 42</small>",
      "fact.approval": "使用许可",
      "fact.parties": "开发 · 施工 · 受托",
      "fact.parties.v": "大丰产业（株） · 相地Caelum（株） · KB资产信托（株）",

      "mix.title": "用途构成",
      "mix.note": "建筑台账用途面积占比 · 楼层分布",
      "mix.apt": "住宅", "mix.off": "写字楼", "mix.com": "配套", "mix.retail": "近邻生活设施",
      "mix.apt.f": "7 ~ 20 层 · 20 席", "mix.off.f": "2 ~ 6 层 · 20 间",
      "mix.com.f": "地下 1 ~ 2 层 · 健身中心", "mix.retail.f": "1 层 · 餐饮",

      "sec.architecture": "建筑",
      "architecture.title": "为高度<br>而设计的住宅",
      "architecture.lead": "结构层高约 6.7 米，客厅净高约 6 米。为呈现面积数字无法描述的空间感，BLACK 将两个楼层合为一个家。",
      "arch.chart1": "一般高端产品<small>平均净高 3.7m</small>",
      "arch.chart2": "相地Caelum BLACK<small>结构层高 · 客厅约 6m</small>",
      "arch.note1": "住宅", "arch.note1.v": "1 层 3.4m · 2 层 3.3m · 客厅净高约 6m",
      "arch.note2": "写字楼", "arch.note2.v": "净高 2.8m · 单层户型",
      "arch.note3": "一般产品", "arch.note3.v": "平均 3.7m（1 层 2.22m · 2 层 1.45m）",
      "arch.cap": "肋状拱顶 · 公共空间",
      "arch.rahmen.t": "框架（Rahmen）结构",
      "arch.rahmen.p": "源自德语 Rahmen（画框）的结构方式，由柱与梁而非内墙承重。改造自由度高，可获得更高的层高，楼层间噪音相对较少。造价更高、工期更长，但 BLACK 在结构上也选择了高端。",
      "arch.duplex.t": "全户复式",
      "arch.duplex.p": "住宅 A 至 F 型均由两个楼层构成。下层为客厅、厨房、餐厅与露台，上层为主卧、家庭厅与卧室，将生活的喧闹与休息的静谧分开。",
      "arch.material.t": "克制的收尾",
      "arch.material.p": "大理石与原木饰面、花岗石与古铜玻璃。相较装饰，更专注于材质的质感与指尖所及的细节。品牌与配置以各户咨询资料为准。",
      "doc.duplex": "官方资料 · 复式层高",
      "doc.heritage": "官方资料 · 施工业绩",
      "arch.docnote": "资料引自官方网站与官方宣传册。",

      "sec.residences": "户型",
      "residences.title": "十种户型，<br>同一标准",
      "residences.lead": "住宅 A 至 F 型均为复式。写字楼 OA 至 OD 型为单层户型，让江南的工作与生活紧密相连。",
      "residences.apt": "住宅 A ~ F",
      "residences.off": "写字楼 OA ~ OD",
      "residences.hint": "轴测户型图 · 图纸仅为便于理解，实际可能有所不同。",
      "residences.tablecap": "各户型面积（专有面积基准）",
      "residences.tablenote": "面积依据官方网站户型信息，施工时可能因审批变更而调整。供应面积与各户分配以咨询资料为准。",
      "th.type": "户型", "th.excl": "专有面积", "th.contract": "合同面积",
      "th.terrace": "露台", "th.usable": "实际使用面积", "th.guide": "图纸",
      "drawing.cd": "户型平面图 · 住宅 C · D 型",
      "drawing.oa": "户型平面图 · 写字楼 OA 型",

      "sec.gallery": "图库",
      "gallery.title": "光线、材质，<br>与留白",
      "gallery.lead": "BLACK 的空间首先以氛围被记住，而非面积。请感受光线、层高与材质的平衡。",
      "gallery.note": "图片为官方网站与官方宣传册的 CG 及样板间实景，包含陈设家具与饰品，实际交付可能不同。",

      "sec.materials": "材质",
      "materials.title": "由材质<br>完成的氛围",
      "materials.lead": "大理石与木材、金属与古铜玻璃的克制组合。相较装饰，更专注于材质的质感与细节。",
      "brand.arrital": "意大利橱柜 —— 冰箱、冷冻柜、酒柜与智能烤箱，目光所及之处皆如作品。",
      "brand.bora": "一体式电磁炉 —— 以细致入微的考量，成就干净紧凑的设计。",
      "brand.miele": "嵌入式烤箱 —— 与现代厨房经典融合的完美一体感。",
      "brand.zucchetti": "意大利龙头 —— 水流顺应你的纹理，呈现自然本真的通透。",
      "materials.finish.t": "材质配置",
      "materials.finish.tile": "Duomo&Co · REX Origines · Casa Dolce Casa",
      "materials.finish.marble": "大理石 · 客厅与厨房重点收边",
      "materials.finish.wood": "原木饰面 · 门与墙面",
      "materials.finish.granite": "花岗石 · 入户与公共空间",
      "materials.finish.metal": "金属框与古铜玻璃",
      "materials.finish.kitchen": "烤漆门 · 金属门 · 岛台台面",
      "materials.note": "材质与家具可能因供应与性能改良而变更为同级或更高级产品。实际适用范围以各户咨询资料为准。",
      "doc.home": "住宅材质板", "doc.office": "写字楼材质板", "doc.detail": "瓷砖 · 厨房品牌",

      "sec.amenities": "配套",
      "amenities.title": "连休息<br>也设计好的一天",
      "amenities.lead": "地下 1~2 层的配套空间与住户专用 App 的生活服务。家中的时间与家外的时间，一同设计。",
      "am.golf": "The Plaza Golf TPZ GOLF", "am.spa": "私享理疗与按摩", "am.rest": "休憩与休息厅", "am.rooftop": "屋顶花园 · 凉亭", "am.valet": "24 小时代客泊车",
      "am.community": "社区设施", "am.living": "生活服务",
      "am.c1": "The Plaza Golf 屏幕高尔夫", "am.c2": "普拉提 · 1:1 PT 中心",
      "am.c3": "私享理疗与按摩", "am.c4": "24 小时礼宾 · 管家 · PA 服务",
      "am.c5": "24 小时代客泊车 · 洗车 · 机场礼遇", "am.c6": "屋顶花园 · 凉亭",
      "am.s1": "家常料理配送", "am.s2": "家政服务", "am.s3": "礼宾车 · 机场接送", "am.s4": "名品洗涤",
      "am.s5": "宠物照护", "am.s6": "物品寄存 · 邮件室", "am.s7": "市集 · 团购", "am.s8": "家居造型",
      "amenities.note": "配套与生活服务可能因审批与协商调整项目、名称与运营范围。当前运营情况请在咨询时确认。",

      "sec.location": "位置",
      "location.title": "两座车站，<br>一个江南",
      "location.lead": "9 号线彦州站与水仁盆唐线、9 号线宣靖陵站。在奉恩寺路与彦州路交汇的街角，江南的办公、文化与医疗配套皆在步行范围内。",
      "location.addr": "首尔江南区驿三洞 653-3",
      "location.addr.sub": "彦州路 565 · 565, Eonju-ro, Gangnam-gu, Seoul 06135",
      "location.kakao": "Kakao 地图", "location.naver": "Naver 地图",
      "location.st1": "彦州站", "location.st1.walk": "步行约 7 分钟", "location.st1.line": "400m · 9 号线",
      "location.st2": "宣靖陵站", "location.st2.walk": "步行约 10 分钟", "location.st2.line": "600m · 9 号线 · 水仁盆唐线",
      "location.p1.t": "生活配套",
      "location.p1": "现代、Galleria、新世界、乐天百货，Andaz 首尔江南、Josun Palace，江南Severance医院与CHA医院均在附近。",
      "location.p2.t": "文化与绿意",
      "location.p2": "联合国教科文组织世界遗产宣靖陵，步行约 10 分钟（600m）。城市中的绿意与散步道近在身旁。",
      "location.p3.t": "交通",
      "location.p3": "位于奉恩寺路与彦州路大道转角，前往京釜高速公路与高速客运站十分便利。",
      "location.p4.t": "开发计划",
      "location.p4": "国际交流复合区、现代汽车 GBC、永东大路复合换乘中心、GTX-A 等邻近项目正在推进（属外部项目，进度可能变动）。",
      "location.visit.t": "参观指南",
      "location.main": "总机代表号", "location.sales": "韩国国内顾问", "location.global": "海外咨询专线", "location.sales.note": "官方页面所列号码",
      "location.office": "售楼处（官方信息）",
      "location.office.v": "首尔江南区清潭洞 84（宣陵路 842）<small>每日 10:00 – 18:00 · 代客泊车</small>",
      "location.office.note": "售楼处信息为官方网站在销售期间的说明，当前是否运营请电话确认。",
      "location.cta": "预约参观",

      "sec.enquire": "咨询",
      "enquire.title": "亲自体验<br>BLACK 的时间",
      "enquire.lead": "为预约客户准备私享导览。可选房源与条件由负责人个别说明。",
      "enquire.telMain": "总机代表号", "enquire.tel": "韩国国内顾问", "enquire.telGlobal": "海外咨询专线", "enquire.tel2": "官方销售咨询",
      "enquire.hours": "咨询时间 · 平日 09:00 – 19:00，周末可预约",
      "form.name": "姓名", "form.phone": "联系电话", "form.type": "关注户型",
      "form.type.any": "暂不选择",
      "form.type.a": "住宅 A · 21 坪复式", "form.type.b": "住宅 B · 37 坪复式",
      "form.type.c": "住宅 C · 19 坪复式", "form.type.d": "住宅 D · 22 坪复式",
      "form.type.e": "住宅 E · 43 坪复式", "form.type.f": "住宅 F · 43 坪复式",
      "form.type.oa": "写字楼 OA · 15 坪", "form.type.ob": "写字楼 OB · 13 坪",
      "form.type.oc": "写字楼 OC · 12 坪", "form.type.od": "写字楼 OD · 15 坪",
      "form.date": "希望参观日期",
      "form.msg": "咨询内容",
      "form.msg.ph": "例如：想了解 46 坪剩余房源与租赁条件。",
      "form.agree": "同意收集与使用本人姓名与联系方式，仅用于本次咨询，处理后将予销毁。",
      "form.submit": "发送预约内容",
      "form.note": "所填内容将通过短信或电话传达，本页面不会自动受理。",
      "form.err.name": "请填写姓名。",
      "form.err.phone": "请填写正确的联系电话。",
      "form.err.agree": "请同意个人信息的收集与使用。",
      "result.title": "预约内容已准备好",
      "result.sms": "以短信发送", "result.call": "拨打电话", "result.copy": "复制内容",
      "result.copied": "已复制",
      "result.note": "若短信应用未打开，请复制内容发送至 010-4434-2616。",

      "notice.title": "注意事项",
      "notice.1": "本页面所用 CG、透视图与鸟瞰图旨在帮助理解，可能与实际不同；依审批与协商，色彩与形态可能变更。",
      "notice.2": "室内图片为样板间实景，包含陈设家具与饰品。选项与交付项目请通过咨询资料确认。",
      "notice.3": "材质与家具可能因供应与性能改良而变更为同级或更高级产品。",
      "notice.4": "标注面积为专有面积基准，施工时可能因审批变更而调整。复式净高依资料标为 6m（客厅基准）至 6.7m（结构基准），实测尺寸请在咨询各户时确认。",
      "notice.5": "社区配套与礼宾服务可能依审批与协商变更服务项目与名称。",
      "notice.6": "签约前请亲临项目现场，确认道路、噪音、视野、日照与出入口等现场条件。",
      "notice.7": "本页面为提供信息与咨询而制作的页面，并非相地Caelum（株）及开发方的官方网站。开发、施工、受托及建筑信息依据官方资料与建筑台账。",
      "notice.8": "金额、剩余房源与合同条件随时间变化，最终内容请以合同文件及咨询时的官方资料为准。",
      "notice.sources": "资料来源", "notice.src1": "相地Caelum BLACK 官方网站",
      "notice.src2": "官方宣传册（复式·材质·施工业绩）",
      "notice.src3": "建筑台账（使用许可日·用途面积·停车）",
      "notice.src4": "Kakao 地图步行路线（车站距离）",
      "notice.disclaimer": "图片自官方网站及官方宣传册下载使用。",

      "footer.addr": "首尔特别市江南区驿三洞 653-3 · 彦州路 565",
      "footer.parties": "开发 大丰产业（株） · 施工 相地Caelum（株） · 受托 KB资产信托（株）",
      "footer.contact": "总机 +82 2 563 2367 · 国内顾问 010-4434-2616 · 海外咨询 +82 10 8468 5552",
      "footer.note": "本页面为咨询用预览页面，并非相地Caelum（株）的官方网站。",

      "type.duplex": "复式住宅", "type.single": "单层写字楼",
      "area.excl": "专有面积", "area.contract": "合同面积", "area.terrace": "露台面积", "area.usable": "实际使用面积",
      "type.view": "查看户型", "unit.pyeong": "坪",
      "lb.close": "关闭", "lb.prev": "上一张", "lb.next": "下一张",
      "a11y.skip": "跳至正文", "a11y.nav": "主菜单", "a11y.tabs": "产品类型", "a11y.dots": "背景图片"
    }
  };

  /* ----------------------------- 방 이름 ----------------------------- */
  const ROOMS = {
    "ENTRANCE": ["현관", "Entrance", "入户"],
    "PANTRY": ["팬트리", "Pantry", "储藏间"],
    "STAIR CASE": ["계단", "Stair", "楼梯"],
    "KITCHEN & DINING": ["주방 · 다이닝", "Kitchen & dining", "厨房与餐厅"],
    "LIVING ROOM": ["거실", "Living room", "客厅"],
    "LIVING & DINING": ["거실 · 다이닝", "Living & dining", "客厅与餐厅"],
    "DINING ROOM": ["다이닝 룸", "Dining room", "餐厅"],
    "TERRACE": ["테라스", "Terrace", "露台"],
    "BATH ROOM": ["욕실", "Bathroom", "浴室"],
    "GUEST BATH ROOM": ["게스트 욕실", "Guest bath", "客卫"],
    "GUEST BATH": ["게스트 욕실", "Guest bath", "客卫"],
    "CORRIDOR": ["복도", "Corridor", "走廊"],
    "LAUNDRY ROOM": ["세탁실", "Laundry", "洗衣房"],
    "BED ROOM": ["침실", "Bedroom", "卧室"],
    "DRESS ROOM": ["드레스룸", "Dressing room", "衣帽间"],
    "MASTER ROOM": ["마스터룸", "Master bedroom", "主卧"],
    "MASTER BATH ROOM": ["마스터 욕실", "Master bath", "主卫"],
    "MASTER DRESS ROOM": ["마스터 드레스룸", "Master dressing", "主衣帽间"],
    "FAMILY ROOM": ["패밀리룸", "Family room", "家庭厅"],
    "VOID": ["보이드", "Void", "挑空"],
    "ALPHA ROOM": ["알파룸", "Alpha room", "多功能房"],
    "SHELTER": ["대피공간", "Shelter", "避难空间"],
    "SUB-KITCHEN": ["서브 주방", "Sub-kitchen", "副厨房"],
    "POWDER ROOM": ["파우더룸", "Powder room", "化妆间"]
  };
  const LANG_INDEX = { ko: 0, en: 1, zh: 2 };

  function roomLabel(name, lang) {
    const m = name.match(/^(.*?)(?:-(\d+))$/);
    const base = m ? m[1] : name;
    const num = m ? m[2] : "";
    const t = ROOMS[base];
    const i = LANG_INDEX[lang];
    if (!t) return name;
    const suffixes = { ko: " ", en: " ", zh: " " };
    return t[i] + (num ? suffixes[lang] + num : "");
  }

  /* ----------------------------- 타입 데이터 ----------------------------- */
  const TYPES = {
    apt: [
      {
        id: "A", img: ["plan-a-1f.jpg", "plan-a-2f.jpg"], duplex: true,
        excl: [69.6515, 21.07], contract: [91.9433, 27.81], terrace: [4.2000, 1.27], usable: [101.9765, 30.85],
        rooms: [
          ["ENTRANCE", "PANTRY", "STAIR CASE", "KITCHEN & DINING", "LIVING ROOM", "TERRACE", "BATH ROOM", "CORRIDOR", "LAUNDRY ROOM"],
          ["BED ROOM-1", "BED ROOM-2", "BATH ROOM", "DRESS ROOM", "STAIR CASE", "SHELTER"]
        ]
      },
      {
        id: "B", img: ["plan-b-1f.jpg", "plan-b-2f.jpg"], duplex: true,
        excl: [124.8252, 37.76], contract: [164.7751, 49.84], terrace: [6.0792, 1.84], usable: [158.7110, 48.01],
        rooms: [
          ["ENTRANCE", "BATH ROOM-1", "BED ROOM-1", "TERRACE-1", "STAIR CASE", "PANTRY", "LIVING & DINING", "KITCHEN", "SUB-KITCHEN", "TERRACE-2"],
          ["MASTER ROOM", "DRESS ROOM", "MASTER BATH ROOM", "FAMILY ROOM", "BATH ROOM-2", "BED ROOM-2", "STAIR CASE", "VOID"]
        ]
      },
      {
        id: "C", img: ["plan-c-1f.jpg", "plan-c-2f.jpg"], duplex: true,
        excl: [64.9392, 19.65], contract: [85.7228, 25.93], terrace: [2.5078, 0.76], usable: null,
        rooms: [
          ["ENTRANCE", "GUEST BATH ROOM", "LIVING ROOM", "STAIR CASE", "TERRACE", "DINING ROOM", "LAUNDRY ROOM"],
          ["BED ROOM", "BATH ROOM", "DRESS ROOM", "ALPHA ROOM", "STAIR CASE", "SHELTER"]
        ]
      },
      {
        id: "D", img: ["plan-d-1f.jpg", "plan-d-2f.jpg"], duplex: true,
        excl: [74.7291, 22.61], contract: [98.6459, 29.84], terrace: [4.6158, 1.40], usable: [102.9066, 31.13],
        rooms: [
          ["ENTRANCE", "GUEST BATH", "CORRIDOR", "STAIR CASE", "KITCHEN & DINING", "TERRACE", "LIVING ROOM", "LAUNDRY ROOM"],
          ["BED ROOM", "ALPHA ROOM", "BATH ROOM", "DRESS ROOM", "STAIR CASE", "VOID"]
        ]
      },
      {
        id: "E", img: ["plan-e-1f.jpg", "plan-e-2f.jpg"], duplex: true,
        excl: [142.6856, 43.16], contract: [188.3517, 56.98], terrace: [16.1714, 4.89], usable: [198.6556, 60.09],
        rooms: [
          ["ENTRANCE", "CORRIDOR", "LIVING ROOM", "STAIR CASE", "KITCHEN & DINING", "SUB-KITCHEN", "BED ROOM-1", "DRESS ROOM-1", "BATH ROOM-1", "PANTRY", "TERRACE-1"],
          ["STAIR CASE", "FAMILY ROOM", "MASTER ROOM", "MASTER BATH ROOM", "MASTER DRESS ROOM", "TERRACE-2", "BATH ROOM-2", "DRESS ROOM-2", "BED ROOM-2", "TERRACE-3", "VOID"]
        ]
      },
      {
        id: "F", img: ["plan-f-1f.jpg", "plan-f-2f.jpg"], duplex: true,
        excl: [142.6857, 43.16], contract: [188.3518, 56.98], terrace: [9.2316, 2.79], usable: [187.2507, 56.64],
        rooms: [
          ["ENTRANCE", "PANTRY", "LIVING ROOM", "KITCHEN & DINING", "SUB-KITCHEN", "BED ROOM", "BATH ROOM", "TERRACE", "STAIR CASE"],
          ["STAIR CASE", "FAMILY ROOM", "MASTER ROOM", "MASTER BATH ROOM", "MASTER DRESS ROOM", "BED ROOM-2", "DRESS ROOM", "BATH ROOM-2", "TERRACE-2", "VOID"]
        ]
      }
    ],
    off: [
      {
        id: "OA", img: ["plan-oa.jpg"], duplex: false,
        excl: [50.7800, 15.36], contract: [70.4700, 21.32], terrace: null, usable: null,
        rooms: [["ENTRANCE", "CORRIDOR", "KITCHEN & DINING", "LIVING ROOM", "BED ROOM", "DRESS ROOM", "POWDER ROOM", "BATH ROOM"]]
      },
      {
        id: "OB", img: ["plan-ob.jpg"], duplex: false,
        excl: [44.1043, 13.34], contract: [61.2058, 18.51], terrace: null, usable: null,
        rooms: [["ENTRANCE", "CORRIDOR", "KITCHEN & DINING", "LIVING ROOM", "BED ROOM", "POWDER ROOM", "BATH ROOM"]]
      },
      {
        id: "OC", img: ["plan-oc.jpg"], duplex: false,
        excl: [41.2068, 12.47], contract: [57.1848, 17.30], terrace: null, usable: null,
        rooms: [["ENTRANCE", "CORRIDOR", "BATH ROOM", "POWDER ROOM", "BED ROOM", "LIVING ROOM", "KITCHEN & DINING"]]
      },
      {
        id: "OD", img: ["plan-od.jpg"], duplex: false,
        excl: [52.0302, 15.74], contract: [72.2050, 21.84], terrace: null, usable: null,
        rooms: [["ENTRANCE", "CORRIDOR", "BATH ROOM", "DRESS ROOM", "POWDER ROOM", "BED ROOM", "LIVING ROOM", "KITCHEN & DINING"]]
      }
    ]
  };

  /* ----------------------------- 갤러리 ----------------------------- */
  const GALLERY = [
    { src: "assets/images/ext-tower-dusk.jpg", w: 640, h: 760, cap: ["외관 · 해질녘", "Exterior at dusk", "外观 · 黄昏"] },
    { src: "assets/images/living-01.jpg", w: 1400, h: 740, cap: ["거실", "Living room", "客厅"] },
    { src: "assets/images/ext-facade-night.jpg", w: 650, h: 820, cap: ["언주로에서 바라본 입면", "Facade from Eonju-ro", "从彦州路所见立面"] },
    { src: "assets/images/arch-vault.jpg", w: 1500, h: 908, cap: ["리브 아치 볼트", "Ribbed arch vault", "肋状拱顶"] },
    { src: "assets/images/dining-pendant.jpg", w: 740, h: 460, cap: ["다이닝", "Dining", "餐厅"] },
    { src: "assets/images/ext-street-dusk.jpg", w: 1440, h: 510, cap: ["경복아파트사거리 · 해질녘", "Gyeongbok junction at dusk", "景福公寓十字路口 · 黄昏"] },
    { src: "assets/images/kitchen-01.jpg", w: 740, h: 740, cap: ["주방", "Kitchen", "厨房"] },
    { src: "assets/images/kitchen-island.jpg", w: 1500, h: 828, cap: ["주방 아일랜드", "Kitchen island", "厨房岛台"] },
    { src: "assets/images/lounge.jpg", w: 1300, h: 687, cap: ["라운지", "Lounge", "休息厅"] },
    { src: "assets/images/detail-ribbed.jpg", w: 1500, h: 762, cap: ["리브 디테일", "Ribbed detail", "肋状细节"] },
    { src: "assets/images/living-02.jpg", w: 1500, h: 750, cap: ["거실 · 야간", "Living room at night", "客厅 · 夜间"] },
    { src: "assets/images/interior-wood.jpg", w: 740, h: 740, cap: ["원목 베니어 월", "Wood veneer wall", "原木饰面墙"] },
    { src: "assets/images/ext-aerial-night.jpg", w: 1500, h: 854, cap: ["도심에서 바라본 전경", "City view", "城市鸟瞰"] },
    { src: "assets/images/stair-void.jpg", w: 1300, h: 956, cap: ["계단실", "Stair void", "楼梯间"] },
    { src: "assets/images/detail-marble.jpg", w: 1500, h: 766, cap: ["대리석 디테일", "Marble detail", "大理石细节"] },
    { src: "assets/images/detail-table.jpg", w: 1500, h: 828, cap: ["테이블 디테일", "Table detail", "桌面细节"] },
    { src: "assets/images/arch-pavilion.jpg", w: 600, h: 350, cap: ["캐노피", "Canopy", "雨棚"] },
    { src: "assets/images/ext-sign.jpg", w: 600, h: 740, cap: ["루프탑 사인", "Rooftop sign", "屋顶标识"] },
    { src: "assets/images/ext-close.jpg", w: 600, h: 740, cap: ["입면 디테일", "Facade detail", "立面细节"] },
    { src: "assets/images/ext-aerial-dark.jpg", w: 1500, h: 1023, cap: ["야경", "Night view", "夜景"] },
    { src: "assets/images/life-car.jpg", w: 1000, h: 620, cap: ["발렛 서비스", "Valet service", "代客泊车"] },
    { src: "assets/images/life-golf.jpg", w: 900, h: 900, cap: ["골프", "Golf", "高尔夫"] },
    { src: "assets/images/life-pilates.jpg", w: 900, h: 900, cap: ["필라테스", "Pilates", "普拉提"] },
    { src: "assets/images/life-spa.jpg", w: 900, h: 900, cap: ["프라이빗 스파", "Private spa", "私享水疗"] },
    { src: "assets/images/life-rooftop.jpg", w: 1400, h: 700, cap: ["루프탑 라운지", "Rooftop lounge", "屋顶休息区"] },
    { src: "assets/images/ext-aerial-lit.jpg", w: 600, h: 740, cap: ["도심의 밤", "The city at night", "都市夜色"] },
    { src: "assets/images/life-detail.jpg", w: 900, h: 601, cap: ["디테일", "Detail", "细节"] }
  ];

  /* ----------------------------- 상태 ----------------------------- */
  const state = { lang: "ko", cat: "apt", type: "A", floor: 0, lbIndex: 0 };
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));

  function t(key) {
    const d = I18N[state.lang] || I18N.ko;
    return d[key] !== undefined ? d[key] : (I18N.ko[key] !== undefined ? I18N.ko[key] : key);
  }

  /* ----------------------------- 언어 적용 ----------------------------- */
  function applyLang(lang, opts) {
    state.lang = I18N[lang] ? lang : "ko";
    const dict = I18N[state.lang];
    document.documentElement.lang = state.lang === "zh" ? "zh-Hans" : state.lang;
    document.body.setAttribute("data-lang", state.lang);

    $$("[data-i18n]").forEach((el) => {
      const v = dict[el.getAttribute("data-i18n")];
      if (v === undefined) return;
      if (v.indexOf("<") !== -1) el.innerHTML = v;
      else el.textContent = v;
    });
    $$("[data-i18n-placeholder]").forEach((el) => {
      const v = dict[el.getAttribute("data-i18n-placeholder")];
      if (v) el.setAttribute("placeholder", v);
    });

    document.title = dict["meta.title"];
    const md = $('meta[name="description"]');
    if (md) md.setAttribute("content", dict["meta.desc"]);

    $$(".lang button").forEach((b) => b.classList.toggle("is-active", b.dataset.lang === state.lang));

    const setA = (sel, key) => { const el = $(sel); if (el) el.setAttribute("aria-label", t(key)); };
    setA(".site-nav", "a11y.nav");
    setA(".ts-group", "a11y.tabs");
    setA(".hero-dots", "a11y.dots");
    const skip = $(".skip-link"); if (skip) skip.textContent = t("a11y.skip");
    $$(".js-pyeong").forEach((el) => { el.textContent = t("unit.pyeong"); });
    const lbClose = $("#lbClose"); if (lbClose) lbClose.setAttribute("aria-label", t("lb.close"));
    const lbPrev = $("#lbPrev"); if (lbPrev) lbPrev.setAttribute("aria-label", t("lb.prev"));
    const lbNext = $("#lbNext"); if (lbNext) lbNext.setAttribute("aria-label", t("lb.next"));

    renderChips();
    renderType();
    renderTable();
    updateGalleryLang();
    if (state.lbIndex !== null && !$("#lightbox").hidden) updateLightbox();

    try { localStorage.setItem("sjcb-lang", state.lang); } catch (e) {}
    if (!opts || opts.url !== false) {
      const u = new URL(location.href);
      u.searchParams.set("lang", state.lang);
      history.replaceState(null, "", u);
    }
  }

  /* ----------------------------- 타입 패널 ----------------------------- */
  function renderChips() {
    const box = $("#typeChips");
    if (!box) return;
    box.innerHTML = "";
    TYPES[state.cat].forEach((tp) => {
      const b = document.createElement("button");
      b.type = "button";
      b.textContent = tp.id;
      b.className = "chip" + (tp.id === state.type ? " is-active" : "");
      b.setAttribute("aria-pressed", tp.id === state.type ? "true" : "false");
      b.addEventListener("click", () => {
        state.type = tp.id;
        state.floor = 0;
        renderChips();
        renderType();
      });
      box.appendChild(b);
    });
  }

  function currentType() {
    return TYPES[state.cat].find((x) => x.id === state.type) || TYPES[state.cat][0];
  }

  function fmt(m2, pyeong) {
    if (!m2 && m2 !== 0) return "—";
    const a = (Math.round(m2 * 10000) / 10000).toLocaleString("en-US", { minimumFractionDigits: 4 });
    const b = (Math.round(pyeong * 100) / 100).toFixed(2);
    return a + "㎡ <small>" + b + t("unit.pyeong") + "</small>";
  }

  function fmtShort(m2, pyeong) {
    if (!m2 && m2 !== 0) return "—";
    return (Math.round(m2 * 100) / 100).toFixed(2) + "㎡<small>" + (Math.round(pyeong * 100) / 100).toFixed(2) + t("unit.pyeong") + "</small>";
  }

  function renderType() {
    const tp = currentType();
    const img = $("#typeImage");
    const fs = $("#floorSwitch");
    if (!img) return;

    if (tp.duplex) {
      fs.hidden = false;
      $$("#floorSwitch button").forEach((b) => b.classList.toggle("is-active", Number(b.dataset.floor) - 1 === state.floor));
    } else {
      fs.hidden = true;
      state.floor = 0;
    }
    img.src = "assets/images/" + tp.img[Math.min(state.floor, tp.img.length - 1)];
    img.alt = "TYPE " + tp.id + " " + (state.floor + 1) + "F plan";

    $("#typeName").textContent = "TYPE " + tp.id;
    $("#typeTag").textContent = (tp.duplex ? t("type.duplex") : t("type.single")) + " · " + tp.excl[1].toFixed(2) + t("unit.pyeong") + " / " + tp.excl[0].toFixed(2) + "㎡";

    const areas = $("#typeAreas");
    areas.innerHTML = "";
    const rows = [
      [t("area.excl"), tp.excl],
      [t("area.contract"), tp.contract],
      [t("area.terrace"), tp.terrace],
      [t("area.usable"), tp.usable]
    ];
    rows.forEach(([label, val]) => {
      const d = document.createElement("div");
      d.innerHTML = "<dt>" + label + "</dt><dd>" + fmt(val ? val[0] : null, val ? val[1] : null) + "</dd>";
      areas.appendChild(d);
    });

    const ul = $("#typeRooms");
    ul.innerHTML = "";
    const list = tp.rooms[Math.min(state.floor, tp.rooms.length - 1)] || [];
    list.forEach((r, i) => {
      const li = document.createElement("li");
      li.innerHTML = "<span>" + (i + 1) + "</span>" + roomLabel(r, state.lang);
      ul.appendChild(li);
    });
  }

  function renderTable() {
    const body = $("#typeTableBody");
    if (!body) return;
    body.innerHTML = "";
    const all = TYPES.apt.concat(TYPES.off);
    all.forEach((tp) => {
      const tr = document.createElement("tr");
      tr.innerHTML =
        "<th scope='row'>" + tp.id + "</th>" +
        "<td>" + fmtShort(tp.excl[0], tp.excl[1]) + "</td>" +
        "<td>" + fmtShort(tp.contract[0], tp.contract[1]) + "</td>" +
        "<td>" + (tp.terrace ? fmtShort(tp.terrace[0], tp.terrace[1]) : "—") + "</td>" +
        "<td>" + (tp.usable ? fmtShort(tp.usable[0], tp.usable[1]) : "—") + "</td>" +
        "<td><button type='button' class='row-link' data-jump='" + (tp.id.indexOf("O") === 0 ? "off" : "apt") + "' data-type='" + tp.id + "'>" + t("type.view") + " →</button></td>";
      body.appendChild(tr);
    });
    $$("#typeTableBody .row-link").forEach((b) => {
      b.addEventListener("click", () => {
        state.cat = b.dataset.jump;
        state.type = b.dataset.type;
        state.floor = 0;
        $$(".ts-group button").forEach((x) => {
          const on = x.dataset.cat === state.cat;
          x.classList.toggle("is-active", on);
          x.setAttribute("aria-selected", on ? "true" : "false");
        });
        renderChips();
        renderType();
        $("#residences").scrollIntoView({ behavior: "smooth", block: "start" });
      });
    });
  }

  /* ----------------------------- 갤러리 ----------------------------- */
  function renderGallery() {
    const grid = $("#galleryGrid");
    if (!grid) return;
    grid.innerHTML = "";
    GALLERY.forEach((g, i) => {
      const fig = document.createElement("figure");
      fig.className = "g-item" + (i % 9 === 0 ? " g-item--wide" : "");
      fig.tabIndex = 0;
      fig.setAttribute("role", "button");
      fig.setAttribute("aria-label", g.cap[LANG_INDEX[state.lang]]);
      fig.innerHTML =
        "<img src='" + g.src + "' alt='" + g.cap[LANG_INDEX[state.lang]] + "' width='" + g.w + "' height='" + g.h + "' loading='lazy'>" +
        "<figcaption>" + g.cap[LANG_INDEX[state.lang]] + "</figcaption>";
      fig.addEventListener("click", () => openLightbox(i));
      fig.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") { e.preventDefault(); openLightbox(i); }
      });
      grid.appendChild(fig);
    });
  }

  function updateGalleryLang() {
    const items = $$("#galleryGrid .g-item");
    if (!items.length) return;
    items.forEach((fig, i) => {
      const g = GALLERY[i];
      if (!g) return;
      const cap = g.cap[LANG_INDEX[state.lang]];
      fig.setAttribute("aria-label", cap);
      const capEl = fig.querySelector("figcaption");
      const img = fig.querySelector("img");
      if (capEl) capEl.textContent = cap;
      if (img) img.alt = cap;
    });
  }

  function openLightbox(i) {
    state.lbIndex = i;
    $("#lightbox").hidden = false;
    document.body.classList.add("is-locked");
    updateLightbox();
    $("#lbClose").focus();
  }

  function updateLightbox() {
    const g = GALLERY[state.lbIndex];
    if (!g) return;
    $("#lbImage").src = g.src;
    $("#lbImage").alt = g.cap[LANG_INDEX[state.lang]];
    $("#lbCaption").textContent = g.cap[LANG_INDEX[state.lang]];
    $("#lbCount").textContent = (state.lbIndex + 1) + " / " + GALLERY.length;
  }

  function closeLightbox() {
    $("#lightbox").hidden = true;
    document.body.classList.remove("is-locked");
  }

  function stepLightbox(d) {
    state.lbIndex = (state.lbIndex + d + GALLERY.length) % GALLERY.length;
    updateLightbox();
  }

  /* ----------------------------- 예약 폼 ----------------------------- */
  function buildMessage() {
    const name = $("#fName").value.trim();
    const phone = $("#fPhone").value.trim();
    const type = $("#fType");
    const typeLabel = type.options[type.selectedIndex] ? type.options[type.selectedIndex].textContent : "";
    const date = $("#fDate").value;
    const msg = $("#fMsg").value.trim();
    const head = {
      ko: ["상지카일룸 BLACK 방문 예약", "성함", "연락처", "관심 타입", "방문 희망일", "문의"],
      en: ["SANGJI CAELUM BLACK — visit request", "Name", "Phone", "Type", "Preferred date", "Message"],
      zh: ["相地Caelum BLACK 预约参观", "姓名", "电话", "关注户型", "希望日期", "咨询"]
    }[state.lang];
    const lines = [head[0], head[1] + ": " + name, head[2] + ": " + phone];
    if (typeLabel) lines.push(head[3] + ": " + typeLabel);
    if (date) lines.push(head[4] + ": " + date);
    if (msg) lines.push(head[5] + ": " + msg);
    lines.push("— " + t("meta.title").split("|")[0].trim());
    return lines.join("\n");
  }

  function handleSubmit(e) {
    e.preventDefault();
    const status = $("#formStatus");
    const name = $("#fName").value.trim();
    const phone = $("#fPhone").value.trim();
    const digits = phone.replace(/[^0-9]/g, "");
    const agree = $("#fAgree").checked;

    let err = "";
    if (!name) err = t("form.err.name");
    else if (digits.length < 9 || digits.length > 11) err = t("form.err.phone");
    else if (!agree) err = t("form.err.agree");

    if (err) {
      status.textContent = err;
      status.className = "form-status is-error";
      return;
    }
    status.textContent = "";
    status.className = "form-status";

    const text = buildMessage();
    const result = $("#enqResult");
    $("#enqPreview").textContent = text;
    $("#smsLink").href = "sms:+821044342616?body=" + encodeURIComponent(text);
    result.hidden = false;
    result.scrollIntoView({ behavior: "smooth", block: "center" });
  }

  /* ----------------------------- 초기화 ----------------------------- */
  function initHero() {
    const slides = $$(".hero-slide");
    const dots = $$(".hero-dots button");
    if (!slides.length) return;
    let idx = 0, timer = null;

    function show(i) {
      idx = (i + slides.length) % slides.length;
      slides.forEach((s, k) => s.classList.toggle("is-active", k === idx));
      dots.forEach((d, k) => d.classList.toggle("is-active", k === idx));
    }
    function start() {
      stop();
      timer = setInterval(() => show(idx + 1), 7000);
    }
    function stop() { if (timer) clearInterval(timer); timer = null; }

    dots.forEach((d, k) => d.addEventListener("click", () => { show(k); start(); }));
    document.addEventListener("visibilitychange", () => { document.hidden ? stop() : start(); });
    start();
  }

  function initHeader() {
    const hdr = $("#siteHeader");
    const onScroll = () => {
      if (window.scrollY > 40) hdr.classList.add("is-solid");
      else hdr.classList.remove("is-solid");
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const toggle = $(".nav-toggle");
    const nav = $("#mobileNav");
    toggle.addEventListener("click", () => {
      const open = nav.hasAttribute("hidden");
      if (open) nav.removeAttribute("hidden");
      else nav.setAttribute("hidden", "");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      document.body.classList.toggle("is-locked", open);
    });
    $$("#mobileNav a").forEach((a) => a.addEventListener("click", () => {
      nav.setAttribute("hidden", "");
      toggle.setAttribute("aria-expanded", "false");
      document.body.classList.remove("is-locked");
    }));
  }

  function initReveal() {
    const els = $$(".reveal");
    if (!("IntersectionObserver" in window)) { els.forEach((e) => e.classList.add("is-in")); return; }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) { en.target.classList.add("is-in"); io.unobserve(en.target); }
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
    els.forEach((e) => io.observe(e));
  }

  function initScrollSpy() {
    const links = $$(".site-nav a");
    const secs = links
      .map((a) => ({ link: a, el: document.querySelector(a.getAttribute("href")) }))
      .filter((x) => x.el);
    if (!secs.length) return;
    const onScroll = () => {
      const y = window.scrollY + 160;
      let current = null;
      secs.forEach((s) => { if (s.el.offsetTop <= y) current = s.el.id; });
      secs.forEach((s) => s.link.classList.toggle("is-current", s.el.id === current));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  function initLangButtons() {
    $$(".lang button").forEach((b) => {
      b.addEventListener("click", () => applyLang(b.dataset.lang));
    });
  }

  function initTypeSwitch() {
    $$(".ts-group button").forEach((b) => {
      b.addEventListener("click", () => {
        state.cat = b.dataset.cat;
        state.type = TYPES[state.cat][0].id;
        state.floor = 0;
        $$(".ts-group button").forEach((x) => {
          const on = x === b;
          x.classList.toggle("is-active", on);
          x.setAttribute("aria-selected", on ? "true" : "false");
        });
        renderChips();
        renderType();
      });
    });
    $$("#floorSwitch button").forEach((b) => {
      b.addEventListener("click", () => {
        state.floor = Number(b.dataset.floor) - 1;
        renderType();
      });
    });
  }

  function initLightbox() {
    $("#lbClose").addEventListener("click", closeLightbox);
    $("#lbPrev").addEventListener("click", () => stepLightbox(-1));
    $("#lbNext").addEventListener("click", () => stepLightbox(1));
    $("#lightbox").addEventListener("click", (e) => { if (e.target.id === "lightbox") closeLightbox(); });
    $$("[data-lightbox]").forEach((a) => {
      a.addEventListener("click", (e) => {
        e.preventDefault();
        const cap = a.getAttribute("data-caption-" + state.lang) || a.getAttribute("data-caption-ko") || "";
        GALLERY.push({ src: a.getAttribute("href"), w: 1200, h: 831, cap: [cap, cap, cap], temp: true });
        state.lbIndex = GALLERY.length - 1;
        $("#lightbox").hidden = false;
        document.body.classList.add("is-locked");
        $("#lbImage").src = GALLERY[state.lbIndex].src;
        $("#lbCaption").textContent = cap;
        $("#lbCount").textContent = "1 / 1";
        $("#lbClose").focus();
      });
    });
    document.addEventListener("keydown", (e) => {
      const lb = $("#lightbox");
      if (lb.hidden) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") stepLightbox(1);
      if (e.key === "ArrowLeft") stepLightbox(-1);
    });
  }

  function initForm() {
    const form = $("#enqForm");
    if (!form) return;
    form.addEventListener("submit", handleSubmit);
    $("#copyBtn").addEventListener("click", async () => {
      const text = $("#enqPreview").textContent;
      try {
        await navigator.clipboard.writeText(text);
        $("#copyBtn").textContent = t("result.copied");
        setTimeout(() => { $("#copyBtn").textContent = t("result.copy"); }, 2000);
      } catch (e) {
        const r = document.createRange();
        r.selectNodeContents($("#enqPreview"));
        const sel = window.getSelection();
        sel.removeAllRanges();
        sel.addRange(r);
      }
    });
  }

  function init() {
    const params = new URLSearchParams(location.search);
    let lang = params.get("lang");
    if (!lang) { try { lang = localStorage.getItem("sjcb-lang"); } catch (e) {} }
    state.lang = I18N[lang] ? lang : "ko";

    renderGallery();
    initTypeSwitch();
    applyLang(state.lang, { url: !!params.get("lang") });
    initHero();
    initHeader();
    initReveal();
    initScrollSpy();
    initLangButtons();
    initLightbox();
    initForm();
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
