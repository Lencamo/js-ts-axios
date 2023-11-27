export default defineEventHandler(async (event) => {
  // ... Do whatever you want here

  return {
    code: 0,
    message: '获取demo2列表成功!!!',
    data: [
      {
        id: 1,
        content: '纵然再苦守数百年 我的心意 始终如一',
        user_id: 1,
        creatAt: '2023-10-20T13:58:23.000Z',
        updateAt: '2023-10-20T13:58:23.000Z'
      },
      {
        id: 2,
        content: '如果你因失去了太阳而流泪，那么你也将失去群星了。',
        user_id: 1,
        creatAt: '2023-10-20T13:58:26.000Z',
        updateAt: '2023-10-20T13:58:26.000Z'
      }
    ]
  }
})
