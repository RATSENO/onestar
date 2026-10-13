export const profile = {
  name: "이한별",
  nameEn: "Hanbyul Lee",
  role: "Java Backend Developer",
  years: "9년 7개월",
  email: "onestar1014@gmail.com",
  github: "https://github.com/RATSENO",
  blog: "https://ratseno.tistory.com/",
  headline: [
    "문제를 해결하는 개발자,",
    "협업을 즐기는 개발자,",
    "운영까지 책임지는 개발자.",
  ],
  intro: [
    "9년간 SI, SM, 솔루션 개발 환경에서 구축부터 운영까지 폭넓은 경험을 쌓아온 백엔드 개발자입니다.",
    "금융과 렌탈 비즈니스 시스템을 경험하며 서비스 전반을 이해하게 되었고, 현재는 SK매직 렌탈 시스템의 주문 계약 및 대외 연계 업무를 맡아 안정적인 운영과 기능 개선을 이끌고 있습니다.",
  ],
};

export const skills = [
  { group: "Backend", items: ["Java", "Kotlin", "Spring Framework", "Spring Boot", "MyBatis", "JPA", "RESTful API"] },
  { group: "Database", items: ["Oracle", "MySQL"] },
  { group: "Infra", items: ["Docker", "Kubernetes", "AWS", "Kong Gateway", "Git"] },
  { group: "Frontend", items: ["JavaScript", "jQuery", "React"] },
];

export const careers = [
  { company: "웅진", period: "2021.07 — 현재", desc: "렌탈 솔루션(WRMS) 구축 · SK매직 렌탈 시스템 운영" },
  { company: "비디", period: "2017.03 — 2021.06", desc: "금융권 API 플랫폼 · 게임사 백오피스 SI/SM" },
];

export type Project = {
  title: string;
  client: string;
  period: string;
  summary: string;
  tasks: string[];
  results: string[];
  stack: string[];
};

// 최신순
export const projects: Project[] = [
  {
    title: "SK매직 렌탈 시스템 운영",
    client: "웅진 · SK매직",
    period: "2022.11 — 2026.04",
    summary:
      "주문·설치·서비스·청구가 각각의 앱으로 구성된 MSA 환경에서 주문 계약 도메인과 대외 연계를 담당했습니다.",
    tasks: [
      "쿠팡, 사방넷, 이마트, 전자랜드 등 외부 유통사 주문 연계 인터페이스 개발 및 운영",
      "WMS · SAP 연계를 통한 재고 관리 및 매출 처리 인터페이스 개발",
      "운영 장애 분석과 원인 파악, 기능 개선을 통한 서비스 안정화",
      "현업 및 유관 부서와 신규 요구사항 분석 및 기능 개발",
    ],
    results: [
      "주문 → 설치 → 청구 → 물류 → ERP로 이어지는 렌탈 핵심 프로세스 운영",
      "다수 외부 판매채널 주문 연계를 안정적으로 운영하며 서비스 품질 향상",
      "운영 대응과 신규 개발, 업무 조율을 함께 맡으며 개발 리딩 역할 수행",
    ],
    stack: ["Java", "Spring Boot", "MSA", "Oracle", "SAP · WMS 연계"],
  },
  {
    title: "네이버 렌탈 플랫폼 구축",
    client: "웅진 · 네이버",
    period: "2022.05 — 2022.08",
    summary:
      "네이버 렌탈 플랫폼 구축 초기부터 참여하여 네이버와 렌탈사 간 연계 인터페이스를 설계하고 개발했습니다.",
    tasks: [
      "네이버 ↔ 렌탈사 인터페이스 설계 및 연계 기능 개발",
      "Spring Boot, Spring-jdbc-plus, Kotlin 기반 서비스 개발",
      "REST 인터페이스 개발 및 연계 테스트 수행",
      "운영 적용을 위한 인터페이스 검증 및 안정화",
    ],
    results: [
      "플랫폼 구축 초기부터 참여하여 서비스 오픈에 기여",
      "네이버와 렌탈사 간 안정적인 인터페이스 환경 구축",
      "Kotlin 기반 신규 기술 스택을 실무에 적용",
    ],
    stack: ["Kotlin", "Spring Boot", "Spring-jdbc-plus", "REST API"],
  },
  {
    title: "신한 DS OpenAPI 포털 구축",
    client: "비디 · 신한DS",
    period: "2020.12 — 2021.07",
    summary:
      "Angular.js + JPA 기반의 기존 OpenAPI 포털을 신규 구조로 재구축하고, 신한 금융 그룹사의 OpenAPI 제공 기능을 개발했습니다.",
    tasks: [
      "CA Gateway 연계로 은행 · 카드 · 금융 · 생명 그룹사 OpenAPI 제공 기능 개발",
      "Spring Framework 백엔드와 JSP · jQuery 화면 개발 병행",
      "APP 서비스 관련 기능 개발 및 API 성능 개선",
    ],
    results: [
      "JPA 조회 로직을 MyBatis로 전환하여 API 응답 속도 향상",
      "유지보수성과 성능을 고려한 신규 구조 적용",
      "금융 그룹사 OpenAPI 제공 시스템 구축에 기여",
    ],
    stack: ["Java", "Spring", "MyBatis", "CA API Gateway", "JSP"],
  },
  {
    title: "KOSCOM 마이데이터 중계플랫폼 구축",
    client: "비디 · KOSCOM",
    period: "2020.08 — 2020.12",
    summary:
      "마이데이터 사업을 위한 자본시장 중계플랫폼 구축 선행과제로, 클라우드 기반 API Gateway 환경을 구성하고 검증했습니다.",
    tasks: [
      "NBP Cloud 기반 Kubernetes 환경 구성",
      "Kong Gateway Enterprise Edition 구축 및 설정",
      "Gateway 라우팅 및 정책 설정, POC 수행",
    ],
    results: [
      "Kong Gateway 선행 학습과 POC를 주도하여 구축 가능성 검증",
      "프로젝트 경험을 바탕으로 사내 기술 공유",
      "API Gateway 및 클라우드 환경 운영 경험 확보",
    ],
    stack: ["Kubernetes", "Kong Gateway", "NBP Cloud"],
  },
];
