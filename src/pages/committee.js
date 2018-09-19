import React from 'react';
import Person from '../components/person';
import GitHub from '../components/github';
import Website from '../components/website';
import LinkedIn from '../components/linked-in';
import Twitter from '../components/twitter';
import Link from '../components/link';

const programCommittee = [
  "Paul Adenot",
  "Alo Allik",
  "Jesse Allison",
  "Jack Armitage",
  "Stefan Balke",
  "Cristiano Belloni",
  "Benjamin Bernard",
  "Andrew Bernstein",
  "Astrid Bin",
  "Joerg Bitzer",
  "Xavier Boissarie",
  "Paul Brossier",
  "Michel Buffa",
  "Andrei Bundin",
  "Thibaut Carpentier",
  "Antonio D. Carvalho Jr",
  "Keunwoo Choi",
  "Hongchan Choi",
  "Brecht De Man",
  "Georg Essl",
  "Catherine Faron Zucker",
  "Frederic Font",
  "Jason Freeman",
  "Samuel Goldszmidt",
  "Fabio Goródscy",
  "Siddharth Gururani",
  "Ben Houge",
  "Timothy Hsu",
  "Fernando Iazzetta",
  "Nicholas Jillings",
  "Ruth John",
  "Sema Kachalo",
  "David Kim-Boyle",
  "Jean-Philippe Lambert",
  "Joseph Larralde",
  "Victor Lazzarini",
  "Jerome Lebrun",
  "Sang Won Lee",
  "Stéphane Letz",
  "Chris Lilley",
  "Thor Magnusson",
  "Anand Mahadevan",
  "Yotam Mann",
  "Anthony Marasco",
  "Benjamin Matuszewski",
  "Matt Mckegg",
  "Adib Mehrabi",
  "Stuart Memo",
  "Jan-Torsten Milde",
  "Alessia Milo",
  "Nicolas Misdariis",
  "Chase Mitchusson",
  "Dave Moffat",
  "Markus Noisternig",
  "Frederick Ostrenko",
  "Matthew Paradis",
  "Bryan Pardo",
  "Tae Hong Park",
  "Tero Parviainen",
  "Johan Pauwels",
  "Guillaume Pellerin",
  "David Poirier-Quinot",
  "Charlie Roberts",
  "Chris Rogers",
  "Victor Saiz",
  "Mark Sandler",
  "Jordan Santell",
  "Diemo Schwarz",
  "Jason Sigal",
  "Boris Smus",
  "Jeff Snyder",
  "Ryan Stables",
  "Kyle Stetz",
  "Ariane Stolfi",
  "Fabian-Robert Stöter",
  "Jeff Switzer",
  "Hiroyuki Takakura",
  "Ben Taylor",
  "Florian Thalmann",
  "Lucas Thompson",
  "Raimund Vogtenhuber",
  "Tony Wallace",
  "Yonghao Wang",
  "Lin Wang",
  "Olivier Warusfel",
  "Chris Wilson",
  "Mike Winters",
  "Lonce Wyse",
  "Anna Xambó",
  "Minjoon Yoo",
  "Ehsan Ziya"
]

