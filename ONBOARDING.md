<img src="https://cdn.earthdata.nasa.gov/eui/latest/docs/assets/ed-logos/meatball_hover_2x.png"/>

# NASA WorldWind Team

Welcome to the NASA WorldWind team! This guide helps you get connected, explore the various resources you'll need as a
team member, and start developing code for NASA WorldWind.

- [worldwind.arc.nasa.gov](https://worldwind.arc.nasa.gov) has all things WorldWind in one place
- [Forum](https://forum.worldwindcentral.com) provides help and outreach to the WorldWind community
- [GitHub](https://github.com/NASAWorldWind) hosts source code, issues, milestones, and releases
- [Waffle.io](https://waffle.io/NASAWorldWind/NASAWorldWind.github.io) provides Agile project management
- [Travis CI](https://travis-ci.org/NASAWorldWind) provides continuous integration and build automation
- [Bintray](https://bintray.com/nasaworldwind) hosts buid artifacts for Java, Android and ServerKit
- [NPM](https://npmjs.com/org/nasaworldwind) hosts packages for WebWorldWind

## Get Started

Work with the WorldWind project manager to get connected with the WorldWind team. Be sure to have ...

- [GitHub](https://github.com) account with two-factor authentication enabled
- [Bintray](https://bintray.com/signup/oss) account (sign up with GitHub)
- [NPM](https://www.npmjs.com/signup) account
- [Skype](https://login.skype.com/account/signup-form) account
- [JetBrains](https://account.jetbrains.com/login) account
- [Forum](http://forum.worldwindcentral.com/register.php) account (NASA interns skip this step)
  - Set Avatar to NASA logo
  - Set User Title to 'WW Team Member'
  - Set Biography to 'NASA WorldWind Team Member'

Set your calendar for WorldWind's Skype meetings

- WorldWind all hands, Tuesdays at 1300 Pacific Time
- WorldWind developers, Tuesdays and Thursdays at 1100 Pacific Time
- ESA developers, Tuesdays at 1800 Central European Time

Download WorldWind development tools

- [IntelliJ IDEA](https://www.jetbrains.com/idea/download/) for WorldWind Java
- [WebStorm](https://www.jetbrains.com/webstorm/download/) for Web WorldWind
- [Android Studio](https://developer.android.com/studio/) for WorldWind Android

## Agile Development

The WorldWind development team uses an Agile development workflow, loosely based on Scrum. Work occurs in iterative two week cycles called Sprints. Sprints begin/end every other Tuesday during the WorldWind developers meeting at 1100 Pacific. The Scrum Guide has more detail about Sprints.

https://www.scrumguides.org/scrum-guide.html#events-sprint

Sprints begin with the sprint planning meeting. The team selects tasks from the backlog to define the sprint goals. It’s critical to select tasks small enough to complete during the sprint. Breaking tasks into smaller sub-tasks is a good way to accomplish this. It’s much better to complete several small tasks than one large task. Sprint goals can change when necessary, but the norm will be that sprint goals are as a constant for the duration of the sprint.

During the sprint, team members decide amongst themselves who will work on what. Collaboration is supported and encouraged. It’s unnecessary to assign all tasks upfront. The goal is to complete the the sprint goals. You are expected to use your own judgment on how to best accomplish the task. Code tasks are done once pull requests are submitted and accepted. Other tasks, such as investigations, have a task-specific definition of done.

Sprints end with the sprint review meeting. Together the team reviews which tasks are done. Incomplete tasks move to the next sprint, and may be broken into smaller tasks. From our perspective the sprint planning and sprint review will be one bi-weekly meeting where we review what was accomplished during the previous sprint and plan what we’ll do during the next sprint.

The backlog defines tasks team members can select from during sprint planning. It's a list of tasks in descending priority. Patrick and I continuously groom the backlog based on customer needs, contractual obligations, and your own feedback and proposals.

## Development Guidelines

Sprint tasks are defined by GitHub issues associated with the relevant repository. We use Waffle.io, a project management tool built on GitHub issues, to manage our task backlog and sprint progress. Waffle.io incorporates tasks across all repositories, organized into columns representing task state. Inbox has un-prioritized issues and outside pull requests. Backlog has prioritized tasks ready for the next sprint. Ready has the current sprint’s tasks. Tasks move through the remaining columns, In Progress, In Review, Done, automatically based on the GitHub issue state or linked pull request state. 

https://waffle.io/NASAWorldWind/NASAWorldWind.github.io
https://bot.waffle.io

Code changes occur on a non-develop branch and culminate in a pull request. Pull requests must meet three criteria: (1) the branch is up to date with develop, (2) the Travis build succeeds, and (3) the changes are peer reviewed. GitHub automates all of this through its protected branches feature.

Pull requests benefit our team by transparently documenting all changes. Peer review encourages authors to put their best work up for review and encourages reviewers to adopt accountability for code they didn’t author. Anyone with write access may approve a pull request review. No process is a replacement for good judgement and critical thinking. My expectation is that you’ll use your best judgement on who needs to review a change and how comprehensive that review needs to be. GitHub’s documentation on pull request reviews provides more details.

https://help.github.com/articles/about-pull-request-reviews/