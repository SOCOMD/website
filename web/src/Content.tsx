import React from 'react';
import styled,{keyframes} from 'styled-components';

const rules = [
  'No harassment of any kind directed toward other members.',
  'Be respectful to other members.',
  'No rage quitting from Operations',
  'Do not take equipment or vehicles not allocated to you or that you aren’t qualified for.',
  'No insubordination, feedback to be saved for post operation debrief.',
  'No friendly fire unless for training purposes.',
  'No In-game text chat such as side channel, use ACRE only.',
  'No “end-of-game” nonsense like negligent discharges or grenade throwing.'
];


const ContentDiv = styled.div<ContentProps>`
padding-left: ${props => props.Mobile ? "5%": "10%"};
padding-right: ${props => props.Mobile ? "5%": "10%"};
text-align: left;
position: relative;
section {
  margin: ${props => props.Mobile ? "10px 0px 10px 0px" : "20px 0px 20px 0px"};
  h1 {
    text-align: center;
    text-transform: uppercase;
    font-size: 40px;
    font-weight: 600;
    margin-bottom: 10px;
    // text-decoration: underline;
    // text-decoration-color: red;
  };
  // h1::after,h1::before {
  //   content: ' >';
  //   font-size: 50px;
  //   color: green;
  //   width: 100%;
  // };
  // h1::before {
  //   content: '< ';
  // };
  ul {
    list-style: none;
    li::before {
      content: '- ';
      color: red;
      padding-left: 5px;
    };
  };
};
`

export interface ContentProps {
  Mobile: boolean
  DarkTheme: boolean
}

