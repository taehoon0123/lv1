// schemas/todo.schema.js

import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true, // value 필드는 필수 요소입니다.
  },
  content: {
    type: String,
    required: true, // order 필드 또한 필수 요소입니다.
  },
  author: {
    type: String, // doneAt 필드는 Date 타입을 가집니다.
    required: true, // doneAt 필드는 필수 요소가 아닙니다.
  },
  status: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});

// TodoSchema를 바탕으로 Todo모델을 생성하여, 외부로 내보냅니다.
export default mongoose.model('Product', ProductSchema);