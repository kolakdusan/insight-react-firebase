import { Link } from 'react-router-dom'
import Avatar from './Avatar.jsx'
import './ProjectList.css'

const ProjectList = ({ projects }) => {
  return (
    <div className="project-list">
      {projects.length === 0 && <p>No projects yet!</p>}
      {projects.map((project) => (
        <Link to={`projects/${project.id}`} key={project.id} className="dule">
          <h4>{project.name}</h4>
          <p>Due by {project.dueDate.toDate().toDateString()}</p>
          <div className="assigned-to">
            <ul>
              {project.assignedUsersList.map((user) => (
                <li key={user.photoURL}>
                  <Avatar src={user.photoURL} />
                </li>
              ))}
            </ul>
            <div>
              {project.comments.length > 0 && (
                <p className="comment-number">
                  Comments: {project.comments.length}
                </p>
              )}
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}
export default ProjectList
