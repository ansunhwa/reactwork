import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './main.css';

const Main = () => {
  const [user, setUser] = useState(null);
  const [todayCalories, setTodayCalories] = useState(null);
  const [burnedCalories, setBurnedCalories] = useState(null);
  const mainCharacterImages = {
    "0": "/img/main1.png",
    "1": "/img/main2.png",
    "2": "/img/main3.png",
    "3": "/img/main4.png",
  };

  const typeIconMap = {
    유산소: "/img/img1.png",
    근력: "/img/img2.png",
    유연성: "/img/img3.png",
    일상활동: "/img/img4.png",
    균형감각: "/img/img5.png"
  };
  const [exerciseTypes, setExerciseTypes] = useState([]);


  // ✅ 정확한 한국 시간 기준 날짜 함수
  const getKSTDateString = () => {
    const now = new Date();
    const kst = new Date(now.getTime() - now.getTimezoneOffset() * 60000);
    return kst.toISOString().split('T')[0];
  };

  useEffect(() => {
    const userId = localStorage.getItem('userId');
    if (!userId) {
      console.error("userId가 없습니다.");
      return;
    }

    // 사용자 정보
    axios.get(`http://localhost:8080/users/${userId}`)
      .then(res => setUser(res.data))
      .catch(err => console.error("사용자 정보를 불러오는 데 실패했습니다.", err));

    // ✅ KST 기준 오늘 날짜
    const today = getKSTDateString();

    // 섭취 칼로리
    axios.get(`http://localhost:8080/food-logs/${userId}?date=${today}`)
      .then(res => {
        const total = res.data.reduce((sum, item) => sum + item.totalCalories, 0);
        setTodayCalories(total);
      })
      .catch(err => {
        console.error("오늘 섭취 칼로리 불러오기 실패", err);
        setTodayCalories(0);
      });

    // 소모 칼로리
    axios.get(`http://localhost:8080/users/${userId}/burned-calories`)
      .then(res => setBurnedCalories(res.data || 0))
      .catch(err => {
        console.error("운동 칼로리 불러오기 실패", err);
        setBurnedCalories(0);
      });

          // 오늘 한 운동 타입 불러오기
    axios.get(`http://localhost:8080/api/exercise-types/today`, {
      params: { userId }
    })
      .then(res => {
        setExerciseTypes(res.data); // 예: ['유산소', '근력']
      })
      .catch(err => {
        console.error("오늘 운동 타입 불러오기 실패", err);
        setExerciseTypes([]);
      });

  }, []);

  if (!user || todayCalories === null || burnedCalories === null) {
    return <div style={{ textAlign: 'center' }}>로딩 중...</div>;
  }

  const remainingCalories = todayCalories - burnedCalories;

  return (
    <div className="main-container">
      <div className="user-info">
        키 : {user.height}cm | 현재 몸무게 : {user.weight}kg | 목표 몸무게 : {user.goalWeight}kg |
        도전 점수 : {user.challengeScore}점 | 🔥 잔여 칼로리 : {remainingCalories}kcal
      </div>

      <img 
          src={mainCharacterImages[user.profileImageUrl] || "/img/default.jpg" } 
          alt="내 캐릭터"
          style={{ width: "500px", borderRadius: "10px" }}
      />

      <div className="charts">
        <div>
          <h4>오늘 섭취 칼로리</h4>
          <p>🍱 {todayCalories} kcal</p>
        </div>
        <div>
          <h4>운동 칼로리</h4>
          <p>🔥 총 소모 칼로리: {burnedCalories} kcal</p>
        </div>
      </div>

         <div>
        오늘 한 운동 :
        {exerciseTypes.map((type) => (
          <img
            key={type}
            src={typeIconMap[type] || "/icons/default.png"} // 혹시 없는 타입 대비
            alt={type}
            style={{ width: '40px', marginRight: '8px' }}
          />
        ))}
      </div>
    </div>
  );
};

export default Main;
