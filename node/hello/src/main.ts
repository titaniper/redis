import Redis from 'ioredis';

async function main() {
  const redis = new Redis();

  // 테스트 데이터 설정
  await redis.set('key2', 'value2');
  console.log('데이터가 설정되었습니다.');

  // 데이터 가져오기
  const value = await redis.get('key');
  console.log(`설정된 데이터: ${value}`);

  // 연결 종료
  redis.disconnect();
}

main().catch(console.error);
