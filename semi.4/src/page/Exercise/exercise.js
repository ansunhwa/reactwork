import React, { useState, useEffect } from "react";
import axios from "axios";
import "./exercise.css";

const Exercise = () => {
  const [exerciseList, setExerciseList] = useState([]);
  const [todayExercises, setTodayExercises] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [expandedTypes, setExpandedTypes] = useState({});


  useEffect(() => {
    const today = new Date().toISOString().split("T")[0];
    const storedDate = localStorage.getItem("lastExerciseDate");

    if (storedDate !== today) {
      setTodayExercises([]);
      localStorage.setItem("lastExerciseDate", today);
    }
  }, []);

  useEffect(() => {
    axios.get("http://localhost:8080/exercises")
      .then(res => setExerciseList(res.data))
      .catch(err => console.error("운동 데이터 로딩 실패:", err));
  }, []);

  const handleAddExercise = (exercise) => {
    setTodayExercises(prev => {
      const exists = prev.find(e => e.name === exercise.name);
      if (exists) return prev;
      return [...prev, { ...exercise, count: 1 }];
    });
  };

  const handleRemoveExercise = (name) => {
    setTodayExercises(prev => prev.filter(e => e.name !== name));
  };

  const handleCountChange = (e, name) => {
    const value = parseInt(e.target.value) || 0;
    setTodayExercises(prev =>
      prev.map(ex => (ex.name === name ? { ...ex, count: value } : ex))
    );
  };

  const handleExerciseClick = (name) => {
    setTodayExercises(prev =>
      prev.map(ex => (ex.name === name ? { ...ex, count: ex.count + 1 } : ex))
    );
  };

  const totalKcal = todayExercises.reduce(
    (sum, ex) => sum + ex.count * ex.caloriesBurned,
    0
  );

  const filteredExercises = exerciseList.filter(ex => {
    const lower = searchTerm.toLowerCase();
    return (
      ex.name.toLowerCase().includes(lower) ||
      ex.type.toLowerCase().includes(lower) ||
      ex.caloriesBurned.toString().includes(lower)
    );
  });

  const groupedExercises = filteredExercises.reduce((acc, curr) => {
    if (!acc[curr.type]) acc[curr.type] = [];
    acc[curr.type].push(curr);
    return acc;
  }, {});

  const toggleType = (type) => {
    setExpandedTypes(prev => ({
      ...prev,
      [type]: !prev[type],
    }));
  };


  const handleSaveExercise = () => {
    const userId = localStorage.getItem("userId");
    if (!userId) {
      alert("로그인 상태가 아닙니다.");
      return;
    }

    const now = new Date();
    const kst = new Date(now.getTime() - now.getTimezoneOffset() * 60000);
    const logDate = kst.toISOString();

    const logs = todayExercises.map(ex => ({
      userId: userId,
      exerciseId: ex.id,
      durationMin: ex.count * ex.defaultDurationMin,
      caloriesBurned: ex.count * ex.caloriesBurned,
      logDate: logDate,
    }));

    axios.post("http://localhost:8080/exercise-logs/bulk", logs)
      .then(() => {
        alert("운동 정보가 저장되었습니다!");
        setTodayExercises([]);     
        setSearchTerm("");         
        setExpandedTypes({});     
      })
      .catch(err => {
        console.error("운동 저장 실패:", err);
        alert("운동 저장 중 오류가 발생했습니다.");
      });
  };

  return (
    <div className="exercise-container">
      <div className="search-box">
        <input
          type="text"
          className="search-input"
          placeholder="운동 이름, 타입, 칼로리로 검색"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <span className="search-icon">🔍</span>
      </div>

      <div className="exercise-list">
        {Object.entries(groupedExercises).map(([type, exercises]) => {
          const isExpanded = expandedTypes[type];
          const displayList = isExpanded ? exercises : exercises.slice(0, 3);

          return (
            <div key={type} className="exercise-group">
              <h3 className="type-header">{type}</h3>
              {displayList.map((exercise) => (
                <div key={exercise.id} className="exercise-item">
                  <span>{exercise.name}</span>
                  <span>{exercise.defaultDurationMin}분</span>
                  <span>{exercise.caloriesBurned}kcal</span>
                  <button className="plus-btn" onClick={() => handleAddExercise(exercise)}>+</button>
                </div>
              ))}
              {exercises.length > 3 && (
                <button className="toggle-btn" onClick={() => toggleType(type)}>
                  {isExpanded ? "접기 ▲" : "더 보기 ▼"}
                </button>
              )}
            </div>
          );
        })}
      </div>

      <div className="today-box">
        <h3 className="today-summary">오늘 한 운동</h3>
        <div className="today-summary">🔥 총 소모 칼로리: {totalKcal} kcal</div>

        <div className="list-header">
          <span>이름</span>
          <span>타입</span>
          <span>횟수</span>
          <span>총 kcal</span>
          <span></span>
        </div>

        {todayExercises.map((ex) => (
          <div key={ex.id} className="today-item" onClick={() => handleExerciseClick(ex.name)} style={{ cursor: "pointer" }}>
            <span>{ex.name}</span>
            <span>{ex.type}</span>
            <input
              type="number"
              value={ex.count}
              min="1"
              onChange={(e) => handleCountChange(e, ex.name)}
              onClick={(e) => e.stopPropagation()}
            />
            <span>{ex.count * ex.caloriesBurned}kcal</span>
            <button className="remove-btn" onClick={(e) => {
              e.stopPropagation();
              handleRemoveExercise(ex.name);
            }}>❌</button>
          </div>
        ))}

        <button className="save-btn" onClick={handleSaveExercise}>
          운동 저장하기 💾
        </button>
      </div>
    </div>
  );
};

export default Exercise;
