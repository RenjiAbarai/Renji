cd ..

npm run build

cd ../dosc/.vuepress/dist

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:RenjiAbarai/RenjiAbarai.github.io.git blog-pages
