function SalaryVisual() {
  const weekdays = ['일', '월', '화', '수', '목', '금', '토']

  // 2026년 9월 (1일이 화요일)
  const calendarCells = [
    null, null, 1, 2, 3, 4, 5,
    6, 7, 8, 9, 10, 11, 12,
    13, 14, 15, 16, 17, 18, 19,
    20, 21, 22, 23, 24, 25, 26,
    27, 28, 29, 30,
  ]

  return (
    <div className="project-visual salary-visual">
      <div className="salary-app">
        <h4 className="salary-app-title">💰 월급 플랜 💰</h4>

        <div className="salary-app-body">
          <div className="salary-calendar-panel">
            <div className="salary-calendar-header">
              <span className="salary-nav-btn">‹</span>
              <strong>2026년 9월</strong>
              <span className="salary-nav-btn">›</span>
            </div>

            <div className="salary-weekday-row">
              {weekdays.map((day) => (
                <span key={day}>{day}</span>
              ))}
            </div>

            <div className="salary-day-grid">
              {calendarCells.map((day, index) => (
                <div className="salary-day-cell" key={index}>
                  {day && <span>{day}</span>}
                </div>
              ))}
            </div>
          </div>

          <div className="salary-side-panels">
            <div className="salary-panel">
              <span className="salary-panel-title">알바 추가</span>

              <div className="salary-input"></div>
              <div className="salary-input"></div>
              <div className="salary-input color"></div>

              <div className="salary-btn">등록</div>
            </div>

            <div className="salary-panel">
              <span className="salary-panel-title">근무 추가</span>
              <span className="salary-panel-sub">선택 날짜: - 일</span>

              <div className="salary-select">
                알바 선택 <span>⌄</span>
              </div>

              <div className="salary-input">-- --:--</div>
              <div className="salary-input">-- --:--</div>

              <label className="salary-checkbox">
                <span className="salary-checkbox-box"></span>
                야간수당 적용
              </label>

              <div className="salary-btn">근무 등록</div>
            </div>

            <div className="salary-panel center">
              <span className="salary-panel-title">예상 월급</span>
              <strong className="salary-total-amount">0원</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SalaryVisual