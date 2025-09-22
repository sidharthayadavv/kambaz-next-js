export default function Modules() {
  return (
    <div>
      {/* Implement Collapse All button, View Progress button, etc. */}
      <button suppressHydrationWarning={true} type="button" id="wd-collapseall-button">Collapse All</button>
      <button suppressHydrationWarning={true} type="button" id="wd-progress-button">View Progress</button>
      <select suppressHydrationWarning={true} id="wd-select-publish" defaultValue="PUBLISH">
        <option value="PUBLISH">Publish All</option>
        <option value="PUBLISH MOD1">Publish MODULE 1</option>
      </select>
      <button suppressHydrationWarning={true} type="button" id="wd-cancel-button">+ Module</button>
      <ul id="wd-modules">
        <li className="wd-module">
          <div className="wd-title">Week 1</div>
          <ul className="wd-lessons">
            <li className="wd-lesson">
              <span className="wd-title">LEARNING OBJECTIVES</span>
              <ul className="wd-content">
                <li className="wd-content-item">Introduction to the course</li>
                <li className="wd-content-item">Learn what is Web Development</li>
              </ul>
              <span className="wd-title">READINGS</span>
              <ul className="wd-content">
                <li className="wd-content-item">Web Development- Chapter 1 - Introduction</li>
                <li className="wd-content-item">Web Development- Chapter 2 - Web Development 101</li>
              </ul>
              <span className="wd-title">SLIDES</span>
              <ul className="wd-content">
                <li className="wd-content-item">Intro to WebD</li>
              </ul>
            </li>
          </ul>
        </li>
        <li className="wd-module">
          <div className="wd-title">Week 2</div>
          <ul className="wd-lessons">
            <li className="wd-lesson">
              <span className="wd-title">LEARNING OBJECTIVES</span>
              <ul className="wd-content">
                <li className="wd-content-item">Introduction to React.JS and Next.JS</li>
                <li className="wd-content-item">Learn Next.JS</li>
              </ul>
              <span className="wd-title">READINGS</span>
              <ul className="wd-content">
                <li className="wd-content-item">Web Development- Chapter 3 - REACTJS</li>
                <li className="wd-content-item">Web Development- Chapter 4 - NEXTJS</li>
              </ul>
              <span className="wd-title">SLIDES</span>
              <ul className="wd-content">
                <li className="wd-content-item">Working with React.JS</li>
                <li className="wd-content-item">Working with Next.JS</li>
              </ul>
            </li>
          </ul>
        </li>
        <li className="wd-module">
          <div className="wd-title">Week 3</div>
          <ul className="wd-lessons">
            <li className="wd-lesson">
              <span className="wd-title">LEARNING OBJECTIVES</span>
              <ul className="wd-content">
                <li className="wd-content-item">Introduction to MongoDB</li>
                <li className="wd-content-item">NoSQL</li>
              </ul>
              <span className="wd-title">READINGS</span>
              <ul className="wd-content">
                <li className="wd-content-item">Web Development- Chapter 5 - NoSQL</li>
                <li className="wd-content-item">Web Development- Chapter 6 - MongoDB</li>
              </ul>
              <span className="wd-title">SLIDES</span>
              <ul className="wd-content">
                <li className="wd-content-item">Types of NoSQL</li>
                <li className="wd-content-item">MongoDB</li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </div>
);}
