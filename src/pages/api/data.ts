import type { NextApiRequest, NextApiResponse } from 'next';

import { about, languages, projects, services, tools } from '../../data/data';

import { ISkill, IProject, IService } from '../../interfaces';

type Data = {
  about: string;
  languages: ISkill[];
  projects: IProject[];
  services: IService[];
  tools: ISkill[];
};

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  res.status(200).json({ about, languages, projects, services, tools });
}
