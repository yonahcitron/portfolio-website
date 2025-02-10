import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptop, faCode, faChalkboard, faBook, faGraduationCap} from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
      <div className="body-container" id="history">
        <h1>Timeline</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="2017 - 2021"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <h3 className="vertical-timeline-element-title">University of Cambridge, UK</h3>
            <h4 className="vertical-timeline-element-subtitle">Linguistics - MA, BA Hons.</h4>
            <ul>
              <li>Graduated with 1st Class Honours</li>
              <li>Received the David Thompson Prize for outstanding academic performance in my finals and dissertation</li>
            </ul>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2021 - 2022"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faLaptop} />}
          >
            <h3 className="vertical-timeline-element-title">Kubrick Group Training, UK</h3>
            <h4 className="vertical-timeline-element-subtitle">Software & Data Engineering Course</h4>
            <ul>
              <li>Completed intensive 4-month training in enterprise software development</li>
              <li>Topics included Python, SQL, PySpark, cloud technologies, and Agile practices</li>
            </ul>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2022 -"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faCode} />}
          >
            <h3 className="vertical-timeline-element-title">Shell, UK</h3>
            <h4 className="vertical-timeline-element-subtitle">Software and Data Engineer</h4>
            <ul>
              <li>Contracted for Kubrick Group, then hired as Shell staff</li>
              <li>Developing enterprise AI solutions for Shell's global business</li>
              <li>Extensive experience building robust data products, ETL pipelines, scalable frameworks, and efficient APIs</li>
            </ul>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>

  );
}

export default Timeline;