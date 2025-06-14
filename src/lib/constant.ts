export const clients = [...new Array(10)].map((client, index) => ({
    href: `/${index + 1}.png`
}))

export const products = [
    {
      title: 'MDeep Personalization Cold Outreach Engine',
      link: '#',
      thumbnail: '/auto 1 - Modifié.jpg',
    },
    {
      title: 'Search Intent Lead Scraper',
      link: '#',
      thumbnail: '/auto 2 - Modifié.jpg',
    },
    {
      title: 'Rogue',
      link: '#',
      thumbnail: '/auto 3 - Modifié.jpg',
    },
  
    {
      title: 'YouTube Parasite Content Repurposer',
      link: '#',
      thumbnail: '/auto 4 - Modifié.png',
    },
    {
      title: ' AI-Curated Newsletter Factory',
      link: '#',
      thumbnail: '/auto 5 - Modifié.png',
    },
    {
      title: 'Event Registration & Follow-up Automation',
      link: '#',
      thumbnail: '/auto 6 - Modifié.png',
    },
  
    {
      title: 'Social Media Content Scheduling & Cross-Posting',
      link: '#',
      thumbnail: '/auto 7 - Modifié.jpg',
    },
    {
      title: 'Competitor Price Monitoring & Alert System',
      link: '#',
      thumbnail: '/auto 8 - Modifié.png',
    },
    {
      title: 'Expense Report Generation from Receipts',
      link: '#',
      thumbnail: '/auto 9 - Modifié.jpg',
    },
    {
      title: 'SmartBridge',
      link: '#',
      thumbnail: '/p4.png',
    },
    {
      title: 'Renderwork Studio',
      link: '#',
      thumbnail: '/p5.png',
    },
  
    {
      title: 'Creme Digital',
      link: 'https://cremedigital.com',
      thumbnail: '/p6.png',
    },
    {
      title: 'Golden Bells Academy',
      link: 'https://goldenbellsacademy.com',
      thumbnail: '/p1.png',
    },
    {
      title: 'Invoker Labs',
      link: 'https://invoker.lol',
      thumbnail: '/p2.png',
    },
    {
      title: 'E Free Invoice',
      link: 'https://efreeinvoice.com',
      thumbnail: '/p3.png',
    },
  ]
  
//   export const menuOptions = [
//     { name: 'Dashboard', Component: Home, href: '/dashboard' },
//     { name: 'Workflows', Component: Workflows, href: '/workflows' },
//     { name: 'Settings', Component: Settings, href: '/settings' },
//     { name: 'Connections', Component: Category, href: '/connections' },
//     { name: 'Billing', Component: Payment, href: '/billing' },
//     { name: 'Templates', Component: Templates, href: '/templates' },
//     { name: 'Logs', Component: Logs, href: '/logs' },
//   ]
  
//   export const EditorCanvasDefaultCardTypes = {
//     Email: { description: 'Send and email to a user', type: 'Action' },
//     Condition: {
//       description: 'Boolean operator that creates different conditions lanes.',
//       type: 'Action',
//     },
//     AI: {
//       description:
//         'Use the power of AI to summarize, respond, create and much more.',
//       type: 'Action',
//     },
//     Slack: { description: 'Send a notification to slack', type: 'Action' },
//     'Google Drive': {
//       description:
//         'Connect with Google drive to trigger actions or to create files and folders.',
//       type: 'Trigger',
//     },
//     Notion: { description: 'Create entries directly in notion.', type: 'Action' },
//     'Custom Webhook': {
//       description:
//         'Connect any app that has an API key and send data to your applicaiton.',
//       type: 'Action',
//     },
//     Discord: {
//       description: 'Post messages to your discord server',
//       type: 'Action',
//     },
//     'Google Calendar': {
//       description: 'Create a calendar invite.',
//       type: 'Action',
//     },
//     Trigger: {
//       description: 'An event that starts the workflow.',
//       type: 'Trigger',
//     },
//     Action: {
//       description: 'An event that happens after the workflow begins',
//       type: 'Action',
//     },
//     Wait: {
//       description: 'Delay the next action step by using the wait timer.',
//       type: 'Action',
//     },
//   }
  
//   export const CONNECTIONS: Connection[] = [
//     {
//       title: 'Google Drive',
//       description: 'Connect your google drive to listen to folder changes',
//       image: '/googleDrive.png',
//       connectionKey: 'googleNode',
//       alwaysTrue: true,
//     },
//     {
//       title: 'Discord',
//       description: 'Connect your discord to send notification and messages',
//       image: '/discord.png',
//       connectionKey: 'discordNode',
//       accessTokenKey: 'webhookURL',
//     },
//     {
//       title: 'Notion',
//       description: 'Create entries in your notion dashboard and automate tasks.',
//       image: '/notion.png',
//       connectionKey: 'notionNode',
//       accessTokenKey: 'accessToken',
//     },
//     {
//       title: 'Slack',
//       description:
//         'Use slack to send notifications to team members through your own custom bot.',
//       image: '/slack.png',
//       connectionKey: 'slackNode',
//       accessTokenKey: 'slackAccessToken',
//       slackSpecial: true,
//     },
//   ]