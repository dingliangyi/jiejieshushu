/******************************

[rewrite_local]

^https:\/\/api\.aliyundrive\.com\/apps\/v1\/users\/home\/widgets$ url script-response-body https://raw.githubusercontent.com/dingiangyi/jiejieshushu/main/ali_adrive.js

[mitm] 

hostname = api.aliyundrive.com



*******************************/
if (!$response.body) $done({});
let obj = JSON.parse($response.body);

const item = [
  "recentUsed", // 最近在看
  // "coreFeatures", // 顶部图标
  "activities", // 精选活动
  "myBackup", // 我的备份
  "recentSaved", // 最近转存
  // "signIn" // 顶部签到
];

item.forEach((i) => {
  delete obj[i];
});

$done({ body: JSON.stringify(obj) });
