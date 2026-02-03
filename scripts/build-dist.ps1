$ErrorActionPreference = "Stop"

Write-Host "==> Building client with Docker (node:20-alpine)..."

# Docker 엔진 확인 (여기서 죽으면 Docker 문제)
docker version | Out-Null

# Windows 절대경로 (공백/한글 포함 대비)
$repo = (Resolve-Path ".").Path

# 컨테이너에서 실행할 명령을 '한 줄'로 만든다 (멀티라인/들여쓰기 금지)
$cmd = 'set -eux; ' +
       'pwd; ls -la; ' +
       'ls -la client; ' +
       'npm --prefix client ci; ' +
       'npm --prefix client run build; ' +
       'rm -rf dist; ' +
       'cp -R client/dist dist; ' +
       'ls -la dist; ' +
       'test -f dist/index.html'

# dist 폴더 정리 (로컬)
if (Test-Path "dist") {
  Remove-Item -Recurse -Force "dist"
}

# 중요: -v 경로는 반드시 큰따옴표로 감싼다
docker run --rm `
  -v "${repo}:/repo" `
  -w /repo `
  node:20-alpine `
  sh -lc $cmd

# 산출물 검증 (로컬)
if (-not (Test-Path "dist/index.html")) {
  throw "dist/index.html not found after docker build."
}

Write-Host "==> Done. Root dist generated."
