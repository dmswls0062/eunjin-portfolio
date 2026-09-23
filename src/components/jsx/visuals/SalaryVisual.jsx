function SalaryVisual() {
  return (
    <div className="project-visual salary-visual">
      <div className="salary-dashboard">
        <div className="salary-header">
          <div>
            <span>SALARY PLAN</span>
            <strong>2026. 09</strong>
          </div>

          <span className="salary-total">₩1,248,000</span>
        </div>

        <div className="salary-content">
          <div className="salary-calendar">
            <div className="salary-calendar-head">
              <span>MON</span>
              <span>TUE</span>
              <span>WED</span>
              <span>THU</span>
              <span>FRI</span>
              <span>SAT</span>
              <span>SUN</span>
            </div>

            <div className="salary-calendar-days">
              <i></i>
              <i></i>
              <b>1</b>
              <b>2</b>
              <b className="work">
                3<span>8h</span>
              </b>
              <b className="work">
                4<span>6h</span>
              </b>
              <b>5</b>

              <b>6</b>
              <b className="work">
                7<span>5h</span>
              </b>
              <b>8</b>
              <b className="work">
                9<span>8h</span>
              </b>
              <b>10</b>
              <b>11</b>
              <b>12</b>

              <b className="work">
                13<span>7h</span>
              </b>
              <b>14</b>
              <b className="work">
                15<span>6h</span>
              </b>
              <b>16</b>
              <b>17</b>
              <b>18</b>
              <b>19</b>
            </div>
          </div>

          <div className="salary-side">
            <span>THIS MONTH</span>

            <strong>₩1,248,000</strong>

            <div className="salary-side-row">
              <span>WORK DAYS</span>
              <b>12 DAYS</b>
            </div>

            <div className="salary-side-row">
              <span>TOTAL HOURS</span>
              <b>84 H</b>
            </div>

            <div className="salary-side-row">
              <span>HOURLY WAGE</span>
              <b>₩14,000</b>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SalaryVisual