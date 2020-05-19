const fs = require('fs');
var path = require('path');
var fse = require('fs-extra');
// const dirPath = 'build';

const copyPath = path.join(__dirname, "./build/");
const pastePath = path.join(__dirname, "./docs/");
fse.copySync(copyPath , pastePath);

// "path/to/target" 直下のファイルやディレクトリ全てがDirentオブジェクトの配列で返ってくる
// const allDirents = fs.readdirSync(dirPath, { withFileTypes: true });

// ここまでで名前取得
// const fileNames = allDirents.map(({ name }) => name);
// const fileNames = allDirents.filter(dirent => dirent.isFile()).map(({ name }) => name);


// fileNamesの数だけ繰り返し
  // console.log(array[i])
// fileNames.forEach(function (fileName) {

//   const copyPath = path.join(__dirname, "./build/" + fileName);
//   const pastePath = path.join(__dirname, "./docs/" + fileName);

//   console.log(copyPath);
//   fs.copyFile(copyPath, pastePath, (err) => {
//     if (err) {
//       console.log(err.stack);
//     }
//     else {
//       console.log('Done.');
//     }
//   });
// });

// buildディレクトリを削除
const rmdir = './build';
fse.removeSync(rmdir);
