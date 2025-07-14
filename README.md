# TypeScript Practice

## 1. TypeScript 패키지 설치

### 1-1. 초기설정

```bash
npm init -y
```

- `package.json` 생성
- 프로젝트 메타 정보와 의존성 관리

### 1-2. 필수 패키지 설치

```bash
npm install -D typescript @types/node ts-node nodemon @types/express
```

**설치하는 패키지가 각각 무엇을 의미하는가?**

<aside>

typescript : TS→ JS 컴파일

@types/node : Node.js 타입 정의

ts-node : TS 즉시 실행

nodemon : 코드 변경 시 자동 재시작

@types/express : Express 타입 정의

</aside>

### 1-3. 개념 정리

- devDependencies vs dependencies
  - 개발 전용도구는 `-D` 실행에 필요한 라이브러리는 일반 설치
- 버전 표기법 `^` vs `~`
  - → 버전 안정성 확보 위해 lock 파일 관리
- 로컬 설치 권장 : 글로벌 설치 대신 프로젝트 내 설치로 버전 충돌 방지

### 1-4. 명령어 익히기

```bash
npm list --depth=0
npx ts-node --version
npx tsc --version
```

## 2. tsconfig.json 설정

### 2-1. 생성

```bash
npx tsc --init
```

### 2-2. 기본 구성 예시

```json
{
  "compilerOptions": {
    // 컴파일러 동작 방식 정의
    "target": "es6", // TypeScript를 어떤 버전의 JavaScript로 변환할지 지정
    "module": "commonjs", // 모듈 시스템 설정
    "outDir": "./dist", // 컴파일된 JS 파일이 저장될 디렉토리 경로
    "rootDir": "./src", // TypeSciprt 원본 파일들이 위치한 루트 경로
    "strict": true, // 모듬 엄격한 타입 검사 옵션을 한 번에 활성화. 타입 안정성 향상
    "esModuleInterop": true, // CommonJS 모듈을 ES6방식으로 import 할 수 있게함
    "skipLibCheck": true, // node_moudles 안의 타입 정의 파일들은 검사하지 않음 -> 컴파일 속도 향상
    "forceConsistentCasingInFileNames": true // 대소문자 일관성을 강제. OS 간 파일 경로 오류 방지
  },
  "include": ["src/**/*"], // 컴파일할 파일 지정
  "exclude": ["node_modules", "**/*.spec.ts"] // 제외할 파일 또는 폴더
}
```

### 2-3. 고급 설정 팁

| 옵션                   | 설명                        |
| ---------------------- | --------------------------- |
| sourceMap              | 디버깅용 소스맵 생성        |
| nlmplicitAny           | any 자동 추론 금지          |
| strictNullChecks       | null 체크 강화              |
| moduleResolution: node | Node 방식 모듈 해석         |
| paths / baseUrl        | 경로 별칭 설정              |
| allowJS / checkJs      | JS 파일 포함 가능           |
| incremental            | 증분 빌드로 속도 개선       |
| declaration            | `.d.ts` 생성 (라이브러리용) |

```json
"paths": {
	"@utils/*": ["src/utils/*"]
}
```

### 2-4. 설정 검증

```json
npx ts --showConfig
npx tsc --noEmit
```

## 3. 코드 작성 및 실행

### 3-1. 폴더 구조

```markdown
project-root/
├── src/
│ └── index.ts
├── dist/
├── tsconfig.json
└── package.json
```

### 3-2. 예제 작성

```tsx
function kdt(): string {
  return "Hello, 심화과정 여러분!";
}
console.log(kdt());
```

### 3-3. 실행 스크립트 설정

```json
"scripts": {
  "start": "ts-node src/index.ts",
  "dev": "nodemon --exec ts-node src/index.ts",
  "build": "tsc",
  "serve": "node dist/index.js",
  "typecheck": "tsc --noEmit"
}

```

명령어

- npm run dev : 실시간 실행 (파일 변경 감지)
- npm run build : 컴파일 (src → dist)
- npm run serve : dist 실행
- npm run typecheck : 타입 검사만 실행

### 3-4. 디버깅 설정

```json
"sourceMap" : true
```

```bash
npm run dev -- --inspect
```
