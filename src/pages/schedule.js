import React from 'react';
const moment = require('moment-timezone');
import Announcement from '../components/announcement';
import Link from '../components/link';
import InternalLink from 'gatsby-link';
import acceptedSubmissions from '../data/accepted-submissions.json';
import { findDemoOrPosterBySlug } from '../helpers/find-demo-or-poster-by-slug';
import { findPresentationBySlug } from '../helpers/find-presentation-by-slug';

import './schedule.css';

export default class Schedule extends React.Component {
  state = {}

  componentDidMount() {
    this.updateHandle = setInterval(this.updateTime, 1000 * 60)
  }

  componentWillUnmount() {
    clearInterval(this.updateHandle);
  }

  updateTime = () => {
    this.setState({
      currentTime: nowInUTC()
    });
  }

  renderDay = (day) => {
    const currentTime = this.state.currentTime || nowInUTC();
    return (
      <div className="schedule__day">
        <h2 className="schedule__headlineDay">{day.title}</h2>
        <div className="schedule__timeTable">
          {day.entries.map((entry) => {
            const isCurrent = currentTime >= entry.startTime && currentTime <= entry.endTime;
            const entryStart = utcTSToBerlinTZ(entry.startTime);
            const entryEnd = utcTSToBerlinTZ(entry.endTime);

            const time = `
              ${zeroPad(entryStart.hours())}:${zeroPad(entryStart.minutes())}
               -
              ${zeroPad(entryEnd.hours())}:${zeroPad(entryEnd.minutes())}
              `;

            const joinAuthors = (authors) => {
              return authors
                .map(({ name }) => name)
                .reduce((accumulator, author, index, array) => {
                  if (index === 0) {
                    return author;
                  }

                  return accumulator + ((index === array.length - 1) ? ' and ' + author : ', ' + author);
                }, '');
            };

            return (
              <div
                key={`${day.title}${time}`}
                id={`${isCurrent ? 'current' : ''}`}
                className={`schedule__entry ${isCurrent ? 'm-current' : ''}`}
              >
                <div className="schedule__entryTime">
                  {time}
                </div>
                <div className="schedule__entryInfo">
                  <div className="schedule__entryTitle">
                    {entry.title}
                    {entry.location && (
                      <span className="schedule__entryLocation">
                        (<Link href={entry.location.link}>{entry.location.name}</Link>)
                      </span>
                    )}
                  </div>
                  {entry.description && (
                    <div className="schedule__entryDescription">{entry.description}</div>
                  )}
                  {entry.demosAndPosters && (
                    <ul className="schedule__entryDemosAndPostersList">
                      {entry.demosAndPosters.map((demoOrPoster) => {
                        const authors = joinAuthors(demoOrPoster.authors);

                        return <li key={`demo-or-poster-${demoOrPoster.slug}`}><InternalLink to={`/demos-and-posters/${ demoOrPoster.slug }`}>{authors}: {demoOrPoster.title}</InternalLink></li>;
                      })}
                    </ul>
                  )}
                  {entry.performances && (
                    <ul className="schedule__entryPerformancesList">
                      {entry.performances.map((performance) => {
                        const authors = joinAuthors(performance.authors);

                        return <li key={`performance-${performance.slug}`}><InternalLink to={`/performances/${ performance.slug }`}>{authors}: {performance.title}</InternalLink></li>;
                      })}
                    </ul>
                  )}
                  {entry.presentations && (
                    <ul className="schedule__entryPresentationsList">
                      {entry.presentations.map((presentation) => {
                        const authors = joinAuthors(presentation.authors);

                        return <li key={`presentation-${presentation.slug}`}><InternalLink to={`/presentations/${ presentation.slug }`}>{authors}: {presentation.title}</InternalLink></li>;
                      })}
                    </ul>
                  )}
                </div>
              </div>
            )
          })}

        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="schedule">
        <h1>Schedule</h1>
        <Announcement>
          We are still finalizing the schedule but you can check out all accepted submissions <InternalLink to="/program">here</InternalLink>.
        </Announcement>
        {this.renderDay(schedule.day1)}
        {this.renderDay(schedule.day2)}
        {this.renderDay(schedule.day3)}
      </div>
    );
  }
}

