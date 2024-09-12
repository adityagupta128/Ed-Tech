import '../Programs/Programs.css'
import program_1 from '../../assets/program-1.jpg'
import program_2 from '../../assets/program2.jpg'
import program_3 from '../../assets/program-3.jpg'
import program1_icon from '../../assets/DSA.png'
import program2_icon from '../../assets/AIML.png'
import program3_icon from '../../assets/MERN.png'

const Programs = () => {

  return (
    <div className="programs">
        <div className="program">
            <img src={program_1} alt="" />
            <div className="caption">
                <img src={program1_icon} alt="" />
                <p>Advanced DSA</p>
            </div>
        </div>
        <div className="program">
            <img src={program_2} alt="" />
            <div className="caption">
                <img src={program2_icon} alt="" />
                <p>AI/ML Bootcamp</p>
            </div>
        </div>
        <div className="program">
            <img src={program_3} alt="" />
            <div className="caption">
                <img src={program3_icon} alt="" />
                <p>Web Development(MERN)</p>
            </div>
        </div>
    </div>
  )
}

export default Programs