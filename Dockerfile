# 가져올 이미지 정의
FROM node:18.16.1

# Working Directory 경로 설정하기
# Working Directory란? : https://velog.io/@bsjp400/Docker-Working-Directory%EB%A5%BC-%EB%AA%85%EC%8B%9C%ED%95%B4%EC%A4%98%EC%95%BC-%EB%90%98%EB%8A%94-%EC%9D%B4%EC%9C%A0
WORKDIR /app

# package.json WORKDIR에 복사
COPY package.json .

# 명령어 실행 (의존성 설치)
RUN npm install

# 현재 디렉토리의 모든 파일을 WORKDIR에 복사
COPY . .

# 각각의 명령어들은 한줄씩 캐싱되어 실행된다.
# package.json의 내용은 자주 바뀌진 않지만
# 소스코드는 자주 바뀌는데 npm install과 COPY . .을 동시에 수행하면
# 소스 코드가 조금 달라질때에도 항상 npm install을 수행해서 리소스가 낭비된다.

# 3000번 포트 노출
EXPOSE 3000

# npm start 스크립트 실행
CMD ["npm", "start"]