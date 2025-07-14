# TypeScript Practice

## TypeScript 환경세팅

### 1. 프로젝트 초기화

```bash
mkdir typescript-practice
cd typescript-practice
npm init -y
```

### 2. TypeScript 설치

```bash
npm install --save-dev typescript
```

### 3. 설정 파일 생성

```bash
npx tsc --init
```

tsconfig.json이 생성됨

기본 설정 예시

```json
{
  "target": "es2016",
  "module": "commonjs",
  "strict": true,
  "esModuleInterop": true,
  "skipLibCheck": true,
  "forceConsistentCasingInFileNames": true
}
```

### 4. 폴더 및 파일 생성

```bash
mkdir src
cd src
touch index.ts
```

//index.ts

```typescript
const hi = (name: string) => console.log(`Hello, ${name}`);

hi("joon");
```

### 5. TypeScript 컴파일

```bash
npx tsc
```

src/index.js 생성됨

### 6. 실행

```bash
node src/index.js
```

Hello, joon 출력

# 개발 편의 도구 추가

### ts-node (TypeScript 파일 바로 실행)

```bash
npm install --save-dev ts-node
npx ts-node src/index.ts
```

바로 출력되는 것을 확인할 수 있음.
