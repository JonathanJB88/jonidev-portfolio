import type { NextApiRequest, NextApiResponse } from 'next';

import { about, techSkills, projects, services, softSkills, journey } from '../../data/data';

import { ISkill, IProject, IService, IJourney } from '../../interfaces';

type Data = {
  about: string;
  techSkills: ISkill[];
  softSkills: ISkill[];
  projects: IProject[];
  services: IService[];
  journey: IJourney[];
};

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  res.status(200).json({ about, techSkills, projects, services, softSkills, journey });
}
