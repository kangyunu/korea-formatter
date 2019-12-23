```
const {
  phone, // 전화번호 (phone, tel)
  rrn, // 주민등록번호, 법인등록번호, 외국인 등록번호 (Resident Registration Number)
  brn // 사업자번호 (Business License Number)
} = require('korea-formatter')

phone('0200000000') // 02-0000-0000 
phone('01000000000') // 010-0000-0000
rrn('0000000000000') // 000000-0000000
brn('0000000000') // 000-00-00000
krw('50000') // 50,000원
krw(50000) // 50,000원

phone('02-0000-0000') // 02-0000-0000 
> 공백, - 또는 문자를 제외한 뒤 진행됩니다.
```