function Content(props: ContentProps) {
  return (
    <ContentDiv Mobile={props.Mobile} DarkTheme={props.DarkTheme}>

      <section>
        <h1>Mission Statement</h1>
        <p>
          To provide a fun, realistic Australian Arma 3 MILSIM Unit 
          whilst building an active, semi-casual community.
        </p>
      </section>

      <section>
        <h1>Vision</h1>
        <p>
          SOCOMD, as an Australian Arma 3 MILSIM Unit, aims to provide 
          members with an authentic and enjoyable MILSIM experience by 
          partly emulating the organisational structure utilised by real 
          world SOCOMD. Every member will receive training on basic military 
          tactics such as: Basic Airborne, Section Urban Operations and 
          Conventional Section Fighting while also learning to use and play 
          with our modset, including ACE and ACRE2.
        </p>
      </section>

      <section>
        <h1>Who are We?</h1>
        <p>
          Special Operations Command (SOCOMD) is an Australian based Arma 3 MILSIM unit that is structured around the 2nd Command Regiment (2CDO) of the ADF. We specialise in cooperative Arma 3 gameplay utilising equipment, weapons and vehicles employed by the ADF.

          We don't enforce strict MILSIM rules like addressing members by rank or saluting officers. We do however, maintain a reasonable standard of discipline, authenticity and respect while still keeping things fun and enjoyable. Out of operations, we are mostly casual with plenty of Aussie banter, but when we jump into a mission, we expect all our members to be switched on.

          Many of our members current and past were or are actively serving military personnel in the ADF, this is the unit for you if you want a semi-casual yet authentic Australian Arma 3 MILSIM experience. 
        </p>
      </section>

      <section>
        <h1>When do we play</h1>
        <p>
          <h3>Friday Night - Official Operations</h3>
          <ul>
            <li>Friday Nights are reserved for our main operations</li>
            <li>Begins 8:00PM AEST, members are to be on teamspeak 15 minutes prior to start time</li>
            <li>Concludes with a debrief</li>
            <li>expected duration 1.5 hours to 3 hours</li>
          </ul>
          <br/>
          <h3>Tuesday, Wedenesday and Thursday Night - Training</h3>
          <ul> 
            <li>Combat Basic Training Course Part 1 & 2</li>
            <li>Begins 7:00PM AEST</li>
            <li>Condludes 2-3 hours for both Parts</li>
          </ul>
          <br/>
          <h3>Monday Night- Recruit Interviews</h3>
          <ul> 
            <li>Interviews and Recruit induction/setup, mostly used as a way to better get to know our new applicants.</li>
            <li>Begins 7:00PM AEST</li>
            <li>Concludes 20-30 minutes</li>
          </ul>
          <br/>
          <h3>Any Day - Mod Updates, Mini-Ops and Miscellaneous</h3>
          <ul> 
            <li>Depending on the availability of SOCOMD Staff, Interviews and CBTC1/2 can be held on request for those unavailable for the standard times listed above.</li>
            <li>We encourage members to run their own Mini-Ops, and they are often run by various members during the week. They are a great way to get to know other members and practice individual & leadership skills.</li>
          </ul>

          <br/><br/>
          What if I can't make the standard Interview, Training or Mission times?
          If you have the time, come and hang out with us on teamspeak, there are often members playing games and chatting with one another. There are multiple different games that our members play outside of Operations.
          <br/><br/>
          If a Trainer is available and willing, and you can't make the usual training nights, you can organise training on an off-night. Please be mindful that we prfer to do training in groups as this helps keep training more time-efficient. 
        </p>
      </section>

      <section>
        <h1>Rules</h1>
        <ul> 
          {rules.map((rule,index) => 
            <li key={index}>{rule}</li> 
          )}
        </ul>
      </section>

      <section>
        <h1>Expectations</h1>
        <p>
          The behaviour we expect from you is that you listen, learn, follow instructions and enjoy yourself. Put simply, just be an adult. We are all here to have a good time, so having a good spirit in and out of operations is expected. Individuals who don't share a suitable mindset or those who cause issues may be removed from the unit.
          <br/><br/>
          We are always open to feedback, so don't be afraid to speak your mind if you have something you'd like to bring up. Because at the end of the day, we are constantly adapting and trying to deliver a positive experience for everyone who joins.
          <br/><br/>
          We sincerely hope you will consider applying and look forward to hearing from you!
        </p>
      </section>

      <section>
        <h1>Joining The Unit</h1>
        <p>
          Here at SOCOMD, we have a basic induction process in order 
          to ensure individuals coming through the door have a mature mindset. 
          This includes an application, followed by an interview. 
          These are semi-formal and are more of a way to better get to know our 
          applicants as well as determine if they will fit in with the unit, 
          so while not 100% serious, a degree of professionalism and maturity 
          is encouraged. As such, Applicants should be at least 16 years of age 
          to apply.
        </p>
        <p>
          Our Staff will respond via email within 24 hours of your application 
          being submitted, and you will be provided with our teamspeak link as 
          well as instructions for scheduling an interview. Once you've joined 
          Teamspeak, a short interview will be conducted by our Staff, just as 
          a way to better get to know you and what interests you about SOCOMD. 
          <br/><br/>
          Once passed, you will be assigned the rank of Recruit. From here, the 
          interview Staff will get you set up with Arma 3 Sync in order to 
          download our modset, give you full access to our discord, discuss how 
          the unit is organized and explain the next step to proceed with basic 
          training.
          <br/><br/>
          All members of SOCOMD are required to complete the Combat Basic Training 
          Course (CBTC) in order to play in missions, in order to ensure everyone 
          is familiar with the mods and equipment we use. There are also additional 
          training specializations that can be picked up later on. 
        </p>
        {/*application form Questions
Email Address:

Username:

Age:

Are you a mature minded and disciplined person? Elaborate your thoughts on these points.

Tell us about why you'd enjoy operating as a team member in a MILSIM Operation?

Why are you interested in joining SOCOMD?

Have you been or are you currently in any other Arma 3 communities?

Please tell us a little bit about yourself.

Do you have any skills that could benefit SOCOMD? (Optional)
        */}
      </section>
    </ContentDiv>
  )
}

export default Content;
