export const meetingResolvers = {
    Query: {
      meetings: () =>([{
        objectId: "1",
        subject: "DOL Nova 101",
        organizer: "Sarthak",
        startTime: new Date("2020-04-01T05:00:00.000Z").toString(),
        endTime: new Date("2020-04-01T05:30:00.000Z").toString(),
        meetingUrl: "https://teams.microsoft.com/l/meetup-join/19%3a37f805db44264c75b980f2a83a8b790e%40thread.skype/1655299655868?context=%7b%22Tid%22%3a%2272f988bf-86f1-41af-91ab-2d7cd011db47%22%2c%22Oid%22%3a%2283a4f928-0f62-45fd-b0b8-035b6b74f795%22%7d"
      }, 
      {
        objectId: "2",
        subject: "Nova Arch Sync Up",
        organizer: "Kerryn",
        startTime: new Date("2020-04-01T06:00:00.000Z").toString(),
        endTime: new Date("2020-04-01T06:30:00.000Z").toString(),
        meetingUrl: "https://teams.microsoft.com/l/meetup-join/19%3a37f805db44264c75b980f2a83a8b790e%40thread.skype/1655299655868?context=%7b%22Tid%22%3a%2272f988bf-86f1-41af-91ab-2d7cd011db47%22%2c%22Oid%22%3a%2283a4f928-0f62-45fd-b0b8-035b6b74f795%22%7d"
      }, {
        objectId: "3",
        subject: "Nova roadmap sync",
        organizer: "Guna",
        startTime: new Date("2020-04-01T07:00:00.000Z").toString(),
        endTime: new Date("2020-04-01T07:30:00.000Z").toString(),
        meetingUrl: "https://teams.microsoft.com/l/meetup-join/19%3a37f805db44264c75b980f2a83a8b790e%40thread.skype/1655299655868?context=%7b%22Tid%22%3a%2272f988bf-86f1-41af-91ab-2d7cd011db47%22%2c%22Oid%22%3a%2283a4f928-0f62-45fd-b0b8-035b6b74f795%22%7d"
      }
    ])
    }
  };