const Committee = () => (
  <div className="committee">
    <h1>Committee</h1>
    <Person
      givenName='Jan'
      familyName='Monschke'
      imagePath='committee/jan.jpg'
      role='Conference/Installation/Performance Chair'
    >
      <p>Jan Monschke is a frontend engineer working at SoundCloud in Berlin. He works on the main web app, as well as the Xbox app and occasionally some of the mobile apps.</p>
      <p>He discovered his interest in the Web Audio API when he was writing his master’s thesis on building a fully collaborative DAW purely with web technology. This project was presented at the very first Web Audio Conference in Paris in 2015.</p>
      <p>Nowadays his main music-related focus is his Web Audio Band the <Link href="https://www.youtube.com/watch?v=W0MvW2jaW8g">nested_loops</Link> who is regularly performing at the biggest JavaScript conference in europe.</p>
      <p>
        <Website url='http://janmonschke.com/' /><br />
        <GitHub account='janmonschke' /><br />
        <Twitter account='thedeftone' />
      </p>
    </Person>
    <Person
      givenName='Christoph'
      familyName='Guttandin'
      imagePath='committee/christoph.jpg'
      role='Conference/Program Chair'
    >
      <p>Christoph is a freelance Web Developer based in Berlin. He is specialized in multi media applications that leverage all the new and shiny APIs that are available in todays browsers. He has recently worked on streaming solutions and interactive music applications for clients like TV stations, streaming services, synthesizer vendors, and artists.</p>
      <p>He is currently about to complete a master’s degree in International Media and Computing and is a certified Audiovisual Media Designer.</p>
      <p>Christoph was a speaker at the last two Web Audio Conferences in London and Atlanta.</p>
      <p><GitHub account='chrisguttandin' /></p>
    </Person>
    <Person
      givenName='Norbert'
      familyName='Schnell'
      imagePath='committee/norbert.jpg'
      role='Scientific/Program Chair'
    >
      <p>Norbert Schnell is professor of Music Design at the Digital Media Faculty at the Furtwangen University. He studied Music Technology in Graz before entering the Ircam in Paris as researcher and developer in the field of interactive digital audio processing and interaction design.</p>
      <p>He chaired the 6th International Conference on New Interfaces for Musical Expression (NIME 2006) and the first Web Audio Conference (WAC 2015).</p>
      <p>In 2013 he obtained his doctorate on key aspects of sound and interaction design with recorded sounds.</p>
      <p>Over the past years, he coordinated the CoSiMa project exploring collective interactions in the context of participative art and music projects, collaborative digital media, and music pedagogy based on mobile and web technologies.</p>
    </Person>
    <Person
      givenName='Stefan'
      familyName='Weinzierl'
      imagePath='committee/stefan.jpg'
      role='Local Chair'
    >
      <p>Stefan Weinzierl is head of the Audio Communication Group at the Technische Universität Berlin. His activities in research are focused on audio technology, virtual acoustics, room acoustics, and musical acoustics.</p>
      <p>He is coordinator of a master program in Audio Communication and Technology at TU Berlin.</p>
      <p>With a diploma in physics and sound engineering, he received his Ph.D. in Musical Acoustics from TU Berlin. He is currently coordinating research consortia in the field of virtual acoustics (SEACEN, DFG) and music information retrieval (ABC_DJ, H2020).</p>
      <p><Website url='http://www.ak.tu-berlin.de/menue/team/leitung/prof_dr_stefan_weinzierl/' /></p>
    </Person>
    <Person
      givenName='Athanasios'
      familyName='Lykartsis'
      imagePath='committee/athanasios.jpg'
      role='Local Chair'
    >
      <p>Athanasios Lykartsis received his Diploma in Electrical and Computer Engineering at the Aristoteles University of Thessaloniki in 2009. He then completed a Master's degree in Audio Technology at the TU Berlin in 2014, with further specialization in audio signal processing.</p>
      <p>Now he is a research associate and PhD candidate at the Audio Communication Group, as well as a freelance consultant for audio-based projects.</p>
      <p>Special interests include rhythm feature design for as language identification and machine learning for audio data analysis.</p>
      <p>
        <LinkedIn account='athanasios-lykartsis-15a888a' /><br />
        <Website url='http://www.ak.tu-berlin.de/menue/team/wissenschaftliche_mitarbeiter/athanasios_lykartsis/parameter/en/' />
      </p>
    </Person>
    <Person
      givenName='Jack'
      familyName='Schaedler'
      imagePath='committee/jack.jpg'
      role='Demos/Posters Chair'
    >
      <p>Jack Schaedler is a software developer at Ableton. He has worked on Ableton Live, and most recently, Ableton's microsite for learning music fundamentals.</p>
      <p>His personal work explores the use of interactive media to explain difficult concepts like Fourier analysis, handwriting recognition, and music theory.</p>
      <p>He holds a master's degree in Digital Music Processing from the Centre for Digital Music at Queen Mary, University of London.</p>
      <p>
        <Website url='https://jackschaedler.github.io/' /><br />
        <GitHub account='jackschaedler' /><br />
        <Twitter account='jackschaedler' />
      </p>
    </Person>
    <Person
      givenName='Tom'
      familyName='Jenkinson'
      imagePath='committee/tom.jpg'
      role='Installation/Performance Chair'
    >
      <p>Tom is a web streaming engineer at SoundCloud. He works on the playback library for the web applications, which uses <code>{"<audio />"}</code>, Media Source Extensions, and WebAudio.</p>
      <p>He previously studied software engineering at Lancaster University in the UK, and was an active member of the student TV station.</p>
      <p>In his free time he enjoys playing trumpet and drums in a few bands in Berlin, and contributes to the open source HLS client HLS.JS.</p>
      <p><GitHub account='tjenkinson' /></p>
    </Person>
    <h2>Program Committee</h2>
    <p>{programCommittee.map((person) => <div>{person}</div>)}</p>
  </div>
)

export default Committee;
