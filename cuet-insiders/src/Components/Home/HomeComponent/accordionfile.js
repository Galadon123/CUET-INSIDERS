
import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
function Accordionfile() {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>How important is finding a mentor?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Mentors raise your confidence and problem-solving abilities. Along with developing leadership skills, having a mentor to advise and guide you can increase your confidence and help develop problem-solving skills. Regarding confidence, research has tied having a mentor to an overall increase in emotional health.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>How do people find mentors?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          First and foremost, you should ask yourself if you admire this person for her or his achievements and industry experience. Your mentor should ideally be someone who shares your professional outlook and perhaps has even accomplished the goals you hope to achieve.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>What to look for when finding a mentor?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Important qualities to look for include active listening skills, honesty and an ability to give constructive feedback. Choosing a mentor with these key traits helps you build an effective network and develop skills that can advance your career.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>As a mentor,what are my responsibilities?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Some of the responsibilities of mentors are: to provide guidance, advice, feedback and support to the mentee. As well as serving as their role model, teacher, counselor, advisor, sponsor, advocate and ally. You will provide them with all their tools to be able to become a better version of themselves.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Can i have more than one mentor?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Yes.Having multiple mentors allows you to gain and receive feedback on different aspects of your life.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>What kind of support will I get with mentoring?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          This encouragement can motivate them to keep moving forward despite challenges. A mentor can also identify and express their mentee's strengths to instill confidence in them.
          </Typography>
        </AccordionDetails>
      </Accordion>
     
    </div>
  )
}

export default Accordionfile;