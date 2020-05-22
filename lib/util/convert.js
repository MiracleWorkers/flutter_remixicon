const obj = {
  "4k-fill": "ea01",
  "a-b": "ea03",
  "account-box-fill": "ea04",
  // ... 处理css文件内容成以上格式
};

const camelName = str => str.replace(/[ -]+(\w)/g, (match, char) => char.toUpperCase());

const AvoidErrorName = str => {
  const num = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  const correctName = num.includes(str[0]) ? `$${str}` : str;
  return camelName(correctName);
}

const GenerateCode = Object.keys(obj).map(key => {
  return `static const IconData ${AvoidErrorName(key)} = IconData(0x${obj[key]}, fontFamily: "MIcon", fontPackage: 'flutter_remixicon');`
});
// 从命令行复制生成的代码
const resultCode = GenerateCode.join("\n");