# Momentum-clone

## Project
* 바닐라JS를 이용한 Chrome 앱 [Momentum](https://chrome.google.com/webstore/detail/momentum/laookkfknpbbblfpciffpaejjkokdgca?utm_source=chrome-ntp-icon) 클론 코딩
* Tistory: [Link](https://chaennie.tistory.com/category/Clone%20Coding/Momentum)

<br>

## Result
### Screen
![screen](https://user-images.githubusercontent.com/85024598/126061900-98e36f21-7660-484d-9b91-177efbc0dd74.png)

### Feature
- Clock
- Greeting
- To do list
- Random quote
- Random background
- Location
- Weather
- Today's focus (Self task)

### Link
[My Momentum](https://chchaeun.github.io/Momentum-clone/)

<br>

## Environment
### IDE
VSCode
### Language
- HTML
- CSS
- Javascript
- Python

<br>

## Comments
### Today's focus
강의에 나오지 않았지만 스스로 구현해본 부분이다. 클릭을 할 때마다 localStorage의 checked key를 0, 1로 바꿔주면서 즉각적으로 체크박스와 취소선의 유무가 바뀌도록 하는데 쉬운 일이 아니었다. 시작할 때 현재 날짜를 받아서 다음날이 되면 focus 부분은 초기화되어 다시 submit 받도록 했다.
### Random background images
강의에서는 원하는 이미지를 저장해서 가져왔지만 나는 파이썬으로 배경 이미지를 스크래핑했다. [관련 Repository](https://github.com/chchaeun/Web-Scraping.git)
### Greeting
Date().getHours()를 통해 시간대에 따라 다른 인삿말을 출력했다.
### Location
화면을 새로고침할 때마다 위치 정보 요청 알림이 떠서 localStorage에 allow key를 만들어 y이면 더 이상 위치를 요청하지 않도록 했다. 

<br>

## Reference
- https://nomadcoders.co/javascript-for-beginners/lobby

