// routes/news.js


import express from 'express';
import Product from '../schemas/products.schema.js';

const router = express.Router();
router.post('/products', async (req, res) => {
  const { title,author,status,password,content } = req.body;
  if (!title ,!author, !status, !password, !content){
    return res
    .status(400)
    .json({ errorMessage: '데이터 형식이 올바르지 않습니다.'})
  }
});

/** 상품 목록 조회 API **/
// 3. HTTP Method와 URL을 지정한 API를 정의합니다.
// 만약, localhost:3000/api/products 라는 URL로 GET 요청이 들어온다면 해당 코드를 실행합니다.
router.get('/products', (req, res) => {
  // 4. 사용자의 요청에 맞는 데이터를 반환합니다.
  return res // Express.js의 res 객체를 반환합니다.
    .status(200) // API의 상태 코드를 200번으로 전달합니다.
    .send('상품 목록 조회 API 입니다.'); // API의 결과값을 '상품 목록 조회 API 입니다.'로 전달합니다.
});

{
  "products" [
    {
      "title":"갤럭시 S24",
      "author":"판매자",
      "status":"FOR_SALE"
    }
  ]
}

/** 상품 상세 조회 API **/
// 3. HTTP Method와 URL을 지정한 API를 정의합니다.
// 만약, localhost:3000/api/news/:newsId 라는 URL로 GET 요청이 들어온다면 해당 코드를 실행합니다.
router.get('/products/:productsId', (req, res) => {
  // 클라이언트가 전달한 Path Params 데이터를 받아옵니다.
  const params = req.params;

  // Path Params 데이터 중 productsId를 추출합니다.
  const productsId = params.productsId;

  // 서버 콘솔에 클라이언트가 전달한 productsId를 출력합니다.
  console.log('클라이언트로 부터 전달받은 상품 ID:', productsId);

  // 4. 사용자의 요청에 맞는 데이터를 json 형태로 반환합니다.
  return res.status(200).json({
    data: '상품 상세 조회 API 입니다.',
  });
});

{
  "data";[
    {
      "_id":"thkim",
      "title":"갤럭시 S24",
      "author":"판매자",
      "status":"FOR_SALE",
    }
  ]
}


// routes/todos.router.js

router.patch('/products/:productId', async (req, res) => {
  // 변경할 '상품'의 ID 값을 가져옵니다.
  const { productId } = req.params;
  // '상품'을 몇번째 순서로 설정할 지 order 값을 가져옵니다.
  const { order } = req.body;

  // 변경하려는 '상품'을 가져옵니다. 만약, 해당 ID값을 가진 '상품'이 없다면 에러를 발생시킵니다.
  const currentProduct = await Product.findById(productId).exec();
  if (!currentProduct) {
    return res
      .status(404)
      .json({ errorMessage: '존재하지 않는 product 데이터입니다.' });
  }

  if (order) {
    // 변경하려는 order 값을 가지고 있는 '해야할 일'을 찾습니다.
    const targetProduct= await Product.findOne({ order }).exec();
    if (targetProduct) {
      // 만약, 이미 해당 order 값을 가진 '해야할 일'이 있다면, 해당 '해야할 일'의 order 값을 변경하고 저장합니다.
      targetProduct.order = currentProduct.order;
      await targetProduct.save();
    }
    // 변경하려는 '해야할 일'의 order 값을 변경합니니다.
    currentProduct.order = order;
  }

  // 변경된 '해야할 일'을 저장합니다.
  await currentProduct.save();

  return res.status(200).json({});
});

{
  "title";"갤럭시 S24 수정됨",
  "content";"새 제품 팝니다.",
  "password";"0123",
  "status";"SOLD_OUT"
}

router.delete('/products/:productId', async (req, res) => {
  const { productId } = req.params;
  const product = await Product.findById(productId).exec();
  if (!productId) {
    return res
    .status(404)
    .json({ errorMessage: '상품을 삭제할 권한이 존재하지 않습니다.'});
  }
  await Product.deleteOne({ _id: productId }).exec();
  return res.status(200).json({});
});

{
  "password";"0123"
}


// Express 라우터를 외부로 전달합니다.
export default router;