import addTeam from './addTeam';

export default async ({ teams }) => {
  teams.map(async team => {
    const { shortName, code, country } = team;
    const result = await addTeam({ input: { shortName, code, country } });
    console.log(`added ${result.shortName}`);
  });
  return true;
};
