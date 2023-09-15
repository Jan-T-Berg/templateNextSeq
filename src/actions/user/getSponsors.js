//import db from '@/database/models/index';

export default async function getSponsors() {
  //let result = await db.user.findAll({});
  let result = 'Kekse';
  //Hotfix für die Warnung bei NextJS 13 Exp.

  return JSON.parse(JSON.stringify(result));
}
