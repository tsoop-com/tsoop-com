cd .vitepress/dist

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:tsoop-com/tsoop-com.git master:gh-pages

cd -