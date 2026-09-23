function BlogVisual() {
  return (
    <div className="project-visual blog-visual">
      <div className="community-header">
        <strong>COMMUNITY.</strong>

        <div>
          <span>HOME</span>
          <span>BOARD</span>
          <span>ABOUT</span>
        </div>
      </div>

      <div className="community-title">
        <span>COMMUNITY</span>
        <strong>RECENT POSTS</strong>
      </div>

      <div className="post-list">
        <div className="post-item">
          <span>01</span>

          <div>
            <strong>오늘의 이야기</strong>
            <small>새로운 하루를 시작하며</small>
          </div>

          <em>24</em>
        </div>

        <div className="post-item">
          <span>02</span>

          <div>
            <strong>개발하면서 배운 것들</strong>
            <small>작은 문제를 해결하는 과정</small>
          </div>

          <em>18</em>
        </div>

        <div className="post-item">
          <span>03</span>

          <div>
            <strong>자유롭게 이야기해요</strong>
            <small>누구나 작성할 수 있는 게시글</small>
          </div>

          <em>32</em>
        </div>
      </div>
    </div>
  )
}

export default BlogVisual