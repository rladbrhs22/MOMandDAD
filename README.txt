# Love Letter (HTML/CSS/JS + GitHub Pages)

## 1) 프로젝트 구조
```
love-letter/
 ├─ index.html      # 편지 본문 (문장 수정은 여기서)
 ├─ style.css       # 색/폰트/레이아웃
 └─ script.js       # 한 줄씩 보여주는 인터랙션
```

## 2) 로컬에서 실행 (VS Code 권장)
- VS Code에서 폴더 열기 → `index.html` 우클릭 → "Open with Live Server" (확장 설치 필요)
- 또는 그냥 `index.html` 더블클릭 (브라우저로 열림)

## 3) 문장 바꾸기
- `index.html` 파일의 `<div id="letter">` 안 `<p class="line hidden">...</p>` 문장을 바꾸거나 추가하세요.

## 4) GitHub에 올리기
1. Git 초기화
```
git init
git add .
git commit -m "love letter: first commit"
```
2. GitHub에서 새 저장소(repo) 만들기 (예: `love-letter`)
3. 리모트 연결 후 푸시
```
git branch -M main
git remote add origin https://github.com/YOUR_ID/love-letter.git
git push -u origin main
```

## 5) GitHub Pages 배포
- GitHub repo → **Settings** → **Pages**
- **Source**: *Deploy from a branch*
- **Branch**: `main` / **Folder**: `/ (root)` 선택 → 저장
- 잠시 뒤 주소가 표시됩니다: `https://YOUR_ID.github.io/love-letter`

## 6) 커스터마이즈 아이디어
- 하트 이모지/배경색 바꾸기: `style.css`
- 문장 나타나는 속도/버튼 문구 바꾸기: `script.js`
- 음악 추가: `<audio>` 태그로 배경음(개인 파일 업로드 주의)
