function BlogVisual() {
  const sidebarSections = [
    { label: 'NOTICE', items: ['공지게시판'] },
    { label: 'GUEST', items: ['Q & A', '방명록'] },
    { label: 'POST', items: ['장소', '맛집'] },
  ]

  const posts = [
    { title: '설날 연휴', date: '2024/02/06' },
    { title: '[이벤트] 크리스마스 방명록 이벤트 (2)', date: '2023/12/05' },
    { title: '시스템 점검에 따른 홈페이지 일시 중지 안내 (1)', date: '2023/12/05' },
    { title: '시스템 점검에 따른 홈페이지 일시 중지 안내 (1)', date: '2023/12/05' },
  ]

  return (
    <div className="project-visual blog-visual">
      <div className="blog-topbar">
        <strong>Blog</strong>
        <span className="blog-welcome">eunjin님 환영합니다</span>
      </div>

      <div className="blog-body">
        <aside className="blog-sidebar">
          {sidebarSections.map((section) => (
            <div className="blog-sidebar-group" key={section.label}>
              <span className="blog-sidebar-title">{section.label}</span>

              {section.items.map((item) => (
                <span className="blog-sidebar-item" key={item}>
                  {item}
                </span>
              ))}
            </div>
          ))}
        </aside>

        <main className="blog-main">
          <h4 className="blog-page-title">공지</h4>

          <div className="blog-notice-box">공지사항을 확인하세요</div>

          <div className="blog-table-toolbar">
            <span>10 entries per page</span>
            <span className="blog-search">Search...</span>
          </div>

          <div className="blog-table">
            <div className="blog-table-head">
              <span>제목</span>
              <span>작성일</span>
            </div>

            {posts.map((post, index) => (
              <div className="blog-table-row" key={index}>
                <span className="blog-table-title">{post.title}</span>
                <span className="blog-table-date">{post.date}</span>
              </div>
            ))}
          </div>

          <span className="blog-table-footer">
            Showing 1 to {posts.length} of {posts.length} entries
          </span>
        </main>
      </div>
    </div>
  )
}

export default BlogVisual