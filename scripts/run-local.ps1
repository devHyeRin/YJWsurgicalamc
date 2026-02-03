# scripts/run-local.ps1
#카페24 올리기 전에 로컬에서 “서버가 dist를 잘 서빙하는지” 최소 확인
$ErrorActionPreference = "Stop"

# dist 없으면 빌드부터
if (-not (Test-Path "dist/index.html")) {
  Write-Host "dist not found. Running build-dist first..."
  powershell -ExecutionPolicy Bypass -File scripts/build-dist.ps1
}

Write-Host "==> Installing server deps and starting..."
docker run --rm `
  -v "$((Get-Location).Path.Replace('\','/')):/repo" `
  -w /repo `
  -p 8080:8080 `
  node:20-alpine `
  sh -lc "npm --prefix server ci --omit=dev && PORT=8080 node web.js"
