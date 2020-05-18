const fs = require('fs');

const dirPath = '/build';

// "path/to/target" 直下のファイルやディレクトリ全てがDirentオブジェクトの配列で返ってくる
const allDirents = fs.readdirSync(dirPath, { withFileTypes: true });

// ここまでで名前取得
const fileNames = allDirents.filter(dirent => dirent.isFile()).map(({ name }) => name);

// fileNamesの数だけ繰り返し
for (let i = 0; i < fileNames.length; i++) {
  // console.log(array[i])


  fs.copyFile(i, '/docs', (err) => {
    if (err) {
      console.log(err.stack);
    }
    else {
      console.log('Done.');
    }
  });
}
// buildディレクトリを削除
const rmdir = '/build';
fs.rmdir(rmdir, { recursive: true });
