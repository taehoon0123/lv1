// app.js

import express from 'express';
import connect from './schemas/index.js';
import ProductsRouter from './routes/products.router.js';

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(PORT, () => {
  console.log(PORT, '포트로 서버가 열렸어요!');
});


// 2. 라우터를 등록 합니다.
app.use('/api', [ProductsRouter]);

// routes/products.js

/** 상품 목록 조회 API **/
// 3. HTTP Method와 URL을 지정한 API를 정의합니다.
// 만약, localhost:3000/api/products 라는 URL로 GET 요청이 들어온다면 해당 코드를 실행합니다.