const schedule = {
  day1: {
    title: 'Wednesday, Sept 19th',
    entries: [
      {
        startTime: Date.UTC(2018, 8, 19, 6, 0),
        endTime: Date.UTC(2018, 9, 19, 7, 0),
        title: 'Registration',
        description: 'Get your conference badge and mingle with other attendees',
        location: {
          name: 'TU Berlin',
          link: 'https://goo.gl/maps/T4WWLmNZA1v'
        }
      },
      {
        startTime: Date.UTC(2018, 8, 19, 7, 0),
        endTime: Date.UTC(2018, 8, 19, 8, 0),
        title: 'Keynote',
        description: <InternalLink to="/keynotes#ruth-john">The opening keynote for WAC 2018 by Ruth John</InternalLink>
      },
      {
        startTime: Date.UTC(2018, 8, 19, 8, 0),
        endTime: Date.UTC(2018, 8, 19, 8, 30),
        title: 'Coffee & Tea break'
      },
      {
        startTime: Date.UTC(2018, 8, 19, 8, 30),
        endTime: Date.UTC(2018, 8, 19, 10, 30),
        title: 'Presentations: Generation & Visualization',
        presentations: [
          'generative-music-playful-visualizations-and-where-to-find-them',
          'websonify-ambient-aural-display-of-real-time-data',
          'a-javascript-library-for-flexible-visualization-of-audio-descriptors',
          'exploring-real-time-visualisations-to-support-chord-learning-with-a-large-music-collection',
          'musical-deep-neural-networks-in-the-browser',
          'participatory-musical-improvisations-with-playsound-space'
        ].map((slug) => findPresentationBySlug(acceptedSubmissions, slug))
      },
      {
        startTime: Date.UTC(2018, 8, 19, 10, 30),
        endTime: Date.UTC(2018, 8, 19, 12, 0),
        title: 'Lunch break'
      },
      {
        startTime: Date.UTC(2018, 8, 19, 12, 0),
        endTime: Date.UTC(2018, 8, 19, 14, 0),
        title: 'Presentations: Coding Sound & Music',
        presentations: [
          'from-artist-to-software-developer-and-back-a-celloist-s-perspective-on-web-audio',
          'collaborative-coding-with-music-two-case-studies-with-earsketch',
          'metaprogramming-strategies-for-audioworklets',
          'webassembly-audioworklet-csound',
          'ambient-html5-music-for-tiny-airports-in-256-bytes'
        ].map((slug) => findPresentationBySlug(acceptedSubmissions, slug))
      },
      {
        startTime: Date.UTC(2018, 8, 19, 14, 0),
        endTime: Date.UTC(2018, 8, 19, 16, 0),
        title: 'Demos, Posters and Installations',
        description: `
          Check out a variety of demos, posters and installations in various locations on the campus.
          We will be serving refreshments and little snacks.
        `,
        demosAndPosters: [
          'dsp-filter-playground',
          'playsound-space-demo',
          'web-wall-whispers',
          'the-sound-of-bitcoin-sound-synthesis-with-cryptocurrency-trade-data',
          'cena-concertante-alla-maniera-di-vivaldi-considering-the-testaurant-as-a-musical-interface',
          'body-movement-sonification-using-the-web-audio-api',
          'a-user-adaptive-automated-dj-web-app-with-object-based-audio-and-crowd-sourced-decision-trees',
          'combining-web-audio-streaming-motion-capture-and-binaural-audio-in-a-telepresence-system',
          'a-more-perfect-union-composition-with-audience-controlled-smartphone-speaker-array-and-evolutionary-computer-music',
          'loop-based-graphical-live-coded-music-in-the-browser',
          'live-coding-drum-machine',
          '0plus1equalssom-bringing-computing-closer-to-children-through-music'
        ].map((slug) => findDemoOrPosterBySlug(acceptedSubmissions, slug))
      },
      {
        startTime: Date.UTC(2018, 8, 19, 17, 30),
        endTime: Date.UTC(2018, 8, 19, 21, 0),
        title: 'Concert',
        location: {
          name: 'Factory Berlin [entry Rheinsberger Str.]',
          link: 'https://goo.gl/maps/TgYuyZ2cKpr'
        },
        description: <div>
          <div>Doors open: 19:30</div>
          <div>Show starts: 20:00 (last admission)</div>
        </div>,
        performances: acceptedSubmissions.performances
      }
    ]
  },
  day2: {
    title: 'Thursday, Sept 20th',
    entries: [
      {
        startTime: Date.UTC(2018, 8, 19, 6, 0),
        endTime: Date.UTC(2018, 9, 19, 7, 0),
        title: 'Registration',
        description: 'Get your conference badge and mingle with other attendees',
        location: {
          name: 'TU Berlin',
          link: 'https://goo.gl/maps/T4WWLmNZA1v'
        }
      },
      {
        startTime: Date.UTC(2018, 8, 19, 7, 0),
        endTime: Date.UTC(2018, 8, 19, 8, 0),
        title: 'Keynote',
        description: <InternalLink to="/keynotes#chris-rogers">The second keynote of WAC 2018 by Chris Rogers</InternalLink>
      },
      {
        startTime: Date.UTC(2018, 8, 19, 8, 0),
        endTime: Date.UTC(2018, 8, 19, 8, 30),
        title: 'Coffee & Tea break'
      },
      {
        startTime: Date.UTC(2018, 8, 19, 8, 30),
        endTime: Date.UTC(2018, 8, 19, 10, 30),
        title: 'Presentations: Plugins & Timing',
        presentations: [
          'wap-ideas-for-a-web-audio-plug-in-standard',
          'iplug2-desktop-plug-in-framework-meets-web-audio-modules',
          'native-web-audio-api-plugins',
          'latency-and-synchronization-in-web-audio',
          'orchestrate-your-web',
          'the-timing-object-a-pacemaker-for-the-web'
        ].map((slug) => findPresentationBySlug(acceptedSubmissions, slug))
      },
      {
        startTime: Date.UTC(2018, 8, 19, 10, 30),
        endTime: Date.UTC(2018, 8, 19, 12, 0),
        title: 'Lunch break'
      },
      {
        startTime: Date.UTC(2018, 8, 19, 12, 0),
        endTime: Date.UTC(2018, 8, 19, 14, 0),
        title: 'Presentations: Libraries & Tools',
        presentations: [
          'r-audio-declarative-reactive-and-flexible-web-audio-graphs-in-react',
          'dspnode-real-time-remote-audio-rendering',
          'dsp2js-a-cplusplus-framework-for-the-development-of-in-browser-dsps',
          'cables—a-web-based-visual-programming-language-for-webgl-and-web-audio'
        ].map((slug) => findPresentationBySlug(acceptedSubmissions, slug))
      },
      {
        startTime: Date.UTC(2018, 8, 19, 14, 0),
        endTime: Date.UTC(2018, 8, 19, 16, 0),
        title: 'Demos, Posters and Installations',
        description: `
          Check out a variety of demos, posters and installations in various locations on the campus.
          We will be serving refreshments and little snacks.
        `,
        demosAndPosters: [
          'guitarists-will-be-happy-guitar-tube-amp-simulators-and-fx-pedal-in-a-virtual-pedal-board-and-more',
          'fugue-step—a-multi-playhead-sequencer',
          'transmitting-data-over-the-air-using-the-web-audio-api',
          'audio-pipes-connecting-web-audio-between-any-page',
          'utilizing-nexushub-and-docker-for-distributed-performance',
          'voiceful-voice-analysis-transformation-and-synthesis-on-the-web',
          'soundsling-a-framework-for-using-creative-motion-data-to-pan-audio-across-a-mobile-device-speaker-array',
          'pywebaudioplayer-bridging-the-gap-between-audio-processing-code-in-python-and-attractive-visualisations-based-on-web-technology',
          'designing-movement-driven-audio-applications-using-a-web-based-interactive-machine-learning-toolkit',
          'multi-web-audio-sequencer-collaborative-music-making',
          'lost-in-space'
        ].map((slug) => findDemoOrPosterBySlug(acceptedSubmissions, slug))
      },
      {
        startTime: Date.UTC(2018, 8, 19, 17, 0),
        endTime: Date.UTC(2018, 8, 19, 20, 0),
        title: 'Dinner',
        description: <div>
          <p>We are preparing a very special audio-enhanced dinner together with <Link href="http://www.audiogustatory.com/">Ben Houge</Link> and <Link href="http://www.brlo-brwhouse.de/">BRLO</Link>.</p>
          <p>Doors open from 19:00 with a welcome drink + snacks. Please don't arrive later than 19:30, where we will start the 4-course dinner menu.</p>
        </div>,
        location: {
          name: 'BRLO BRWHOUSE',
          link: 'https://goo.gl/maps/9ASZSQ6GZpw'
        }
      }
    ]
  },
  day3: {
    title: 'Friday, Sept 21st',
    entries: [
      {
        startTime: Date.UTC(2018, 8, 21, 6, 0),
        endTime: Date.UTC(2018, 8, 21, 7, 0),
        title: 'Registration',
        description: 'Get your conference badge and mingle with other attendees',
        location: {
          name: 'TU Berlin',
          link: 'https://goo.gl/maps/T4WWLmNZA1v'
        }
      },
      {
        startTime: Date.UTC(2018, 8, 21, 7, 0),
        endTime: Date.UTC(2018, 8, 21, 8, 30),
        title: 'Keynote',
        description: <InternalLink to="/keynotes#paul-adenot">Paul Adenot will talk about the latest development of the Web Audio API</InternalLink>
      },
      {
        startTime: Date.UTC(2018, 8, 21, 8, 30),
        endTime: Date.UTC(2018, 8, 21, 10, 30),
        title: 'Workshops'
      },
      {
        startTime: Date.UTC(2018, 8, 21, 10, 30),
        endTime: Date.UTC(2018, 8, 21, 12, 0),
        title: 'Lunch break'
      },
      {
        startTime: Date.UTC(2018, 8, 21, 12, 0),
        endTime: Date.UTC(2018, 8, 21, 16, 0),
        title: 'Workshops'
      },
      {
        startTime: Date.UTC(2018, 8, 21, 16, 0),
        endTime: Date.UTC(2018, 8, 21, 16, 15),
        title: 'End of the conference'
      }
    ]
  }
}

function zeroPad(number) {
  return number <= 9 ? `0${number}` : `${number}`;
}

function nowInUTC() {
  const now = new Date();

  return Date.UTC(
    now.getUTCFullYear(),
    now.getUTCMonth(),
    now.getUTCDate(),
    now.getUTCHours(),
    now.getUTCMinutes()
  );
}

function utcTSToBerlinTZ(utcTimestamp) {
  return moment.tz(utcTimestamp, 'Europe/Berlin');
}