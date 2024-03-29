/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const { resolve } = require('path');
const { existsSync } = require('fs');
const acceptedSubmissions = require('./src/data/accepted-submissions');

const submissionsWithoutPaper = [ ...acceptedSubmissions.papers, ...acceptedSubmissions.posters ]
  .filter((submission) => !existsSync(resolve(`./static/papers/${ submission.slug }.pdf`)));

if (submissionsWithoutPaper.length > 0) {
  throw new Error(`The PDFs of the following submissions are missing: ${ submissionsWithoutPaper.map((submission) => `"${ submission.title }"`).join(', ') }.`);
}

exports.createPages = ({ boundActionCreators }) => {
  acceptedSubmissions.demos
    .forEach((demo) => {
      boundActionCreators.createPage({
        component: resolve(`./src/components/accepted-submission.js`),
        context: { ...demo, type: 'demo' },
        path: `/demos-and-posters/${ demo.slug }`
      });
    });
  acceptedSubmissions.installations
    .forEach((installation) => {
      boundActionCreators.createPage({
        component: resolve(`./src/components/accepted-submission.js`),
        context: { ...installation, type: 'installation' },
        path: `/installations/${ installation.slug }`
      });
    });
  acceptedSubmissions.papers
    .forEach((paper) => {
      boundActionCreators.createPage({
        component: resolve(`./src/components/accepted-submission.js`),
        context: { ...paper, type: 'paper' },
        path: `/presentations/${ paper.slug }`
      });
    });
  acceptedSubmissions.performances
    .forEach((performance) => {
      boundActionCreators.createPage({
        component: resolve(`./src/components/accepted-submission.js`),
        context: { ...performance, type: 'performance' },
        path: `/performances/${ performance.slug }`
      });
    });
  acceptedSubmissions.posters
    .forEach((poster) => {
      boundActionCreators.createPage({
        component: resolve(`./src/components/accepted-submission.js`),
        context: { ...poster, type: 'poster' },
        path: `/demos-and-posters/${ poster.slug }`
      });
    });
  acceptedSubmissions.talks
    .forEach((talk) => {
      boundActionCreators.createPage({
        component: resolve(`./src/components/accepted-submission.js`),
        context: { ...talk, type: 'talk' },
        path: `/presentations/${ talk.slug }`
      });
    });

  boundActionCreators.createRedirect({ fromPath: '/program', isPermanent: true, toPath: '/schedule', redirectInBrowser: true });
};
