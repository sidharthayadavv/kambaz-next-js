import Link from "next/link";
import Image from "next/image";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <Link href="/Courses/1234" className="wd-dashboard-course-link">
            <Image alt="Image not found" src="/images/reactjs.jpg" width={200} height={150} />
            <div>
              <h5> CS1234 React JS </h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
            <Link href="/Courses/5010" className="wd-dashboard-course-link">
            <Image alt="Image not found" src="/images/pdp.jpg" width={200} height={150} />
            <div>
              <h5> CS5010 PDP</h5>
              <p className="wd-dashboard-course-title">
                Programming Design Paradigm
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
            <Link href="/Courses/5011" className="wd-dashboard-course-link">
            <Image alt="" src="/images/datascience.jpg" width={200} height={150} />
            <div>
              <h5> DS5011 Intro to Data Science </h5>
              <p className="wd-dashboard-course-title">
                Data Science
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
            <Link href="/Courses/5012" className="wd-dashboard-course-link">
            <Image alt="Image not found" src="/images/coa.jpg" width={200} height={150} />
            <div>
              <h5> CS5012 Computer Organization and Architecture </h5>
              <p className="wd-dashboard-course-title">
                Hardware developer
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
            <Link href="/Courses/5013" className="wd-dashboard-course-link">
            <Image alt="Image not found" src="/images/operatingsystems.jpg" width={200} height={150} />
            <div>
              <h5> CS5013 Operating Systems </h5>
              <p className="wd-dashboard-course-title">
                software developer
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
            <Link href="/Courses/5014" className="wd-dashboard-course-link">
            <Image alt="Image not found" src="/images/computernetworks.jpg" width={200} height={150} />
            <div>
              <h5> CS5014 Computer Networks</h5>
              <p className="wd-dashboard-course-title">
                software developer
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
            <Link href="/Courses/5015" className="wd-dashboard-course-link">
            <Image alt="Image not found" src="/images/algorithms.jpg" width={200} height={150} />
            <div>
              <h5> CS5015 Algorithms </h5>
              <p className="wd-dashboard-course-title">
                Software developer
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
            <Link href="/Courses/6010" className="wd-dashboard-course-link">
            <Image alt="Image not found" src="/images/machinelearning.jpg" width={200} height={150} />
            <div>
              <h5> CS6010 Machine Learning </h5>
              <p className="wd-dashboard-course-title">
                Data Science
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
);}
