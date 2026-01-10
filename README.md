# 📜 Infinite Scroll Post List

React와 Zustand를 활용해 **무한 스크롤(Infinite Scroll)** 방식의 포스트 리스트를 구현한 프로젝트입니다.
<br/>
Intersection Observer API를 사용하여 스크롤 하단을 감지하고, 전역 상태 관리를 통해 페이징·로딩·에러 상태를 안정적으로 제어합니다.
<br/>
더미 API를 활용해 실제 서비스와 유사한 데이터 로딩 경험을 제공합니다.

<br/>

## 🎯 프로젝트 목표

- React 환경에서 무한 스크롤 리스트 구현
- Zustand를 활용한 전역 상태 관리 설계
- Intersection Observer API 기반 스크롤 감지
- 중복 API 호출 방지 및 안정적인 로딩 처리
- 유지보수성을 고려한 컴포넌트 및 폴더 구조 설계
- 사용자 경험(UX)을 고려한 로딩 및 에러 안내

<br/>

## 🖥️ 데모 설명

[🔗 배포 링크](https://react-zustand-infinite-scroll.vercel.app/)
<br/>

- 최초 진입 시 포스트 10개를 불러옵니다.
- 스크롤 하단 도달 시 다음 페이지의 포스트 10개를 자동으로 추가합니다.
- 모든 데이터를 불러오면 추가 API 호출이 발생하지 않습니다.
- 데이터 로딩 중에는 로딩 UI가 표시됩니다.
- API 에러 발생 시 사용자에게 알림 UI가 노출됩니다.

<br/>

## ⚒️ 기술 스택

- **React** 18+
- **TypeScript** 5.x (strict mode)
- **Zustand** 4.x
- **Axios** 1.x
- **Intersection Observer API**
- **Vite**
- **pnpm**
- **CSS** (Design Token 기반 스타일 관리)
- **ESLint + Prettier**

<br/>

## 📌 주요 기능

✅ 페이지 최초 진입 시 포스트 10개 로드
<br/>

✅ 스크롤 하단 도달 시 다음 페이지 자동 로드
<br/>

✅ Intersection Observer API 기반 무한 스크롤 구현
<br/>

✅ `isLoading`, `hasMore` 플래그를 통한 중복 API 호출 방지
<br/>

✅ 모든 데이터 로드 완료 시 추가 요청 차단
<br/>

✅ 로딩 상태 UI 표시
<br/>

✅ API 에러 발생 시 사용자 알림 제공
<br/>

✅ 컴포넌트 단위 분리 및 반응형 레이아웃 지원

<br/>

## 📁 프로젝트 구조

```
.
├── package.json
├── pnpm-lock.yaml
├── public
│   ├── default-profile.png
│   ├── infinite-scroll.png
│   └── thumbnail.png
├── src
│   ├── apis
│   │   ├── axios.ts           # Axios 인스턴스 설정
│   │   ├── post.ts            # 포스트 API 요청 함수
│   │   └── request.ts         # 공통 API 요청 래퍼
│   ├── app
│   │   ├── App.tsx
│   │   └── main.tsx
│   ├── components
│   │   ├── layout
│   │   │   └── header.tsx     # 공통 헤더 레이아웃
│   │   └── ui
│   │       ├── loading-spinner.tsx
│   │       └── loading-text.tsx
│   ├── features
│   │   └── posts
│   │       ├── post-item.tsx  # 포스트 단일 아이템
│   │       └── post-list.tsx  # 포스트 리스트 & 무한 스크롤
│   ├── hooks
│   │   └── use-infinite-scroll.ts # Intersection Observer 훅
│   ├── store
│   │   └── usePostStore.ts    # Zustand 전역 상태 관리
│   ├── styles
│   │   ├── base.css
│   │   ├── global.css
│   │   ├── index.css
│   │   └── tokens
│   │       ├── color.css
│   │       └── font.css
│   ├── fonts
│   │   └── PretendardVariable.woff2
│   └── types
│       └── post.ts
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```
<br/>

## 🔐 환경 변수 설정

본 프로젝트는 API Base URL을 환경 변수로 관리합니다.

### `.env.local` 파일 생성

프로젝트 루트에 `.env.local` 파일을 생성하고 아래 내용을 추가합니다.

```env
VITE_API_BASE_URL=https://jsonplaceholder.typicode.com
```

<br/>

## ▶️ 실행 방법

본 프로젝트는 **pnpm** 패키지 매니저를 사용합니다.

### 1️⃣ pnpm 설치 (미설치 시)

```bash
npm install -g pnpm
```

### 2️⃣ GitHub 레포지토리에서 실행한 경우
```bash
git clone <프로젝트 주소>
cd <프로젝트 폴더명>

pnpm install
pnpm dev
```

### 3️⃣ zip 파일로 전달받은 경우
전달받은 zip 파일의 압축을 해제하고 압축 해제된 프로젝트 폴더로 이동합니다.

```bash
pnpm install
pnpm dev
```
> 별도의 서버 설정 없이 Vite 개발 서버로 바로 실행됩니다!

<br/>

## ✨ UX / 성능 고려 사항

- Intersection Observer 사용으로 스크롤 이벤트 기반 처리보다 성능 최적화

- 전역 상태에서 로딩 상태 관리로 중복 API 요청 방지

- 스크롤 중 FPS 저하 방지를 고려한 데이터 로딩 구조

- 모바일 / 데스크톱 환경 모두 자연스럽게 동작하는 반응형 레이아웃

<br/>

## 🔗 ETC

- [구현 및 트러블 슈팅 정리 문서](https://discovered-muskox-349.notion.site/2e2e36bc38f480919c4cc1fa9a91435e?source=copy_link)

이 문서는 프로젝트를 구현하며 각 기능을 어떤 기준으로 설계했고, 기술 스택과 라이브러리는 왜 해당 선택을 했는지 정리한 문서입니다.  
개발 중 겪은 이슈와 해결 과정도 함께 기록되어 있습니다!
