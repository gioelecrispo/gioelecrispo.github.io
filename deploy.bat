REM build
npm run build

REM navigate into the build output directory
cd dist

REM if you are deploying to a custom domain
REM echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

REM if you are deploying to https://<USERNAME>.github.io
git push -f git@github.com:gioelecrispo/gioelecrispo.github.io.git +master

REM if you are deploying to https://<USERNAME>.github.io/<REPO>
REM git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages

cd ..