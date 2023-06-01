cd .vitepress/dist

git init
git remote add origin git@github.com:tsoop-com/tsoop-com.git 
git add . --force
git commit -m 'deploy'

git push -f origin HEAD:gh-pages

cd -