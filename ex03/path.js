const path = require('path');

const string = __filename; // 파일 위치
 
console.log('path.sep:', path.sep); // 경로의 구분자
console.log('path.delimiter:', path.delimiter); // 환경 변수의 구분자
console.log('-------------------------------'); 
console.log('path.dirname():',path.dirname(string)); // 파일이 위치한 폴더 경로
console.log('path.extname():',path.extname(string)); // 파일의 확장자
console.log('path.basename():',path.basename(string)); // 파일의 이름(확장자 포함)
console.log('path.basename():', path.basename(string, path.extname(string))); // 두번째 인자로 파일의 확장자 적용시 이름만 표현
console.log('-------------------------------');
console.log('path.parse():', path.parse(string)); // 파일 경로를 root, dir, base, ext, name으로 분리
console.log('path.format():', path.format({
    dir: 'C:\Users\kekek\Documents\NodeJsExample\ex03',
    name: 'path',
    ext: '.js',
})); // path.parse()한 객체를 파일 경로로 합침
console.log('path.normalize():', path.normalize('C:\Users\kekek\Documents\NodeJsExample\ex03')); // \ 잘못 입력시 정상적인 경로로 변환
console.log('-------------------------------');
console.log('path.isAbsolute():', path.isAbsolute('C:\\')); // 파일의 경로가 절대경로인지 상대경로인지 true false 로 응답
console.log('path.isAbsolute():', path.isAbsolute('./home'));
console.log('-------------------------------');
console.log('path.relative():', path.relative('C:\Users\kekek\Documents\NodeJsExample\ex03', 'C:\\')); // 경로를 두개 넣으면 A 에서 B로 가는 방법 명시 
console.log('path.join()', path.join(__dirname, '..','..','/users','.','/kekek')); // 여러 인자를 넣으면 한 경로로 합침 
console.log('path.resolve():', path.resolve(__dirname,'..','users','.','/kekek')); // path.join()과 비슷하지만 차이가 있음