export const monthList = [
  "1월",
  "2월",
  "3월",
  "4월",
  "5월",
  "6월",
  "7월",
  "8월",
  "9월",
  "10월",
  "11월",
  "12월",
];

export const dayList = Array.from(Array(31), (_, i) => `${String(i + 1)}일`);

export const yearList = Array.from(
  Array(121),
  (_, i) => `${String(2021 - i)}년`
);

export const emailList = [
  "직접입력",
  "naver.com",
  "hanmail.net",
  "daum.net",
  "google.com",
  "icloud.com",
  "nate.com",
];
