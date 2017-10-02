# !/bin/sh
set -e
rootPath=/root
echo "跳转到源码目录"
cd $rootPath/works/blog-front

git add .
git stash
git checkout develop

#echo "git pull"
git pull

echo "update package"
npm i

echo "build"
npm run build

echo "clear old file"
rm -rf $rootPath/projects/blog-new/*

echo "cp new file to source dir"
cp -rf $rootPath/works/blog-front/dist $rootPath/projects/blog-new/
#end